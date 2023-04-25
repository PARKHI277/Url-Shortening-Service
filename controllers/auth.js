require("dotenv").config();

const Url = require("../models/Url");
const User = require("../models/User");
const errorController = require("../controllers/errorController");
const jwt = require("jsonwebtoken");

exports.signUp = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    console.log(name);
    console.log(email);
    const emailExist = await User.findOne({ email });
    if (emailExist) {
      return res.status(400).send({ message: "This email already exists." });
    }
    const strongPasswords =
      /^(?=.*\d)(?=.*[!@#$%^&*-?])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (strongPasswords.test(password)) {
      const user = new User({
        name,
        email,
        password,
      });
      await user.save();

      return res.status(201).send({
        message: "User created",
      });
    } else {
      return res.status(400).send({
        success: false,
        message: "Password should be strong",
      });
    }
  } catch (err) {
    console.log(err);
    errorController(err, req, res, next);
  }
};

exports.signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(400).send({ message: "This email is not registred" });
      }
      const token = jwt.sign(
        {
          _id: user._id,
          name: user.name,
          email: user.email,
        },
        `${process.env.TOKEN_SECRET_KEY}`
      );
      res.status(200).send({
        message: "Login Sucess",
        userId: user._id,
        jwtToken: token,
      });
    }
  } catch (err) {
    errorController(err, req, res, next);
  }
};

exports.signOut = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    jwt.sign(token, "", { expiresIn: 1 }, (logout, err) => {
      if (logout) {
        res.send({ msg: "You have been Logged Out" });
      } else {
        res.send({ msg: "Error" });
      }
    });
  } catch (err) {
    errorController(err, req, res, next);
  }
};

// protected routes
// json web token
