const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// const users = express.Router();
// const nodemailer = require('nodemailer'); 

// Load Input Validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const validateNewPasswordInput = require("../../validation/newPassword");

// Load User model
const User = require("../../models/User");

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

// @route   GET api/users/register
// @desc    Register user
// @access  Public
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        errors.email = "Email existe deja";
        return res.status(400).json(errors);
      } else {
        // const avatar = gravatar.url(req.body.email, {
        //   s: "200", //size
        //   r: "pg", // keeps image pg
        //   d: "mm" // default
        // });

        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          // avatar,
          password: req.body.password,
          isAdmin: false
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });

        const payload = {
          newUser: {
            id: newUser.id
          }
        };

        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
            console.log(token)
          }
        ); //expires in an hour
      }
    })
    .catch();
});

// @route   GET api/users/login
// @desc    Login user / Returning JWT Token
// @access  Public
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find the user by email
  User.findOne({ email }).then(user => {
    // Check for user
    if (!user) {
      errors.email = "Utulisiteur introuvable";
      return res.status(404).json(errors);
    }

    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // user matched
        const payload = {
          id: user.id,
          name: user.name,
          // avatar: user.avatar,
          isAdmin: user.isAdmin
        }; // create jwt payload

        // sign token expires
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        ); //expires in an hour
      } else {
        errors.password = "Mot de passe incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

// @route   POST api/users/resetpassword
// @desc    Reset user password
// @access  Private
router.post(
  "/resetpassword",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const email = req.user.email;
    const password = req.body.password;
    let newpassword = req.body.newPassword;
    const confirmNewPassword = req.body.confirmNewPassword;

    const data = { email, password, newpassword, confirmNewPassword };
    const { errors, isValid } = validateNewPasswordInput(data);
    // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

    // Find the user by email
    User.findOne({ email }).then(user => {
      // Check for user
      if (!user) {
        errors.email = "Utulisiteur introuvable";
        return res.status(404).json(errors);
      }

      let salt = bcrypt.genSaltSync(10);
      newpassword = bcrypt.hashSync(newpassword, salt);

      // Check Password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // user matched
          User.findOneAndUpdate(
            { _id: user._id },
            { $set: { password: newpassword } },
            { new: true }
          ).then(user => res.json(user));
        } else {
          errors.password = "Mot de passe incorrect";
          return res.status(400).json(errors);
        }
      });
    });
  }
);

// users.post('/forgotpassword', (req, res) => {
//   User.findOne({
//       email: req.body.email
//   })
//       .then(user => {
//           if (user) {

//               var token = new VerifiyToken({
//                   _userId: user._id,
//                   token: crypto.randomBytes(16).toString("hex")
//               });
              
//               var resetUrl = "http://localhost:3000/verifytoken?token="+token.token

//               token.save(function(err) {
//                   if (err) {
//                     return res.status(500).send(err.message);
//                   }

//                   var transporter = nodemailer.createTransport({
//                       service: 'gmail',
//                       secure: false,
//                       port: 25,
//                       auth: {
//                           user: '',
//                           pass: ''
//                       },
//                       tls: {
//                           rejectUnauthorized: false
//                       }
//                   })
//                   var mailOptions = {
//                       from: 'apitestt26@gmail.com',
//                       to: user.email,
//                       subject: 'Reset Password Link',
//                       text: resetUrl
//                   };
//                   transporter.sendMail(mailOptions, function(error, info){
//                       if (error) {
//                       console.log(error);
//                       } else {
//                       console.log('Email sent: ' + info.response);
//                       }
//                   });

//                   res.send(token)
//               });
//           } else {
//               res.json({ error: "User does not exist" })
//           }
//       })
//       .catch(err => {
//           res.send('error: ' + err)
//       })
// })

// users.get('/verifytoken', (req, res) => {
//   var token = req.headers['token']
//   //console.log(decoced._id);
//   VerifiyToken.findOne({
//       token: token
//   })
//       .then(verifyToken => {
//           if (verifyToken) {
//               User.findOne({
//                   _id: verifyToken._userId
//               })
//                   .then(user => {
//                       if (user) {
//                           console.log(user)
//                           res.json(user)
//                       } else {
//                           res.json({ error: "User does not exist" })
//                       }
//                   })
//                   .catch(err => {
//                       res.json({ error: "User does not exist" })
//                   })
//           } else {
//               res.json({ error: "User does not exist" })
//           }
//       })
//       .catch(err => {
//           res.json({ error: "User does not exist" })
//       })
// })

// @route   GET api/users/current
// @desc    Login user / Return current user
// @access  private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

module.exports = router;
