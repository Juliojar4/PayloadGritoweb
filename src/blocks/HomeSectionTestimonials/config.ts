import type { Block } from 'payload'

export const HomeSectionTestimonials: Block = {
  slug: 'homeSectionTestimonials',
  interfaceName: 'HomeSectionTestimonialsBlock',
  labels: { singular: 'Seção de Depoimentos', plural: 'Seção de Depoimentos' },
  imageURL: '/block-previews/depoimentos.png',
  imageAltText: 'Seção de Depoimentos',
  fields: [
    {
      name: 'eyebrow',
      label: 'Eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Depoimentos',
    },
    {
      name: 'titleStart',
      label: 'Título — início',
      type: 'text',
      required: true,
      defaultValue: 'Quem trabalhou com a gente ',
    },
    {
      name: 'titleAccent',
      label: 'Título — destaque (laranja)',
      type: 'text',
      required: true,
      defaultValue: 'volta',
    },
    {
      name: 'description',
      label: 'Descrição',
      type: 'textarea',
    },
    {
      name: 'ratingValue',
      label: 'Nota (ex: 4,9 / 5,0)',
      type: 'text',
      required: true,
      defaultValue: '4,9 / 5,0',
    },
    {
      name: 'reviewCount',
      label: 'Texto de avaliações (ex: 47 avaliações no Google)',
      type: 'text',
      required: true,
      defaultValue: '47 avaliações no Google',
    },
    {
      name: 'testimonials',
      label: 'Depoimentos',
      type: 'array',
      required: true,
      minRows: 1,
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'quote',
          label: 'Depoimento',
          type: 'textarea',
          required: true,
        },
        {
          name: 'author',
          label: 'Nome do autor',
          type: 'text',
          required: true,
        },
        {
          name: 'role',
          label: 'Cargo e empresa',
          type: 'text',
        },
        {
          name: 'avatarVariant',
          label: 'Cor do avatar',
          type: 'select',
          required: true,
          options: [
            { label: 'Azul', value: 'blue' },
            { label: 'Laranja', value: 'orange' },
          ],
          defaultValue: 'blue',
        },
        {
          name: 'surface',
          label: 'Fundo do card',
          type: 'select',
          required: true,
          options: [
            { label: 'Branco (paper)', value: 'paper' },
            { label: 'Card (card)', value: 'card' },
          ],
          defaultValue: 'paper',
        },
      ],
    },
  ],
}
