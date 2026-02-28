import restProvider from 'ra-data-simple-rest';
import { ServiceControllers } from "./controllers/service-controllers"
import { serviceItemControllers } from "./controllers/service-items-controllers"
import { AuthControllers } from './controllers/auth-controllers';
import { EquipmentControllers } from './controllers/equipment-controllers';
import { DoctorControllers } from './controllers/doctor-controllers';
const API_URL = window.location.href.includes("faustova") ? "http://localhost:3000/api" : "http://localhost:3000/api"

const serviceFun = new ServiceControllers();
const serviceItemFun = new serviceItemControllers();
const authFun = new AuthControllers()
const equipmentFun = new EquipmentControllers()
const doctorFun = new DoctorControllers()

const dataProvider = {
  ...restProvider(API_URL),

  getList: async (resource, params) => {
    if (resource === "services") {
      return serviceFun.getList(resource, params);
    } else if (resource === "service-items") {
      return serviceItemFun.getList(resource, params);
    }else if(resource == "auth"){
      return authFun.getList(resource , params)
    }else if (resource == "equipment") {
      return equipmentFun.getList(resource, params)
    }else if(resource == "doctor"){
      return doctorFun.getList(resource, params)
    }
    return restProvider(API_URL).getList(resource, params); // Для остальных ресурсов
  },


  delete: async (resource, params) => {
    if (resource == "services") {
      return serviceFun.delete(resource, params)

    } else if (resource == "service-items") {
      return serviceItemFun.delete(resource, params)
    }else if (resource == "auth") {
      return authFun.delete(resource, params)
    }else if (resource == "equipment") {
      return equipmentFun.delete(resource, params)
    }else if(resource == "doctor"){
      return doctorFun.delete(resource, params)
    }
  },

  create: async (resource, params) => {
    if (resource == "services") {
      return serviceFun.create(resource, params)

    } else if (resource == "service-items") {
      return serviceItemFun.create(resource, params)
    }else if (resource == "equipment") {
      return equipmentFun.create(resource, params)
    }else if(resource == "doctor"){
      return doctorFun.create(resource, params)
    }
  },

  update: async (resource, params) => {
    if (resource == "services") {
      return serviceFun.update(resource, params)

    } else if (resource == "service-items") {
      return serviceItemFun.update(resource, params)
    }else if (resource == "auth") {
      return authFun.update(resource, params)
    }else if (resource == "equipment") {
      return equipmentFun.update(resource, params)
    }else if(resource == "doctor"){
      return doctorFun.update(resource, params)
    }

  },

  getOne: async (resource, params) => {
    if (resource == "services") {
      return serviceFun.getOne(resource, params)

    } else if (resource == "service-items") {
      return serviceItemFun.getOne(resource, params)
    }else if(resource == "auth"){
      return authFun.getOne(resource, params)
    }else if (resource == "equipment") {
      return equipmentFun.getOne(resource, params)
    }else if(resource == "doctor"){
      return doctorFun.getOne(resource, params)
    }

  },
  deleteMany: async (resource, params) => {
    if (resource == "services") {
      return serviceFun.deleteMany(resource, params)

    } else if (resource == "service-items") {
      return serviceItemFun.deleteMany(resource, params)
    }else if(resource == "auth"){
      return authFun.deleteMany(resource, params)
    }else if (resource == "equipment") {
      return equipmentFun.deleteMany(resource, params)
    }else if(resource == "doctor"){
      return doctorFun.deleteMany(resource, params)
    }

  }

}

export default dataProvider;

