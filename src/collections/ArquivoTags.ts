import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'
import { authenticated } from '../access/authenticated'
import { anyone } from '../access/anyone'

export const ArquivoTags: CollectionConfig = {
  slug: 'arquivo-tags',
  labels: { singular: 'Tag de Arquivo', plural: 'Tags de Arquivo' },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    group: 'Arquivo',
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
