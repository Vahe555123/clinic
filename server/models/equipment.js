const mongoose = require('mongoose');

const EquipmentModel = new mongoose.Schema(
  {
    
    title: {
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
  { timestamps: true } // Добавляет поля createdAt и updatedAt
);

module.exports = mongoose.model('equipment', EquipmentModel);
