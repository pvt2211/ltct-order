'use strict';
module.exports = function(app) {
  var ordersController = require('./controllers/ordersController');

  // todoList Routes
  app.route('/orders')
    .get(ordersController.get)
    .post(ordersController.insert);


  app.route('/orders/:orderId')
    .get(ordersController.detail)
    .put(ordersController.update)
    .delete(ordersController.delete);
};
