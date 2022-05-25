import express from "express";
import dotenve from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import Connection from "./db/db.js";
import Routers from "./Routes/route.js";

const app = express();
// app.use(express.json());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", Routers);

dotenve.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(5000, () => {
  console.log("Server is runing successfully on PORT 5000");
});
