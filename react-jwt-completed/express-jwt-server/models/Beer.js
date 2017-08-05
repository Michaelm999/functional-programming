const
  mongoose = require('mongoose'),
  beerSchema = new mongoose.Schema({
    name: String,
    type: String,
    brewery: String,
    _user: {type: mongoose.Schema.Types.ObjectId,  ref: 'User'}
  })

const Beer = mongoose.model('Beer', beerSchema)
module.exports = Beer
