export default {
  name: 'footZone',
  title: 'Foot Zone',
  type: 'document',

  fields: [
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
    },
    {
      name: 'inHomePrice',
      title: 'In-Home Price',
      type: 'string',
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
    },
  ],

  preview: {
    prepare() {
      return {
        title: 'Foot Zone',
      };
    },
  },
}