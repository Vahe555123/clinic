import React from 'react';
import {
    Edit, SimpleForm, TextInput, NumberInput,
    ArrayInput, SimpleFormIterator, BooleanInput, required
} from 'react-admin';

export const PriceEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="title" label="Название категории" validate={required()} fullWidth />
            <NumberInput source="order" label="Порядок сортировки" />
            <ArrayInput source="items" label="Услуги">
                <SimpleFormIterator>
                    <TextInput source="code" label="Код услуги" />
                    <TextInput source="name" label="Наименование" validate={required()} fullWidth />
                    <TextInput source="price" label="Цена" />
                    <BooleanInput source="isGroup" label="Подзаголовок" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);
