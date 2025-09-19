const mongoose = require('mongoose');
const { Schema } = mongoose;

const AwardSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  sponsor: { type: Schema.Types.ObjectId, ref: 'Sponsor', required: false },
  hint: { type: Schema.Types.ObjectId, ref: 'Hint' },
  type: { type: String, enum: ['coupon','credit','other'], default: 'other' },
  value: { type: Schema.Types.Mixed, default: {} }, 
  awarded_at: { type: Date, default: Date.now },
  status: { type: String, enum: ['pending','confirmed','failed'], default: 'pending' },
  metadata: { type: Schema.Types.Mixed }
});

AwardSchema.index({ user: 1, awarded_at: -1 });
module.exports = mongoose.model('Award', AwardSchema);
