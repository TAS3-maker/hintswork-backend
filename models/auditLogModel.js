const mongoose = require("mongoose");

const AuditLogSchema = new mongoose.Schema(
  {
    actor_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", 
      required: true
    },
    entity: {
      type: String,
      enum: [
        "user",
        "brand",
        "hint_bundle",
        "sponsor",
        "action",
        "award",
        "notification",
        "system"
      ],
      required: true
    },
    entity_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    action: {
      type: String,
      required: true,
      trim: true
     
    },
    diff: {
      old: { type: Object, default: {} },
      new: { type: Object, default: {} }
    },
    ts: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }
);


AuditLogSchema.index({ entity: 1, entity_id: 1 });
AuditLogSchema.index({ actor_id: 1, ts: -1 });
AuditLogSchema.index({ action: 1 });

module.exports = mongoose.model("AuditLog", AuditLogSchema);
