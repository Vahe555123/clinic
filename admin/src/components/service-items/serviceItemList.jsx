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

export const ServiceItemList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="_id" label="ID" />
      <TextField source="title" label="Название услуги" />
      <TextField source="serviceTitle" label="Сервис" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
