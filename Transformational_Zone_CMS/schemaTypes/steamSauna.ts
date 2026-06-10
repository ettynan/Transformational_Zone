export default {
  name: 'steamSauna',
  title: 'Steam Sauna',
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
      name: 'comboPrice',
      title: 'Combo Price',
      type: 'string',
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
    },
    {
      name: 'comboDuration',
      title: 'Combo Duration',
      type: 'string',
    },
  ],

  preview: {
    prepare() {
      return {
        title: 'Steam Sauna',
      };
    },
  },
}