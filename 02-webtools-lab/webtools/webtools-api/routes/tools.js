const
  express = require('express'),
  toolsRouter = new express.Router()
  toolsCtrl = require('../controllers/tools.js')

toolsRouter.route('/')
  .get(toolsCtrl.index)
  .post(toolsCtrl.create)

toolsRouter.route('/:id')
  .get(toolsCtrl.show)
  .patch(toolsCtrl.update)
  .delete(toolsCtrl.destroy)

module.exports = toolsRouter
