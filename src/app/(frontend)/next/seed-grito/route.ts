import { createLocalReq, getPayload } from 'payload'
import { seedGritoPages } from '@/endpoints/seed/seed-grito'
import config from '@payload-config'
import { headers } from 'next/headers'

export const maxDuration = 120

export async function POST(): Promise<Response> {
  if (process.env.NODE_ENV === 'production') {
    return new Response('Not available in production.', { status: 403 })
  }

  const payload = await getPayload({ config })

  try {
    const payloadReq = await createLocalReq({}, payload)
    await seedGritoPages({ payload, req: payloadReq })
    return Response.json({ success: true })
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e)
    payload.logger.error({ err: e, message: 'Error seeding Grito pages' })
    return Response.json({ success: false, error: msg }, { status: 500 })
  }
}
