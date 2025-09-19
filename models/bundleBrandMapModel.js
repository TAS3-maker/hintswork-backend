const mongoose = require('mongoose');
const { Schema } = mongoose;


const BundleBrandMapSchema = new Schema({
  bundle: { 
    type: Schema.Types.ObjectId, 
    ref: 'HintBundle', 
    required: true, 
    index: true 
 },
  brand: { 
    type: Schema.Types.ObjectId, 
    ref: 'Brand', 
    required: true, 
    index: true 
  },
  created_by: { 
    type: Schema.Types.ObjectId, 
    ref: 'User' 
  },
  created_at: { 
    type: Date, 
    default: Date.now 
 }
});

BundleBrandMapSchema.index({ bundle: 1, brand: 1 }, { unique: true });
module.exports = mongoose.model('BundleBrandMap', BundleBrandMapSchema);
