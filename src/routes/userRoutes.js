import express from "express";

const userRoutes = express.Router();

import { getUser, getUserOrder } from "../controllers/userController.js";

userRoutes.get("/get-user", getUser);
userRoutes.get("/get-order/:userId", getUserOrder);

export default userRoutes;
