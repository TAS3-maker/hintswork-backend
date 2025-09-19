const mongoose = require("mongoose");

const BrandSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true 
  },
  slug: { type: String, unique: true, required: true, lowercase: true },
  description: { type: String },
  theme: { type: Object, default: {} }, 
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model("Brand", BrandSchema);





// const mongoose = require("mongoose");

// const brandSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//       unique: true,
//     },
//     description: {
//       type: String,
//       required: false,
//       trim: true,
//     },
//     status: {
//       type: Boolean,
//       default: true,
//     },
//   },
//   { timestamps: true }
// );

// const Brand = mongoose.model("Brand", brandSchema);

// module.exports = Brand;
