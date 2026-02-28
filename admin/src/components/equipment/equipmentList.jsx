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

export const EquipmentList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="title" label="Название" />
      <TextField source="description" label="Описание" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
