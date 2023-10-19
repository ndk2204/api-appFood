import express from "express";
import { getLike, getRate } from "../controllers/dsController.js";

const danhsachRoutes = express.Router();

danhsachRoutes.get("/get-like", getLike);
danhsachRoutes.get("/get-rate", getRate);

export default danhsachRoutes;
