const router = require("express").Router();
const itemRouter = require("./item");
const categoryRouter = require("./category");
const ingredientRouter = require("./ingredient");
const errorHandler = require("../middlewares/errorHandler");

router.use("/items", itemRouter);
router.use("/categories", categoryRouter);
router.use("/ingredients", ingredientRouter);
router.use(errorHandler);

module.exports = router;
