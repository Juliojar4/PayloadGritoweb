import type { Block } from 'payload'

export const Hero: Block = {
    slug: 'homeHero',
    interfaceName: 'Hero',
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'hero-image',
            type: 'upload',
            relationTo: 'media',
            required: true,
        }

    ]
}