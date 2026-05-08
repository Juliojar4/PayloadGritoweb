import type { Block } from 'payload'

export const FaqBlock: Block = {
  slug: 'faqBlock',
  interfaceName: 'FaqBlockBlock',
  labels: { singular: 'FAQ', plural: 'FAQs' },
  fields: [
    {
      name: 'eyebrow',
      label: 'Eyebrow',
      type: 'text',
    },
    {
      name: 'titleStart',
      label: 'Título — início',
      type: 'text',
      required: true,
    },
    {
      name: 'titleAccent',
      label: 'Título — destaque (laranja)',
      type: 'text',
    },
    {
      name: 'titleEnd',
      label: 'Título — fim',
      type: 'text',
    },
    {
      name: 'defaultOpenIndex',
      label: 'Índice aberto por padrão (0-based, -1 para fechar todos)',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'items',
      label: 'Perguntas e respostas',
      type: 'array',
      required: true,
      minRows: 1,
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'question',
          label: 'Pergunta',
          type: 'text',
          required: true,
        },
        {
          name: 'answer',
          label: 'Resposta',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}
