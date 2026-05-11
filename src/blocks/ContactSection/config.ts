import type { Block } from 'payload'

export const ContactSection: Block = {
  slug: 'contactSection',
  interfaceName: 'ContactSectionBlock',
  labels: { singular: 'Seção de Contato (Formulário)', plural: 'Seções de Contato (Formulário)' },
  fields: [
    {
      name: 'eyebrow',
      label: 'Eyebrow',
      type: 'text',
    },
    {
      name: 'heading',
      label: 'Título',
      type: 'text',
    },
    {
      name: 'sidebarEyebrow',
      label: 'Eyebrow da sidebar',
      type: 'text',
      defaultValue: 'Fale direto',
    },
    {
      name: 'successTitle',
      label: 'Título de sucesso',
      type: 'text',
      defaultValue: 'Mensagem enviada',
    },
    {
      name: 'successMessage',
      label: 'Mensagem de sucesso',
      type: 'textarea',
      defaultValue:
        'Recebemos sua mensagem. Em até 3 dias úteis um de nós entra em contato.',
    },
    {
      name: 'channels',
      label: 'Canais de contato',
      type: 'array',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'icon',
          label: 'Ícone',
          type: 'select',
          required: true,
          options: [
            { label: 'E-mail', value: 'email' },
            { label: 'Telefone', value: 'phone' },
            { label: 'WhatsApp', value: 'whatsapp' },
            { label: 'Instagram', value: 'instagram' },
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'Localização', value: 'location' },
          ],
        },
        {
          name: 'label',
          label: 'Rótulo',
          type: 'text',
          required: true,
        },
        {
          name: 'value',
          label: 'Valor exibido',
          type: 'text',
          required: true,
        },
        {
          name: 'hint',
          label: 'Dica (opcional)',
          type: 'text',
        },
        {
          name: 'href',
          label: 'Link (opcional)',
          type: 'text',
        },
      ],
    },
  ],
}
