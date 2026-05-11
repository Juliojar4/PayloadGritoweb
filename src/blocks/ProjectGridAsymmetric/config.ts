import type { Block } from 'payload'

export const ProjectGridAsymmetric: Block = {
  slug: 'projectGridAsymmetric',
  interfaceName: 'ProjectGridAsymmetricBlock',
  labels: { singular: 'Portfolio Grid', plural: 'Portfolio Grids' },
  fields: [
    {
      name: 'eyebrow',
      label: 'Eyebrow',
      type: 'text',
      defaultValue: 'Nossos projetos',
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
      label: 'Button — text',
      type: 'text',
      defaultValue: 'Ver portfólio completo',
    },
    {
      name: 'portfolioHref',
      label: 'Button — link',
      type: 'text',
      defaultValue: '/portfolio',
    },
    {
      name: 'limit',
      label: 'Number of projects',
      type: 'number',
      defaultValue: 5,
      min: 1,
      max: 12,
      admin: {
        description: 'Maximum projects displayed. Default: 5.',
      },
    },
    {
      name: 'selectedProjects',
      label: 'Featured projects (optional)',
      type: 'relationship',
      relationTo: 'portfolios',
      hasMany: true,
      admin: {
        description: 'Leave empty to automatically show the most recent projects.',
      },
    },
  ],
}
