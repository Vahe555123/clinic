import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  ImageField,
  EditButton,
  DeleteButton,
  SelectField,
} from 'react-admin';

export const AuthList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="number" label="Номер телефона" />
      <TextField source="name" label="Имя Фамилия" />
      <TextField source="date" label="Дата регистрации" />
      <TextField source="desc" label="Описание" />
      <TextField source="email" label="Эл.  почта" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
