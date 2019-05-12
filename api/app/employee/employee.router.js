var express = require('express');
var router = express.Router();
const employeeContr = require('./empoyee.controller');
const employeeContain = require('../../libs/urlContain');

//Employee
router.get(employeeContain.getAllEmployee, employeeContr.getAllEmployee);
router.get(employeeContain.getEmpById,employeeContr.getEmployeeById);
router.get(employeeContain.getByName,employeeContr.getEmployeeByname);
router.get(employeeContain.getBySalary,employeeContr.getEmpBySalary);

router.delete(employeeContain.deleteById,employeeContr.deleteEmpById);
router.post(employeeContain.createEmp,employeeContr.createEmployee);
router.put(employeeContain.updateEmp,employeeContr.updateEmployee);

module.exports = router;