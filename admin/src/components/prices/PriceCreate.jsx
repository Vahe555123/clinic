import React from 'react';
import {
    Create, SimpleForm, TextInput, NumberInput,
    ArrayInput, SimpleFormIterator, BooleanInput, required
} from 'react-admin';

export const PriceCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" label="Название категории" validate={required()} fullWidth />
            <NumberInput source="order" label="Порядок сортировки" defaultValue={0} />
            <ArrayInput source="items" label="Услуги">
                <SimpleFormIterator>
                    <TextInput source="code" label="Код услуги" />
                    <TextInput source="name" label="Наименование" validate={required()} fullWidth />
                    <TextInput source="price" label="Цена" />
                    <BooleanInput source="isGroup" label="Подзаголовок" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Create>
);
