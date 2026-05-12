import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { SectionHeroComponent } from '@/blocks/SectionHero/Component'
import { SectionLogoCloudComponent } from '@/blocks/SectionLogoCloud/Component'
import { SectionServicesComponent } from '@/blocks/SectionServices/Component'
import { SectionAboutComponent } from '@/blocks/SectionAbout/Component'
import { SectionProjectsComponent } from '@/blocks/SectionProjects/Component'
import { SectionProcessComponent } from '@/blocks/SectionProcess/Component'
import { SectionStatsComponent } from '@/blocks/SectionStats/Component'
import { SectionTestimonialsComponent } from '@/blocks/SectionTestimonials/Component'
import { SectionBlogComponent } from '@/blocks/SectionBlog/Component'
import { SectionCtaComponent } from '@/blocks/SectionCta/Component'
import { SectionContactComponent } from '@/blocks/SectionContact/Component'
import { ChecklistGridComponent } from '@/blocks/ChecklistGrid/Component'
import { FaqBlockComponent } from '@/blocks/FaqBlock/Component'
import { PullQuoteComponent } from '@/blocks/PullQuote/Component'
import { ProjectGridAsymmetricComponent } from '@/blocks/ProjectGridAsymmetric/Component'
import { ContactSectionComponent } from '@/blocks/ContactSection/Component'
import { BlogListingComponent } from '@/blocks/BlogListing/Component'
import { ArquivoListingComponent } from '@/blocks/ArquivoListing/Component'
import { LatestPortfoliosComponent } from '@/blocks/LatestPortfolios/Component'
import { LatestPostsComponent } from '@/blocks/LatestPosts/Component'
import { PortfolioListingComponent } from '@/blocks/PortfolioListing/Component'

const blockComponents = {
  homeSectionHero: SectionHeroComponent,
  homeSectionLogoCloud: SectionLogoCloudComponent,
  homeSectionServices: SectionServicesComponent,
  homeSectionAbout: SectionAboutComponent,
  homeSectionProjects: SectionProjectsComponent,
  homeSectionProcess: SectionProcessComponent,
  homeSectionStats: SectionStatsComponent,
  homeSectionTestimonials: SectionTestimonialsComponent,
  homeSectionBlog: SectionBlogComponent,
  homeSectionCta: SectionCtaComponent,
  homeSectionContact: SectionContactComponent,
  checklistGrid: ChecklistGridComponent,
  faqBlock: FaqBlockComponent,
  pullQuote: PullQuoteComponent,
  projectGridAsymmetric: ProjectGridAsymmetricComponent,
  contactSection: ContactSectionComponent,
  blogListing: BlogListingComponent,
  arquivoListing: ArquivoListingComponent,
  latestPortfolios: LatestPortfoliosComponent,
  latestPosts: LatestPostsComponent,
  portfolioListing: PortfolioListingComponent,
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
                <div className="" key={index}>
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
