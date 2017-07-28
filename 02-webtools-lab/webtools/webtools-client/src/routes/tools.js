const
  express = require('express'),
  toolsRouter = new express.Router()
  control = require('../controllers/tools.js')

toolsRouter.route('/')
  .get(control.index)
  .post(control.create)

toolsRouter.route('/:id')
  .get(control.show)
  .patch(control.update)
  .delete(control.destroy)

module.exports = tools4U
