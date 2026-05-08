import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { RenderHomeBlocks } from './RenderHomeBlocks'

export async function HomePageComponent() {
  const payload = await getPayload({ config })
  const home = await payload.findGlobal({ slug: 'home' })

  return <RenderHomeBlocks blocks={home.layout} />
}
