import express from "express";
import Employee from "../models/employee.js";

const router = express.Router();


// HOME PAGE – show all employees
router.get("/", async (req, res) => {
  const employees = await Employee.find();
  res.render("index", { employees });
});


// ADD PAGE – open form
router.get("/add", (req, res) => {
  res.render("addEmployee");
});

// OPEN EDIT PAGE
router.get("/edit/:id", async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  res.render("editEmployee", { employee });
});

// UPDATE EMPLOYEE
router.put("/edit/:id", async (req, res) => {
  await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.redirect("/");
});




// DELETE
router.get("/delete/:id", async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

export default router;
