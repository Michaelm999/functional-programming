const
  mongoose = require('mongoose'),
  bcrypt = require('bcrypt-nodejs'),
  userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: {type: String, select: false}
  })

  userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
  }

  userSchema.methods.validPassword = function(password) {
    if (!password) {
      return false
    } else {
      return bcrypt.compareSync(password, this.password)
    }
  }

userSchema.pre('save', function(next) {
  if(!this.isModified('password')) return next()
  this.password = this.generateHash(this.password)
  next()
})

module.exports = mongoose.model('User', userSchema)
