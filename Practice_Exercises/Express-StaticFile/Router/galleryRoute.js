import express from "express";
import { showGallery } from "../Controller/galleryController.js";

const router = express.Router();

router.get("/index", showGallery);

export default router;
