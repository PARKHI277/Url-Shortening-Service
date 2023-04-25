const redis = require("redis");

const redisClient = redis.createClient({
  host: "redis-10727.c266.us-east-1-3.ec2.cloud.redislabs.com",
  port: 10727,
  password: "parkhi",
});

redisClient.on("connect", function () {
  console.log("Redis connected");
});

redisClient.on("error", function (err) {
  console.log("Redis error:", err);
});

module.exports = redisClient;
