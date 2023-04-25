const express = require("express");
const router = express.Router();
const { signUp, signOut, signIn } = require("../controllers/auth");
const auth = require("../middleware/jwt");
router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/signout", auth, signOut);
module.exports = router;
