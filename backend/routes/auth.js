//#region namespaces
const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { body, validationResult } = require('express-validator')
const User = require('../model/User')
const fetchuser = require('../middleware/fetchuser')
const JWT_SECRET = "AnShBaLaJiThAkUrIsAgOoDbOOY123123"
//#endregion

//#region ROUTE1: Create a User using: POST "/api/auth/createuser". Doesn't require login
router.post('/createuser', [
   body('name').isLength({ min: 3 }),
   body('email').isEmail(),
   body('password').isLength({ min: 5 }),
], async (req, res) => {
   //#region error handling
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).json({ error: error.array() });
   }
   //#endregion
   //#region Handling User Creation and error handling respective to the user

   try {
      // checking if the user with the email already exists
      let user = await User.findOne({ email: req.body.email });
      if (user) {
         return res.status(400).json({ error: "Sorry a user with this email already exists" });
      }

      // securing password using salt, pepper and password hashing and also using (npm i bcryptjs) as friend
      const salt = await bcrypt.genSalt(10)
      secPass = await bcrypt.hash(req.body.password, salt)

      // creating a user
      user = await User.create({
         name: req.body.name,
         password: secPass,
         email: req.body.email,
      });

      // Working with jsonwebtoken so that the user doesn't have to login repeatedly
      const data = {
         id: user._id,
      }

      const AUTH_TOKEN = jwt.sign(data, JWT_SECRET)
      res.json({ AUTH_TOKEN })
      //#endregion
   } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error Occurred");
   }
})

//#endregion

//#region ROUTE2: Authenticate a User using: POST "/api/auth/login". Doesn't require login
router.post('/login', [
   body('email').isEmail(),
   body('password').exists(),
], async (req, res) => {
   //#region Error handling
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).json({ error: error.array() });
   }
   //#endregion

   //#region Handling User Authentication
   const { email, password } = req.body

   try {
      // if email is wrong
      let user = await User.findOne({ email });
      if (!user) {
         return res.status(400).send("Please try to login with correct credentials")
      }

      // if the password is wrong
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
         return res.status(400).send("Please try to login with correct credentials")
      }

      const data = {
         user: {
            id: user.id
         }
      }
      const AUTH_TOKEN = jwt.sign(data, JWT_SECRET);
      res.json({ AUTH_TOKEN })

   } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error Occurred")
   }

});
//#endregion

//#endregion

// ROUTE 3: Get loggedin User Details using: POST "/api/auth/getuser". Login required
router.post('/getuser', fetchuser, async (req, res) => {

   try {
      let userId = req.user.id;
      const user = await User.findById(userId).select("-password")
      res.send(user)
   } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
      // res.send(user)
   }
})

module.exports = router

// Auth AUTH_TOKEN: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWExMDg3NTE2MmE2MTc3NjZiMjg1NiIsImlhdCI6MTYzNzQ4NjcyN30.mepNaPjefqhaHqkWjz5haeH3AAOEsyj_Ayp-e2tm5FU
