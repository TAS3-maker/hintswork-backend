const mongoose = require("mongoose");

const ScienceRefSchema = new mongoose.Schema({
  doi: { type: String, required: true },
  strength: {
    type: String,
    enum: ["High", "Medium", "Low"],
    default: "Medium"
  }
});

const StepSchema = new mongoose.Schema({
  step: {
    type: String,
    enum: ["hint", "hint_plus", "hint_pp"],
    required: true
  },
  body: { type: String, required: true },
  media: { type: Object, default: {} },
  tags: [{ type: String }],
  action: {
    type: Object,
    default: {}
  }
});

const HintBundleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    category: { type: String, required: true },
    audience: { type: String, enum: ["adult", "teen", "general"], default: "general" },
    science_refs: [ScienceRefSchema],
    schedule_at: { type: Date },
    status: {
      type: String,
      enum: ["draft", "review", "approved", "published", "archived"],
      default: "draft"
    },
    steps: { type: [StepSchema], required: true },
    brand_ids: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Brand"
      }
    ],
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }
);

module.exports = mongoose.model("HintBundle", HintBundleSchema);
