import express from "express";
import mongoose from "mongoose";
import methodOverride from "method-override";
import viewRoutes from "./routes/viewRoutes.js";
import employeeRoutes from "./routes/employeeRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
import logger from "./middleware/logger.js";

const app = express();

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/employeeDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

  // ejs template
app.set("view engine","ejs");

// for css and image work
app.use(express.static("public"));

// Middleware
app.use(express.json());   // for POST/PUT body

// 
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));


// for ejs
app.use("/",viewRoutes);

// Routes
app.use("/api/employees", employeeRoutes);

app.use(logger);

// middleware for error handling
app.use(errorHandler);


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
