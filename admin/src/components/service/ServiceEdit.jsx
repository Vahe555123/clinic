import React from 'react';
import { Edit, SimpleForm, TextInput, ImageField, FileInput, FileField } from 'react-admin';
import { useGetList } from 'react-admin';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
export const ServiceEdit = (props) => {
  const loc = useLocation()
  
  const  id = loc.pathname.split("/")[2]; // Получаем id сервиса из пропсов
    
  // Получаем список всех услуг, которые относятся к текущему сервису
  const { data: serviceItems, isLoading, error } = useGetList('service-items', {
    filter: { serviceId: id },  // Фильтруем по ID текущего сервиса
    pagination: { page: 1, perPage: 100 },
    sort: { field: 'title', order: 'ASC' },
  });

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка при загрузке услуг.</div>;
  }

  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="title" label="Название" />
        <TextInput source="description" label="Описание" multiline />
        <TextInput source="link" label="Ссылка" />

        {/* Изображение */}
        <ImageField
          source="image"
          label="Изображение"
          title="image"
        />
        <FileInput source="image" label="Изображение" accept="image/*">
          <FileField source="src" title="title" />
        </FileInput>

        {/* Отображаем список услуг, связанных с этим сервисом */}
        <div>
          <h3>Связанные услуги:</h3>
          {serviceItems && serviceItems.length > 0 ? (
            <ul>
              {serviceItems.map(serviceItem => {
                  console.log(serviceItem);
                  
                if (serviceItem.serviceId?._id == id) {
                  return (
                    <li key={serviceItem._id}>
                      <Link to={`/service-items/${serviceItem?._id}`}>
                        {serviceItem.title}
                      </Link>
                    </li>
                  )
                }



              })}
            </ul>
          ) : (
            <p>Услуг нет для этого сервиса.</p>
          )}
        </div>
      </SimpleForm>
    </Edit>
  );
};
