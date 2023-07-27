const bcrypt = require("bcryptjs");

const hashPassword = (password) => bcrypt.hashSync(password);

module.exports = hashPassword;
