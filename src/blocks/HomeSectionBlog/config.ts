import type { Block } from 'payload'

export const HomeSectionBlog: Block = {
  slug: 'homeSectionBlog',
  interfaceName: 'HomeSectionBlogBlock',
  labels: { singular: 'Seção do Blog', plural: 'Seção do Blog' },
  imageURL: '/block-previews/blog.png',
  imageAltText: 'Seção do Blog',
  fields: [
    {
      name: 'eyebrow',
      label: 'Eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Do nosso blog',
    },
    {
      name: 'titleStart',
      label: 'Título — início',
      type: 'text',
      required: true,
      defaultValue: 'Ideias que ',
    },
    {
      name: 'titleAccent',
      label: 'Título — destaque (laranja)',
      type: 'text',
      required: true,
      defaultValue: 'colocam',
    },
    {
      name: 'titleEnd',
      label: 'Título — fim',
      type: 'text',
      defaultValue: ' seu negócio pra correr',
    },
    {
      name: 'blogLabel',
      label: 'Botão blog — texto',
      type: 'text',
      defaultValue: 'Ler todos os artigos',
    },
    {
      name: 'blogHref',
      label: 'Botão blog — link',
      type: 'text',
      defaultValue: '#',
    },
    {
      name: 'posts',
      label: 'Posts em destaque',
      type: 'array',
      required: true,
      minRows: 1,
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'tag',
          label: 'Tag',
          type: 'text',
          required: true,
        },
        {
          name: 'tagVariant',
          label: 'Cor da tag',
          type: 'select',
          required: true,
          options: [
            { label: 'Azul', value: 'blue' },
            { label: 'Laranja', value: 'orange' },
          ],
          defaultValue: 'blue',
        },
        {
          name: 'date',
          label: 'Data (ex: 18 · Abr · 2026)',
          type: 'text',
          required: true,
        },
        {
          name: 'title',
          label: 'Título do post',
          type: 'text',
          required: true,
        },
        {
          name: 'excerpt',
          label: 'Resumo',
          type: 'textarea',
        },
        {
          name: 'href',
          label: 'Link do post',
          type: 'text',
          defaultValue: '#',
        },
      ],
    },
  ],
}
