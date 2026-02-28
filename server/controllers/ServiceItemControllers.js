const { ServiceItem } = require('../models/ServiceItem');
const { uploadToCloudinary, deleteFromCloudinary } = require('../config/cloudinary');



class ServiceItemControllers {
  async getServiceItems(req, res) {
    try {
      
      const serviceItems = await ServiceItem.find().populate('serviceId', 'title');
      res.json({ data: serviceItems });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  async getServicItemsById(req, res) {
    try {
      const { id } = req.params;
      let product;
      if (id) {
        if (id.length < 15) {
          product = await ServiceItem.findOne({ id: id });
        } else {
          product = await ServiceItem.findById(id);
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

  async getServicItemsByIdOne(req, res) {
    try {
      console.log(1);
      
      const { id } = req.params;
      let product;
      if (id) {
        if (id.length < 15) {
          product = await ServiceItem.findOne({ id: id });
        } else {
          product = await ServiceItem.findById(id);
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

  async postServiceItems(req, res) {
    const mainImage = req.files?.image || null;

    let imageUrl = null;
    if (mainImage) {
      try {
        const result = await uploadToCloudinary(mainImage.data, 'clinic/service-items');
        imageUrl = result.secure_url;
      } catch (err) {
        console.error('Ошибка при загрузке изображения в Cloudinary:', err);
        return res.status(500).json({ message: 'Не удалось сохранить изображение' });
      }
    }

    try {
      const { descArray, price, title, serviceId } = req.body;
      console.log(serviceId);
      const newServiceItem = new ServiceItem({
        descArray: JSON.parse(descArray),
        price: JSON.parse(price),
        title,
        serviceId,
        image: imageUrl,
      });
      newServiceItem.id = String(newServiceItem._id)
      await newServiceItem.save();
      res.status(201).json({ data: newServiceItem });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ error: err.message });
    }
  }

  async putServiceItems(req, res) {
    try {
      const { id } = req.params;
      let { title, descArray, price, serviceId } = req.body;


      const product = await ServiceItem.findOne({ id: id });

      if (!product) {
        return res.status(404).json({ message: 'Продукт не найден' });
      }

      const mainImage = req.files?.image || null;

      if (mainImage) {
        await deleteFromCloudinary(product.image);
        try {
          const result = await uploadToCloudinary(mainImage.data, 'clinic/service-items');
          product.image = result.secure_url;
        } catch (err) {
          console.error('Ошибка при загрузке изображения в Cloudinary:', err);
          return res.status(500).json({ message: 'Не удалось сохранить изображение' });
        }
      }
      product.title = title != "null" ? title : product.title;
      product.descArray = JSON.parse(descArray);
      product.price = JSON.parse(price);
      product.serviceId = serviceId || product.serviceId


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


  async deleteServiceItems(req, res) {
    try {
      const { id } = req.params;

      const service = await ServiceItem.findOne({ id: id });
      if (!service) {
        return res.status(404).json({ message: 'Service not found' });
      }
      console.log(service);

      await ServiceItem.findByIdAndDelete(service._id);
      await deleteFromCloudinary(service.image);

      res.status(200).json({ message: 'Service deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete service', error: error.message });
    }
  };

}

module.exports = new ServiceItemControllers()
