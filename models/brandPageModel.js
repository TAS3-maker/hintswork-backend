const mongoose = require('mongoose');
const { Schema } = mongoose;

const BrandPageSchema = new Schema({
  brand: { type: Schema.Types.ObjectId, ref: 'Brand', required: true, index: true },
  seo: { type: Schema.Types.Mixed, default: {} },
  sections: { type: Schema.Types.Mixed, default: [] }, 
  status: { type: String, enum: ['draft','published'], default: 'draft' },
  version: { type: Number, default: 1 }
}, { timestamps: true });

BrandPageSchema.index({ brand: 1, status: 1 });
module.exports = mongoose.model('BrandPage', BrandPageSchema);
