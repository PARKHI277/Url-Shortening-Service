const express = require("express");
const router = express.Router();
const { signUp, signOut, signIn } = require("../controllers/auth");
const auth = require("../middleware/jwt");

//route to create user
router.post("/signup", signUp);

// route to login user
router.post("/signin", signIn);

// route to logout user
router.post("/signout", auth, signOut);

module.exports = router;
