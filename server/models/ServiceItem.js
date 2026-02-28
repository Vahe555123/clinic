const mongoose = require('mongoose');
const { Schema } = mongoose;

const serviceItemSchema = new Schema({
  title: { type: String, required: true },
  descArray: { type: Array },
  price: { type: Array },
  serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true }, // Связь с сервисом
  image: { type: String }, // Ссылка на изображение услуги
  id: String
});

const ServiceItem = mongoose.model('ServiceItem', serviceItemSchema);

module.exports.ServiceItem = ServiceItem;
