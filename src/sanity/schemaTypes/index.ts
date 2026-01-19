import { type SchemaTypeDefinition } from 'sanity'
import property from './property'
import inquiry from './inquiry'
import testimonial from './testimonial'
import siteSettings from './siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [property, inquiry, testimonial, siteSettings],
}
