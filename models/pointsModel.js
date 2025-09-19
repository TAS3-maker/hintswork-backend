const mongoose = require('mongoose');
const { Schema } = mongoose;


const PointsSchema = new Schema({
  user: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true, 
    unique: true, 
    index: true 
  },
  balance: { 
    type: Number, 
    default: 0 
  },
  updated_at: { 
    type: Date, 
    default: Date.now 
  }
});


module.exports = mongoose.model('Points', PointsSchema);
