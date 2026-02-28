require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const LoginSchema = require('./models/login');

const url = process.env.DATABASE || 'mongodb://localhost:27017/clinic';

async function createAdmin() {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Подключено к MongoDB');

    const existing = await LoginSchema.findOne({ username: 'admin' });
    if (existing) {
      console.log('Админ уже существует, пропускаем создание.');
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash('admin', 10);
    const admin = new LoginSchema({ username: 'admin', password: hashedPassword });
    await admin.save();

    console.log('Админ создан: login=admin, password=admin');
    process.exit(0);
  } catch (error) {
    console.error('Ошибка:', error.message);
    process.exit(1);
  }
}

createAdmin();
