import type { Block } from 'payload'

export const HomeSectionContact: Block = {
  slug: 'homeSectionContact',
  interfaceName: 'HomeSectionContactBlock',
  labels: { singular: 'Seção de Contato', plural: 'Seção de Contato' },
  imageURL: '/block-previews/contato.png',
  imageAltText: 'Seção de Contato',
  fields: [
    {
      name: 'email',
      label: 'E-mail',
      type: 'text',
      required: true,
      defaultValue: 'contato@gritoweb.com',
    },
    {
      name: 'emailHref',
      label: 'Link do e-mail',
      type: 'text',
      required: true,
      defaultValue: 'mailto:contato@gritoweb.com',
    },
    {
      name: 'phone',
      label: 'Telefone / WhatsApp',
      type: 'text',
      required: true,
      defaultValue: '(15) 99739-4486',
    },
    {
      name: 'phoneHref',
      label: 'Link do telefone',
      type: 'text',
      required: true,
      defaultValue: 'tel:+5515997394486',
    },
  ],
}
