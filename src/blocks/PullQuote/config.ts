import type { Block } from 'payload'

export const PullQuote: Block = {
  slug: 'pullQuote',
  interfaceName: 'PullQuoteBlock',
  labels: { singular: 'Pull Quote', plural: 'Pull Quotes' },
  fields: [
    {
      name: 'eyebrow',
      label: 'Eyebrow',
      type: 'text',
    },
    {
      name: 'quote',
      label: 'Citação',
      type: 'textarea',
      required: true,
    },
    {
      name: 'author',
      label: 'Nome do autor',
      type: 'text',
    },
    {
      name: 'role',
      label: 'Cargo / Empresa',
      type: 'text',
    },
  ],
}
