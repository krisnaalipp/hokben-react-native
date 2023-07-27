const axios = require("axios");
const itemUrl = "https://hokben-services-app.herokuapp.com/items";
const Redis = require("ioredis");

const redis = new Redis({
  host: "redis-14268.c299.asia-northeast1-1.gce.cloud.redislabs.com",
  port: 14268,
  username: "default",
  password: "WpO7ZgT25Jth9oj7v6XbwmDq9uqzMgPL",
});

const itemTypeDefs = `#graphql
  type Message {
    message: String
  }
    type Category {
      id:ID 
      name:String
      createdAt:String
      updatedAt:String
    }
    type Ingredient {
      id: ID,
      ItemId: ID,
      name: String!
      createdAt: String!
      updatedAt: String!
    }
    type Item {
    id: ID,
    name:String
    description:String
    price:String
    imgUrl:String
    userMongoId:String
    CategoryId:ID
    createdAt:String
    updatedAt: String
    Category: Category
    Ingredients: [Ingredient]
  }
  type User {
    _id:String
    username:String
    email:String
    phoneNumber:String
    address:String
  }
  input InputIngredient {
    name:String
  }
  input ItemInput {
    name:String
    description:String
    price:Int
    imgUrl:String
    CategoryId:ID
    userMongoId:String
    ingredients:[InputIngredient]
  }
  type ItemDetail {
    id: ID,
    name:String
    description:String
    price:String
    imgUrl:String
    userMongoId:String
    CategoryId:ID
    createdAt:String 
    updatedAt: String
    Category: Category
    Ingredients: [Ingredient]
    user: User
  }
  input EditInput {
    name:String
    description:String
    price:Int
    imgUrl:String
    CategoryId:ID
    userMongoId:String
  }
  type Query {
    getItem: [Item]
    getItemDetail(id:ID!) : ItemDetail
  }
  type Mutation {
    createItem(input : ItemInput) : Message
    deleteItem(id:ID!) : Message
    updateItem(input:EditInput,id:ID!) : Message
  }
`;

const itemResolvers = {
  Query: {
    getItem: async () => {
      try {
        const items = await redis.get("app:items");
        if (items) {
          return JSON.parse(items);
        } else {
          const { data } = await axios.get(itemUrl);
          await redis.set("app:items", JSON.stringify(data));
          return data;
        }
      } catch (error) {
        throw error;
      }
    },
    getItemDetail: async (_, args) => {
      try {
        const { id } = args;
        const { data } = await axios.get(itemUrl + `/${id}`);
        const { data: user } = await axios.get(
          "https://hokben-services-user.herokuapp.com/users/" + data.userMongoId
        );
        data.user = user;
        return data;
      } catch (error) {
        throw error;
      }
    },
  },
  Mutation: {
    createItem: async (_, args) => {
      try {
        const { input } = args;
        const { data } = await axios.post(itemUrl, input);
        await redis.del("app:items");
        return data;
      } catch (error) {
        throw error;
      }
    },
    deleteItem: async (_, args) => {
      try {
        const { id } = args;
        const { data } = await axios.delete(itemUrl + `/${id}`);
        await redis.del("app:items");
        return data;
      } catch (error) {
        throw error;
      }
    },
    updateItem: async (_, args) => {
      try {
        const { id, input } = args;
        const { data } = await axios.put(itemUrl + `/${id}`, input);
        await redis.del("app:users");
        return data;
      } catch (error) {
        throw error;
      }
    },
  },
};

module.exports = { itemResolvers, itemTypeDefs };
