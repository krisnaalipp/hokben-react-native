const Redis = require("ioredis");

const redis = new Redis({
  host: "redis-14268.c299.asia-northeast1-1.gce.cloud.redislabs.com",
  port: 14268,
  username: "default",
  password: "WpO7ZgT25Jth9oj7v6XbwmDq9uqzMgPL",
});

module.exports = redis;
