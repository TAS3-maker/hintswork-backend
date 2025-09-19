const mongoose = require('mongoose');
const { Schema } = mongoose;


const AuditLogSchema = new Schema({
  actor: { type: Schema.Types.ObjectId, ref: 'User', default: null },
  actor_type: { type: String, enum: ['admin','system','cron','integration'], default: 'admin' },
  entity: { type: String, required: true }, 
  entity_id: { type: Schema.Types.ObjectId, required: false },
  action: { type: String, required: true }, 
  diff: { type: Schema.Types.Mixed, default: {} },
  ts: { type: Date, default: Date.now }
}, { timestamps: true });


AuditLogSchema.index({ entity: 1, entity_id: 1 });
AuditLogSchema.index({ actor: 1, ts: -1 });
module.exports = mongoose.model('AuditLog', AuditLogSchema);
