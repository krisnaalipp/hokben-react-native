const hashPassword = require("../helpers/encrypt");
const User = require("../models/user");
class Controller {
  static async getUser(req, res) {
    try {
      const data = await User.findAll();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
  static async getUserDetail(req, res) {
    try {
      const { id } = req.params;
      const data = await User.findByPk(id);
      res.status(200).json(data);
    } catch (error) {
      if (error.name === "BSONTypeError") {
        res.status(404).json({ message: "Data not found" });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  }
  static async deleteUser(req, res) {
    try {
      const { id } = req.params;
      await User.destroy(id);
      res
        .status(200)
        .json({ message: "Successfully delete user with id" + id });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
  static async addUser(req, res) {
    try {
      const { username, email, password, role, phoneNumber, address } =
        req.body;
      if (!username || !email || !password || !phoneNumber || !address) {
        throw { name: "Invalid input" };
      }
      const hashedPass = hashPassword(password);
      await User.create({
        username,
        email,
        password: hashedPass,
        role: "Admin",
        phoneNumber,
        address,
      });
      res.status(201).json({ message: "Success register " + username });
    } catch (error) {
      if (error.name === "Invalid input") {
        res.status(400).json({ msg: error.name });
      } else {
        res.status(500).json({ msg: "Internal server error" });
      }
    }
  }
}

module.exports = Controller;
