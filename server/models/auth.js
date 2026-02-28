const mongoose = require('mongoose');

const AuthSchema = new mongoose.Schema(
  {
    
    number: {
      type: String,
      required: false,
      trim: true,
    },
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    date: {
      type: String,
      required: false,
    },
    desc: {
        type: String,
        required: false,
      },
    id : String
  },
  { timestamps: true } // Добавляет поля createdAt и updatedAt
);

module.exports = mongoose.model('auth', AuthSchema);
