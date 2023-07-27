const axios = require("axios");
const userUrl = "https://hokben-services-user.herokuapp.com/users";
const Redis = require("ioredis");

const redis = new Redis({
  host: "redis-14268.c299.asia-northeast1-1.gce.cloud.redislabs.com",
  port: 14268,
  username: "default",
  password: "WpO7ZgT25Jth9oj7v6XbwmDq9uqzMgPL",
});

const userTypeDefs = `#graphql

type User {
    _id:String
    username:String
    email:String
    phoneNumber:String
    address:String
  } 
  type Message {
    message: String
  }
  input UserInput {
    username:String!
    email:String!
    password:String!
    phoneNumber:String!
    address:String!
  }
  type Query {
    getUser :[User],
    getUserById(id: String!) : User
  }
  type Mutation {
    deleteUser(id:String!) : Message
    createUser(input: UserInput ) : Message
  }
`;

const userResolvers = {
  Query: {
    getUser: async () => {
      try {
        const users = await redis.get("app:users");
        if (users) {
          return JSON.parse(users);
        } else {
          const { data } = await axios.get(userUrl);
          return data;
        }
      } catch (error) {
        console.log(error);
      }
    },
    getUserById: async (_, args) => {
      try {
        const { id } = args;
        const { data } = await axios.get(userUrl + "/" + id);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {
    deleteUser: async (_, args) => {
      try {
        const { id } = args;
        const { data } = await axios.delete(userUrl + "/" + id, {});
        await redis.del("app:users");
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    createUser: async (_, args) => {
      try {
        const { input } = args;
        const { data } = await axios.post(userUrl, input);
        await redis.del("app:users");
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};

module.exports = { userResolvers, userTypeDefs };
