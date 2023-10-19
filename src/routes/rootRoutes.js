import express from "express";
import userRoutes from "./userRoutes.js";
import danhsachRoutes from "./danhsachRoutes.js";

const rootRoute = express.Router();

rootRoute.use("/user", userRoutes);
rootRoute.use("/danhsach", danhsachRoutes);

export default rootRoute;
