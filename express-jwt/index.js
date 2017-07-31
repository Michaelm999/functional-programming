const
  dotenv = require('dotenv').load({silent: true}),
  express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  mongoURL = process.env.MONGO_URL || 'mongodb://localhost/jwt',
  port = process.env.PORT || 3001,
  User = require('./models/User.js'),
  jwt = require('jsonwebtoken')

  mongoose.connect(mongoURL, (err) => {
    console.log(err || "connected to MongoDB");
  })

  app.use(logger('dev'))
  app.use(bodyParser.json())

  app.get('/', (req, res) => {
    res.json({message: "API root."})
  })

  app.route('/api/users')
    .get((req, res) => {
      User.find({}, (err, users) => {
        res.json(users)
      })
    })
    .post((req, res) => {
      User.create(req.body, (err, user) => {
        res.json({success: true, message: "User created.", user})
      })
    })

    app.route('/api/users/:id')
      .get((req, res) => {
        User.findById(req.params.id, (err, user) => {
        res.json(user)
      })
    })
    .patch((req, res)=> {
      User.findById(req.params.id, (err, user) => {
        Object.assign(user, req.body)
        user.save((err, updatedUser) => {
          res.json({success: true, message: "User updated", updatedUser})
        })
      })
    })

    app.post('/api/authenticate', (req, res) => {
      User.findOne({email: req.body.email}, '+password',(err, user) => {
        if(!user || (user && !user.validPassword(req.body.password))) {
          return res.json({success: false, message: "Incorrect email or password."})
        }
        const userData = user.toObject()
        delete userData.password
        const token = jwt.sign(userData, process.env.SECRET)
        res.json({success: true, message: "Logged in successfully", token})
      })
    })

    app.use(verifyToken)
    app.get('/protected', (req, res) => {
      console.log("Current user:")
      console.log(req.user);
      res.json({message: "You are in the VIP."})
    })

    function verifyToken(req, res, next) {
      const token = req.headers['token']
      if(token){
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
          if(err) return res.json({success: false, message: "token could not be verified."})
          req.user = decoded
          next()
        })
      } else {
        res.json({success:false, message: "No token provided. Access denied."})
      }
    }

  app.listen(port, (err) => {
    console.log(err || `Server running on ${port}.`);
  })
