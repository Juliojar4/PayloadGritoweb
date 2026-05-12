import type { Block } from 'payload'

export const ArquivoListing: Block = {
  slug: 'arquivoListing',
  interfaceName: 'ArquivoListingBlock',
  labels: { singular: 'Listagem de Arquivo', plural: 'Listagens de Arquivo' },
  imageURL: '/images/blocks/listagemDePost.png',
  imageAltText: 'Listagem de Arquivo',
  fields: [
    {
      name: 'eyebrow',
      label: 'Eyebrow',
      type: 'text',
      defaultValue: 'Arquivo',
    },
    {
      name: 'title',
      label: 'Título',
      type: 'text',
      defaultValue: '*Todos os arquivos*',
      admin: { description: 'Use *palavra* para laranja. Use \\n para quebra de linha.' },
    },
    {
      name: 'showYear',
      label: 'Show year column',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'showSearch',
      label: 'Show search',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'showFilters',
      label: 'Show filters by tag',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}
