const API_URL = 'http://localhost:3000/api';


export class ServiceControllers {
    async getList(resource, params) {
        
        const response = await fetch(`${API_URL}/service/${resource}`);
        const data = await response.json();
        return {
            data: data.data,
            total: data.total,
        };
    }

    async delete(resource, params) {
        const { id } = params;
        const response = await fetch(`${API_URL}/service/${resource}/${id}`, {
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

        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('link', data.link);

        formData.append('image', data.image.rawFile);

        const response = await fetch(`${API_URL}/service/${resource}`, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Ошибка при создании ресурса');
        }

        return await response.json();

    }

    async update(resource, params) {
        const { data } = params;
        const formData = new FormData();
        console.log(data);

        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('link', data.link);

        if (data.image) {
            formData.append('image', data.image.rawFile);
        }
        try {
            const response = await fetch(`${API_URL}/service/${resource}/${params.id}`, {
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
        const response = await fetch(`${API_URL}/service/${resource}/${params.id}`);
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
            fetch(`${API_URL}/service/${resource}/${id}`, {
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