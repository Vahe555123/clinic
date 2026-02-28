const Service = require('../models/Service');
const ServiceItem = require('../models/ServiceItem');
const { uploadToCloudinary, deleteFromCloudinary } = require('../config/cloudinary');



class ServicesControllers {
    async getServices(req, res) {
        try {
            const services = await Service.find();
            res.status(200).json({ data: services });
        } catch (error) {
            res.status(500).json({ message: 'Failed to fetch services.', error: error.message });
        }
    };



    async getServiceById(req, res) {
        try {
            const { id } = req.params;
            let product;
            if (id) {
                if (id.length < 15) {
                    product = await Service.findOne({ id: id });
                } else {
                    product = await Service.findById(id);
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




    async addService(req, res) {
        console.log(1);

        try {
            const { title, description, link } = req.body;
            const mainImage = req.files?.image || null;

            let imageUrl = null;
            if (mainImage) {
                try {
                    const result = await uploadToCloudinary(mainImage.data, 'clinic/services');
                    imageUrl = result.secure_url;
                } catch (err) {
                    console.error('Ошибка при загрузке изображения в Cloudinary:', err);
                    return res.status(500).json({ message: 'Не удалось сохранить изображение' });
                }
            }

            if (!title || !description) {
                return res.status(400).json({ message: 'Title and description are required.' });
            }

            const newService = new Service({
                title,
                description,
                image: imageUrl,
                link,
            });
            newService.id = String(newService._id)
            await newService.save();

            res.status(201).json({
                data: newService,
            });
        } catch (error) {
            res.status(500).json({ message: 'Failed to add service.', error: error.message });
        }
    }



    async deleteServiceById(req, res) {
        try {
            const { id } = req.params;

            const service = await Service.findOne({ id: id });
            if (!service) {
                return res.status(404).json({ message: 'Service not found' });
            }
            console.log(service);

            await Service.findByIdAndDelete(service._id);
            await deleteFromCloudinary(service.image);

            res.status(200).json({ message: 'Service deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Failed to delete service', error: error.message });
        }
    };
    async updateServices(req, res) {
        try {
            const { id } = req.params;
            const { title, description, link } = req.body;


            const product = await Service.findOne({ id: id });
            if (!product) {
                return res.status(404).json({ message: 'Продукт не найден' });
            }

            const mainImage = req.files?.image || null;
            console.log(req.body);

            if (mainImage) {
                await deleteFromCloudinary(product.image);
                try {
                    const result = await uploadToCloudinary(mainImage.data, 'clinic/services');
                    product.image = result.secure_url;
                } catch (err) {
                    console.error('Ошибка при загрузке изображения в Cloudinary:', err);
                }
            }

            product.title = title != "null" ? title : product.title;
            product.description = description != "null" ? description : product.description;
            product.link = link != "null" ? link : product.link;




            await product.save();
            product.id = product._id.toString()

            res.status(200).json({
                data: product
            });
        } catch (error) {
            res.status(500).json({ message: 'Ошибка при обновлении продукта' });
        }
    }

}

module.exports = new ServicesControllers()
