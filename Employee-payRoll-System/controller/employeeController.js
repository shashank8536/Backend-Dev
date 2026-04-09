import Employee from "../models/employee.js";

//add Employees
 export const addEmployee = async(req,res)=>{
    try{
        const employee = await Employee.create(req.body); // take all details like name salaray and all from req.body
        res.redirect("/");   // go back to index.ejs page

    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

//get Employees
  export const getEmployee = async(req,res)=>{
    try{
        const employee = await Employee.find();
        res.status(201).json(Employee);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

// get employee by id
  export const getEmployeeById = async(req,res)=>{
    try{
        const employee = await Employee.findById(req.params.id);

        if(!Employee){
            return res.status(404).json({message:"Employee not found"});
        }
        res.status(201).json(Employee);

    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

// update employees
  export const updateEmployee = async(req,res)=>{
    try{
        const employee = await Employee.findByIdAndUpdate(req.params.body,req.body,{new:true});

        if(!Employee){
            return res.status(404).json({message:"Employee not found"});
        }
        res.status(201).json(Employee);
    }
     catch(error){
        res.status(500).json({message:error.message});
    }
}

// delete employee
  export const deleteEmployee = async(req,res)=>{
    try{
        const employee = await Employee.findByIdAndDelete(req.params.body);

        if(!Employee){
            return res.status(404).json({message:"Employee not found"});
        }
        res.status(201).json(Employee);
    }
     catch(error){
        res.status(500).json({message:error.message});
    }
}

//calculate pyroll
 export const calculatePayroll = async(req,res)=>{
    try{
        const employee = await Employee.findById(req.params.id);

        if(!Employee){
            return res.status(404).json({message:"Employee not found"});
        }
        const basic = Employee.basicSalary;

        hra = basic * 0.20
        da  = basic * 0.10
        pf  = basic * 0.05
        net = basic + hra + da - pf

        res.status(200).json({
            basic,
            hra,
            da,
            pf,
            netSalary
        })
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

