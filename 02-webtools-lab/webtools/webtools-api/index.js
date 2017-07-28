// milliseconds to simulate slow server response
// set to 0 to remove simulated delay
const SERVER_DELAY = 2000

const
  dotenv = require('dotenv').load({silent: true}),
  express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/webtools'
  bodyParser = require('body-parser'),
  logger = require('morgan'),
  cors = require('cors'),
  port = process.env.PORT || 3001,
  toolsRoutes = require('./routes/tools')

mongoose.connect(mongoUrl, (err) => {
  console.log(err || 'Connected to MongoDB.')
})

app.use(bodyParser.json())
app.use(logger('dev'))

// CROSS-ORIGIN RESOURCE SHARING is enabled with this middleware.
// Now, client-side applications can directly send requests to this api:
app.use(cors())

// root redirects to '/api'
app.get('/', (req, res) => res.redirect('/api'))

// api documentation
app.get('/api', (req, res) => {
  res.json({
    message: "Web Tools API root.",
    availableResources: {
      index: {method: "GET", url: "/api/tools", note: "Returns limited information about all tools."},
      create: {
        method: "POST",
        url: "/api/tools",
        data: {
          name: "String (required)",
          description: "String",
          logoUrl: "String",
          documentationUrl: "String"
        }
      },
      show: {method: "GET", url: "/api/tools/:id", note: "Returns full information about a given tool."},
      update: {
        method: "PATCH",
        url: "/api/tools/:id",
        data: {
          name: "String (required)",
          description: "String",
          logoUrl: "String",
          documentationUrl: "String"
        }
      },
      destroy: {method: "DELETE", url: "/api/tools/:id"}
    }
  })
})

// This middleware occurs before all tools routes, to simulate a slow server/database
app.use((req, res, next) => {
  setTimeout(() => next(), SERVER_DELAY)
})

// all tool CRUD api routes:
app.use('/api/tools', toolsRoutes)

app.listen(port, (err) => {
  console.log(err || `Server running on ${port}.`)
})
