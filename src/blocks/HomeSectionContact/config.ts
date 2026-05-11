import type { Block } from 'payload'

export const HomeSectionContact: Block = {
  slug: 'homeSectionContact',
  interfaceName: 'HomeSectionContactBlock',
  labels: { singular: 'Contact Section', plural: 'Contact Section' },
  imageURL: '/block-previews/contato.png',
  imageAltText: 'Contact Section',
  fields: [
    {
      name: 'email',
      label: 'Email',
      type: 'text',
      required: true,
      defaultValue: 'contato@gritoweb.com',
    },
    {
      name: 'emailHref',
      label: 'Email link',
      type: 'text',
      required: true,
      defaultValue: 'mailto:contato@gritoweb.com',
    },
    {
      name: 'phone',
      label: 'Phone / WhatsApp',
      type: 'text',
      required: true,
      defaultValue: '(15) 99739-4486',
    },
    {
      name: 'phoneHref',
      label: 'Phone link',
      type: 'text',
      required: true,
      defaultValue: 'tel:+5515997394486',
    },
  ],
}
