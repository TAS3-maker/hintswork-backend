const mongoose = require('mongoose');
const { Schema } = mongoose;

const SponsorSchema = new Schema({
  name: { 
    type: String, 
    required: true 
  },
  campaign_id: { type: String },
  deeplink: { type: String },
  domains_allowed: [{ type: String }], 
  hmac_secret_kms_ref: { 
    type: String, 
    default: null 
  }, 
  attribution_rules: { 
    type: Schema.Types.Mixed, 
    default: {} 
  },
  is_active: { 
    type: Boolean, 
    default: true 
  },
  caps: {
    daily_per_user: { type: Number, default: 1 },
    weekly_per_user: { type: Number, default: 3 }
  },
  metadata: { 
    type: Schema.Types.Mixed, 
    default: {} }
}, { timestamps: true });

module.exports = mongoose.model('Sponsor', SponsorSchema);

















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
