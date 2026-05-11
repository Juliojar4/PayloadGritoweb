import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { cache } from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/heros/RenderHero'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './[slug]/page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { PayloadRedirects } from '@/components/PayloadRedirects'

const queryHomePage = cache(async (draft: boolean) => {
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'pages',
    draft,
    limit: 1,
    pagination: false,
    overrideAccess: draft,
    where: { slug: { equals: 'home' } },
  })
  return result.docs?.[0] ?? null
})

export default async function Page() {
  const { isEnabled: draft } = await draftMode()
  const page = await queryHomePage(draft)

  if (!page) {
    return <PayloadRedirects url="/" />
  }

  const { hero, layout } = page

  return (
    <article>
      <PageClient />
      <PayloadRedirects disableNotFound url="/" />
      {draft && <LivePreviewListener />}
      <RenderHero {...hero} />
      <RenderBlocks blocks={layout} />
    </article>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const { isEnabled: draft } = await draftMode()
  const page = await queryHomePage(draft)
  return generateMeta({ doc: page })
}
