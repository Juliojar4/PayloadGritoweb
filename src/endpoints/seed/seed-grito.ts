import type { Payload, PayloadRequest, File } from 'payload'
import fs from 'fs'
import path from 'path'
import { gritoHome, gritoPortfolio, gritoBlog, gritoServices, gritoContato } from './grito-pages'

const ASSETS_DIR = path.join(process.cwd(), 'src/endpoints/seed/assets')

async function loadLocalFile(filename: string, mimetype: string): Promise<File> {
  const filePath = path.join(ASSETS_DIR, filename)
  const data = fs.readFileSync(filePath)
  return {
    name: filename,
    data: Buffer.from(data),
    mimetype,
    size: data.byteLength,
  }
}

async function upsertMedia(
  payload: Payload,
  file: File,
  alt: string,
) {
  const existing = await payload.find({
    collection: 'media',
    where: { filename: { equals: file.name } },
    limit: 1,
  })
  if (existing.docs.length > 0) {
    return existing.docs[0]!
  }
  return payload.create({
    collection: 'media',
    data: { alt },
    file,
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function upsertPage(payload: Payload, req: PayloadRequest, data: any) {
  const existing = await payload.find({
    collection: 'pages',
    where: { slug: { equals: data.slug } },
    depth: 0,
    limit: 1,
  })

  if (existing.docs.length > 0) {
    payload.logger.info(`  ↻ Updating page "${data.slug}"`)
    return payload.db.updateOne({
      collection: 'pages',
      id: existing.docs[0]!.id,
      data,
      req,
    })
  }

  payload.logger.info(`  + Creating page "${data.slug}"`)
  return payload.create({
    collection: 'pages',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: data as any,
    depth: 0,
    context: { disableRevalidate: true },
  })
}

export const seedGritoPages = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> => {
  payload.logger.info('— Uploading Grito media assets...')

  const [heroFile, aboutFile, ctaFile] = await Promise.all([
    loadLocalFile('hero-home.png', 'image/png'),
    loadLocalFile('sobrenos-hero.svg', 'image/svg+xml'),
    loadLocalFile('sobrenos-cta.svg', 'image/svg+xml'),
  ])

  const [heroImage, aboutImage, ctaImage] = await Promise.all([
    upsertMedia(payload, heroFile, 'Grito Web — hero da home'),
    upsertMedia(payload, aboutFile, 'Grito Web — equipe / sobre nós'),
    upsertMedia(payload, ctaFile, 'Grito Web — imagem CTA'),
  ])

  payload.logger.info('— Seeding Grito pages...')

  await Promise.all([
    upsertPage(payload, req, gritoHome({ heroImage, aboutImage, ctaImage })),
    upsertPage(payload, req, gritoPortfolio({ heroImage })),
    upsertPage(payload, req, gritoBlog()),
    upsertPage(payload, req, gritoServices({ heroImage })),
    upsertPage(payload, req, gritoContato()),
  ])

  payload.logger.info('Grito pages seeded successfully!')
}
