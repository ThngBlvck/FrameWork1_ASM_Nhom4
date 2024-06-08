const express = require('express');
const multer = require('multer');
const router = express.Router();
const upload = multer({ dest: './public/images' });


const EmployeeController = require("../controllers/EmployeeController");
const DepartmentsController = require("../controllers/DepartmentController");


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


module.exports = router;