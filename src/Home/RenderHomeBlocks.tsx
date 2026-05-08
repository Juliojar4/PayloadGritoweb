import React, { Fragment } from 'react'
import type { Home } from '@/payload-types'

import { HomeSectionHeroComponent } from '@/blocks/HomeSectionHero/Component'
import { HomeSectionLogoCloudComponent } from '@/blocks/HomeSectionLogoCloud/Component'
import { HomeSectionServicesComponent } from '@/blocks/HomeSectionServices/Component'
import { HomeSectionAboutComponent } from '@/blocks/HomeSectionAbout/Component'
import { HomeSectionProjectsComponent } from '@/blocks/HomeSectionProjects/Component'
import { HomeSectionProcessComponent } from '@/blocks/HomeSectionProcess/Component'
import { HomeSectionStatsComponent } from '@/blocks/HomeSectionStats/Component'
import { HomeSectionTestimonialsComponent } from '@/blocks/HomeSectionTestimonials/Component'
import { HomeSectionBlogComponent } from '@/blocks/HomeSectionBlog/Component'
import { HomeSectionCtaComponent } from '@/blocks/HomeSectionCta/Component'
import { HomeSectionContactComponent } from '@/blocks/HomeSectionContact/Component'

const blockComponents = {
  homeSectionHero: HomeSectionHeroComponent,
  homeSectionLogoCloud: HomeSectionLogoCloudComponent,
  homeSectionServices: HomeSectionServicesComponent,
  homeSectionAbout: HomeSectionAboutComponent,
  homeSectionProjects: HomeSectionProjectsComponent,
  homeSectionProcess: HomeSectionProcessComponent,
  homeSectionStats: HomeSectionStatsComponent,
  homeSectionTestimonials: HomeSectionTestimonialsComponent,
  homeSectionBlog: HomeSectionBlogComponent,
  homeSectionCta: HomeSectionCtaComponent,
  homeSectionContact: HomeSectionContactComponent,
} as const

export function RenderHomeBlocks({ blocks }: { blocks: Home['layout'] }) {
  if (!blocks || !Array.isArray(blocks) || blocks.length === 0) return null

  return (
    <Fragment>
      {blocks.map((block, index) => {
        const { blockType } = block
        if (blockType && blockType in blockComponents) {
          const Block = blockComponents[blockType as keyof typeof blockComponents]
          if (Block) {
            // @ts-expect-error block types are discriminated unions
            return <Block key={index} {...block} />
          }
        }
        return null
      })}
    </Fragment>
  )
}
