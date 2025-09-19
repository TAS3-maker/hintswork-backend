const mongoose = require('mongoose');
const { Schema } = mongoose;

const TrophySchema = new Schema({
  code: { 
    type: String, 
    required: true, 
    unique: true 
  },
  name: { 
    type: String, 
    required: true 
  },
  description: { type: String },
  criteria: { 
    type: Schema.Types.Mixed, 
    default: {} 
  }, 
  metadata: { 
    type: Schema.Types.Mixed, 
    default: {} }
}, { timestamps: true });

module.exports = mongoose.model('Trophy', TrophySchema);
