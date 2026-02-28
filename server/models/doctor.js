const mongoose = require('mongoose');

const DoctorModel = new mongoose.Schema(
  {
    
    name: {
      type: String,
      required: false,
      trim: true,
    },
    description: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    id : String
  },
  { timestamps: true } 
);

module.exports = mongoose.model('doctor', DoctorModel);
