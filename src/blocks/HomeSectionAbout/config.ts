import type { Block } from 'payload'

export const HomeSectionAbout: Block = {
  slug: 'homeSectionAbout',
  interfaceName: 'HomeSectionAboutBlock',
  labels: { singular: 'Seção Sobre Nós', plural: 'Seção Sobre Nós' },
  imageURL: '/block-previews/sobre-nos.png',
  imageAltText: 'Seção Sobre Nós',
  fields: [
    {
      name: 'eyebrow',
      label: 'Eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Sobre nós',
    },
    {
      name: 'titlePart1',
      label: 'Título — parte 1',
      type: 'text',
      required: true,
      defaultValue: 'Um estúdio ',
    },
    {
      name: 'titleAccent1',
      label: 'Título — destaque 1 (laranja)',
      type: 'text',
      required: true,
      defaultValue: 'pequeno',
    },
    {
      name: 'titlePart2',
      label: 'Título — parte 2',
      type: 'text',
      defaultValue: ' com\nentregas ',
    },
    {
      name: 'titleAccent2',
      label: 'Título — destaque 2 (laranja)',
      type: 'text',
      defaultValue: 'de gente grande.',
    },
    {
      name: 'description',
      label: 'Texto do corpo',
      type: 'textarea',
      required: true,
    },
    {
      name: 'ctaLabel',
      label: 'Botão — texto',
      type: 'text',
      required: true,
      defaultValue: 'Conheça o time',
    },
    {
      name: 'ctaHref',
      label: 'Botão — link',
      type: 'text',
      required: true,
      defaultValue: '#',
    },
    {
      name: 'features',
      label: 'Diferenciais',
      type: 'array',
      required: true,
      minRows: 1,
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'title',
          label: 'Título',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          label: 'Descrição',
          type: 'textarea',
          required: true,
        },
      ],
    },
    {
      name: 'image',
      label: 'Imagem',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
