const DoctorModel = require('../models/doctor');
const { uploadToCloudinary, deleteFromCloudinary } = require('../config/cloudinary');



class DoctorControllers {
  async getDoctor(req, res) {
    try {
      
      const doctors = await DoctorModel.find();
      res.json({ data: doctors });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  async getDoctorById(req, res) {
    try {
      const { id } = req.params;
      let product;
      if (id) {
        if (id.length < 15) {
          product = await DoctorModel.findOne({ id: id });
        } else {
          product = await DoctorModel.findById(id);
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

  
  async addDoctor(req, res) {
    const mainImage = req.files?.image || null;

    let imageUrl = null;
    if (mainImage) {
      try {
        const result = await uploadToCloudinary(mainImage.data, 'clinic/doctors');
        imageUrl = result.secure_url;
      } catch (err) {
        console.error('Ошибка при загрузке изображения в Cloudinary:', err);
        return res.status(500).json({ message: 'Не удалось сохранить изображение' });
      }
    }

    try {
      const { name, description } = req.body;
      console.log(req.body);
      
      const doctors = new DoctorModel({
        name,
        description,
        image: imageUrl

      });
      doctors.id = String(doctors._id)
      await doctors.save();
      res.status(201).json({ data: doctors });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ error: err.message });
    }
  }

  async updateDoctor(req, res) {
    try {
      const { id } = req.params;
      let { name, description } = req.body;


      const product = await DoctorModel.findOne({ id: id });
      console.log(product);
      
      if (!product) {
        return res.status(404).json({ message: 'Продукт не найден' });
      }

      const mainImage = req.files?.image || null;

      if (mainImage) {
        await deleteFromCloudinary(product.image);
        try {
          const result = await uploadToCloudinary(mainImage.data, 'clinic/doctors');
          product.image = result.secure_url;
        } catch (err) {
          console.error('Ошибка при загрузке изображения в Cloudinary:', err);
          return res.status(500).json({ message: 'Не удалось сохранить изображение' });
        }
      }
      product.name = name != "null" ? name : product.name;
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


  async deleteDoctor(req, res) {
    try {
      const { id } = req.params;

      const service = await DoctorModel.findOne({ id: id });
      if (!service) {
        return res.status(404).json({ message: 'Service not found' });
      }
      console.log(service);

      await DoctorModel.findByIdAndDelete(service._id);
      await deleteFromCloudinary(service.image);

      res.status(200).json({ message: 'Service deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete service', error: error.message });
    }
  };

}

module.exports = new DoctorControllers()
