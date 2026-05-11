import 'dotenv/config'
import { getPayload, createLocalReq } from 'payload'
import config from '@payload-config'
import { seedGritoPages } from '@/endpoints/seed/seed-grito'

async function run() {
  console.log('[seed] Starting...')
  const payload = await getPayload({ config })
  console.log('[seed] Payload initialized')

  const req = await createLocalReq({}, payload)
  console.log('[seed] Local req created')

  try {
    await seedGritoPages({ payload, req })
    console.log('[seed] Done!')
  } catch (err) {
    console.error('[seed] Error:', err)
    process.exit(1)
  }

  process.exit(0)
}

run()
