import React from 'react'
import Image from 'next/image'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

import type { ProjectGridAsymmetricBlock, Portfolio, Media } from '@/payload-types'
import { SectionTitle, ProjectGrid } from '@/home/sections'
import { Orange } from '@/home/primitives'
import { Button } from '@/home/primitives'
import { ProjectCard } from '@/home/cards'
import { Tag } from '@/home/primitives'

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
)

const spanClasses: Record<number, string> = {
  7: 'md:col-span-7',
  5: 'md:col-span-5',
  4: 'md:col-span-4',
}

function spanFor(index: number): 7 | 5 | 4 {
  const remainder = index % 5
  if (remainder === 0) return 7
  if (remainder === 1) return 5
  return 4
}

function PortfolioImage({ image, title }: { image: Media; title: string }) {
  if (!image?.url) return null
  return (
    <Image
      src={image.url}
      alt={image.alt ?? title}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  )
}

export const ProjectGridAsymmetricComponent: React.FC<ProjectGridAsymmetricBlock> = async ({
  eyebrow,
  titleStart,
  titleAccent,
  portfolioLabel,
  portfolioHref,
  limit = 5,
  selectedProjects,
}) => {
  const payload = await getPayload({ config: configPromise })

  let portfolios: Portfolio[] = []

  if (selectedProjects && selectedProjects.length > 0) {
    const ids = selectedProjects.map((p) => (typeof p === 'object' ? p.id : p))
    const result = await payload.find({
      collection: 'portfolios',
      where: { id: { in: ids } },
      depth: 1,
      limit: ids.length,
    })
    portfolios = result.docs as Portfolio[]
    // preserve selected order
    portfolios.sort((a, b) => ids.indexOf(a.id) - ids.indexOf(b.id))
  } else {
    const result = await payload.find({
      collection: 'portfolios',
      sort: '-publishedAt',
      depth: 1,
      limit: limit ?? 5,
    })
    portfolios = result.docs as Portfolio[]
  }

  return (
    <section className="bg-white border-y border-line px-12 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-9">
          <SectionTitle eyebrow={eyebrow ?? undefined} align="left">
            {titleStart}
            <Orange>{titleAccent}</Orange>
          </SectionTitle>
          {portfolioLabel && (
            <Button variant="ghost" href={portfolioHref ?? '/portfolio'} icon={<ArrowRight />}>
              {portfolioLabel}
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {portfolios.map((portfolio, index) => {
            const span = spanFor(index)
            const image = portfolio.image as Media | null
            const href = `/portfolio/${portfolio.slug}`
            const firstCategory = portfolio.categories?.[0]
            const categoryTag =
              typeof firstCategory === 'object' ? firstCategory.title : undefined
            const tag = categoryTag ?? portfolio.tag ?? undefined

            return (
              <div key={portfolio.id} className={spanClasses[span]}>
                <ProjectCard
                  client={portfolio.client}
                  title={portfolio.title}
                  result={portfolio.result ?? undefined}
                  tag={tag}
                  tagVariant={(portfolio.tagVariant as 'blue' | 'orange') ?? 'blue'}
                  accent={(portfolio.accent as 'blue' | 'orange') ?? 'blue'}
                  year={portfolio.year ?? undefined}
                  href={href}
                  motif={
                    image ? (
                      <div className="absolute inset-0">
                        <PortfolioImage image={image} title={portfolio.title} />
                      </div>
                    ) : undefined
                  }
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
