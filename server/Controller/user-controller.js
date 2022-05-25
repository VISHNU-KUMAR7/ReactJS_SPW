import { response } from "express";
import mongoose from "mongoose";
import UserSchema from "../schema/user-schema.js";

export const addUser = async (request, response) => {
  const newUser = new UserSchema(request.body);

  try {
    await newUser.save();
    response.status(201).json(newUser);
    console.log("Sucessfully Done");
  } catch (error) {
    response.status(409);
    console.log("Error", error);
  }
};

export const getUsers = async (request, response) => {
  try {
    console.log("Getting the data");
    const users = await UserSchema.find({});
    response.status(200).json(users);
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
};

export const getUser = async (request, response) => {
  try {
    console.log("Getting the data");
    const users = await UserSchema.findById(request.params.id);
    response.status(200).json(users);
  } catch (err) {
    response.status(400).json({ message: err.message });
  }
};

export const delUser = async (request, response) => {
  try {
    const user = await UserSchema.findByIdAndDelete(request.params.id);
    response.status(200).json(user);
  } catch (err) {
    response.status(400).json({ message: err.message });
    console.log(
      "Error in Servver while deleting the  data of details",
      err.message
    );
  }
};

export const updateUser = async (request, response) => {
  try {
    let user = request.body
    const editUser = new UserSchema(user)
    await UserSchema.updateOne({_id:request.params.id},editUser);
    response.status(200).json(editUser);
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
};
