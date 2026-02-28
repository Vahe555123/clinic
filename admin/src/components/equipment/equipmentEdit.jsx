import React from 'react';
import { Edit, SimpleForm, TextInput, ImageField, FileInput, FileField } from 'react-admin';
export const EquipmentEdit = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput source="title" label="Название" />
                <ImageField
                    source="image"
                    label="Изображение"
                    title="image"
                />
                <FileInput source="image" label="Изображение" accept="image/*">
                    <FileField source="src" title="title" />
                </FileInput>
                <TextInput source="description" label="Описание" />
            </SimpleForm>
        </Edit>
    );
};
