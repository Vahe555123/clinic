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

export const DoctorList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="name" label="ФИО" />
      <TextField source="description" label="Описание" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
