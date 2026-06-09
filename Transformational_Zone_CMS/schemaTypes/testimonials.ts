export default {
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    { name: 'quote', title: 'Quote', type: 'text', validation: (Rule: any) => Rule.required().min(50).max(500),},
    { name: 'name', title: 'Name', type: 'string', validation: (Rule: any) => Rule.required(),},
    { name: 'location', title: 'Location', type: 'string', validation: (Rule: any) => Rule.required(),},
  ],
}