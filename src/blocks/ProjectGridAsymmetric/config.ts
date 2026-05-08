import type { Block } from 'payload'

export const ProjectGridAsymmetric: Block = {
  slug: 'projectGridAsymmetric',
  interfaceName: 'ProjectGridAsymmetricBlock',
  labels: { singular: 'Grid de Portfólio', plural: 'Grids de Portfólio' },
  fields: [
    {
      name: 'eyebrow',
      label: 'Eyebrow',
      type: 'text',
      defaultValue: 'Nossos projetos',
    },
    {
      name: 'titleStart',
      label: 'Título — início',
      type: 'text',
      defaultValue: 'Projetos que ',
    },
    {
      name: 'titleAccent',
      label: 'Título — destaque (laranja)',
      type: 'text',
      defaultValue: 'colocamos pra rodar',
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
    {
      name: 'limit',
      label: 'Quantidade de projetos',
      type: 'number',
      defaultValue: 5,
      min: 1,
      max: 12,
      admin: {
        description: 'Máximo de projetos exibidos. Padrão: 5.',
      },
    },
    {
      name: 'selectedProjects',
      label: 'Projetos em destaque (opcional)',
      type: 'relationship',
      relationTo: 'portfolios',
      hasMany: true,
      admin: {
        description: 'Deixe vazio para mostrar os projetos mais recentes automaticamente.',
      },
    },
  ],
}
