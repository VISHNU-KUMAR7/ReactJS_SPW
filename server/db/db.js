import mongoose from "mongoose";

const Connection = async (username,password) => {
  // username, password is used in url
  const URL = `mongodb://localhost:27017/e-comm`;
  try {
    await mongoose.connect(URL, {useUnifiedTopology: true,useNewUrlParser: true,});
    console.log("Successfully connected Database with mongoDB");
  } catch (error) {
    console.log("Error in database connection in db folder and db file", error.message);
  }
};
export default Connection;
