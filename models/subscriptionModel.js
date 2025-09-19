const mongoose = require('mongoose');
const { Schema } = mongoose;

const SubscriptionSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  plan: { type: String },
  status: { type: String, enum: ['active','past_due','cancelled','trial'], default: 'trial' },
  renewal_at: { type: Date },
  provider_meta: { type: Schema.Types.Mixed } 
}, { timestamps: true });

module.exports = mongoose.model('Subscription', SubscriptionSchema);
