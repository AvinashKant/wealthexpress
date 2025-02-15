const express = require('express');
const transactionRoute = require('../modules/transaction/routes/transaction.route');
const userRoute = require('../modules/user/routes/user.route');

const router = express.Router();
const defaultRoutes = [
    {
      path: '/',
      route: transactionRoute,
    },
    {
      path: '/user',
      route: userRoute,
    },
  ];

router.get('/example', (req, res) => {
    res.send('not found');
});

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;