const express = require('express');
const multer = require('multer');
const router = express.Router();
const upload = multer({ dest: './public/images' });


const EmployeeController = require("../controllers/EmployeeController");
const DepartmentsController = require("../controllers/DepartmentController");
const SalaryController = require("../controllers/SalaryController");
const CommunicationsController = require("../controllers/CommunicationController");


router.get('/employee',EmployeeController.getEmployee);
router.get('/employee/:id', EmployeeController.getEmployeeById);
router.post('/employee', EmployeeController.addEmployee);
router.put('/employee/:id', EmployeeController.updateEmployee);
router.delete('/employee/:id', EmployeeController.deleteEmployee);

router.get('/departments',DepartmentsController.getDepartments);
router.get('/departments/:id', DepartmentsController.getDepartmentsById);
router.post('/departments', DepartmentsController.addDepartments);
router.put('/departments/:id', DepartmentsController.updateDepartments);
router.delete('/departments/:id', DepartmentsController.deleteDepartments);


router.get('/salary',SalaryController.getSalary);
router.get('salary/:id',SalaryController.getSalary);
router.post('/salary', SalaryController.addSalary);
router.put('/salary/:id', SalaryController.updateSalary);
router.delete('/salary/:id', SalaryController.deleteSalary);

router.get('/communications',CommunicationsController.getCommunications);
router.get('communications/:id',CommunicationsController.getCommunicationsById);
router.post('/communications', CommunicationsController.addCommunications);
router.put('/communications/:id', CommunicationsController.updateCommunications);
router.delete('/communications/:id', CommunicationsController.deleteCommunications);

module.exports = router;