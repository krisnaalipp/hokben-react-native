const Controller = require("../controllers/controller");
const router = require("express").Router();

router.get("/", Controller.getUser);
router.post("/", Controller.addUser);
router.get("/:id", Controller.getUserDetail);
router.delete("/:id", Controller.deleteUser);

module.exports = router;
