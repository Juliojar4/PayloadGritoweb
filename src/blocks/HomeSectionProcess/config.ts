import type { Block } from 'payload'

export const HomeSectionProcess: Block = {
  slug: 'homeSectionProcess',
  interfaceName: 'HomeSectionProcessBlock',
  labels: { singular: 'Seção de Processo', plural: 'Seção de Processo' },
  imageURL: '/block-previews/processo.png',
  imageAltText: 'Seção de Processo',
  fields: [
    {
      name: 'eyebrow',
      label: 'Eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Como trabalhamos',
    },
    {
      name: 'titleStart',
      label: 'Título — início',
      type: 'text',
      required: true,
      defaultValue: 'Um ',
    },
    {
      name: 'titleAccent',
      label: 'Título — destaque (laranja)',
      type: 'text',
      required: true,
      defaultValue: 'processo claro',
    },
    {
      name: 'titleEnd',
      label: 'Título — fim',
      type: 'text',
      defaultValue: ', do briefing ao go-live',
    },
    {
      name: 'description',
      label: 'Descrição',
      type: 'textarea',
    },
    {
      name: 'highlightIndex',
      label: 'Índice do passo em destaque (0-based)',
      type: 'number',
      defaultValue: 2,
      admin: {
        description: 'O número do passo que será destacado em laranja (0 = primeiro).',
      },
    },
    {
      name: 'steps',
      label: 'Passos do processo',
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
        },
      ],
    },
  ],
}
