const mongoose = require("mongoose");

const AwardSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    sponsor_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sponsor",
      required: true
    },
    hint_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "HintBundle",
      required: true
    },
    type: {
      type: String,
      enum: ["coupon", "credit", "other"],
      required: true
    },
    value: {
      type: Object, 
      required: true
    },
    awarded_at: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }
);


AwardSchema.index({ user_id: 1, awarded_at: -1 });
AwardSchema.index({ sponsor_id: 1 });
AwardSchema.index({ hint_id: 1 });

module.exports = mongoose.model("Award", AwardSchema);
