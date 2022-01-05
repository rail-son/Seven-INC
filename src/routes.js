const express = require('express');
const router = express.Router();

const EmployeeController = require('./controllers/EmployeeController');

router.get('/', EmployeeController.searchAll);
router.get('/:id', EmployeeController.searchByID);


module.exports = router;