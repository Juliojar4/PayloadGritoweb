import type { Block } from 'payload'

export const HomeSectionProjects: Block = {
  slug: 'homeSectionProjects',
  interfaceName: 'HomeSectionProjectsBlock',
  labels: { singular: 'Seção de Projetos', plural: 'Seção de Projetos' },
  fields: [
    {
      name: 'eyebrow',
      label: 'Eyebrow',
      type: 'text',
      required: true,
      defaultValue: 'Trabalhos recentes',
    },
    {
      name: 'titleStart',
      label: 'Título — início',
      type: 'text',
      required: true,
      defaultValue: 'Projetos que ',
    },
    {
      name: 'titleAccent',
      label: 'Título — destaque (laranja)',
      type: 'text',
      required: true,
      defaultValue: 'colocamos pra rodar',
    },
    {
      name: 'portfolioLabel',
      label: 'Botão portfólio — texto',
      type: 'text',
      defaultValue: 'Ver portfólio completo',
    },
    {
      name: 'portfolioHref',
      label: 'Botão portfólio — link',
      type: 'text',
      defaultValue: '#',
    },
    {
      name: 'projects',
      label: 'Projetos em destaque',
      type: 'array',
      required: true,
      minRows: 1,
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'tag',
          label: 'Tag do projeto',
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
          name: 'accent',
          label: 'Cor do card',
          type: 'select',
          required: true,
          options: [
            { label: 'Azul', value: 'blue' },
            { label: 'Laranja', value: 'orange' },
          ],
          defaultValue: 'blue',
        },
        {
          name: 'client',
          label: 'Nome do cliente',
          type: 'text',
          required: true,
        },
        {
          name: 'year',
          label: 'Ano',
          type: 'text',
          required: true,
        },
        {
          name: 'title',
          label: 'Título do projeto',
          type: 'text',
          required: true,
        },
        {
          name: 'result',
          label: 'Resultado (ex: +38% ticket médio)',
          type: 'text',
        },
        {
          name: 'motifType',
          label: 'Motivo visual do card',
          type: 'select',
          required: true,
          options: [
            { label: 'Tag Mark (checklist azul)', value: 'tagMark' },
            { label: 'Dashboard (mock UI)', value: 'dashboard' },
            { label: 'Arrow Curve (laranja)', value: 'arrowCurve' },
          ],
          defaultValue: 'tagMark',
        },
        {
          name: 'href',
          label: 'Link do projeto',
          type: 'text',
          defaultValue: '#',
        },
      ],
    },
  ],
}
