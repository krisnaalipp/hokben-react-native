const { comparePassword } = require("../helpers/encrypt");
const { signToken } = require("../helpers/jwt");
const { User, sequelize } = require("../models");

class UserController {
  static async register(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const { username, email, password, phoneNumber, Address } = req.body;
      await User.create(
        {
          username,
          email,
          password,
          role: "Admin",
          phoneNumber,
          Address,
        },
        {
          transaction: t,
        }
      );
      t.commit();
      res.status(201).json({ message: "Success Register new admin!" });
    } catch (error) {
      next(error);
      t.rollback();
    }
  }
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw { name: "Invalid Input" };
      }
      const findUser = await User.findOne({ where: { email } });
      if (!findUser) {
        throw { name: "Invalid email or password" };
      }
      const validate = comparePassword(password, findUser.password);
      if (!validate) throw { name: "Invalid email or password" };
      const payload = {
        id: findUser.id,
        email: findUser.email,
      };
      const access_token = signToken(payload);
      res.status(200).json({ access_token });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
