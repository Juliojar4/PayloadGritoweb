import type { Block } from 'payload'

export const HomeHero: Block = {
    slug: 'homeHero',
    interfaceName: 'HomeHero',
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