const UserController = require("../controllers/userController");

const router = require("express").Router();

router.get("/", UserController.getUser);
router.post("/", UserController.createUser);
router.get("/:id", UserController.getUserDetail);
router.delete("/:id", UserController.deleteUser);

module.exports = router;
