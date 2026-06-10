export default {
  name: 'reiki',
  title: 'Reiki',
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
      name: 'distancePrice',
      title: 'Distance Reiki Price',
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
        title: 'Reiki',
      };
    },
  },
}