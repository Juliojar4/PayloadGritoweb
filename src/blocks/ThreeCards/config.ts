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
      label: 'Título da Seção',
      type: 'text',
      required: true,
    },
    {
      name: 'sectionTitleHighlight',
      label: 'Destaque do Título (cor secundária)',
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
          label: 'Cor da borda',
          type: 'select',
          required: true,
          defaultValue: 'primary',
          options: [
            { label: 'Primária (azul)', value: 'primary' },
            { label: 'Secundária (laranja)', value: 'secondary' },
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
          label: 'Destaque no título (cor secundária)',
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
