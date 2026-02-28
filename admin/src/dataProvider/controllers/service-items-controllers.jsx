const API_URL = 'http://localhost:3000/api';

export class serviceItemControllers {
    async getList(resource, params) {
        // Получаем список service-items
        const response = await fetch(`${API_URL}/service-item/${resource}`);
        const serviceItems = await response.json();

        // Получаем список всех сервисов для связи
        const servicesResponse = await fetch(`http://localhost:3000/api/service/services`);
        const services = await servicesResponse.json();
        
        // Создаем карту (словарь) для быстрого доступа к названию сервиса
        const servicesMap = Object.fromEntries(services.data.map(service => [service._id, service.title]));
        
        // Дополняем каждый service-item названием сервиса
        const enrichedItems = serviceItems.data.map(item => {
            return ({
                ...item,
                serviceTitle: servicesMap[item.serviceId._id] || "Неизвестный сервис",
            })
        });
        console.log(enrichedItems);
        
        return {
            data: enrichedItems,
            total: serviceItems.total,
        };
    }
    async delete(resource, params) {
        const { id } = params;
        const response = await fetch(`${API_URL}/service-item/${resource}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            return { data: {} };
        }

        throw new Error('Ошибка при удалении');
    }

    async create(resource, params) {
        const { data } = params;
        console.log(data);
        const formData = new FormData();
        formData.append('descArray', JSON.stringify(data.descArray));
        formData.append('price', JSON.stringify(data.price));
        formData.append('serviceId', data.serviceId);
        formData.append('title', data.title);
        if (data.image) {
            formData.append('image', data.image.rawFile);
        }
        const response = await fetch(`http://localhost:3000/api/service-item/${resource}`, {
            method: 'POST',
            body: formData,
        });
        const res = await response.json();
        return res;
    }


    async update(resource, params) {
        const { data } = params;
        const formData = new FormData();
        console.log(data);

        // Основные поля
        formData.append('title', data.title);
        formData.append('descArray', JSON.stringify(data.descArray));
        formData.append('price', JSON.stringify(data.price));
        formData.append('serviceId', data.serviceId);

        // Изображение продукта
        if (data.image) {
            formData.append('image', data.image.rawFile);
        }
        try {
            const response = await fetch(`${API_URL}/service-item/${resource}/${params.id}`, {
                method: 'PUT',
                body: formData,
            });

            if (!response.ok) {
                const errorText = await response.text(); // Попробуем получить текст ошибки от сервера
                throw new Error(`Ошибка при обновлении: ${response.status} ${response.statusText} - ${errorText}`);
            }

            const data = await response.json();
            console.log('Данные после обновления:', data); // Для отладки
            return data;
        } catch (error) {
            console.error('Ошибка при обновлении ресурса:', error);
            throw new Error('Ошибка при обновлении ресурса. Проверьте сервер или данные.');
        }
    }

    async getOne(resource, params) {
        const response = await fetch(`${API_URL}/service-item/${resource}/${params.id}`);
        if (!response.ok) {
            throw new Error(`Ошибка получения записи: ${response.statusText}`);
        }
        const data = await response.json();
        // Убедитесь, что возвращаемый объект содержит поле `id`, совпадающее с `params.id`
        if (data.id !== params.id) {
            data.id = params.id; // Принудительное исправление (если это допустимо в вашем случае)
        }
        return { data };
    }
    async deleteMany(resource, params) {
        const { ids } = params;
    
        const promises = ids.map((id) => 
            fetch(`${API_URL}/service-item/${resource}/${id}`, {
                method: 'DELETE',
            })
        );
    
        const responses = await Promise.all(promises);
    
        if (responses.every((response) => response.ok)) {
            return { data: ids };
        }
    
        throw new Error('Ошибка при удалении нескольких элементов');
    }
}
