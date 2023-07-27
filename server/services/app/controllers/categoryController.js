const { Category } = require("../models");

class CategoryController {
  static async getCategory(req, res, next) {
    try {
      const categories = await Category.findAll();
      res.status(200).json(categories);
    } catch (error) {
      next(error);
    }
  }
  static async getCategoryById(req, res, next) {
    try {
      const { categoryId } = req.params;
      const findCategory = await Category.findByPk(categoryId);
      if (!findCategory) throw { name: "Data not found" };
      res.status(200).json(findCategory);
    } catch (error) {
      next(error);
    }
  }
  static async addCategory(req, res, next) {
    try {
      const { name } = req.body;
      await Category.create({
        name,
      });
      res.status(201).json({ message: "Successfully added Category" });
    } catch (error) {
      next(error);
    }
  }
  static async editCategory(req, res, next) {
    try {
      const { categoryId } = req.params;
      const { name } = req.body;
      if (!name) throw { name: "Invalid input" };
      const findCategory = await Category.findByPk(categoryId);
      if (!findCategory) throw { name: "Data not found" };
      await Category.update(
        {
          name,
        },
        {
          where: { id: categoryId },
        }
      );
      res.status(200).json({ message: "Successfully updated category" });
    } catch (error) {
      next(error);
    }
  }
  static async deleteCategory(req, res, next) {
    try {
      const { categoryId } = req.params;
      const findCategory = await Category.findByPk(categoryId);
      if (!findCategory) throw { name: "Data not found" };
      await findCategory.destroy();
      res.status(200).json({ message: "Successfully delete category" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CategoryController;
