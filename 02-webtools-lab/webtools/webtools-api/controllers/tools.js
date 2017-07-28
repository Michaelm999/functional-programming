const Tool = require('../models/Tool.js')

module.exports = {
  index: (req, res) => {
    Tool.find({}, '-description -documentationUrl', (err, tools) => {
      if(err) return handleError(res)
      res.json({success: true, tools})
    })
  },

  show: (req, res) => {
    Tool.findById(req.params.id, (err, tool) => {
      if(err) return handleError(res)
      res.json({success: true, tool})
    })
  },

  create: (req, res) => {
    Tool.create(req.body, (err, tool) => {
      if(err) return handleError(res)
      res.json({success: true, message: "Tool created.", tool})
    })
  },

  update: (req, res) => {
    Tool.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, tool) => {
      if(err) return handleError(res)
      res.json({success: true, message: "Tool updated.", tool})
    })
  },

  destroy: (req, res) => {
    Tool.findByIdAndRemove(req.params.id, (err, tool) => {
      if(err) return handleError(res)
      res.json({success: true, message: "Tool deleted.", tool})
    })
  }
}

function handleError(res) {
  return res.json({success: false, message: "There was a problem..."})
}
