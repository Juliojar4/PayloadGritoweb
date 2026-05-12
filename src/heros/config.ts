import type { Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'lowImpact',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'Default Hero',
          value: 'defaultHero',
        },
        {
          label: 'High Impact',
          value: 'highImpact',
        },
        {
          label: 'Medium Impact',
          value: 'mediumImpact',
        },
        {
          label: 'Low Impact',
          value: 'lowImpact',
        },
      ],
      required: true,
    },
    {
      name: 'richText',
      type: 'richText',
      admin: {
        condition: (_, { type } = {}) => !['defaultHero'].includes(type),
      },
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: false,
    },
    linkGroup({
      overrides: {
        maxRows: 2,
        admin: {
          condition: (_, { type } = {}) => !['defaultHero'].includes(type),
        },
      },
    }),
    {
      name: 'media',
      type: 'upload',
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact'].includes(type),
      },
      relationTo: 'media',
      required: true,
    },
    // ── Default Hero fields ────────────────────────────────
    {
      name: 'eyebrow',
      label: 'Eyebrow (opcional)',
      type: 'text',
      admin: {
        condition: (_, { type } = {}) => type === 'defaultHero',
      },
    },
    {
      name: 'heroTitle',
      label: 'Título',
      type: 'text',
      required: false,
      defaultValue: 'Sites que *gritam*,\nnegócios que *escalam*.',
      admin: {
        condition: (_, { type } = {}) => type === 'defaultHero',
        description: 'Use *palavra* para laranja. Use \\n para quebra de linha.',
      },
    },
    {
      name: 'heroDescription',
      label: 'Descrição',
      type: 'textarea',
      admin: {
        condition: (_, { type } = {}) => type === 'defaultHero',
      },
    },
    {
      name: 'cta1Label',
      label: 'Botão 1 — texto',
      type: 'text',
      admin: {
        condition: (_, { type } = {}) => type === 'defaultHero',
      },
    },
    {
      name: 'cta1Href',
      label: 'Botão 1 — link',
      type: 'text',
      admin: {
        condition: (_, { type } = {}) => type === 'defaultHero',
      },
    },
    {
      name: 'cta2Label',
      label: 'Botão 2 — texto',
      type: 'text',
      admin: {
        condition: (_, { type } = {}) => type === 'defaultHero',
      },
    },
    {
      name: 'cta2Href',
      label: 'Botão 2 — link',
      type: 'text',
      admin: {
        condition: (_, { type } = {}) => type === 'defaultHero',
      },
    },
    {
      name: 'heroImage',
      label: 'Imagem',
      type: 'upload',
      relationTo: 'media',
      admin: {
        condition: (_, { type } = {}) => type === 'defaultHero',
      },
    },
  ],
  label: false,
}
