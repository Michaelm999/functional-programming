const
  dotenv = require('dotenv').load({silent: true}),
  express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  mongoURL = process.env.MONGO_URL || 'mongodb://localhost/jwt'

  mongoose.connect(mongoUrl, (err) => {
    console.log(err || "connected to MongoDB");
  })
