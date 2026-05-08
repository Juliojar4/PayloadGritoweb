import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { HomeHeroBlock } from '@/blocks/HomeHero/Component'
import { ThreeCardsBlock } from '@/blocks/ThreeCards/Component'
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
import { ChecklistGridComponent } from '@/blocks/ChecklistGrid/Component'
import { FaqBlockComponent } from '@/blocks/FaqBlock/Component'
import { PullQuoteComponent } from '@/blocks/PullQuote/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  homeHero: HomeHeroBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  threeCards: ThreeCardsBlock,
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
  checklistGrid: ChecklistGridComponent,
  faqBlock: FaqBlockComponent,
  pullQuote: PullQuoteComponent,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="my-16" key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
