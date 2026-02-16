import express from "express";
import fs from "fs";
import path from "path";
import galleryRoute from "../../Express-StaticFile/Router/galleryRoute.js";
import { showGallery } from "../Express-StaticFile/Controller/galleryController.js";


const port = 3000;
const app = express();

// static files
app.use("/static", express.static(path.join(process.cwd(),"public")));
app.use("/gallery", galleryRoute);

// ejs setup
app.set("view engine", "ejs");
app.set("views", "./views");



app.listen(port, () => {
    console.log("The server is running " + port);
});