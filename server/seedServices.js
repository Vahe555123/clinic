require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Service = require('./models/Service');
const { ServiceItem } = require('./models/ServiceItem');
const { uploadToCloudinary } = require('./config/cloudinary');

const url = process.env.DATABASE || 'mongodb://localhost:27017/clinic';
const IMAGES_DIR = path.join(__dirname, 'seed-images');

const data = [
  {
    title: 'SMAS лифтинг',
    description: 'Ультразвуковой SMAS-лифтинг для неинвазивной подтяжки лица, шеи и декольте.',
    imageFile: 'service-lifting.jpg',
    serviceItems: [
      {
        title: 'Ultraformer III',
        descArray: [
          { key: 'О процедуре', value: ['Неинвазивная подтяжка на уровне мицеллярно-апневротического слоя. Коррекция контура лица, ПТОЗ областей лба, бровей, век, носогубных складок.'] },
        ],
        price: [],
      },
      {
        title: 'DUET V / Volnewmer',
        descArray: [
          { key: 'О процедуре', value: ['Монополярный RF-лифтинг с частотой 6,78 МГц. Глубокий прогрев тканей для подтяжки и уплотнения кожи лица и тела.'] },
        ],
        price: [],
      },
    ],
  },
  {
    title: 'Микроигольчатое RF омоложение',
    description: 'Биполярный микронигольчатый радичастотный лифтинг с системой искусственного интеллекта.',
    imageFile: 'service-rejuvenation.jpg',
    serviceItems: [
      {
        title: 'Genius',
        descArray: [
          { key: 'О процедуре', value: ['Игольчатый RF-лифтинг нового поколения. Радиочастотный лифтинг, морщины, снижение тургора кожи, атоничность, фотостарение, лечебные рубцы и постакне, стимуляция роста волос.'] },
        ],
        price: [],
      },
    ],
  },
  {
    title: 'Лазерное лечение и омоложение',
    description: 'Лазерные процедуры для омоложения кожи, лечения пигментации, акне и сосудистых изменений.',
    imageFile: 'service-rejuvenation.jpg',
    serviceItems: [
      {
        title: 'Derma V',
        descArray: [
          { key: 'О процедуре', value: ['Неодимовая лазерная мультиплатформа. Лечение сосудистых и пигментных изменений, акне, розацеа, подтяжка кожи, удаление поверхностных образований.'] },
        ],
        price: [],
      },
      {
        title: 'Genius',
        descArray: [
          { key: 'О процедуре', value: ['Биполярный микронигольчатый RF для омоложения, лечения рубцов и постакне.'] },
        ],
        price: [],
      },
      {
        title: 'BBL',
        descArray: [
          { key: 'О процедуре', value: ['Широкополосный свет BBL для фотоомоложения, лечения пигментации и сосудистых изменений. Forever Young, Skin Tyte.'] },
        ],
        price: [],
      },
      {
        title: 'Ultraformer III',
        descArray: [
          { key: 'О процедуре', value: ['Ультразвуковой лифтинг для коррекции контура лица и тела.'] },
        ],
        price: [],
      },
      {
        title: 'Fotona',
        descArray: [
          { key: 'О процедуре', value: ['Многорежимное лазерное омоложение: Piano, Smooth, Frac3, протоколы 3D и 4D. Лазерная шлифовка.'] },
        ],
        price: [],
      },
      {
        title: 'LaseMD Ultra',
        descArray: [
          { key: 'О процедуре', value: ['Комбинированная лазерная терапия. Омоложение, уменьшение морщин, мелазма, удаление пигментации, лечение постакне, лазерная дермабразия.'] },
        ],
        price: [],
      },
      {
        title: 'Spectra',
        descArray: [
          { key: 'О процедуре', value: ['Неабляционное лазерное омоложение. Лечение пигментации, карбоновый пилинг Spectra Peel, Gold Toning, RuVY Touch, Revital Treatment.'] },
        ],
        price: [],
      },
    ],
  },
  {
    title: 'Контурная пластика',
    description: 'Контурная пластика филлерами, объёмное моделирование, коррекция губ, нитевой лифтинг.',
    imageFile: 'service-contour.jpg',
    serviceItems: [
      {
        title: 'Belatero',
        descArray: [
          { key: 'О препарате', value: ['Линейка филлеров для заполнения морщин, коррекции овала лица, моделирования скул, подбородка и носа.'] },
        ],
        price: [],
      },
      {
        title: 'Aliaxin / Profhilo / Radiesse',
        descArray: [
          { key: 'О препаратах', value: ['Биоревитализанты и объёмные филлеры для моделирования и увлажнения.'] },
        ],
        price: [],
      },
      {
        title: 'Коррекция губ',
        descArray: [
          { key: 'О процедуре', value: ['Восстановление объёма и формы губ, коррекция асимметрии препаратами Belotero Lips, Aliaxin FL.'] },
        ],
        price: [],
      },
      {
        title: 'Объёмное моделирование',
        descArray: [
          { key: 'О процедуре', value: ['Восполнение объёмов лица с помощью филлеров и полимолочной кислоты.'] },
        ],
        price: [],
      },
      {
        title: 'Нитевой лифтинг Lead Fine Lift',
        descArray: [
          { key: 'О процедуре', value: ['Армирование и подтяжка мезонитями PDO.'] },
        ],
        price: [],
      },
      {
        title: 'Нитевой лифтинг Honey YRPN',
        descArray: [
          { key: 'О процедуре', value: ['Мезонити и когтевые нити для трейдлифтинга.'] },
        ],
        price: [],
      },
    ],
  },
  {
    title: 'Лечение холодной плазмой',
    description: 'Обработка кожи методом холодной плазмы для стимуляции регенерации и омоложения.',
    imageFile: 'service-rejuvenation.jpg',
    serviceItems: [
      {
        title: 'Холодная плазма',
        descArray: [
          { key: 'О процедуре', value: ['Аппарат МедСи. Обработка кожи холодной плазмой для стимуляции регенерации, омоложения лица, век, шеи и декольте.'] },
        ],
        price: [],
      },
    ],
  },
  {
    title: 'Мезотерапия',
    description: 'Биоревитализация, биорепарация и мезотерапия для увлажнения, восстановления и омоложения кожи.',
    imageFile: 'service-biorevit.jpg',
    serviceItems: [
      {
        title: 'Viscoderm',
        descArray: [
          { key: 'О препарате', value: ['Гель-импланты на основе гиалуроновой кислоты для глубокого увлажнения и восстановления кожи.'] },
        ],
        price: [],
      },
      {
        title: 'Сфергель',
        descArray: [
          { key: 'О препарате', value: ['Биоревитализант для мезотерапии и биоревитализации.'] },
        ],
        price: [],
      },
      {
        title: 'Novacutan',
        descArray: [
          { key: 'О препарате', value: ['Препараты Novacutan S bio и Y bio для биоревитализации.'] },
        ],
        price: [],
      },
      {
        title: 'Skinko',
        descArray: [
          { key: 'О препарате', value: ['Биоревитализант для увлажнения и восстановления кожи.'] },
        ],
        price: [],
      },
      {
        title: 'NCTF 135 HA+',
        descArray: [
          { key: 'О препарате', value: ['Комплекс гиалуроновой кислоты и витаминов для мезотерапии.'] },
        ],
        price: [],
      },
      {
        title: 'SkinElly Meso',
        descArray: [
          { key: 'О препарате', value: ['Мезопрепарат для восстановления и омоложения кожи.'] },
        ],
        price: [],
      },
    ],
  },
  {
    title: 'Экзосомальная терапия',
    description: 'Инновационная терапия экзосомами для регенерации и омоложения кожи.',
    imageFile: 'service-biorevit.jpg',
    serviceItems: [
      {
        title: 'Экзосомальная терапия',
        descArray: [
          { key: 'О процедуре', value: ['Введение экзосом для стимуляции регенерации клеток, улучшения качества кожи и anti-age эффекта.'] },
        ],
        price: [],
      },
    ],
  },
  {
    title: 'Эпицентральная мезотерапия',
    description: 'Точечное введение препаратов в эпицентры возрастных изменений.',
    imageFile: 'service-complex.jpg',
    serviceItems: [
      {
        title: 'Эпицентральная мезотерапия',
        descArray: [
          { key: 'О процедуре', value: ['Прецизионное введение мезопрепаратов в зоны наибольших возрастных изменений для максимального эффекта.'] },
        ],
        price: [],
      },
    ],
  },
  {
    title: 'Уходовые процедуры',
    description: 'Пилинги, HydraFacial, массаж, комплексные программы ухода за кожей.',
    imageFile: 'service-complex.jpg',
    serviceItems: [
      {
        title: 'Химический пилинг Enerpeel',
        descArray: [
          { key: 'О процедуре', value: ['Виноградный, миндальный, салициловый, ТСА пилинги для отшелушивания, выравнивания тона и рельефа.'] },
        ],
        price: [],
      },
      {
        title: 'Аппаратный пилинг',
        descArray: [
          { key: 'О процедуре', value: ['Карбоновый пилинг Spectra Peel, алмазная микрошлифовка Pristine.'] },
        ],
        price: [],
      },
      {
        title: 'HydraFacial',
        descArray: [
          { key: 'О процедуре', value: ['Многоступенчатое глубокое очищение, гидратация и экстракция.'] },
        ],
        price: [],
      },
      {
        title: 'Массаж',
        descArray: [
          { key: 'О процедуре', value: ['Лимфодренажный массаж лица, массаж шеи, криомассаж кожи.'] },
        ],
        price: [],
      },
      {
        title: 'Комплексные программы',
        descArray: [
          { key: 'О процедуре', value: ['Малый уход, бизнес-уход, комплексный уход — сочетание нескольких методик для максимального результата.'] },
        ],
        price: [],
      },
    ],
  },
  {
    title: 'Эпиляция',
    description: 'Лазерная эпиляция для безболезненного удаления нежелательных волос.',
    imageFile: 'service-epilation.jpg',
    serviceItems: [
      {
        title: 'Лазерная эпиляция MeDioStar',
        descArray: [
          { key: 'О процедуре', value: ['Диодный лазер MeDioStar обеспечивает эффективное удаление волос на любом типе кожи.'] },
        ],
        price: [],
      },
    ],
  },
  {
    title: 'Удаление новообразований',
    description: 'Удаление доброкачественных новообразований кожи, атером, папиллом, родинок.',
    imageFile: 'service-removal.jpg',
    serviceItems: [
      {
        title: 'Удаление новообразований',
        descArray: [
          { key: 'О процедуре', value: ['Безопасное удаление доброкачественных образований кожи различного размера. Радиохирургия, лазерное удаление.'] },
        ],
        price: [],
      },
    ],
  },
  {
    title: 'Ботулотоксин',
    description: 'Инъекции ботулинического токсина для коррекции мимических морщин и лечения гипергидроза.',
    imageFile: 'service-botox.jpg',
    serviceItems: [
      {
        title: 'Внутримышечное введение',
        descArray: [
          { key: 'Показания', value: ['Мимические морщины лба, межбровья, области глаз, подбородка, шеи, платизмы.'] },
          { key: 'Результат', value: ['Разглаживание морщин, расслабление мышц, эффект до 4-6 месяцев.'] },
        ],
        price: [],
      },
      {
        title: 'Лечение гипергидроза',
        descArray: [
          { key: 'О услуге', value: ['Внутрикожное введение ботулинического токсина для лечения повышенного потоотделения.'] },
        ],
        price: [],
      },
    ],
  },
];

async function uploadImage(filename) {
  const filePath = path.join(IMAGES_DIR, filename);
  if (!fs.existsSync(filePath)) {
    console.warn(`  Файл ${filename} не найден, пропускаем`);
    return '';
  }
  const buffer = fs.readFileSync(filePath);
  try {
    const result = await uploadToCloudinary(buffer, 'clinic/services');
    console.log(`  Загружено: ${filename} -> ${result.secure_url}`);
    return result.secure_url;
  } catch (err) {
    console.error(`  Ошибка загрузки ${filename}:`, err.message);
    return '';
  }
}

async function seed() {
  try {
    await mongoose.connect(url);
    console.log('Подключено к MongoDB');

    await Service.deleteMany({});
    await ServiceItem.deleteMany({});
    console.log('Старые услуги удалены');

    let serviceCount = 0;
    let itemCount = 0;

    for (const svc of data) {
      console.log(`\nСоздаю услугу: ${svc.title}`);
      const imageUrl = await uploadImage(svc.imageFile);

      const service = new Service({
        title: svc.title,
        description: svc.description,
        link: '',
        image: imageUrl,
      });
      service.id = String(service._id);
      await service.save();
      serviceCount++;

      for (const item of svc.serviceItems) {
        const si = new ServiceItem({
          title: item.title,
          descArray: item.descArray,
          price: item.price || [],
          serviceId: service._id,
          image: imageUrl,
        });
        si.id = String(si._id);
        await si.save();
        itemCount++;
        console.log(`  -> Подуслуга: ${item.title}`);
      }
    }

    console.log(`\nГотово! Создано ${serviceCount} услуг и ${itemCount} подуслуг`);
    process.exit(0);
  } catch (err) {
    console.error('Ошибка:', err.message);
    process.exit(1);
  }
}

seed();
