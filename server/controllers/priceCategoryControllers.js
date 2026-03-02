const PriceCategory = require('../models/priceCategory');

class PriceCategoryControllers {
  async getAll(req, res) {
    try {
      const categories = await PriceCategory.find().sort({ order: 1 });
      res.json({ data: categories });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      let item;
      if (id.length < 15) {
        item = await PriceCategory.findOne({ id });
      } else {
        item = await PriceCategory.findById(id);
      }
      if (!item) return res.status(404).json({ message: 'Не найдено' });

      const formatted = { ...item.toObject(), id: item._id.toString() };
      res.json(formatted);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async create(req, res) {
    try {
      const { title, order, items } = req.body;
      const parsedItems = typeof items === 'string' ? JSON.parse(items) : items;
      const cat = new PriceCategory({ title, order: order || 0, items: parsedItems || [] });
      cat.id = String(cat._id);
      await cat.save();
      res.status(201).json({ data: cat });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { title, order, items } = req.body;
      const cat = await PriceCategory.findOne({ id });
      if (!cat) return res.status(404).json({ message: 'Не найдено' });

      if (title && title !== 'null') cat.title = title;
      if (order !== undefined) cat.order = order;
      if (items) {
        cat.items = typeof items === 'string' ? JSON.parse(items) : items;
      }

      await cat.save();
      cat.id = cat._id.toString();
      res.json({ data: cat });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const cat = await PriceCategory.findOne({ id });
      if (!cat) return res.status(404).json({ message: 'Не найдено' });
      await PriceCategory.findByIdAndDelete(cat._id);
      res.json({ message: 'Deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new PriceCategoryControllers();
