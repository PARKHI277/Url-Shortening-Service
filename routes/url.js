const express = require("express");
const router = express.Router();
const { shortUrl, redirectUrl } = require("../controllers/url");
const rateLimit = require("express-rate-limit");
const auth = require("../middleware/jwt");
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 10,
  keyGenerator: (req, res) => {
    return req.body.user_id;
  },
});

router.post("/short-url", auth, limiter, shortUrl);

router.get("/redirect-url/:shortUrl", auth, redirectUrl);

module.exports = router;
