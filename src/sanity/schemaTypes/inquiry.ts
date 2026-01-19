import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'inquiry',
    title: 'Inquiry',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
        }),
        defineField({
            name: 'phone',
            title: 'Phone',
            type: 'string',
        }),
        defineField({
            name: 'property',
            title: 'Interested Property',
            type: 'string',
        }),
        defineField({
            name: 'message',
            title: 'Message',
            type: 'text',
        }),
        defineField({
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    { title: 'New', value: 'new' },
                    { title: 'Contacted', value: 'contacted' },
                    { title: 'Closed', value: 'closed' }
                ],
            },
            initialValue: 'new'
        }),
        defineField({
            name: 'createdAt',
            title: 'Created At',
            type: 'datetime',
            initialValue: () => new Date().toISOString()
        })
    ],
})
