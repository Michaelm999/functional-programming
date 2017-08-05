const
  express = require('express'),
  beersRouter = new express.Router(),
  Beer = require('../models/Beer.js')

beersRouter.get('/', (req, res) => {
  Beer.find({_user: req.user._id}, (err, beers)=>{
    res.json(beers)
  })
})
beersRouter.post('/', (req, res) => {
  const newBeer = new Beer(req.body)
  newBeer._user = req.user._id
  newBeer.save((err, beer) => {
    res.json({success: true, message: "Beer Brewed", beer})
  })
})


module.exports = beersRouter
