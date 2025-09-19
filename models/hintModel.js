const mongoose = require('mongoose');
const { Schema } = mongoose;

const HintSchema = new Schema({
  bundle: { 
    type: Schema.Types.ObjectId, 
    ref: 'HintBundle', 
    required: true, 
    index: true 
  },
  step: { 
    type: String, 
    enum: ['hint','hint_plus','hint_pp'], 
    required: true 
  },
  body: { 
    type: String, 
    required: true 
  },
  media: { 
    type: Schema.Types.Mixed, 
    default: null 
  }, 
  action: { 
    type: Schema.Types.Mixed, 
    default: null 
  }, 
  tags: [{ type: String }],
  sponsored: { 
    type: Boolean, 
    default: false 
  }, 
  sponsor: { type: Schema.Types.ObjectId, ref: 'Sponsor', default: null },
  order: { type: Number, default: 0 } 
}, { timestamps: true });

HintSchema.index({ bundle: 1, step: 1 });
module.exports = mongoose.model('Hint', HintSchema);
