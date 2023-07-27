const router = require("express").Router();
const itemRouter = require("./item");
const userRouter = require("./user");

router.use("/items", itemRouter);
router.use("/users", userRouter);

module.exports = router;
