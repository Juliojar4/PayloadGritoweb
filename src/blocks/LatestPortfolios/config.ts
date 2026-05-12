import type { Block } from 'payload'

export const LatestPortfolios: Block = {
  slug: 'latestPortfolios',
  interfaceName: 'LatestPortfoliosBlock',
  labels: { singular: 'Últimos Portfólios', plural: 'Últimos Portfólios' },
  imageURL: '/images/blocks/ultimosPortifolios.png',
  imageAltText: 'Últimos Portfólios',
  fields: [
    {
      name: 'eyebrow',
      label: 'Eyebrow',
      type: 'text',
      defaultValue: 'Trabalhos recentes',
    },
    {
      name: 'title',
      label: 'Título',
      type: 'text',
      defaultValue: 'Projetos que *colocamos pra rodar*',
      admin: { description: 'Use *palavra* para laranja. Use \\n para quebra de linha.' },
    },
    {
      name: 'portfolioLabel',
      label: 'Botão — texto',
      type: 'text',
      defaultValue: 'Ver portfólio completo',
    },
    {
      name: 'portfolioHref',
      label: 'Botão — link',
      type: 'text',
      defaultValue: '/portfolio',
    },
  ],
}
