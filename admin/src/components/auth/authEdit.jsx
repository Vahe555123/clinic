import React from 'react';
import { Edit, SimpleForm, TextInput, ImageField, FileInput, FileField } from 'react-admin';
export const AuthEdit = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput source="number" label="Номер телефона" />
                <TextInput source="name" label="Имя Фамилия" />
                <TextInput source="date" label="Дата регистрации" />
                <TextInput source="desc" label="Описание" />
                <TextInput source="email" label="Эл.  почта" />
            </SimpleForm>
        </Edit>
    );
};
