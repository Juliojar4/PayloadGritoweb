import type { Block } from 'payload'

export const ChecklistGrid: Block = {
  slug: 'checklistGrid',
  interfaceName: 'ChecklistGridBlock',
  labels: { singular: 'Checklist Grid', plural: 'Checklist Grids' },
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
      name: 'items',
      label: 'Itens do checklist',
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
