const ItemController = require("../controllers/itemController");

const router = require("express").Router();

router.get("/", ItemController.getItem);
router.get("/:itemId", ItemController.getItemDetail);
router.post("/", ItemController.addItem);
router.put("/:itemId", ItemController.editItem);
router.delete("/:itemId", ItemController.deleteItem);

module.exports = router;
