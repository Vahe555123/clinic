import React from 'react';
import { Create, FileField, FileInput, SimpleForm, TextInput } from 'react-admin';

export const EquipmentCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="title" label="Название" />
      <FileInput source="image" label="Изображение" accept="image/*">
        <FileField source="src" title="title" />
      </FileInput>
      <TextInput source="description" label="Описание" multiline />
    </SimpleForm>
  </Create>
);
