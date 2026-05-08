import type { GlobalConfig } from 'payload'

import { HomeSectionHero } from '@/blocks/HomeSectionHero/config'
import { HomeSectionLogoCloud } from '@/blocks/HomeSectionLogoCloud/config'
import { HomeSectionServices } from '@/blocks/HomeSectionServices/config'
import { HomeSectionAbout } from '@/blocks/HomeSectionAbout/config'
import { HomeSectionProjects } from '@/blocks/HomeSectionProjects/config'
import { HomeSectionProcess } from '@/blocks/HomeSectionProcess/config'
import { HomeSectionStats } from '@/blocks/HomeSectionStats/config'
import { HomeSectionTestimonials } from '@/blocks/HomeSectionTestimonials/config'
import { HomeSectionBlog } from '@/blocks/HomeSectionBlog/config'
import { HomeSectionCta } from '@/blocks/HomeSectionCta/config'
import { HomeSectionContact } from '@/blocks/HomeSectionContact/config'
import { revalidateHome } from './hooks/revalidateHome'

export const Home: GlobalConfig = {
  slug: 'home',
  label: 'Página Home',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'layout',
      label: 'Seções da página',
      type: 'blocks',
      required: true,
      blocks: [
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
      ],
      admin: {
        initCollapsed: true,
      },
    },
  ],
  hooks: {
    afterChange: [revalidateHome],
  },
}
