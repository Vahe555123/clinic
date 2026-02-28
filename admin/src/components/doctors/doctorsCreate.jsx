import React from 'react';
import { Create, FileField, FileInput, SimpleForm, TextInput , required} from 'react-admin';

export const DoctorCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" label="ФИО" validate={required()}/>
      <FileInput source="image" label="Изображение" accept="image/*" validate={required()}>
        <FileField source="src" title="title" validate={required()}/>
      </FileInput>
      <TextInput source="description" label="Описание" multiline validate={required()}/>
    </SimpleForm>
  </Create>
);
