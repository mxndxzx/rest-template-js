const express = require('express');
const controller = require('../../controller/rest.controller');

const router = express.router();

router
    .get('/users/:userId',controller.getUser)
    .get('/date/:date', controller.getDate)
    .post('/users', controller.createReg)
    .patch('/users/:recId', controller.updateReg)
    .delete('/users/:recId', controller.deleteReg);

module.exports = router;