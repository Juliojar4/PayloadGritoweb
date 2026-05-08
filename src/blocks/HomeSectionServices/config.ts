import type { Block } from 'payload'

export const HomeSectionServices: Block = {
  slug: 'homeSectionServices',
  interfaceName: 'HomeSectionServicesBlock',
  labels: { singular: 'Seção de Serviços', plural: 'Seção de Serviços' },
  imageURL: '/block-previews/servicos.png',
  imageAltText: 'Seção de Serviços',
  fields: [
    {
      name: 'eyebrow',
      label: 'Eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Serviços',
    },
    {
      name: 'titleStart',
      label: 'Título — início',
      type: 'text',
      required: true,
      defaultValue: 'Soluções ',
    },
    {
      name: 'titleAccent',
      label: 'Título — destaque (laranja)',
      type: 'text',
      required: true,
      defaultValue: 'inteligentes',
    },
    {
      name: 'titleEnd',
      label: 'Título — fim',
      type: 'text',
      defaultValue: '\npara o seu negócio',
    },
    {
      name: 'description',
      label: 'Descrição lateral',
      type: 'textarea',
    },
    {
      name: 'services',
      label: 'Serviços',
      type: 'array',
      required: true,
      minRows: 1,
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'name',
          label: 'Nome do serviço',
          type: 'text',
          required: true,
        },
        {
          name: 'variant',
          label: 'Cor do card',
          type: 'select',
          required: true,
          options: [
            { label: 'Azul', value: 'blue' },
            { label: 'Laranja', value: 'orange' },
          ],
          defaultValue: 'blue',
        },
        {
          name: 'description',
          label: 'Descrição',
          type: 'textarea',
          required: true,
        },
        {
          name: 'iconType',
          label: 'Ícone',
          type: 'select',
          required: true,
          options: [
            { label: 'Globo (WordPress)', value: 'globe' },
            { label: 'Carrinho (E-Commerce)', value: 'cart' },
            { label: 'Landing Page', value: 'landing' },
            { label: 'Tela (UX/UI)', value: 'screen' },
            { label: 'Branding', value: 'brand' },
            { label: 'Código (Digital)', value: 'code' },
          ],
        },
        {
          name: 'bullets',
          label: 'Lista de benefícios (opcional)',
          type: 'array',
          admin: {
            initCollapsed: true,
            description: 'Itens com ✓ que aparecem abaixo da descrição.',
          },
          fields: [
            {
              name: 'text',
              label: 'Item',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'ctaLabel',
          label: 'Texto do CTA',
          type: 'text',
          defaultValue: 'Conheça',
        },
        {
          name: 'ctaHref',
          label: 'Link do CTA',
          type: 'text',
          defaultValue: '#',
        },
      ],
    },
  ],
}
