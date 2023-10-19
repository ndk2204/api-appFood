import express from "express";

const app = express();
// app.use(express.json());

// import cors from "cors";
// app.use(cors());
app.listen(8080);

import rootRoute from "./routes/rootRoutes.js";

app.use("/api", rootRoute);

// import mysql from "mysql2";

// let connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "1234",
//   port: "3307",
//   database: "node35",
// });
// let sql = "SELECT * FROM users ";
