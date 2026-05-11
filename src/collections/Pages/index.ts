import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { Archive } from '../../blocks/ArchiveBlock/config'
import { CallToAction } from '../../blocks/CallToAction/config'
import { Content } from '../../blocks/Content/config'
import { FormBlock } from '../../blocks/Form/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import { HomeHero } from '../../blocks/HomeHero/config'
import { ThreeCards } from '../../blocks/ThreeCards/config'
import { HomeSectionHero } from '../../blocks/HomeSectionHero/config'
import { HomeSectionLogoCloud } from '../../blocks/HomeSectionLogoCloud/config'
import { HomeSectionServices } from '../../blocks/HomeSectionServices/config'
import { HomeSectionAbout } from '../../blocks/HomeSectionAbout/config'
import { HomeSectionProjects } from '../../blocks/HomeSectionProjects/config'
import { HomeSectionProcess } from '../../blocks/HomeSectionProcess/config'
import { HomeSectionStats } from '../../blocks/HomeSectionStats/config'
import { HomeSectionTestimonials } from '../../blocks/HomeSectionTestimonials/config'
import { HomeSectionBlog } from '../../blocks/HomeSectionBlog/config'
import { HomeSectionCta } from '../../blocks/HomeSectionCta/config'
import { HomeSectionContact } from '../../blocks/HomeSectionContact/config'
import { ChecklistGrid } from '../../blocks/ChecklistGrid/config'
import { FaqBlock } from '../../blocks/FaqBlock/config'
import { PullQuote } from '../../blocks/PullQuote/config'
import { ProjectGridAsymmetric } from '../../blocks/ProjectGridAsymmetric/config'
import { ContactSection } from '../../blocks/ContactSection/config'
import { BlogListing } from '../../blocks/BlogListing/config'
import { ArquivoListing } from '../../blocks/ArquivoListing/config'
import { hero } from '@/heros/config'
import { slugField } from 'payload'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { revalidateDelete, revalidatePage } from './hooks/revalidatePage'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

export const Pages: CollectionConfig<'pages'> = {
  slug: 'pages',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  // This config controls what's populated by default when a page is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'pages'>
  defaultPopulate: {
    title: true,
    slug: true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) =>
        generatePreviewPath({
          slug: data?.slug,
          collection: 'pages',
          req,
        }),
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: data?.slug as string,
        collection: 'pages',
        req,
      }),
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [hero],
          label: 'Hero',
        },
        {
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [
                CallToAction,
                Content,
                MediaBlock,
                Archive,
                FormBlock,
                HomeHero,
                ThreeCards,
                HomeSectionHero,
                HomeSectionLogoCloud,
                HomeSectionServices,
                HomeSectionAbout,
                HomeSectionProjects,
                HomeSectionProcess,
                HomeSectionStats,
                HomeSectionTestimonials,
                HomeSectionBlog,
                HomeSectionCta,
                HomeSectionContact,
                ChecklistGrid,
                FaqBlock,
                PullQuote,
                ProjectGridAsymmetric,
                ContactSection,
                BlogListing,
                ArquivoListing,
              ],
              required: true,
              admin: {
                initCollapsed: true,
              },
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
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
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
        position: 'sidebar',
      },
    },
    slugField(),
  ],
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
