import type { Block } from 'payload'

export const HomeSectionHero: Block = {
  slug: 'homeSectionHero',
  interfaceName: 'HomeSectionHeroBlock',
  labels: { singular: 'Hero', plural: 'Hero' },
  imageURL: '/block-previews/hero.png',
  imageAltText: 'Seção Hero',
  fields: [
    {
      name: 'titlePart1',
      label: 'Título — parte 1 (antes do destaque 1)',
      type: 'text',
      required: true,
      defaultValue: 'Sites que ',
    },
    {
      name: 'titleAccent1',
      label: 'Título — destaque 1 (laranja)',
      type: 'text',
      required: true,
      defaultValue: 'gritam',
    },
    {
      name: 'titlePart2',
      label: 'Título — parte 2 (antes do destaque 2)',
      type: 'text',
      required: true,
      defaultValue: 'negócios que ',
    },
    {
      name: 'titleAccent2',
      label: 'Título — destaque 2 (laranja)',
      type: 'text',
      required: true,
      defaultValue: 'escalam.',
    },
    {
      name: 'description',
      label: 'Descrição',
      type: 'textarea',
      required: true,
    },
    {
      name: 'cta1Label',
      label: 'Botão 1 — texto',
      type: 'text',
      required: true,
      defaultValue: 'Quero um orçamento',
    },
    {
      name: 'cta1Href',
      label: 'Botão 1 — link',
      type: 'text',
      required: true,
      defaultValue: '#',
    },
    {
      name: 'cta2Label',
      label: 'Botão 2 — texto',
      type: 'text',
      defaultValue: 'Ver portfólio',
    },
    {
      name: 'cta2Href',
      label: 'Botão 2 — link',
      type: 'text',
      defaultValue: '#',
    },
    {
      name: 'image',
      label: 'Imagem hero',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
