import type { Block } from 'payload'

export const HomeSectionStats: Block = {
  slug: 'homeSectionStats',
  interfaceName: 'HomeSectionStatsBlock',
  labels: { singular: 'Faixa de Estatísticas', plural: 'Faixa de Estatísticas' },
  imageURL: '/block-previews/stats.png',
  imageAltText: 'Faixa de Estatísticas',
  fields: [
    {
      name: 'showDecoration',
      label: 'Mostrar decorações (blob e pontos)',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'stats',
      label: 'Estatísticas',
      type: 'array',
      required: true,
      minRows: 1,
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'value',
          label: 'Valor (ex: +120)',
          type: 'text',
          required: true,
        },
        {
          name: 'label',
          label: 'Rótulo (ex: Projetos entregues)',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
