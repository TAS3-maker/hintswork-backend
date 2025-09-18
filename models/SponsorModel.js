const mongoose = require("mongoose");

const AttributionRulesSchema = new mongoose.Schema({
  window_days: { type: Number, default: 7 }, 
  frequency_cap: { type: Number, default: 0 }, 
  cooldown_hours: { type: Number, default: 0 }
});

const SponsorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    campaign_id: { type: String, required: true, unique: true },
    deeplink: { type: String, required: true },
    hmac_secret: { type: String, required: true }, 
    attribution_rules: { type: AttributionRulesSchema, default: {} },
    is_active: { type: Boolean, default: true }
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }
);

module.exports = mongoose.model("Sponsor", SponsorSchema);






// const mongoose = require("mongoose");

// const sponsorSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     tier: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     website: {
//       type: String,
//       trim: true,
//     },
//     associatedBrands: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Brand",
//       },
//     ],
//     status: {
//       type: Boolean,
//       default: true, 
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Sponsor", sponsorSchema);
