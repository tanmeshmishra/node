var express = require('express');
var router = express.Router();
var controller = require('../controller/controller');


router.route('/t3/createUser')
    .post(controller.createUser);

router.route('/t3/getAllUsers')
      .get(controller.getAllUsers);

router.route('/t3/getUser/:email')
    .get(controller.getUser);


router.route ('/t3/cartGet/:email')
    .get(controller.getCart);

router.route ('/t3/cartPost')
    .post(controller.postCart);


module.exports = router;
