import axios from "axios";

const URL = "http://localhost:5000";

export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/add`, data); //take min 2 argm
  } catch (error) {
    console.log("Error while chatching he data");
  }
};

export const getUsers = async () => {
  try {
    return await axios.get(`${URL}/users`);
  } catch (error) {
    console.log("Error while calling getUsers API", error.message);
  }
};

export const getUser = async (id) => {
  try {
    console.log(`Fetching -----data--from ------${URL}/${id}----`);
    return await axios.get(`${URL}/${id}`);
  } catch (error) {
    console.log("Error while fetching the perticular data", error.message);
  }
};

export const delUser = async (id) => {
  try {
    console.log("---deleting message---");
    return await axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUser = async (user, id) => {
  try {
    console.log("---Updating message---");
    return await axios.put(`${URL}/${id}`,user);
  } catch (error) {
    console.log(error.message);
  }
};
