const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: false,
      trim: true,
    },
    password: {
      type: String,
      required: false,
    },
  },
  { timestamps: true } // Добавляет поля createdAt и updatedAt
);

module.exports = mongoose.model('admin-panel', LoginSchema);
