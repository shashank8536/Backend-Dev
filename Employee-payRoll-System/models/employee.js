import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required:true,
            trim:true
        },
        profileImage:{
            type:String,
        },
        gender: {
            type: String,
            required:true,
            lowercase:true,
            enum:["male","female"]
        },
        department: {
            type:[String],
            required:true
        },
        basicSalary: {
            type:Number,
            required:true,
            min:0
        },
        joiningDate: {
            type:Date,
            required:true
        },
        notes: String
    },
    {
        timeStamps:true  // add createdAt and UpdatedAt
    }
)

export default mongoose.model("Employee",employeeSchema);