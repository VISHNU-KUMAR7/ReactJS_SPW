const express = require("express");
require("./db/config");
const User = require("./db/user");
const app = express();

app.use(express.json());
app.get("/register", (request, response) => {
  response.send("Done");
});

app.listen(5000);
