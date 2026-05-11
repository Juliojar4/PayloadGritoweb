import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'
import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'

export const Portfolios: CollectionConfig<'portfolios'> = {
  slug: 'portfolios',
  labels: { singular: 'Portfólio', plural: 'Portfólios' },
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  defaultPopulate: {
    title: true,
    slug: true,
    client: true,
    image: true,
    categories: true,
    tag: true,
    tagVariant: true,
    accent: true,
    year: true,
    result: true,
    summary: true,
  },
  admin: {
    group: 'Portfólio',
    defaultColumns: ['title', 'client', 'year', 'updatedAt'],
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: 'Título do projeto',
      type: 'text',
      required: true,
    },
    {
      name: 'client',
      label: 'Nome da empresa / cliente',
      type: 'text',
      required: true,
    },
    {
      name: 'summary',
      label: 'Resumo',
      type: 'textarea',
    },
    {
      name: 'image',
      label: 'Imagem de capa',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'categories',
      label: 'Categorias',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'tag',
      label: 'Tag do card',
      type: 'relationship',
      relationTo: 'portfolio-tags',
      admin: { position: 'sidebar' },
    },
    {
      name: 'tagVariant',
      label: 'Cor da tag',
      type: 'select',
      options: [
        { label: 'Azul', value: 'blue' },
        { label: 'Laranja', value: 'orange' },
      ],
      defaultValue: 'blue',
      admin: { position: 'sidebar' },
    },
    {
      name: 'accent',
      label: 'Cor do card',
      type: 'select',
      options: [
        { label: 'Azul', value: 'blue' },
        { label: 'Laranja', value: 'orange' },
      ],
      defaultValue: 'blue',
      admin: { position: 'sidebar' },
    },
    {
      name: 'year',
      label: 'Ano',
      type: 'text',
      admin: { position: 'sidebar' },
    },
    {
      name: 'result',
      label: 'Resultado (ex: +38% ticket médio)',
      type: 'text',
      admin: { position: 'sidebar' },
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: { position: 'sidebar' },
    },
    slugField(),
  ],
  hooks: {
    beforeChange: [populatePublishedAt],
  },
  versions: {
    drafts: {
      autosave: { interval: 100 },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
