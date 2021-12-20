const express = require("express");
const app = express();

const router = require("./routes/api");

app.use(express.json());
app.use(express.urlencoded());

app.use(router);

app.listen(3000, function () {
  console.log("Listening port at http://localhost:3000/");
});
