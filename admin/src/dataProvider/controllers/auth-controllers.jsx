const API_URL = 'http://localhost:3000/api';


export class AuthControllers {
    async getList(resource, params) {
        
        const response = await fetch(`${API_URL}/auth/${resource}`);
        const data = await response.json();
        console.log(data);
        
        return {
            data: data.data,
            total: data.total,
        };
    }
    async getOne(resource, params) {
        const response = await fetch(`${API_URL}/auth/auth-one/${params.id}`);
        if (!response.ok) {
            throw new Error(`Ошибка получения записи: ${response.statusText}`);
        }
        const data = await response.json();
        if (data.id !== params.id) {
            data.id = params.id; 
        }
        return { data };
    }
    async update(resource, params) {
        const { data } = params;
        console.log(data);

        try {
            const response = await fetch(`${API_URL}/auth/${resource}/${params.id}`, {
                method: 'PUT',
                headers:{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorText = await response.text(); // Попробуем получить текст ошибки от сервера
                throw new Error(`Ошибка при обновлении: ${response.status} ${response.statusText} - ${errorText}`);
            }

            const data2 = await response.json();
            console.log('Данные после обновления:', data2); // Для отладки
            return data2;
        } catch (error) {
            console.error('Ошибка при обновлении ресурса:', error);
            throw new Error('Ошибка при обновлении ресурса. Проверьте сервер или данные.');
        }
    }



    async delete(resource, params) {
        
        const { id } = params;
        const response = await fetch(`${API_URL}/auth/${resource}/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            return { data: {} };
        }

        throw new Error('Ошибка при удалении');
    }
    async deleteMany(resource, params) {
        const { ids } = params;
    
        const promises = ids.map((id) => 
            fetch(`${API_URL}/auth/${resource}/${id}`, {
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