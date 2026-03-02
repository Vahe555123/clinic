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
    title: 'Консультационные услуги',
    description: 'Первичные и повторные консультации врачей-косметологов и дерматовенерологов, сбор анамнеза, дерматоскопия.',
    imageFile: 'service-consultation.jpg',
    serviceItems: [
      {
        title: 'Консультации и осмотры',
        descArray: [
          { key: 'О услуге', value: ['Индивидуальный подход к каждому пациенту, профессиональная диагностика состояния кожи и подбор оптимального плана лечения.'] },
        ],
        price: [
          {
            title: 'Консультации',
            value: [
              { priceServiceTitle: 'Прием врача-косметолога первичный', codePrice: 'В01.008.003', priceService: '20000' },
              { priceServiceTitle: 'Прием врача-косметолога повторный', codePrice: 'В01.008.004', priceService: '10000' },
              { priceServiceTitle: 'Прием врача-дерматовенеролога первичный', codePrice: 'В01.008.001', priceService: '15000' },
              { priceServiceTitle: 'Прием врача-дерматовенеролога повторный', codePrice: 'В01.008.002', priceService: '10000' },
            ],
          },
          {
            title: 'Диагностика',
            value: [
              { priceServiceTitle: 'Сбор анамнеза и жалоб в косметологии', codePrice: 'А01.01.004', priceService: '5000' },
              { priceServiceTitle: 'Сбор анамнеза и жалоб в дерматологии', codePrice: 'А01.01.001', priceService: '4000' },
              { priceServiceTitle: 'Дерматоскопия', codePrice: 'A03.01.001', priceService: '4000' },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Инъекции ботулотоксина',
    description: 'Инъекции ботулинического токсина для коррекции мимических морщин, лечения гипергидроза.',
    imageFile: 'service-botox.jpg',
    serviceItems: [
      {
        title: 'Внутримышечное введение',
        descArray: [
          { key: 'Показания', value: ['Мимические морщины лба, межбровья, области глаз, подбородка, шеи, платизмы.'] },
          { key: 'Результат', value: ['Разглаживание морщин, расслабление мышц, эффект до 4-6 месяцев.'] },
        ],
        price: [
          {
            title: 'Ботулотоксин по зонам',
            value: [
              { priceServiceTitle: 'Область лба', codePrice: 'А11.02.002', priceService: '17000' },
              { priceServiceTitle: 'Область межбровья', codePrice: 'А11.02.002', priceService: '17000' },
              { priceServiceTitle: 'Область глаз', codePrice: 'А11.02.002', priceService: '17000' },
              { priceServiceTitle: 'Область подбородка', codePrice: 'А11.02.002', priceService: '17000' },
              { priceServiceTitle: 'Область шеи', codePrice: 'А11.02.002', priceService: '17000' },
              { priceServiceTitle: 'Область платизмы', codePrice: 'А11.02.002', priceService: '17000' },
              { priceServiceTitle: 'Мезо-ботулинический токсин', codePrice: 'А11.02.002', priceService: '34000' },
            ],
          },
          {
            title: 'Препараты поштучно',
            value: [
              { priceServiceTitle: 'Диспорт, 1 ед', codePrice: '', priceService: '250' },
              { priceServiceTitle: 'Ксеомин, 1 ед', codePrice: '', priceService: '500' },
            ],
          },
        ],
      },
      {
        title: 'Лечение гипергидроза',
        descArray: [
          { key: 'О услуге', value: ['Внутрикожное введение ботулинического токсина для лечения повышенного потоотделения.'] },
        ],
        price: [
          {
            title: 'Гипергидроз',
            value: [
              { priceServiceTitle: 'Низкая и средняя доза', codePrice: 'А11.01.003', priceService: '45000' },
              { priceServiceTitle: 'Высокая доза', codePrice: 'А11.01.003', priceService: '66000' },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Контурная пластика',
    description: 'Контурная пластика филлерами, объёмное моделирование, коррекция губ, введение нитей.',
    imageFile: 'service-contour.jpg',
    serviceItems: [
      {
        title: 'Контурная пластика филлерами',
        descArray: [
          { key: 'О процедуре', value: ['Заполнение морщин, коррекция овала лица, моделирование скул, подбородка и носа.'] },
        ],
        price: [
          {
            title: 'Belatero',
            value: [
              { priceServiceTitle: 'Belatero Balance 1,0 мл', codePrice: 'А16.01.026', priceService: '48000' },
              { priceServiceTitle: 'Belatero Balance скуловая область 1,0 мл', codePrice: 'А16.01.026', priceService: '73000' },
              { priceServiceTitle: 'Belatero Intence 1,0 мл', codePrice: 'А16.01.026', priceService: '48000' },
              { priceServiceTitle: 'Belatero Intence нос 1,0 мл', codePrice: 'А16.01.026', priceService: '56000' },
              { priceServiceTitle: 'Belatero Soft 1,0 мл', codePrice: 'А16.01.026', priceService: '48000' },
              { priceServiceTitle: 'Belatero Soft бланширование 1,0 мл', codePrice: 'А16.01.026', priceService: '50000' },
              { priceServiceTitle: 'Belatero Revive 1,0 мл', codePrice: 'А16.01.026', priceService: '48000' },
            ],
          },
          {
            title: 'Aliaxin / Profhilo / Radiesse',
            value: [
              { priceServiceTitle: 'Profhilo, 2 мл', codePrice: 'А16.01.026', priceService: '48000' },
              { priceServiceTitle: 'Aliaxin FL 1,0 мл', codePrice: 'А16.01.026', priceService: '48000' },
              { priceServiceTitle: 'Aliaxin SR 1,0 мл', codePrice: 'А16.01.026', priceService: '48000' },
              { priceServiceTitle: 'Aliaxin EV 1,0 мл', codePrice: 'А16.01.026', priceService: '48000' },
              { priceServiceTitle: 'Aliaxin SV 1,0 мл', codePrice: 'А16.01.026', priceService: '48000' },
              { priceServiceTitle: 'Aliaxin GP 1,0 мл', codePrice: 'А16.01.026', priceService: '48000' },
              { priceServiceTitle: 'Radiesse 1,5 мл', codePrice: 'А16.01.026', priceService: '56000' },
            ],
          },
        ],
      },
      {
        title: 'Коррекция губ',
        descArray: [
          { key: 'О процедуре', value: ['Восстановление объёма и формы губ, коррекция асимметрии.'] },
        ],
        price: [
          {
            title: 'Коррекция губ',
            value: [
              { priceServiceTitle: 'Aliaxin FL 1,0 мл', codePrice: 'А16.01.026', priceService: '51000' },
              { priceServiceTitle: 'Belotero Lips Contour', codePrice: 'А16.01.026', priceService: '51000' },
              { priceServiceTitle: 'Belotero Lips Shape', codePrice: 'А16.01.026', priceService: '51000' },
              { priceServiceTitle: 'Комбинированное', codePrice: 'А16.01.026', priceService: '65000' },
            ],
          },
        ],
      },
      {
        title: 'Объёмное моделирование',
        descArray: [
          { key: 'О процедуре', value: ['Восполнение объёмов лица с помощью филлеров и полимолочной кислоты.'] },
        ],
        price: [
          {
            title: 'Моделирование',
            value: [
              { priceServiceTitle: 'Belatero Volume 1,0 мл', codePrice: 'А11.01.013', priceService: '52000' },
              { priceServiceTitle: 'Полимолочная кислота, 1 зона', codePrice: 'А11.01.013', priceService: '84000' },
            ],
          },
        ],
      },
      {
        title: 'Нитевой лифтинг',
        descArray: [
          { key: 'О процедуре', value: ['Армирование и подтяжка мягких тканей мезонитями и когтевыми нитями.'] },
        ],
        price: [
          {
            title: 'Lead Fine Lift',
            value: [
              { priceServiceTitle: 'PDO 27G x 60, 1 шт', codePrice: 'А11.01.012', priceService: '2500' },
              { priceServiceTitle: 'PDO 29G x 40, 1 шт', codePrice: 'А11.01.012', priceService: '2500' },
              { priceServiceTitle: 'Screw PDO 29G x 40, 1 шт', codePrice: 'А11.01.012', priceService: '3800' },
              { priceServiceTitle: 'Anchor PDO 18G x 100, 1 шт', codePrice: 'А11.01.012', priceService: '28000' },
            ],
          },
          {
            title: 'Honey YRPN',
            value: [
              { priceServiceTitle: 'Mono 30/38, 1 шт', codePrice: 'А11.01.012', priceService: '2100' },
              { priceServiceTitle: 'Mono 27/38, 1 шт', codePrice: 'А11.01.012', priceService: '2100' },
              { priceServiceTitle: 'Mono 26/60, 1 шт', codePrice: 'А11.01.012', priceService: '3500' },
              { priceServiceTitle: 'Cog 3D 23/60, 1 шт', codePrice: 'А11.01.012', priceService: '8000' },
              { priceServiceTitle: 'Cog for nose 19/38, 1 шт', codePrice: 'А11.01.012', priceService: '18000' },
              { priceServiceTitle: 'Cog master gear 19/100, 1 шт', codePrice: 'А11.01.012', priceService: '18000' },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Биоревитализация и мезотерапия',
    description: 'Биоревитализация, биорепарация и мезотерапия для увлажнения, восстановления и омоложения кожи.',
    imageFile: 'service-biorevit.jpg',
    serviceItems: [
      {
        title: 'Биоревитализация',
        descArray: [
          { key: 'О процедуре', value: ['Введение гель-имплантов на основе гиалуроновой кислоты для глубокого увлажнения и восстановления кожи.'] },
        ],
        price: [
          {
            title: 'Препараты',
            value: [
              { priceServiceTitle: 'Viscoderm 2,0% 1,0 мл', codePrice: 'А11.01.012', priceService: '26000' },
              { priceServiceTitle: 'Viscoderm 0,8% 1,0 мл', codePrice: 'А11.01.012', priceService: '22000' },
              { priceServiceTitle: 'Viscoderm 1,6% 1,0 мл', codePrice: 'А11.01.012', priceService: '26000' },
              { priceServiceTitle: 'Сфергель Light 0,5 мл', codePrice: 'А11.01.012', priceService: '17000' },
              { priceServiceTitle: 'Сфергель Medium 0,5 мл', codePrice: 'А11.01.012', priceService: '19000' },
              { priceServiceTitle: 'Сфергель Long 0,5 мл', codePrice: 'А11.01.012', priceService: '23000' },
              { priceServiceTitle: 'Novacutan S bio', codePrice: 'А11.01.012', priceService: '24000' },
              { priceServiceTitle: 'Novacutan Y bio', codePrice: 'А11.01.012', priceService: '24000' },
              { priceServiceTitle: 'Skinko, 5 мл', codePrice: 'А11.01.012', priceService: '25000' },
              { priceServiceTitle: 'Skinko E, 5 мл', codePrice: 'А11.01.012', priceService: '27000' },
              { priceServiceTitle: 'NCTF 135 HA+, 3 мл', codePrice: 'А11.01.012', priceService: '26000' },
              { priceServiceTitle: 'SkinElly Meso Extra 1 мл', codePrice: 'А11.01.012', priceService: '42000' },
              { priceServiceTitle: 'SkinElly Meso 1 мл', codePrice: 'А11.01.012', priceService: '42000' },
            ],
          },
          {
            title: 'Мезотерапия',
            value: [
              { priceServiceTitle: 'Эпицентральная мезотерапия', codePrice: 'А11.01.012', priceService: '28000' },
              { priceServiceTitle: 'Лечение рубцов', codePrice: 'А11.01.012', priceService: '20000' },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'PRP терапия',
    description: 'Плазмолифтинг — омоложение кожи с использованием собственной плазмы крови, обогащённой тромбоцитами.',
    imageFile: 'service-prp.jpg',
    serviceItems: [
      {
        title: 'Плазмотерапия',
        descArray: [
          { key: 'О процедуре', value: ['Лифтинг аутологичной плазмой стимулирует регенерацию тканей и улучшает качество кожи.'] },
        ],
        price: [
          {
            title: 'Плазмотерапия',
            value: [
              { priceServiceTitle: 'Regen Lab (синяя/красная пробирки), 1 зона', codePrice: 'А11.01.002', priceService: '19100' },
              { priceServiceTitle: 'Endoret (2+2), 1 зона', codePrice: 'А11.01.002', priceService: '17000' },
              { priceServiceTitle: 'Cortexil, 1 зона', codePrice: 'А11.01.002', priceService: '17000' },
              { priceServiceTitle: 'Плазмагель, 1 мл', codePrice: 'А11.01.002', priceService: '12000' },
            ],
          },
          {
            title: 'Дополнительные услуги',
            value: [
              { priceServiceTitle: 'Взятие крови из вены', codePrice: 'А11.12.009', priceService: '5000' },
              { priceServiceTitle: 'Плазмаферез', codePrice: 'А18.05.001', priceService: '7000' },
              { priceServiceTitle: 'В/в ревитализирующая манипуляция', codePrice: 'A11.12.003', priceService: '5600' },
              { priceServiceTitle: 'В/в общевосстановливающая манипуляция', codePrice: 'A11.12.003', priceService: '15000' },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Пилинг',
    description: 'Химические, ультразвуковые пилинги и HydraFacial для глубокого очищения и обновления кожи.',
    imageFile: 'service-peeling.jpg',
    serviceItems: [
      {
        title: 'Химический пилинг',
        descArray: [
          { key: 'О процедуре', value: ['Контролируемое отшелушивание кожи для стимуляции обновления, выравнивания тона и рельефа.'] },
        ],
        price: [
          {
            title: 'Enerpeel',
            value: [
              { priceServiceTitle: 'Виноградный, 1 зона', codePrice: 'A16.01.024', priceService: '15400' },
              { priceServiceTitle: 'Миндальный, 1 зона', codePrice: 'A16.01.024', priceService: '15400' },
              { priceServiceTitle: 'Салициловый, 1 зона', codePrice: 'A16.01.024', priceService: '15400' },
              { priceServiceTitle: 'ТСА, 1 зона', codePrice: 'A16.01.024', priceService: '15400' },
              { priceServiceTitle: 'Hands', codePrice: 'A16.01.024', priceService: '15400' },
            ],
          },
          {
            title: 'Аппаратный пилинг',
            value: [
              { priceServiceTitle: 'Карбоновый пилинг Spectra Peel, 1 зона', codePrice: 'A16.01.024', priceService: '22900' },
              { priceServiceTitle: 'Алмазная микрошлифовка Pristine, 1 зона', codePrice: 'A16.01.024', priceService: '18000' },
            ],
          },
          {
            title: 'HydraFacial',
            value: [
              { priceServiceTitle: 'Базовый протокол, 1 зона', codePrice: 'A16.01.024', priceService: '13000' },
              { priceServiceTitle: 'Расширенный протокол, 1 зона', codePrice: 'A16.01.024', priceService: '19000' },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Эпиляция',
    description: 'Лазерная эпиляция на аппарате MeDioStar для безболезненного удаления нежелательных волос.',
    imageFile: 'service-epilation.jpg',
    serviceItems: [
      {
        title: 'Лазерная эпиляция MeDioStar',
        descArray: [
          { key: 'О процедуре', value: ['Диодный лазер MeDioStar обеспечивает эффективное удаление волос на любом типе кожи.'] },
        ],
        price: [
          {
            title: 'Зоны',
            value: [
              { priceServiceTitle: 'Руки (от кистей до локтя)', codePrice: 'A14.01.013', priceService: '15400' },
              { priceServiceTitle: 'Руки полностью', codePrice: 'A14.01.013', priceService: '23100' },
              { priceServiceTitle: 'Подмышечные впадины', codePrice: 'A14.01.013', priceService: '12600' },
              { priceServiceTitle: 'Голени', codePrice: 'A14.01.013', priceService: '15400' },
              { priceServiceTitle: 'Бикини', codePrice: 'A14.01.013', priceService: '15400' },
              { priceServiceTitle: 'Всё тело', codePrice: 'A14.01.013', priceService: '32375' },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Лифтинг и уменьшение объёмов',
    description: 'Аппаратный лифтинг, RF-терапия, вакуумный массаж, микротоки, прессотерапия.',
    imageFile: 'service-lifting.jpg',
    serviceItems: [
      {
        title: 'RF-лифтинг Genius',
        descArray: [
          { key: 'О процедуре', value: ['Игольчатый RF-лифтинг нового поколения для глубокого ремоделирования кожи.'] },
        ],
        price: [
          {
            title: 'Genius',
            value: [
              { priceServiceTitle: 'Лицо', codePrice: 'А16.30.054', priceService: '82000' },
              { priceServiceTitle: 'Шея', codePrice: 'А16.30.054', priceService: '70000' },
              { priceServiceTitle: 'Декольте', codePrice: 'А16.30.054', priceService: '70000' },
              { priceServiceTitle: 'Лицо / шея / декольте', codePrice: 'А16.30.054', priceService: '125000' },
              { priceServiceTitle: 'Кисти рук', codePrice: 'А16.30.054', priceService: '55000' },
              { priceServiceTitle: 'Колени', codePrice: 'А16.30.054', priceService: '80000' },
            ],
          },
        ],
      },
      {
        title: 'Фракционный термолифтинг ScarLet',
        descArray: [
          { key: 'О процедуре', value: ['Фракционный RF для борьбы с возрастными изменениями, постакне и рубцами.'] },
        ],
        price: [
          {
            title: 'ScarLet',
            value: [
              { priceServiceTitle: 'Лицо', codePrice: 'А16.30.054', priceService: '41200' },
              { priceServiceTitle: 'Лицо + шея', codePrice: 'А16.30.054', priceService: '58400' },
              { priceServiceTitle: 'Лицо + шея + декольте', codePrice: 'А16.30.054', priceService: '89300' },
              { priceServiceTitle: '1 зона', codePrice: 'А16.30.054', priceService: '44000' },
            ],
          },
        ],
      },
      {
        title: 'Термомагнитное омоложение Venus',
        descArray: [
          { key: 'О процедуре', value: ['Радиочастотное воздействие для подтяжки кожи и уменьшения объёмов.'] },
        ],
        price: [
          {
            title: 'Venus Freeze Plus',
            value: [
              { priceServiceTitle: 'Лицо', codePrice: 'A17.30.020', priceService: '16000' },
              { priceServiceTitle: 'Шея', codePrice: 'A17.30.020', priceService: '9000' },
              { priceServiceTitle: 'Декольте', codePrice: 'A17.30.020', priceService: '16000' },
              { priceServiceTitle: 'Лицо + шея + декольте', codePrice: 'A17.30.020', priceService: '22000' },
              { priceServiceTitle: 'Тело, 1 зона', codePrice: 'A17.30.020', priceService: '16000' },
            ],
          },
        ],
      },
      {
        title: 'Вакуумный массаж и прессотерапия',
        descArray: [
          { key: 'О процедуре', value: ['Аппаратный лимфодренаж, уменьшение объёмов, борьба с целлюлитом.'] },
        ],
        price: [
          {
            title: 'Вакуумная терапия',
            value: [
              { priceServiceTitle: 'Icoone, 30 мин', codePrice: 'А21.01.007', priceService: '7000' },
              { priceServiceTitle: 'Starvak, 1 зона', codePrice: 'А21.01.007', priceService: '13000' },
              { priceServiceTitle: 'Starvak, 1 зона (курс)', codePrice: 'А21.01.007', priceService: '8500' },
              { priceServiceTitle: 'Starvak, общий массаж тела', codePrice: 'А21.01.007', priceService: '25000' },
              { priceServiceTitle: 'Прессотерапия BTL 6000', codePrice: 'A17.30.009', priceService: '4500' },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Аппаратное омоложение',
    description: 'Лазерное омоложение, фототерапия BBL, SMAS-лифтинг, холодная плазма, фотодинамическая терапия.',
    imageFile: 'service-rejuvenation.jpg',
    serviceItems: [
      {
        title: 'Фототерапия BBL',
        descArray: [
          { key: 'О процедуре', value: ['Широкополосный свет BBL для фотоомоложения, лечения пигментации и сосудистых изменений.'] },
        ],
        price: [
          {
            title: 'BBL Фотоомоложение',
            value: [
              { priceServiceTitle: 'Лицо', codePrice: 'A20.01.005', priceService: '30000' },
              { priceServiceTitle: 'Шея', codePrice: 'A20.01.005', priceService: '24000' },
              { priceServiceTitle: 'Декольте', codePrice: 'A20.01.005', priceService: '27000' },
              { priceServiceTitle: 'Лицо + шея + декольте', codePrice: 'A20.01.005', priceService: '48000' },
            ],
          },
          {
            title: 'BBL Forever Young',
            value: [
              { priceServiceTitle: 'Лицо', codePrice: 'A20.01.005', priceService: '55000' },
              { priceServiceTitle: 'Шея', codePrice: 'A20.01.005', priceService: '36000' },
              { priceServiceTitle: 'Декольте', codePrice: 'A20.01.005', priceService: '38000' },
              { priceServiceTitle: 'Лицо + шея', codePrice: 'A20.01.005', priceService: '65000' },
              { priceServiceTitle: 'Лицо + шея + декольте', codePrice: 'A20.01.005', priceService: '96000' },
            ],
          },
          {
            title: 'BBL Skin Tyte',
            value: [
              { priceServiceTitle: 'Лицо', codePrice: 'A22.30.001', priceService: '55000' },
              { priceServiceTitle: 'Шея', codePrice: 'A22.30.001', priceService: '40000' },
              { priceServiceTitle: 'Декольте', codePrice: 'A22.30.001', priceService: '55000' },
            ],
          },
        ],
      },
      {
        title: 'Лазерное омоложение Fotona',
        descArray: [
          { key: 'О процедуре', value: ['Многорежимное лазерное омоложение: Piano, Smooth, Frac3, протоколы 3D и 4D.'] },
        ],
        price: [
          {
            title: 'Fotona',
            value: [
              { priceServiceTitle: 'Режим Piano, 1 зона', codePrice: 'А22.01.005', priceService: '25000' },
              { priceServiceTitle: 'Режим Smooth, 1 зона', codePrice: 'А22.01.005', priceService: '25000' },
              { priceServiceTitle: 'Режим Frac 3, 1 зона', codePrice: 'А22.01.005', priceService: '25000' },
              { priceServiceTitle: 'Протокол 3D, 1 зона', codePrice: 'А22.01.005', priceService: '50000' },
              { priceServiceTitle: 'Протокол 4D, 1 зона', codePrice: 'А22.01.005', priceService: '68000' },
            ],
          },
          {
            title: 'Лазерная шлифовка Fotona',
            value: [
              { priceServiceTitle: 'Осветление до 0,8 (1 степень)', codePrice: 'A22.01.002', priceService: '25000' },
              { priceServiceTitle: 'Поверхностный пилинг 0,8–1,4 (2 степень)', codePrice: 'A22.01.002', priceService: '37000' },
              { priceServiceTitle: 'Срединный пилинг 1,4–2,4', codePrice: 'A22.01.002', priceService: '45000' },
            ],
          },
        ],
      },
      {
        title: 'Лечение на аппарате Derma V',
        descArray: [
          { key: 'О процедуре', value: ['Лечение сосудистых и пигментных изменений, акне, розацеа лазером Derma V.'] },
        ],
        price: [
          {
            title: 'Derma V',
            value: [
              { priceServiceTitle: 'Подтяжка кожи', codePrice: 'А22.01.005', priceService: '50000' },
              { priceServiceTitle: 'Лечение акне и постакне', codePrice: 'А22.01.005', priceService: '36000' },
              { priceServiceTitle: 'Лечение розацеа', codePrice: 'А22.01.005', priceService: '36000' },
              { priceServiceTitle: 'Сосуды на ногах (>1мм), 1 см', codePrice: 'А22.01.005', priceService: '3000' },
              { priceServiceTitle: 'Сосуды на ногах (>2мм), 1 см', codePrice: 'А22.01.005', priceService: '7000' },
            ],
          },
        ],
      },
      {
        title: 'Холодная плазма',
        descArray: [
          { key: 'О процедуре', value: ['Обработка кожи методом холодной плазмы для стимуляции регенерации и омоложения.'] },
        ],
        price: [
          {
            title: 'Аппарат МедСи',
            value: [
              { priceServiceTitle: 'Лицо', codePrice: 'A17.01.008', priceService: '45000' },
              { priceServiceTitle: 'Веки', codePrice: 'A17.01.008', priceService: '30000' },
              { priceServiceTitle: 'Шея', codePrice: 'A17.01.008', priceService: '40000' },
              { priceServiceTitle: 'Лицо / шея / декольте', codePrice: 'A17.01.008', priceService: '85000' },
            ],
          },
        ],
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
          { key: 'О процедуре', value: ['Безопасное удаление доброкачественных образований кожи различного размера.'] },
        ],
        price: [
          {
            title: 'По размеру',
            value: [
              { priceServiceTitle: 'До 0,2 см', codePrice: 'A16.01.017', priceService: '1400' },
              { priceServiceTitle: '0,2 — 0,3 см', codePrice: 'A16.01.017', priceService: '2100' },
              { priceServiceTitle: '0,3 — 0,4 см', codePrice: 'A16.01.017', priceService: '5600' },
              { priceServiceTitle: '0,5 — 1 см', codePrice: 'A16.01.017', priceService: '12600' },
              { priceServiceTitle: 'Более 1 см', codePrice: 'A16.01.017', priceService: '16100' },
              { priceServiceTitle: 'Менее 0,5 см, область век', codePrice: 'A16.01.017', priceService: '8400' },
            ],
          },
          {
            title: 'Другое',
            value: [
              { priceServiceTitle: 'Удаление атеромы', codePrice: 'A16.01.016', priceService: '15000' },
              { priceServiceTitle: 'Удаление новообразований, 1 элемент', codePrice: 'A16.01.017', priceService: '10000' },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Массаж',
    description: 'Лимфодренажный массаж лица, массаж шеи, криомассаж.',
    imageFile: 'service-massage.jpg',
    serviceItems: [
      {
        title: 'Массаж лица и тела',
        descArray: [
          { key: 'О процедуре', value: ['Профессиональный массаж для улучшения микроциркуляции, снятия отёков и тонизирования кожи.'] },
        ],
        price: [
          {
            title: 'Массаж',
            value: [
              { priceServiceTitle: 'Массаж лица лимфодренажный', codePrice: 'A21.01.002', priceService: '15000' },
              { priceServiceTitle: 'Массаж шеи', codePrice: 'A21.01.003', priceService: '10000' },
              { priceServiceTitle: 'Криомассаж кожи', codePrice: 'A24.01.005', priceService: '8000' },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Комплексный уход',
    description: 'Комплексные программы по профилактике старения и восстановлению кожи.',
    imageFile: 'service-complex.jpg',
    serviceItems: [
      {
        title: 'Программы ухода',
        descArray: [
          { key: 'О процедуре', value: ['Комплексные процедуры, сочетающие несколько методик для максимального результата.'] },
        ],
        price: [
          {
            title: 'Комплексы',
            value: [
              { priceServiceTitle: 'Эпицентральная мезотерапия', codePrice: '', priceService: '14000' },
              { priceServiceTitle: 'Эпицентральная мезотерапия расширенная', codePrice: '', priceService: '29000' },
              { priceServiceTitle: 'Малый уход (кожа лица)', codePrice: '', priceService: '15000' },
              { priceServiceTitle: 'Бизнес-уход (лицо + шейно-лицевая область)', codePrice: '', priceService: '25000' },
              { priceServiceTitle: 'Комплексный уход (полный протокол)', codePrice: '', priceService: '32000' },
            ],
          },
        ],
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
          price: item.price,
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
