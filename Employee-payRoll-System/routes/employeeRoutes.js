import express from 'express';
const router = express.Router();
import * as employeeController from '../controller/employeeController.js';

// create Employee
router.post("/",employeeController.addEmployee);


// get All Employee
router.get("/",employeeController.getEmployee);

// get single employee 
router.get("/:id", employeeController.getEmployeeById);

// update employee
router.put("/:id",employeeController.updateEmployee);

// delete employee
router.delete("/:id", employeeController.deleteEmployee);

// payroll calculation
router.get("/:id/payroll", employeeController.calculatePayroll)



export default router;

