import React from 'react';
import { Admin, Resource, List } from 'react-admin';
import dataProvider from './dataProvider/dataProvider';
import { ServiceList } from './components/service/ServiceList';
import { ServiceCreate } from './components/service/ServiceCreate';
import { ServiceEdit } from './components/service/ServiceEdit';
import { ServiceItemCreate } from './components/service-items/serviceItemCreate';
import { ServiceItemList } from './components/service-items/serviceItemList';
import { ServiceItemEdit } from './components/service-items/serviceItemEdit';
import { AuthList } from './components/auth/authList';
import { AuthEdit } from './components/auth/authEdit';
import { EquipmentList } from './components/equipment/equipmentList';
import { EquipmentEdit } from './components/equipment/equipmentEdit';
import { EquipmentCreate } from './components/equipment/equipmentCreate';
import { DoctorList } from './components/doctors/doctorsList';
import { DoctorEdit } from './components/doctors/doctorsEdit';
import { DoctorCreate } from './components/doctors/doctorsCreate';
import authProvider from './authProvider/authProvider';

// Пустой компонент для списка

const App = () => (
    <Admin authProvider={authProvider} dataProvider={dataProvider}>
        <Resource
            name="services"
            list={ServiceList}
            create={ServiceCreate}
            edit={ServiceEdit}
        />
        <Resource name="service-items"
            list={ServiceItemList}
            create={ServiceItemCreate}
            edit={ServiceItemEdit} />
        <Resource name="auth"
            list={AuthList}
            edit={AuthEdit} />
        <Resource name="equipment"
            list={EquipmentList}
            edit={EquipmentEdit}
            create={EquipmentCreate}
             />
             <Resource name="doctor"
            list={DoctorList}
            edit={DoctorEdit}
            create={DoctorCreate}
             />

    </Admin>
);

export default App;
