const ItemController = require("../controllers/itemController");

const router = require("express").Router();

router.get("/", ItemController.getItem);
router.post("/", ItemController.createItem);
router.put("/:id", ItemController.editItem);
router.get("/:id", ItemController.getItemDetail);
router.delete("/:id", ItemController.deleteItem);

module.exports = router;
