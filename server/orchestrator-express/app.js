const express = require("express");
const router = require("./router");
const app = express();
const port = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log("Microservice Express running on port " + port);
});
