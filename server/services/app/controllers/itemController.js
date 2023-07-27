const { Item, sequelize, User, Ingredient, Category } = require("../models");

class ItemController {
  static async getItem(req, res, next) {
    try {
      const items = await Item.findAll({
        include: [
          {
            model: Category,
          },
          {
            model: Ingredient,
          },
        ],
      });
      res.status(200).json(items);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async getItemDetail(req, res, next) {
    try {
      const { itemId } = req.params;
      const findItem = await Item.findByPk(itemId, {
        include: [
          {
            model: Category,
          },
          {
            model: Ingredient,
          },
        ],
      });
      if (!findItem) throw { name: "Data not found" };
      res.status(200).json(findItem);
    } catch (error) {
      next(error);
    }
  }
  static async addItem(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const {
        name,
        description,
        price,
        imgUrl,
        userMongoId,
        CategoryId,
        ingredients,
      } = req.body;
      const item = await Item.create(
        {
          name,
          description,
          price,
          imgUrl,
          userMongoId,
          CategoryId,
        },
        { transaction: t }
      );
      const ingredientsInput = ingredients.map((el) => {
        return { name: el.name, ItemId: item.id };
      });
      await Ingredient.bulkCreate(ingredientsInput, { transaction: t });
      await t.commit();
      res.status(201).json({ message: "Successfully added product" });
    } catch (error) {
      await t.rollback();
      next(error);
    }
  }
  static async editItem(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const { itemId } = req.params;
      const { name, description, price, imgUrl, CategoryId } = req.body;
      if (!name || !description || !price || !imgUrl || !CategoryId) {
        throw { name: "Invalid input" };
      }
      const findItem = await Item.findByPk(itemId);
      if (!findItem) throw { name: "Data not found" };
      await findItem.update(
        {
          name,
          description,
          price,
          imgUrl,
          CategoryId,
        },
        {
          transaction: t,
          where: { id: itemId },
        }
      );
      await t.commit();
      res.status(200).json({ message: "Successfully updated product" });
    } catch (error) {
      await t.rollback();
      next(error);
    }
  }
  static async deleteItem(req, res, next) {
    try {
      const { itemId } = req.params;
      const findItem = await Item.findByPk(itemId);
      if (!findItem) throw { name: "Data not found" };
      await findItem.destroy();
      res.status(200).json({ message: "Item Successfully Deleted" });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = ItemController;
