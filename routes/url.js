const express = require("express");
const router = express.Router();
const { shortUrl, redirectUrl } = require("../controllers/url");
const rateLimit = require("express-rate-limit");
const auth = require("../middleware/jwt");

// rate limit
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 10,
  keyGenerator: (req, res) => {
    return req.body.user_id;
  },
});

/*
route to create short-url 
protected route
*/
router.post("/short-url", auth, limiter, shortUrl);

/* 
router to redirect to original url
params - shortUrl
protected route
*/
router.get("/redirect-url/:shortUrl", auth, redirectUrl);

module.exports = router;
