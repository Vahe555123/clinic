import React from 'react';
import {
    Edit,
    SimpleForm,
    TextInput,
    SelectInput,
    FileInput,
    FileField,
    ArrayInput,
    SimpleFormIterator,
    useGetList,
    required,
    ImageField,
} from 'react-admin';

export const ServiceItemEdit = (props) => {
    // Получаем список всех сервисов
    const { data: services, isLoading } = useGetList('services', {
        pagination: { page: 1, perPage: 100 },
        sort: { field: 'title', order: 'ASC' },
        filter: {},
    });

    if (isLoading) {
        return <div>Загрузка...</div>;
    }

    return (
        <Edit {...props}>
            <SimpleForm>
                {/* Выпадающий список для выбора сервиса */}
                <SelectInput
                    source="serviceId"
                    label="Сервис"
                    choices={services.map((service) => ({
                        id: service?._id,
                        name: service.title,
                    }))}
                    validate={required()}
                />

                {/* Поле для названия */}
                <TextInput source="title" label="Название сервиса" validate={required()} />
                <ImageField
                source="image"
                label="Изображение"
                title="image"
            />
                {/* Загрузка изображения */}
                <FileInput source="image" label="Изображение сервиса" accept="image/*">
                    <FileField source="src" title="title" />
                </FileInput>

                {/* Описание услуг */}
                <ArrayInput source="descArray" label="Описание услуг">
                    <SimpleFormIterator>
                        <TextInput source="key" label="Название" validate={required()} />
                        <ArrayInput source="value" label="Текст">
                            <SimpleFormIterator>
                                <TextInput source="" label="Текст" />
                            </SimpleFormIterator>
                        </ArrayInput>
                    </SimpleFormIterator>
                </ArrayInput>

                {/* Цены */}
                <ArrayInput source="price" label="Цены">
                    <SimpleFormIterator>
                        <TextInput source="title" label="Название" validate={required()} />
                        <ArrayInput source="value" label="Значения (массив строк)">
                            <SimpleFormIterator>
                                <TextInput source="priceServiceTitle" label="Услуга" validate={required()} />
                                <TextInput source="codePrice" label="КОД" validate={required()} />
                                <TextInput source="priceService" label="Цена" type="number" validate={required()} />
                            </SimpleFormIterator>
                        </ArrayInput>
                    </SimpleFormIterator>
                </ArrayInput>
            </SimpleForm>
        </Edit>
    );
};
