import type { CollectionConfig } from 'payload'

import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { Banner } from '../../blocks/Banner/config'
import { Code } from '../../blocks/Code/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { populateAuthors } from './hooks/populateAuthors'
import { revalidateArquivo, revalidateArquivoDelete } from './hooks/revalidateArquivo'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { slugField } from 'payload'

export const Arquivo: CollectionConfig<'arquivo'> = {
  slug: 'arquivo',
  labels: { singular: 'Arquivo', plural: 'Arquivos' },
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  defaultPopulate: {
    title: true,
    slug: true,
    year: true,
    client: true,
    tag: true,
    result: true,
    meta: {
      image: true,
      description: true,
    },
  },
  admin: {
    group: 'Arquivo',
    defaultColumns: ['title', 'client', 'year', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) =>
        generatePreviewPath({ slug: data?.slug, collection: 'arquivo', req }),
    },
    preview: (data, { req }) =>
      generatePreviewPath({ slug: data?.slug as string, collection: 'arquivo', req }),
    useAsTitle: 'title',
  },
  fields: [
    // "Projeto" — main title
    {
      name: 'title',
      label: 'Project',
      type: 'text',
      required: true,
    },

    // Sidebar: Year → Client → Tag → Result (in this order)
    {
      name: 'year',
      label: 'Year',
      type: 'text',
      admin: { position: 'sidebar' },
    },
    {
      name: 'client',
      label: 'Client',
      type: 'text',
      admin: { position: 'sidebar' },
    },
    {
      name: 'tag',
      label: 'Tag',
      type: 'relationship',
      relationTo: 'arquivo-tags',
      admin: { position: 'sidebar' },
    },
    {
      name: 'result',
      label: 'Result',
      type: 'text',
      admin: { position: 'sidebar' },
    },

    // Content and SEO in tabs
    {
      type: 'tabs',
      tabs: [
        {
          fields: [
            {
              name: 'heroImage',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'excerpt',
              label: 'Excerpt',
              type: 'textarea',
              admin: {
                description: 'Short text shown in the listing. Recommended maximum: 160 characters.',
              },
            },
            {
              name: 'content',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                    BlocksFeature({ blocks: [Banner, Code, MediaBlock] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    HorizontalRuleFeature(),
                  ]
                },
              }),
              label: false,
            },
          ],
          label: 'Content',
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({ hasGenerateFn: true }),
            MetaImageField({ relationTo: 'media' }),
            MetaDescriptionField({}),
            PreviewField({
              hasGenerateFn: true,
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },

    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        date: { pickerAppearance: 'dayAndTime' },
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) return new Date()
            return value
          },
        ],
      },
    },
    {
      name: 'authors',
      type: 'relationship',
      admin: { position: 'sidebar' },
      hasMany: true,
      relationTo: 'users',
    },
    {
      name: 'populatedAuthors',
      type: 'array',
      access: { update: () => false },
      admin: { disabled: true, readOnly: true },
      fields: [
        { name: 'id', type: 'text' },
        { name: 'name', type: 'text' },
      ],
    },
    slugField(),
  ],
  hooks: {
    afterChange: [revalidateArquivo],
    afterRead: [populateAuthors],
    afterDelete: [revalidateArquivoDelete],
  },
  versions: {
    drafts: {
      autosave: { interval: 100 },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
