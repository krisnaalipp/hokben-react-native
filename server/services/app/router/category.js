const CategoryController = require("../controllers/categoryController");

const router = require("express").Router();

router.get("/", CategoryController.getCategory);
router.post("/", CategoryController.addCategory);
router.get("/:categoryId", CategoryController.getCategoryById);
router.put("/:categoryId", CategoryController.editCategory);
router.delete("/:categoryId", CategoryController.deleteCategory);

module.exports = router;
