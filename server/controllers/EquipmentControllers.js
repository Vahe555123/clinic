const EquipmentModel = require('../models/equipment');
const { uploadToCloudinary, deleteFromCloudinary } = require('../config/cloudinary');



class EquipmentControllers {
  async getEquipment(req, res) {
    try {
      
      const equipment = await EquipmentModel.find();
      res.json({ data: equipment });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  async getEquipmentById(req, res) {
    try {
      const { id } = req.params;
      let product;
      if (id) {
        if (id.length < 15) {
          product = await EquipmentModel.findOne({ id: id });
        } else {
          product = await EquipmentModel.findById(id);
        }
      }
      if (!product) {
        return res.status(404).json({ message: 'Продукт не найден' });
      }

      const formattedProduct = {
        ...product.toObject(),
        id: product._id.toString(),
      };

      res.status(200).json(formattedProduct);
    } catch (error) {
      res.status(500).json({ message: 'Ошибка получения продукта', error });
    }
  }

  
  async addEquipment(req, res) {
    const mainImage = req.files?.image || null;

    let imageUrl = null;
    if (mainImage) {
      try {
        const result = await uploadToCloudinary(mainImage.data, 'clinic/equipment');
        imageUrl = result.secure_url;
      } catch (err) {
        console.error('Ошибка при загрузке изображения в Cloudinary:', err);
        return res.status(500).json({ message: 'Не удалось сохранить изображение' });
      }
    }

    try {
      const { title, description } = req.body;
      const newEquipment = new EquipmentModel({
        title,
        description,
        image: imageUrl

      });
      newEquipment.id = String(newEquipment._id)
      await newEquipment.save();
      res.status(201).json({ data: newEquipment });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ error: err.message });
    }
  }

  async updateEquipment(req, res) {
    try {
      const { id } = req.params;
      let { title, description } = req.body;


      const product = await EquipmentModel.findOne({ id: id });
      console.log(product);
      
      if (!product) {
        return res.status(404).json({ message: 'Продукт не найден' });
      }

      const mainImage = req.files?.image || null;

      if (mainImage) {
        await deleteFromCloudinary(product.image);
        try {
          const result = await uploadToCloudinary(mainImage.data, 'clinic/equipment');
          product.image = result.secure_url;
        } catch (err) {
          console.error('Ошибка при загрузке изображения в Cloudinary:', err);
          return res.status(500).json({ message: 'Не удалось сохранить изображение' });
        }
      }
      product.title = title != "null" ? title : product.title;
      product.description = description != "null" ? description : product.description;


      console.log(product);


      await product.save();
      product.id = product._id.toString()

      res.status(200).json({
        data: product
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({ message: 'Ошибка при обновлении продукта' });
    }
  }


  async deleteEquipment(req, res) {
    try {
      const { id } = req.params;

      const service = await EquipmentModel.findOne({ id: id });
      if (!service) {
        return res.status(404).json({ message: 'Service not found' });
      }
      console.log(service);

      await EquipmentModel.findByIdAndDelete(service._id);
      await deleteFromCloudinary(service.image);

      res.status(200).json({ message: 'Service deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete service', error: error.message });
    }
  };

}

module.exports = new EquipmentControllers()
