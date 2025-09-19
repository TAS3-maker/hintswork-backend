const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotificationSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', index: true },
  type: { type: String, enum: ['daily_hint','reminder','milestone','sponsor_followup','system'], default: 'daily_hint' },
  payload: { type: Schema.Types.Mixed, default: {} },
  scheduled_for: { type: Date, index: true },
  sent_at: { type: Date, default: null },
  status: { type: String, enum: ['scheduled','sent','failed','cancelled'], default: 'scheduled' }
}, { timestamps: true });

NotificationSchema.index({ status: 1, scheduled_for: 1 });
module.exports = mongoose.model('Notification', NotificationSchema);
