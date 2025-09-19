const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserTrophySchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  trophy: { type: Schema.Types.ObjectId, ref: 'Trophy', required: true, index: true },
  awarded_at: { type: Date, default: Date.now }
});

UserTrophySchema.index({ user: 1, trophy: 1 }, { unique: true });
module.exports = mongoose.model('UserTrophy', UserTrophySchema);
