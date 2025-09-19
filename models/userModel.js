const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    trim: true
   },
  email: { 
    type: String, 
    trim: true, 
    lowercase: true, 
    unique: true, 
    sparse: true 
  },
  phone: { 
    type: String, 
    trim: true, 
    unique: true, 
    sparse: true 
  },
  passwordHash: { 
    type: String, 
    default: null
   }, 
  lang: { 
    type: String,
     default: "en-IN"
   },
  notifPrefs: { 
    type: Object, 
    default: {} 
  },
  status: { 
    type: String, 
    enum: ["active", "suspended", "deleted"], 
    default: "active" 
  },
  brandScope: [{ type: mongoose.Schema.Types.ObjectId, ref: "Brand" }],
  consent: {
    marketing: { type: Boolean, default: false },
    acceptedAt: { type: Date }
  },
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);




















// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   firstName: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//   phone: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     trim: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   role: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Role",
//     required: true
//   },
//   status: {
//     type: Boolean,
//     default: false
//   }
// }, { timestamps: true });

// module.exports = mongoose.model("User", userSchema);
