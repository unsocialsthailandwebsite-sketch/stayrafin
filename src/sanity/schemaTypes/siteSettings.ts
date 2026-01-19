import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Site Title',
            type: 'string',
            initialValue: 'Stayra Luxury'
        }),
        defineField({
            name: 'contactEmail',
            title: 'Contact Email',
            type: 'string',
        }),
        defineField({
            name: 'contactPhone',
            title: 'Contact Phone (Display)',
            type: 'string',
        }),
        defineField({
            name: 'whatsappNumber',
            title: 'WhatsApp Number (Digits only)',
            type: 'string',
        }),
        // Homepage Hero Config
        defineField({
            name: 'heroHeading',
            title: 'Homepage Hero Heading',
            type: 'string',
            group: 'homepage'
        }),
        defineField({
            name: 'heroSubheading',
            title: 'Homepage Hero Subheading',
            type: 'string',
            group: 'homepage'
        })
    ],
    groups: [
        {
            name: 'homepage',
            title: 'Homepage Content',
        }
    ]
})
