require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const EquipmentModel = require('./models/equipment');
const { uploadToCloudinary } = require('./config/cloudinary');

const url = process.env.DATABASE || 'mongodb://localhost:27017/clinic';
const IMAGES_DIR = path.join(__dirname, 'seed-images-equipment');

const data = [
  {
    title: 'Derma V',
    description: 'Неодимовая лазерная мультиплатформа Lutronic с модулем добротности. Лечение сосудистых изменений, пигментации, удаление татуировок, неабляционное лазерное омоложение, удаление поверхностных образований кожи и лица, лазерное удаление через кожу склерозирование венозных и венозных сосудов. Информация: bellasystech.ru',
    link: 'https://bellasystech.ru/catalog/equipment/derma-v/',
    imageFile: 'equipment-dermav.jpg',
    order: 1,
  },
  {
    title: 'Lutronic Genius',
    description: 'Биполярный микронигольчатый радичастотный лифтинг. Первый аппарат RF с системой искусственного интеллекта — высочайшая мощность, контроль импеданса и точность подаваемой энергии. Применение: радичастотный лифтинг, морщины, снижение тургора кожи лица и тела, атоничность, расходящиеся полы, фотостарение, лечебные рубцы и постакне, стимуляция роста волос. Информация: bellasystech.ru',
    link: 'https://bellasystech.ru/catalog/equipment/genius/',
    imageFile: 'equipment-genius.jpg',
    order: 2,
  },
  {
    title: 'BBL',
    description: 'Широкополосная световая терапия (BroadBand Light). Фотоомоложение, лечение пигментации, сосудистых изменений, акне. Gold Toning 585 нм: красные постакне, восстанавливающее акне, гиперпигментация, мелазма, рубиновый и Revital Treatment. Информация: bellasystech.ru',
    link: 'https://bellasystech.ru/',
    imageFile: 'equipment-bbl.jpg',
    order: 3,
  },
  {
    title: 'Ultraformer III',
    description: 'Аппарат ультразвукового SMAS-лифтинга. Неинвазивная подтяжка на уровне мицеллярно-апневротического слоя. Лицо: деформация контура лица, ПТОЗ областей лба, бровей; умеренное опущение и излишеки кож верхних век; умеренный излишек кожи нижних век; углубление носогубных складок; опушение кожи носогубных складок; провисание и дряблость контуров лица, шеи и декольте; дряблость и мицеллярность контуров лица, шеи и декольте; рубцы постакне. Тело: умеренное локализование иррадиальных отложений в области грудной клетки, спины, подмышек, живота, боках, бёдер, голеней. Информация: bellasystech.ru',
    link: 'https://bellasystech.ru/catalog/equipment/ultraformer-mpt/',
    imageFile: 'equipment-ultraformer.jpg',
    order: 4,
  },
  {
    title: 'Fotona SP Dynamis',
    description: 'Комбинированная лазерная система Fotona. Er:YAG + Nd:YAG в одном корпусе. Режимы: SMOOTH, FRAC3, VERSA, PIANO. Технологии: 2D–4D омоложение, SMOOTH-EYES, SMOOTH-LIPS, MONA LISA, дриллинг. «Холодные» и «горячие» лазерные пилинги. Лазерная дермабразия. Неабляционное омоложение рубцов. Лазерная эпиляция. Лазерное омоложение кожи головы и харпа. Удаление поверхностных образований кожи и лица. Лазер через кожу склерозирование венозных и авторских сосудов. Более 100 процедур в одном аппарате. Информация: fotona.ru',
    link: 'https://fotona.ru/catalog/dynamispro/',
    imageFile: 'equipment-fotona.jpg',
    order: 5,
  },
  {
    title: 'LaseMD Ultra',
    description: 'Комбинированная лазерная терапия кожи с системой доставки космецевтических средств Lutronic LaseMD. Применение: омоложение, уменьшение морщин, мелазма, удаление пигментации, лазерное выпадение волос, лечение постакне, лазерная дермабразия. Мультигранулярные ингредиенты LaseMD. Информация: bellasystech.ru',
    link: 'https://bellasystech.ru/catalog/equipment/lasemd-ultra/',
    imageFile: 'equipment-lasemd.jpg',
    order: 6,
  },
  {
    title: 'Lutronic Spectra (Hollywood Spectra)',
    description: 'Неабляционное лазерное омоложение кожи. Лечение пигментации, дермальное омоложение, карбоновый пилинг Spectra Peel, ониходистрофия. Gold Toning 585 нм: красные постакне, восстанавливающее акне, гиперпигментация, мелазма. RuVY Touch: веснушки, другие эпидермальные пигментации. Revital Treatment: омоложение кожи, овал и расширенные поры, восстанавливающее акне и овал. Информация: bellasystech.ru',
    link: 'https://bellasystech.ru/catalog/equipment/hollywood-spectra/',
    imageFile: 'equipment-spectra.jpg',
    order: 7,
  },
  {
    title: 'Starvak',
    description: 'Вакуумно-роликовый массажёр. Применяется для целей 1, 2 и 3 стадии: снижение упругости и эластичности кожи, провисание кожи, морщины (в том числе возрастные), спазм мускулатуры, рубцы, спазм мускулатуры.',
    link: 'https://bellasystech.ru/',
    imageFile: 'equipment-starvak.jpg',
    order: 8,
  },
  {
    title: 'Quantum (Indiba, Himavat)',
    description: 'Комплекс переменного микроволнового термолифтинга. Повышение мышечного тонуса, лимфодренаж лица, снижение отёков и выведение токсинов, переменоволновой микролифтинг, уход за облачной мышечной линией лица.',
    link: 'https://bellasystech.ru/',
    imageFile: 'equipment-quantum.jpg',
    order: 9,
  },
  {
    title: 'IONTO PEEL-SONO',
    description: 'Косметологический аппарат для пилинга, очищения кожи и лифтинга кожи. Сочетает ультразвуковое и ионофоретическое воздействие.',
    link: 'https://bellasystech.ru/',
    imageFile: 'equipment-ionto.jpg',
    order: 10,
  },
  {
    title: 'IONTO PEEL SL',
    description: 'Механический пилинг кожи при провисании кожи абразивами разного диаметра. Контролируемое отшелушивание и обновление кожного покрова.',
    link: 'https://bellasystech.ru/',
    imageFile: 'equipment-ionto-sl.jpg',
    order: 11,
  },
  {
    title: 'Bio Ultimate Gold',
    description: 'Аппарат для микроволновой терапии. Микроволновая терапия, лифтинг кожи, лимфодренаж, реабилитация после операций и агрессивных процедур.',
    link: 'https://bellasystech.ru/catalog/equipment/',
    imageFile: 'equipment-bio-ultimate.jpg',
    order: 12,
  },
  {
    title: 'Viva Venus',
    description: 'RF-аппарат для радичастотного лифтинга. Неинвазивное омоложение и подтяжка кожи с помощью радиочастотной энергии.',
    link: 'https://bellasystech.ru/',
    imageFile: 'equipment-venus.jpg',
    order: 13,
  },
  {
    title: 'Venus Freeze',
    description: 'Магнитное или RF-омоложение. Сочетание электромагнитной и радиочастотной технологий для безболезненного лифтинга и улучшения качества кожи.',
    link: 'https://bellasystech.ru/',
    imageFile: 'equipment-venus-freeze.jpg',
    order: 14,
  },
  {
    title: 'Reaction',
    description: 'Вакуумный и радичастотный лифтинг. Комбинированное воздействие для коррекции овала лица и тела.',
    link: 'https://bellasystech.ru/',
    imageFile: 'equipment-reaction.jpg',
    order: 15,
  },
  {
    title: 'MeDioStar',
    description: 'Диодный лазер для эпиляции и омоложения. Универсальная платформа для удаления нежелательных волос и фотоомоложения на любом типе кожи.',
    link: 'https://bellasystech.ru/',
    imageFile: 'equipment-mediostar.jpg',
    order: 16,
  },
  {
    title: 'Healite II',
    description: 'Система светодиодной фоттерапии Lutronic (LED). 830 нм: лечение рубцов, снятие воспалений, боли в мышцах и суставах, артриты, мицеллярные спазмы, кардиоваскулярные усиления кровообращения, стимуляция роста волос, активные акне. 633 нм: акне (ФДТ с аминолевулиновой кислотой), омоложение кожи, стимуляция роста волос. Информация: bellasystech.ru',
    link: 'https://bellasystech.ru/catalog/equipment/healite-ii/',
    imageFile: 'equipment-healite.jpg',
    order: 17,
  },
  {
    title: 'Cellutec / Coresculpt',
    description: 'Массажёр для тела. Электромагнитная система Coresculpt для формирования мышц. Аппаратный лимфодренаж и моделирование контуров. Информация: bellasystech.ru',
    link: 'https://bellasystech.ru/catalog/equipment/coresculpt/',
    imageFile: 'equipment-coresculpt.jpg',
    order: 18,
  },
  {
    title: 'DUET V / Volnewmer',
    description: 'Монополярный радичастотный лифтинг. Премиальный аппарат для RF-лифтинга с частотой 6,78 МГц, работающий на водяном охлаждении. Глубокий прогрев тканей для подтяжки и уплотнения кожи. Информация: bellasystech.ru',
    link: 'https://bellasystech.ru/catalog/equipment/volnewmer/',
    imageFile: 'equipment-volnewmer.jpg',
    order: 19,
  },
  {
    title: 'Onetec / Clatuu',
    description: 'Коагулятор и криолиполиз. Аппарат Clatuu для контролируемого криолиполиза — воздействие на подкожно-жировой слой без повреждения тканей. Информация: bellasystech.ru',
    link: 'https://bellasystech.ru/catalog/equipment/clatuu/',
    imageFile: 'equipment-clatuu.jpg',
    order: 20,
  },
  {
    title: 'Exoderm / Picoplus',
    description: 'Пикосекундный лазер для удаления сосудов, пигментации, татуировок. Мощный и универсальный пикосекундный лазер с 4 длинами волн. Лечение сосудистых патологий, купероза. Информация: bellasystech.ru',
    link: 'https://bellasystech.ru/catalog/equipment/picoplus/',
    imageFile: 'equipment-picoplus.jpg',
    order: 21,
  },
  {
    title: 'Biozonix',
    description: 'Дарсонваль, генератор озона. Аппаратная физиотерапия для улучшения микроциркуляции и антисептического действия.',
    link: 'https://bellasystech.ru/',
    imageFile: 'equipment-biozonix.jpg',
    order: 22,
  },
  {
    title: 'Lymphastim / Ulfit',
    description: 'Прессотерапия и ультразвуковая коррекция тела. Аппарат кругового динамического ультразвука Ulfit для подтяжки и контурирования. Аппаратный лимфодренажный массаж. Информация: bellasystech.ru',
    link: 'https://bellasystech.ru/catalog/equipment/ulfit/',
    imageFile: 'equipment-ulfit.jpg',
    order: 23,
  },
  {
    title: 'Viora Pristine',
    description: 'Алмазная микрошлифовка. Глубокое очищение и эксфолиация кожи.',
    link: 'https://bellasystech.ru/',
    imageFile: 'equipment-pristine.jpg',
    order: 24,
  },
  {
    title: 'HydraFacial',
    description: 'Очищение и питание кожи. Многоступенчатая процедура гидратации, очищения и экстракции.',
    link: 'https://bellasystech.ru/',
    imageFile: 'equipment-hydrafacial.jpg',
    order: 25,
  },
  {
    title: 'PRP-терапия',
    description: 'Лечение аутологичной плазмой. Омоложение и восстановление кожи с помощью обогащённой тромбоцитами плазмы собственной крови пациента.',
    link: 'https://bellasystech.ru/',
    imageFile: 'equipment-prp.jpg',
    order: 26,
  },
  {
    title: 'LED-терапия',
    description: 'Неинвазивный вид фототерапии, использующий узкополосную энергию света LED-диода. Подбирается свет и импульс в зависимости от цели процедуры.',
    link: 'https://bellasystech.ru/',
    imageFile: 'equipment-led.jpg',
    order: 27,
  },
  {
    title: 'Icoone Laser',
    description: 'Аппарат мультимикролайзерного воздействия на ткань. Вакуумный массаж с одновременным инфракрасным и лазерным воздействием.',
    link: 'https://bellasystech.ru/',
    imageFile: 'equipment-icoone.jpg',
    order: 28,
  },
  {
    title: 'Accent',
    description: 'Аппарат для проведения процедур термолифтинга. RF-лифтинг для подтяжки кожи лица и тела.',
    link: 'https://bellasystech.ru/',
    imageFile: 'equipment-accent.jpg',
    order: 29,
  },
  {
    title: 'Ellisis Sense',
    description: 'Биполярный микронигольчатый радичастотный лифтинг. Аналог Genius для RF-лифтинга с игольчатым воздействием.',
    link: 'https://bellasystech.ru/',
    imageFile: 'equipment-ellisis.jpg',
    order: 30,
  },
  {
    title: 'Surgitron',
    description: 'Радиохирургический аппарат для удаления новообразований. Электрокоагуляция и иссечение доброкачественных образований кожи.',
    link: 'https://bellasystech.ru/',
    imageFile: 'equipment-surgitron.jpg',
    order: 31,
  },
];

async function uploadImage(filename) {
  const filePath = path.join(IMAGES_DIR, filename);
  if (!fs.existsSync(IMAGES_DIR) || !fs.existsSync(filePath)) {
    return '';
  }
  try {
    const buffer = fs.readFileSync(filePath);
    const result = await uploadToCloudinary(buffer, 'clinic/equipment');
    return result.secure_url;
  } catch (err) {
    console.warn(`  Ошибка загрузки ${filename}:`, err.message);
    return '';
  }
}

async function seed() {
  try {
    await mongoose.connect(url);
    console.log('Подключено к MongoDB');

    await EquipmentModel.deleteMany({});
    console.log('Старое оборудование удалено');

    let count = 0;
    for (const item of data) {
      const imageUrl = await uploadImage(item.imageFile);
      const eq = new EquipmentModel({
        title: item.title,
        description: item.description,
        link: item.link || '',
        order: item.order,
        image: imageUrl,
      });
      eq.id = String(eq._id);
      await eq.save();
      count++;
      console.log(`  ${count}. ${item.title}`);
    }

    console.log(`\nГотово! Создано ${count} аппаратов`);
    process.exit(0);
  } catch (err) {
    console.error('Ошибка:', err.message);
    process.exit(1);
  }
}

seed();
