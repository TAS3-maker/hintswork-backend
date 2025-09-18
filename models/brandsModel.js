const mongoose = require("mongoose");

const ThemeSchema = new mongoose.Schema({
  color: { type: String, default: "#000000" },
  logo: { type: String, required: false } 
});

const BrandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    theme: {
      type: ThemeSchema,
      default: {}
    },
    is_active: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }
);

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
