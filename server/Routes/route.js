import express from "express";

import {
  addUser,
  getUsers,
  getUser,
  delUser,
  updateUser,
} from "../Controller/user-controller.js";

const Routers = express.Router();

Routers.post("/add", addUser);
Routers.get("/users", getUsers);
Routers.get("/:id", getUser);
Routers.delete("/:id", delUser);
Routers.put("/:id", updateUser);

// Routers.get("/all", getUsers);

export default Routers;
