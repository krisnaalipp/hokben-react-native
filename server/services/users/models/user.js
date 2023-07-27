const { ObjectId } = require("mongodb");
const { getDB } = require("../config/mongodb-connection");

class User {
  static users() {
    const db = getDB();
    const User = db.collection("users");
    return User;
  }
  static async findAll() {
    try {
      const User = this.users();
      const data = await User.find(
        {},
        { projection: { password: 0 } }
      ).toArray();
      return data;
    } catch (error) {
      throw error;
    }
  }
  static async create(input) {
    try {
      const User = this.users();
      await User.insertOne(input);
      return "Success Add User";
    } catch (error) {
      throw error;
    }
  }
  static async findByPk(_id) {
    try {
      const User = this.users();
      const data = await User.findOne({ _id: ObjectId(_id) });
      return data;
    } catch (error) {
      throw error;
    }
  }
  static async destroy(_id) {
    try {
      const User = this.users();
      await User.deleteOne({ _id: ObjectId(_id) });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = User;
