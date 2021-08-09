const express = require('express');
const Router = express.Router();
const employeeController = require('../controllers/employee');

Router.get('/', function (req, res, next) {
    employeeController.getEmployees(req, res);
});

module.exports = Router
