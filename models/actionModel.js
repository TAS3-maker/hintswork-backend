const mongoose = require('mongoose');
const { Schema } = mongoose;


const ActionSchema = new Schema({
  user: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true, 
    index: true 
  },
  hint: { 
    type: Schema.Types.ObjectId, 
    ref: 'Hint', 
    required: true, 
    index: true 
  },
  bundle: { 
    type: Schema.Types.ObjectId, 
    ref: 'HintBundle' 
  },
  step: { 
    type: String, 
    enum: ['hint','hint_plus','hint_pp'], 
    required: true 
  },
  type: { 
    type: String, 
    enum: ['complete','snooze','skip','click'], 
    required: true 
  },
  source: { 
    type: String, 
    enum: ['app','push','web'], 
    default: 'app' 
  },
  meta: { 
    type: Schema.Types.Mixed, 
    default: {} 
  }, 
  occurred_at: { 
    type: Date, 
    default: Date.now 
  }
}, { timestamps: true });


ActionSchema.index({ user: 1, occurred_at: -1 });
ActionSchema.index({ user: 1, hint: 1, step: 1, occurred_at: 1 });
module.exports = mongoose.model('Action', ActionSchema);
