import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { Arquivo } from '../../../payload-types'

export const revalidateArquivo: CollectionAfterChangeHook<Arquivo> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/arquivo/${doc.slug}`

      payload.logger.info(`Revalidating arquivo at path: ${path}`)

      revalidatePath(path)
      revalidateTag('arquivo-sitemap', 'max')
    }

    if (previousDoc._status === 'published' && doc._status !== 'published') {
      const oldPath = `/arquivo/${previousDoc.slug}`

      payload.logger.info(`Revalidating old arquivo at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidateTag('arquivo-sitemap', 'max')
    }
  }
  return doc
}

export const revalidateArquivoDelete: CollectionAfterDeleteHook<Arquivo> = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    const path = `/arquivo/${doc?.slug}`

    revalidatePath(path)
    revalidateTag('arquivo-sitemap', 'max')
  }

  return doc
}
