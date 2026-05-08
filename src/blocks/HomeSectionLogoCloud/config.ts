import type { Block } from 'payload'

export const HomeSectionLogoCloud: Block = {
  slug: 'homeSectionLogoCloud',
  interfaceName: 'HomeSectionLogoCloudBlock',
  labels: { singular: 'Logo Cloud', plural: 'Logo Cloud' },
  imageURL: '/block-previews/logo-cloud.png',
  imageAltText: 'Logo Cloud',
  fields: [
    {
      name: 'eyebrow',
      label: 'Eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Clientes',
    },
    {
      name: 'titleStart',
      label: 'Título — início',
      type: 'text',
      required: true,
      defaultValue: 'Empresas que ',
    },
    {
      name: 'titleAccent',
      label: 'Título — destaque (laranja)',
      type: 'text',
      required: true,
      defaultValue: 'confiam',
    },
    {
      name: 'titleEnd',
      label: 'Título — fim',
      type: 'text',
      defaultValue: ' na gente',
    },
    {
      name: 'description',
      label: 'Descrição',
      type: 'textarea',
    },
    {
      name: 'partners',
      label: 'Parceiros / Clientes',
      type: 'array',
      required: true,
      minRows: 1,
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'name',
          label: 'Nome',
          type: 'text',
          required: true,
        },
        {
          name: 'glyph',
          label: 'Ícone',
          type: 'select',
          required: true,
          options: [
            { label: 'Círculo', value: 'circle' },
            { label: 'Triângulo', value: 'triangle' },
            { label: 'Quadrado', value: 'square' },
            { label: 'Diamante', value: 'diamond' },
            { label: 'Arco', value: 'arc' },
            { label: 'Mais (+)', value: 'plus' },
            { label: 'Hexágono', value: 'hexagon' },
            { label: 'Anéis', value: 'rings' },
            { label: 'Meio-círculo', value: 'halfcircle' },
            { label: 'Onda', value: 'wave' },
            { label: 'Chevron', value: 'chevron' },
            { label: 'Barras', value: 'bars' },
          ],
        },
      ],
    },
  ],
}
