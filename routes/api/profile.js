const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

mongoose.set("debug", true);

// Load Validation
const validateProfileInput = require("../../validation/profile");
const validateExperienceInput = require("../../validation/experience");

// Load Profile Model
const Profile = require("../../models/Profile");
// Load User Profile
const User = require("../../models/User");

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Profile Works" }));

// @route   GET api/profile/all
// @desc    Get all profiles
// @access  Public
router.get("/all", (req, res) => {
  const errors = {};
  Profile.find()
    .populate("user", ["name"])
    .then(profiles => {
      if (!profiles) {
        errors.noprofile = "Aucune profile existe";
        return res.status(404).json(errors);
      }

      res.json(profiles);
    })
    .catch(err => res.status(404).json({ profiles: "Aucune profile existe" }));
});

// @route   GET api/profile/handle/:handle
// @desc    Get profile by handle
// @access  Public

router.get("/handle/:handle", (req, res) => {
  const errors = {};

  Profile.findOne({ handle: req.params.handle })
    .populate("user", ["name"])
    .then(profile => {
      if (!profile) {
        errors.noprofile = "Ce nom n'apartient pas a ce profile";
        return res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch(err => res.status(404).json(err));
});

// @route   GET api/profile/user/:user_id
// @desc    Get user by user ID
// @access  Public

router.get("/user/:user_id", (req, res) => {
  const errors = {};

  Profile.findOne({ user: req.params.user_id })
    .populate("user", ["name"])
    .then(profile => {
      if (!profile) {
        errors.noprofile = "Auncun profile existe pour cet utulisateur";
        res.status(404).json(errors);
      }

      res.json(profile);
    })
    .catch(err =>
      res.status(404).json({ profile: "Auncun profile existe pour cet utulisateur" })
    );
});

// @route   GET api/profile
// @desc    Get current user's profile
// @access  Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    Profile.findOne({ user: req.user.id })
      .populate("user", ["name", "isAdmin"])
      .then(profile => {
        if (!profile) {
          errors.noprofile = "Auncun profile existe pour cet utulisateur";
          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route   POST api/profile
// @desc    Create or edit user profile
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    // Get fields
    const profileFields = {};
    profileFields.user = req.user.id;
    profileFields.handle = req.body.handle;
    profileFields.ville = req.body.ville;
    profileFields.bio = req.body.bio;
    profileFields.age = req.body.age;
    profileFields.sex = req.body.sex;
    profileFields.groupsanguin = req.body.groupsanguin;
    profileFields.status = req.body.status;
    // profileFields.apifacebgrps = req.body.apifacebgrps;
    // Maladies - Spilt into array
    if (typeof req.body.maladies !== "undefined") {
      profileFields.maladies = req.body.maladies.split(",");
    }

    // Social
    profileFields.social = {};
    if (req.body.youtube) profileFields.social.youtube = req.body.youtube;
    if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
    if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
    if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
    if (req.body.instagram) profileFields.social.instagram = req.body.instagram;

    Profile.findOne({ user: req.user.id }).then(profile => {
      if (profile) {
        // Update
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        ).then(profile => res.json(profile));
      } else {
        // Create

        // Check if handle exists
        Profile.findOne({ handle: profileFields.handle }).then(profile => {
          if (profile) {
            errors.handle = "Ce nom existe deja";
            res.status(400).json(errors);
          }

          // Save Profile
          new Profile(profileFields).save().then(profile => res.json(profile));
        });
      }
    });
  }
);

// @route   POST api/profile/experience
// @desc    Add experience to profile
// @access  Private
router.post(
  "/experience",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateExperienceInput(req.body);

    // Check ValidationvalidateExperienceInput

    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    Profile.findOne({ user: req.user.id }).then(profile => {
      const newExp = {
        // title: req.body.title,
        ville: req.body.ville,
        // location: req.body.location,
        from: req.body.from,
        // to: req.body.to,
        current: req.body.current,
        description: req.body.description
      };

      // Add to exp array
      profile.experience.unshift(newExp);

      profile.save().then(profile => res.json(profile));
    });
  }
);

// @route   POST api/profile/experience/:id
// @desc    Update an experience
// @access  Private
router.post(
  "/experience/:exp_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateExperienceInput(req.body);

    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    Profile.findOne({ user: req.user.id })
      .then(profile => {
        const itemNumber = profile.experience
          .map(item => item.id)
          .indexOf(req.params.exp_id);

        let itemToUpdate = profile.experience[itemNumber];

        // itemToUpdate.title = req.body.title;
        itemToUpdate.ville = req.body.ville;
        // itemToUpdate.location = req.body.location;
        itemToUpdate.from = req.body.from;
        // itemToUpdate.to = req.body.to;
        itemToUpdate.description = req.body.description;
        itemToUpdate.current = req.body.current;

        profile.save().then(profile => res.json(profile));
      })
      .catch(err => res.status(404).json(err));
  }
);





// @route   DELETE api/profile/experience/:exp_id
// @desc    Delete experience from profile
// @access  Private
router.delete(
  "/experience/:exp_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        // Get remove index
        const removeIndex = profile.experience
          .map(item => item.id)
          .indexOf(req.params.exp_id);

        // Splice out of array
        profile.experience.splice(removeIndex, 1);

        // Save
        profile.save().then(profile => {
          res.json(profile);
        });
      })
      .catch(err => res.status(404).json(err));
  }
);


// @route   DELETE api/profile
// @desc    Delete user and profile
// @access  Private
router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOneAndRemove({ user: req.user.id }).then(() => {
      User.findOneAndRemove({ _id: req.user.id }).then(() =>
        res.json({ success: true })
      );
    });
  }
);

module.exports = router;
