import {
  Create,
  SimpleForm,
  TextInput,
  SelectInput,
  FileInput,
  FileField,
  ArrayInput,
  SimpleFormIterator,
  useGetList,
  required
} from 'react-admin';

export const ServiceItemCreate = (props) => {
  // Получаем список всех сервисов
  const { data: services, isLoading } = useGetList('services', {
    pagination: { page: 1, perPage: 100 },
    sort: { field: 'title', order: 'ASC' },
    filter: {},
  });

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="serviceId"
          label="Сервис"
          choices={services.map((service) => ({
            id: service._id,
            name: service.title,
          }))}
          defaultValue={services.length > 0 ? services[0]._id : ''}
        />


        {/* Сервисы */}
        <TextInput source="title" label="Название сервиса" validate={required()} />
        <FileInput source="image" label="Изображение сервиса" accept="image/*" validate={required()}>
          <FileField source="src" title="title" />
        </FileInput>

        {/* Описание услуг */}
        <ArrayInput source="descArray" label="Описание услуг" validate={required()}>
          <SimpleFormIterator>
            <TextInput source="key" label="Название" validate={required()} />
            <ArrayInput source="value" label="Текст" validate={required()}>
              <SimpleFormIterator>
                <TextInput source="" label="Текст" validate={required()} />
              </SimpleFormIterator>
            </ArrayInput>
          </SimpleFormIterator>
        </ArrayInput>
        <ArrayInput source="price" label="Цены" validate={required()}>
          <SimpleFormIterator>
            <TextInput source="title" label="Название" validate={required()} />
            <ArrayInput source="value" label="Значения (массив строк)" validate={required()}>
              <SimpleFormIterator>
                <TextInput source="priceServiceTitle" label="Услуга" validate={required()} />
                <TextInput source="codePrice" label="КОД" validate={required()} />
                <TextInput source="priceService" label="Цена" type="number" validate={required()} />
              </SimpleFormIterator>
            </ArrayInput>
          </SimpleFormIterator>
        </ArrayInput>


      </SimpleForm>
    </Create>
  );
};
