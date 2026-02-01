import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'property',
    title: 'Property',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
        }),
        defineField({
            name: 'type',
            title: 'Property Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Heritage Luxury', value: 'heritage' },
                    { title: 'Modern Farmhouse', value: 'modern' },
                    { title: 'Villa', value: 'villa' }
                ]
            }
        }),
        defineField({
            name: 'price',
            title: 'Price per Night',
            type: 'string',
        }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'gallery',
            title: 'Gallery',
            type: 'array',
            of: [{ type: 'image' }],
        }),
        defineField({
            name: 'gallerySections',
            title: 'Gallery Sections',
            type: 'array',
            of: [{
                type: 'object',
                title: 'Section',
                fields: [
                    { name: 'title', type: 'string', title: 'Section Title' },
                    { name: 'images', type: 'array', of: [{ type: 'image' }], title: 'Images' }
                ]
            }]
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 5
        }),
        defineField({
            name: 'features',
            title: 'Features / Amenities',
            type: 'array',
            of: [{ type: 'string' }]
        }),
        defineField({
            name: 'specs',
            title: 'Specs (e.g. 4 Bedrooms | Sleeps 8)',
            type: 'string',
        })
    ],
})
