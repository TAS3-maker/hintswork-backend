const mongoose = require('mongoose');
const { Schema } = mongoose;

const HintBundleSchema = new Schema({
  title: { type: String, required: true },
  category: { type: String, default: 'general', index: true },
  audience: { type: String, default: 'general' }, 
  science_refs: [{ type: Schema.Types.Mixed }], 
  schedule_at: { type: Date, default: null }, 
  status: { type: String, enum: ['draft','review','approved','published','archived'], default: 'draft' },
  created_by: { type: Schema.Types.ObjectId, ref: 'User' },
  steps: [{ type: Schema.Types.ObjectId, ref: 'Hint' }], 
  tags: [{ type: String }],
  visibility: { type: String, enum: ['public','private','brand_scoped'], default: 'public' },
  metadata: { type: Schema.Types.Mixed, default: {} } 
}, { timestamps: true });

HintBundleSchema.index({ title: 'text', category: 1 });
module.exports = mongoose.model('HintBundle', HintBundleSchema);
