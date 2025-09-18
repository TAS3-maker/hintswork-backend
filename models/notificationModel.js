const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    type: {
      type: String,
      enum: ["reminder", "streak", "trophy", "sponsor", "system"],
      required: true
    },
    payload: {
      title: { type: String, required: true },
      body: { type: String, required: true },
      data: { type: Object, default: {} } 
    },
    scheduled_for: {
      type: Date,
      required: true
    },
    sent_at: {
      type: Date,
      default: null
    }
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }
);


NotificationSchema.index({ user_id: 1, scheduled_for: 1 });
NotificationSchema.index({ type: 1, scheduled_for: 1 });

module.exports = mongoose.model("Notification", NotificationSchema);
