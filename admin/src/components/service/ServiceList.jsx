import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, ImageField , useGetList } from 'react-admin';
export const ServiceList = (props) => {
  return (
    <List {...props} perPage={10}>
      <Datagrid rowClick="edit" >
        <TextField source="id" label="ID" />
        <TextField source="title" label="Название" />
        <TextField source="description" label="Описание" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};
