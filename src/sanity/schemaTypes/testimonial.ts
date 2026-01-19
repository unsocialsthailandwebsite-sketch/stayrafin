import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Guest Name',
            type: 'string',
        }),
        defineField({
            name: 'location',
            title: 'Location (e.g. New Delhi)',
            type: 'string',
        }),
        defineField({
            name: 'rating',
            title: 'Rating (1-5)',
            type: 'number',
            validation: Rule => Rule.min(1).max(5)
        }),
        defineField({
            name: 'text',
            title: 'Review Text',
            type: 'text',
        }),
        defineField({
            name: 'isFeatured',
            title: 'Featured?',
            type: 'boolean',
            initialValue: false
        })
    ],
})
