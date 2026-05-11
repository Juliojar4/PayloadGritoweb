import type { Block } from 'payload'

export const LatestPosts: Block = {
  slug: 'latestPosts',
  interfaceName: 'LatestPostsBlock',
  labels: { singular: 'Últimos Posts', plural: 'Últimos Posts' },
  fields: [
    {
      name: 'eyebrow',
      label: 'Eyebrow',
      type: 'text',
      defaultValue: 'Do nosso blog',
    },
    {
      name: 'title',
      label: 'Título',
      type: 'text',
      defaultValue: 'Ideias que *colocam* seu negócio pra correr',
      admin: { description: 'Use *palavra* para laranja. Use \\n para quebra de linha.' },
    },
    {
      name: 'blogLabel',
      label: 'Botão — texto',
      type: 'text',
      defaultValue: 'Ler todos os artigos',
    },
    {
      name: 'blogHref',
      label: 'Botão — link',
      type: 'text',
      defaultValue: '/blog',
    },
  ],
}
