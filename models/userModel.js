const mongoose = require("mongoose");

const TrophySchema = new mongoose.Schema({
  trophy_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trophy",
    required: true
  },
  awarded_at: {
    type: Date,
    default: Date.now
  }
});

const PointsSchema = new mongoose.Schema({
  value: { type: Number, required: true },        
  reason: { type: String },                         
  balance_after: { type: Number, required: true },  
  created_at: { type: Date, default: Date.now }
});

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      sparse: true,
      lowercase: true,
      trim: true
    },
    phone: {
      type: String,
      unique: true,
      sparse: true
    },
    password_hash: {
      type: String,
      required: true
    },
    lang: {
      type: String,
      enum: ["en-IN", "hi-IN"],
      default: "en-IN"
    },
    notif_prefs: {
      daily_time: { type: String, default: "08:00" },
      quiet_hours: { type: Boolean, default: false }
    },
    status: {
      type: String,
      enum: ["active", "suspended", "deleted"],
      default: "active"
    },
    streak_days: {
      type: Number,
      default: 0
    },
    trophies: [TrophySchema],

   
    points_balance: [PointsSchema]
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }
);

module.exports = mongoose.model("User", userSchema);



















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
