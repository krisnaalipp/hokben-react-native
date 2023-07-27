const axios = require("axios");
const redis = require("../config/redis");

const baseUrlMongoDb = "http://localhost:4001";

class UserController {
  static async getUser(req, res) {
    try {
      const users = await redis.get("app:users");
      if (users) {
        res.status(200).json(JSON.parse(users));
      } else {
        const { data } = await axios.get(baseUrlMongoDb + "/users");
        await redis.set("app:users", JSON.stringify(data));
        res.status(200).json(data);
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
  static async getUserDetail(req, res) {
    try {
      const { id } = req.params;
      const { data } = await axios.get(baseUrlMongoDb + "/users/" + id);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
  static async createUser(req, res) {
    try {
      await redis.del("app:users");
      const input = req.body;
      await axios.post(baseUrlMongoDb + "/users", input);
      res
        .status(201)
        .json({ message: "Successfully created " + input.username });
    } catch (error) {
      const { msg } = error.response.data;
      if (msg) {
        res.status(400).json({ msg });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  }
  static async deleteUser(req, res) {
    try {
      await redis.del("app:users");
      const { id } = req.params;
      await axios.delete(baseUrlMongoDb + "/users/" + id);
      res.status(200).json({ message: "Successfully deleted user!" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

module.exports = UserController;
