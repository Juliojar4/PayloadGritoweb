import type { Block } from 'payload'

export const ArquivoListing: Block = {
  slug: 'arquivoListing',
  interfaceName: 'ArquivoListingBlock',
  labels: { singular: 'Listagem de Arquivo', plural: 'Listagens de Arquivo' },
  fields: [
    {
      name: 'eyebrow',
      label: 'Eyebrow',
      type: 'text',
      defaultValue: 'Arquivo',
    },
    {
      name: 'titleStart',
      label: 'Título — início',
      type: 'text',
    },
    {
      name: 'titleAccent',
      label: 'Título — destaque (laranja)',
      type: 'text',
      defaultValue: 'Todos os arquivos',
    },
    {
      name: 'titleEnd',
      label: 'Título — fim',
      type: 'text',
    },
    {
      name: 'showYear',
      label: 'Exibir coluna de ano',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'showSearch',
      label: 'Exibir busca',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'showFilters',
      label: 'Exibir filtros por tag',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}
