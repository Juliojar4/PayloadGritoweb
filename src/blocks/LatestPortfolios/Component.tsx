import React from 'react'
import Image from 'next/image'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type { LatestPortfoliosBlock, Portfolio, Media } from '@/payload-types'
import { SectionTitle, ProjectGrid } from '@/home/sections'
import { Button } from '@/home/primitives'
import { parseTitle } from '@/utilities/parseTitle'
import { ProjectCard } from '@/home/cards'

const ArrowRight = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    aria-hidden="true"
  >
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
)

export const LatestPortfoliosComponent: React.FC<LatestPortfoliosBlock> = async ({
  eyebrow,
  title,
  portfolioLabel,
  portfolioHref,
}) => {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'portfolios',
    depth: 1,
    limit: 3,
    overrideAccess: false,
    sort: '-publishedAt',
    select: {
      title: true,
      slug: true,
      client: true,
      image: true,
      tagVariant: true,
      accent: true,
      year: true,
      result: true,
    },
  })

  const portfolios = result.docs as Portfolio[]

  return (
    <section className="bg-white border-y border-line px-12 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-9">
          <SectionTitle eyebrow={eyebrow ?? undefined} align="left">
            {parseTitle(title)}
          </SectionTitle>
          {portfolioLabel && (
            <Button variant="ghost" href={portfolioHref ?? '#'} icon={<ArrowRight />}>
              {portfolioLabel}
            </Button>
          )}
        </div>
        <ProjectGrid>
          {portfolios.map((portfolio) => {
            const image =
              portfolio.image && typeof portfolio.image === 'object'
                ? (portfolio.image as Media)
                : null

            return (
              <ProjectCard
                key={portfolio.id}
                tagVariant={(portfolio.tagVariant ?? 'blue') as 'blue' | 'orange'}
                accent={(portfolio.accent ?? 'blue') as 'blue' | 'orange'}
                client={portfolio.client}
                year={portfolio.year ?? undefined}
                title={portfolio.title}
                result={portfolio.result ?? undefined}
                motif={
                  image?.url ? (
                    <div className="relative w-full h-[180px] max-w-[190px] overflow-hidden rounded-xl">
                      <Image
                        src={image.url}
                        alt={image.alt ?? portfolio.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover max-w-[190px]"
                      />
                    </div>
                  ) : undefined
                }
                href={`/portfolio/${portfolio.slug}`}
              />
            )
          })}
        </ProjectGrid>
      </div>
    </section>
  )
}
