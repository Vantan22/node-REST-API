const express = require("express");
const { signup, login } = require("../controllers/auth");
const router = express.Router();
const User = require("../models/user");

const { body } = require("express-validator");

router.put(
  "/signup",
  [
    body("email")
      .isEmail()
      .withMessage("Please enter a valid email")
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject("E-Mail address already exists!");
          }
        });
      })
      .normalizeEmail(),
    body("password").isLength({ min: 5 }),
    body("name").not().isEmpty(),
  ],
  signup,
);

router.post("/log'/login'in);

module.exports = router;
