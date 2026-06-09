export default {
  name: 'servicePricing',
  title: 'Service Pricing',
  type: 'document',
  fields: [
    {
      name: 'reiki',
      title: 'Reiki',
      type: 'object',
      fields: [
        { name: 'price', title: 'Price', type: 'number', validation: (Rule: any) => Rule.required() },
        { name: 'distance_price', title: 'Distance Reiki Price', type: 'number', validation: (Rule: any) => Rule.required() },
        { name: 'duration', title: 'Duration', type: 'number', validation: (Rule: any) => Rule.required() },
      ],
    },
    {
      name: 'footzoning',
      title: 'Foot Zone',
      type: 'object',
      fields: [
        { name: 'price', title: 'Price', type: 'number', validation: (Rule: any) => Rule.required() },
        { name: 'inhome_price', title: 'In-Home Price', type: 'number', validation: (Rule: any) => Rule.required() },
        { name: 'duration', title: 'Duration', type: 'string', validation: (Rule: any) => Rule.required() },
      ],
    },
    {
      name: 'sauna',
      title: 'Steam Sauna',
      type: 'object',
      fields: [
        { name: 'price', title: 'Price', type: 'number', validation: (Rule: any) => Rule.required() },
        { name: 'combo_price', title: 'Combo Price', type: 'number', validation: (Rule: any) => Rule.required() },
        { name: 'duration', title: 'Duration', type: 'number', validation: (Rule: any) => Rule.required() },
        { name: 'combo_duration', title: 'Combo Duration', type: 'string', validation: (Rule: any) => Rule.required() },
      ],
    },
  ],
}