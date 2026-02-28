const DoctorModel = require("../models/doctor")
const EquipmentModel = require("../models/equipment")
const serviceSchema = require("../models/Service")
const { ServiceItem } = require("../models/ServiceItem")

class SearchController {
    async search(req, res) {
        try {
            const { info } = req.query;
            if (!info) {
                return res.status(400).json({ error: "Search query (info) is required" });
            }
    
            const queries = [
                { model: DoctorModel, field: "name", type: "doctor" },
                { model: EquipmentModel, field: "title", type: "equipment" },
                { model: serviceSchema, field: "title", type: "service" },
                { model: ServiceItem, field: "title", type: "serviceItem" },
            ];
    
            const searchResults = await Promise.all(
                queries.map(async ({ model, field, type }) => {
                    const data = await model.find();
                    const filteredData = data.filter(item =>
                        item[field]?.toLowerCase().includes(info.toLowerCase())
                    );
                    return { data: filteredData, type };
                })
            );
    
            res.status(200).json(searchResults);
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ error: "Internal server error" });
        }
    }
    
}

module.exports = new SearchController()