import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type { ArquivoListingBlock, ArquivoTag } from '@/payload-types'
import { ArquivoListingClient, type ArquivoItem, type FilterOption } from './ArquivoListingClient'

export const ArquivoListingComponent: React.FC<ArquivoListingBlock> = async ({
  eyebrow,
  titleStart,
  titleAccent,
  titleEnd,
  showYear,
  showSearch,
  showFilters,
}) => {
  const payload = await getPayload({ config: configPromise })

  const [arquivosResult, tagsResult] = await Promise.all([
    payload.find({
      collection: 'arquivo',
      depth: 1,
      limit: 200,
      overrideAccess: false,
      sort: '-publishedAt',
      select: {
        title: true,
        slug: true,
        year: true,
        client: true,
        tag: true,
        result: true,
      },
    }),
    payload.find({
      collection: 'arquivo-tags',
      depth: 0,
      limit: 100,
      overrideAccess: false,
    }),
  ])

  const items: ArquivoItem[] = arquivosResult.docs.map((arquivo) => {
    const tagObj = typeof arquivo.tag === 'object' && arquivo.tag !== null
      ? (arquivo.tag as ArquivoTag)
      : null

    return {
      id: arquivo.id,
      title: arquivo.title,
      slug: arquivo.slug,
      year: arquivo.year ?? null,
      client: arquivo.client ?? null,
      service: tagObj?.title ?? null,
      serviceId: tagObj?.id ?? null,
      result: arquivo.result ?? null,
      href: `/arquivo/${arquivo.slug}`,
    }
  })

  const filters: FilterOption[] = tagsResult.docs.map((tag) => ({
    label: tag.title,
    value: tag.id,
  }))

  return (
    <ArquivoListingClient
      items={items}
      filters={filters}
      eyebrow={eyebrow}
      titleStart={titleStart}
      titleAccent={titleAccent}
      titleEnd={titleEnd}
      showYear={showYear ?? true}
      showSearch={showSearch ?? true}
      showFilters={showFilters ?? true}
    />
  )
}
