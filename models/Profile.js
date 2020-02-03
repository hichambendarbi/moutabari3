const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },

  status: {
    type: String,
    required: true
  },
  maladies: {
    type: [String]
  },
  groupsanguin: {
    type: String,
    required: true
  },
  ville: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },

  sex: {
    type: String,
    required: true
  },

  bio: {
    type: String
  },
  // apifacebgrps: {
  //   type: String
  // },
  experience: [
    {

      ville: {
        type: String,
        required: true
      },

      from: {
        type: Date,
        required: true
      },



      current: {
        type: Boolean,
        default: false
      },
      
      description: {
        type: String
      }

    }
  ],

  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
