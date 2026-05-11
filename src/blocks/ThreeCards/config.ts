import type { Block } from 'payload'

export const ThreeCards: Block = {
  slug: 'threeCards',
  interfaceName: 'ThreeCardsBlock',
  labels: {
    singular: '3 Cards',
    plural: '3 Cards',
  },
  fields: [
    {
      name: 'sectionTitle',
      label: 'Section title',
      type: 'text',
      required: true,
    },
    {
      name: 'sectionTitleHighlight',
      label: 'Title accent (secondary color)',
      type: 'text',
      required: true,
    },
    {
      name: 'ctaLabel',
      label: 'Texto do CTA',
      type: 'text',
      defaultValue: 'Saiba Mais',
    },
    {
      name: 'ctaUrl',
      label: 'URL do CTA',
      type: 'text',
      defaultValue: '/',
    },
    {
      name: 'cards',
      type: 'array',
      minRows: 3,
      maxRows: 3,
      labels: {
        singular: 'Card',
        plural: 'Cards',
      },
      fields: [
        {
          name: 'borderColor',
          label: 'Border color',
          type: 'select',
          required: true,
          defaultValue: 'primary',
          options: [
            { label: 'Primary (blue)', value: 'primary' },
            { label: 'Secondary (orange)', value: 'secondary' },
          ],
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'titleHighlight',
          label: 'Title accent (secondary color)',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}
