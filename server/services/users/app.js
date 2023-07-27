const express = require("express");
const app = express();
const port = process.env.PORT || 4001;
const { connect } = require("./config/mongodb-connection");
const router = require("./router/index");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/users", router);

connect().then(() => {
  app.listen(port, () => {
    console.log("running on port " + port);
  });
});
