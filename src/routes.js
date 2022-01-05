const express = require('express');
const router = express.Router();

const EmployeeController = require('./controllers/EmployeeController');

// Em "server.js", todos os endereços das rotas tem o prefixo "/employee"  
router.get('/', EmployeeController.searchAll);
router.get('/:id', EmployeeController.searchByID);
router.post('/', EmployeeController.createEmployee);
router.put('/:id', EmployeeController.editEmployeeByID);
router.delete('/:id', EmployeeController.deleteEmployeeByID);

module.exports = router;