const mongoose = require('mongoose');

const PriceItemSchema = new mongoose.Schema({
  code: { type: String, default: '' },
  name: { type: String, required: true },
  price: { type: String, default: '' },
  isGroup: { type: Boolean, default: false },
}, { _id: false });

const PriceCategorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  order: { type: Number, default: 0 },
  id: { type: String },
  items: [PriceItemSchema],
}, { timestamps: true });

module.exports = mongoose.model('PriceCategory', PriceCategorySchema);
