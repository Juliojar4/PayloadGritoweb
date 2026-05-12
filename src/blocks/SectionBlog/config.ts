import type { Block } from 'payload'

export const SectionBlog: Block = {
  slug: 'homeSectionBlog',
  interfaceName: 'SectionBlogBlock',
  labels: { singular: 'Blog Section', plural: 'Blog Section' },
  imageURL: '/block-previews/blog.png',
  imageAltText: 'Blog Section',
  fields: [
    {
      name: 'eyebrow',
      label: 'Eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Do nosso blog',
    },
    {
      name: 'title',
      label: 'Título',
      type: 'text',
      required: true,
      defaultValue: 'Ideias que *colocam* seu negócio pra correr',
      admin: { description: 'Use *palavra* para laranja. Use \\n para quebra de linha.' },
    },
    {
      name: 'blogLabel',
      label: 'Blog button — text',
      type: 'text',
      defaultValue: 'Ler todos os artigos',
    },
    {
      name: 'blogHref',
      label: 'Blog button — link',
      type: 'text',
      defaultValue: '#',
    },
    {
      name: 'posts',
      label: 'Featured posts',
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
          label: 'Tag color',
          type: 'select',
          required: true,
          options: [
            { label: 'Blue', value: 'blue' },
            { label: 'Orange', value: 'orange' },
          ],
          defaultValue: 'blue',
        },
        {
          name: 'date',
          label: 'Date (e.g.: Apr 18, 2026)',
          type: 'text',
          required: true,
        },
        {
          name: 'title',
          label: 'Post title',
          type: 'text',
          required: true,
        },
        {
          name: 'excerpt',
          label: 'Excerpt',
          type: 'textarea',
        },
        {
          name: 'href',
          label: 'Post link',
          type: 'text',
          defaultValue: '#',
        },
      ],
    },
  ],
}
