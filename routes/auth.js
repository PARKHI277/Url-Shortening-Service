const express = require("express");
const router = express.Router();
const { signUp, signOut, signIn } = require("../controllers/auth")

router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/signout", signOut);
module.exports = router;