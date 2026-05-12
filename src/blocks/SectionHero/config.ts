import type { Block } from 'payload'

export const SectionHero: Block = {
  slug: 'homeSectionHero',
  interfaceName: 'SectionHeroBlock',
  labels: { singular: 'Hero', plural: 'Hero' },
  imageURL: '/block-previews/hero.png',
  imageAltText: 'Hero Section',
  fields: [
    {
      name: 'eyebrow',
      label: 'Eyebrow (opcional)',
      type: 'text',
    },
    {
      name: 'title',
      label: 'Título',
      type: 'text',
      required: true,
      defaultValue: 'Sites que *gritam*,\nnegócios que *escalam*.',
      admin: {
        description: 'Use *palavra* para laranja. Use \\n para quebra de linha.',
      },
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'cta1Label',
      label: 'Button 1 — text',
      type: 'text',
      defaultValue: 'Quero um orçamento',
    },
    {
      name: 'cta1Href',
      label: 'Button 1 — link',
      type: 'text',
      defaultValue: '#',
    },
    {
      name: 'cta2Label',
      label: 'Button 2 — text',
      type: 'text',
      defaultValue: 'Ver portfólio',
    },
    {
      name: 'cta2Href',
      label: 'Button 2 — link',
      type: 'text',
      defaultValue: '#',
    },
    {
      name: 'image',
      label: 'Hero image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
