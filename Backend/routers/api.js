const express = require('express');
const multer = require('multer');
const router = express.Router();
const upload = multer({ dest: './public/images' });


const EmployeeController = require("../controllers/EmployeeController");
const DepartmentsController = require("../controllers/DepartmentController");
const DayoffController = require("../controllers/DayoffController");
const PositionController = require("../controllers/PositionController");

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

router.get('/dayoff',DayoffController.getDayoff);
router.get('/dayoff/:id', DayoffController.getDayoffById);
router.post('/dayoff', DayoffController.addDayoff);
router.put('/dayoff/:id', DayoffController.updateDayoff);
router.delete('/dayoff/:id', DayoffController.deleteDayoff);

router.get('/position',PositionController.getPosition);
router.get('/position/:id', PositionController.getPositionById);
router.post('/position', PositionController.addPosition);
router.put('/position/:id', PositionController.updatePosition);
router.delete('/position/:id', PositionController.deletePosition);
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
