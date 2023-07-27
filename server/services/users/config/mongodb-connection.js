const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://krisnaalipp:alif050904@cluster0.h5jpjbf.mongodb.net/test";
const client = new MongoClient(uri);

let db;

async function connect() {
  try {
    await client.connect();
    console.log("connected to mongo db");
    const dbConnection = client.db("HokbenDB");
    db = dbConnection;
    return dbConnection;
  } catch (error) {
    console.log(error);
  }
}

function getDB() {
  return db;
}

module.exports = { connect, getDB };
