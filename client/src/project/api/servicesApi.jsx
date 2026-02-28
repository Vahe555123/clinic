import axiosInstance from './axiosInstance';

const productApi = {
    getAllProducts: () => axiosInstance.get('/service/services'),
    getProductById: (id) => axiosInstance.get(`/service/services/${id}`),
  
  
    getProductsItem: () => axiosInstance.get('/service-item/service-items'),
    getProductsItemOne: (id) => axiosInstance.get('/service-item/service-items/' + id),
  
    
    createAuth: (data) => axiosInstance.post('/auth/auth', data),

    getEquipments: () => axiosInstance.get('/equipment/equipment'),
    getEquipmentsById: (id) => axiosInstance.get(`/equipment/equipment/${id}`),

    getDoctors: () => axiosInstance.get('/doctor/doctor'),
    getDoctorById: (id) => axiosInstance.get(`/doctor/doctor/${id}`),


    searchRequest: (info) => axiosInstance.get(`/search?info=${info}`),


    sendMessage: (info) => axiosInstance.post(`/email/send` , info),



};

export default productApi;
    