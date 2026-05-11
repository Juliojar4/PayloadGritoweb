import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'
import { authenticated } from '../access/authenticated'
import { anyone } from '../access/anyone'

export const PortfolioTags: CollectionConfig = {
  slug: 'portfolio-tags',
  labels: { singular: 'Tag de Portfólio', plural: 'Tags de Portfólio' },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    group: 'Portfólio',
    defaultColumns: ['title', 'slug'],
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: 'Título',
      type: 'text',
      required: true,
    },
    slugField(),
  ],
}
