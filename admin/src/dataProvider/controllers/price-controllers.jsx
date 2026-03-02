import { API_URL } from '../../config';

export class PriceControllers {
    async getList(resource, params) {
        const response = await fetch(`${API_URL}/price-category/price-categories`);
        const data = await response.json();
        return {
            data: data.data.map(d => ({ ...d, id: d._id })),
            total: data.data.length,
        };
    }

    async getOne(resource, params) {
        const response = await fetch(`${API_URL}/price-category/price-categories/${params.id}`);
        if (!response.ok) throw new Error('Ошибка получения записи');
        const data = await response.json();
        if (data.id !== params.id) data.id = params.id;
        return { data };
    }

    async create(resource, params) {
        const { data } = params;
        const response = await fetch(`${API_URL}/price-category/price-categories`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: data.title,
                order: data.order || 0,
                items: data.items || [],
            }),
        });
        if (!response.ok) throw new Error('Ошибка при создании');
        return await response.json();
    }

    async update(resource, params) {
        const { data } = params;
        const response = await fetch(`${API_URL}/price-category/price-categories/${params.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: data.title,
                order: data.order,
                items: data.items || [],
            }),
        });
        if (!response.ok) throw new Error('Ошибка при обновлении');
        return await response.json();
    }

    async delete(resource, params) {
        const { id } = params;
        const response = await fetch(`${API_URL}/price-category/price-categories/${id}`, {
            method: 'DELETE',
        });
        if (response.ok) return { data: {} };
        throw new Error('Ошибка при удалении');
    }

    async deleteMany(resource, params) {
        const { ids } = params;
        const promises = ids.map((id) =>
            fetch(`${API_URL}/price-category/price-categories/${id}`, { method: 'DELETE' })
        );
        const responses = await Promise.all(promises);
        if (responses.every((r) => r.ok)) return { data: ids };
        throw new Error('Ошибка при удалении');
    }
}
