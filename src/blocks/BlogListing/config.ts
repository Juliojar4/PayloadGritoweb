import type { Block } from 'payload'

export const BlogListing: Block = {
  slug: 'blogListing',
  interfaceName: 'BlogListingBlock',
  labels: { singular: 'Listagem de Posts', plural: 'Listagens de Posts' },
  fields: [
    {
      name: 'featuredPost',
      label: 'Post em destaque',
      type: 'relationship',
      relationTo: 'posts',
      admin: {
        description: 'Aparece em banner acima da listagem. Deixe vazio para ocultar.',
      },
    },
    {
      name: 'eyebrow',
      label: 'Eyebrow',
      type: 'text',
      defaultValue: 'Arquivo',
    },
    {
      name: 'titleStart',
      label: 'Título — início',
      type: 'text',
    },
    {
      name: 'titleAccent',
      label: 'Título — destaque (laranja)',
      type: 'text',
      defaultValue: 'Últimos posts',
    },
    {
      name: 'titleEnd',
      label: 'Título — fim',
      type: 'text',
    },
    {
      name: 'postsPerPage',
      label: 'Posts por página',
      type: 'number',
      defaultValue: 9,
      min: 3,
      max: 30,
    },
    {
      name: 'showSearch',
      label: 'Exibir busca',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'showFilters',
      label: 'Exibir filtros por categoria',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}
