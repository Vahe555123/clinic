import React from 'react';
import { List, Datagrid, TextField, NumberField } from 'react-admin';

export const PriceList = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="title" label="Категория" />
            <NumberField source="order" label="Порядок" />
            <NumberField source="items.length" label="Кол-во услуг" sortable={false} />
        </Datagrid>
    </List>
);
