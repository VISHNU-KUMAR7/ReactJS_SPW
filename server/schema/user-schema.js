import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

//how oru document look like
const userschema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  phone: String,
});

autoIncrement.initialize(mongoose.connection);
userschema.plugin(autoIncrement.plugin, "users");
// we need to turn it into a model
const user = mongoose.model("users", userschema);

export default user;
