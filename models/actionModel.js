const mongoose = require("mongoose");

const ActionSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    hint_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "HintBundle.steps", 
      required: true
    },
    bundle_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "HintBundle",
      required: true
    },
    step: {
      type: String,
      enum: ["hint", "hint_plus", "hint_pp"],
      required: true
    },
    type: {
      type: String,
      enum: ["complete", "skip", "snooze", "click"],
      required: true
    },
    source: {
      type: String,
      enum: ["app", "push", "web"],
      default: "app"
    },
    meta: {
      type: Object,
      default: {}
    },
    occurred_at: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }
);


ActionSchema.index({ user_id: 1, occurred_at: -1 });
ActionSchema.index({ hint_id: 1 });
ActionSchema.index({ bundle_id: 1 });

module.exports = mongoose.model("Action", ActionSchema);
