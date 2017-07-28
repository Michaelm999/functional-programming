const
  mongoose = require('mongoose'),
  toolSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String},
    documentationUrl: {type: String},
    logoUrl: {type: String}
  })

const Tool = mongoose.model('Tool', toolSchema)
module.exports = Tool
