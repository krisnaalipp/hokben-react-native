const axios = require("axios");
const redis = require("../config/redis");
const baseUrlApp = "http://localhost:4002";
const baseUrlMongoDb = "http://localhost:4001";

class ItemController {
  static async getItem(req, res) {
    try {
      const items = await redis.get("app:items");
      if (items) {
        res.status(200).json(JSON.parse(items));
      } else {
        const { data } = await axios.get(baseUrlApp + "/items");
        await redis.set("app:items", JSON.stringify(data));
        res.status(200).json(data);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
  static async getItemDetail(req, res) {
    try {
      const { id } = req.params;
      const { data } = await axios.get(baseUrlApp + "/items/" + id);
      const { data: user } = await axios.get(
        baseUrlMongoDb + "/users/" + data.userMongoId
      );
      data.User = user;
      res.status(200).json(data);
    } catch (error) {
      const { msg } = error.response.data;
      if (msg === "Data not found") {
        res.status(404).json({ msg });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  }
  static async deleteItem(req, res) {
    try {
      const { id } = req.params;
      await axios.delete(baseUrlApp + "/items/" + id);
      await redis.del("app:items");
      res
        .status(200)
        .json({ message: "Successfully deleted product with id " + id });
    } catch (error) {
      res.status(500).json({ message: "Internal server errror" });
    }
  }
  static async createItem(req, res) {
    try {
      const input = req.body;
      await axios.post(baseUrlApp + "/items", input);
      await redis.del("app:items");
      res.status(201).json({ message: "Successfully created product!" });
    } catch (error) {
      const { msg } = error.response.data;
      if (msg) {
        res.status(400).json({ msg });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  }
  static async editItem(req, res) {
    try {
      const { id } = req.params;
      const input = req.body;
      await redis.del("app:items");
      await axios.put(baseUrlApp + "/items/" + id, input);
      res.status(200).json({ message: "Successfully updated product!!" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

module.exports = ItemController;
