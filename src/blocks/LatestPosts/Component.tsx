import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type { LatestPostsBlock, Post, Tag } from '@/payload-types'
import { SectionTitle, PostGrid } from '@/components/sections'
import { Button } from '@/home/primitives'
import { parseTitle } from '@/utilities/parseTitle'
import { PostCard } from '@/home/cards'

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

const PT_MONTHS = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

function formatDate(iso: string): string {
  const d = new Date(iso)
  return `${d.getUTCDate()} · ${PT_MONTHS[d.getUTCMonth()]} · ${d.getUTCFullYear()}`
}

export const LatestPostsComponent: React.FC<LatestPostsBlock> = async ({
  eyebrow,
  title,
  blogLabel,
  blogHref,
}) => {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 3,
    overrideAccess: false,
    sort: '-publishedAt',
    select: {
      title: true,
      slug: true,
      excerpt: true,
      tags: true,
      publishedAt: true,
    },
  })

  const posts = result.docs as Post[]

  return (
    <section className="bg-white border-t border-line px-12 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-9">
          <SectionTitle eyebrow={eyebrow ?? undefined} align="left">
            {parseTitle(title)}
          </SectionTitle>
          {blogLabel && (
            <Button variant="ghost" href={blogHref ?? '#'} icon={<ArrowRight />}>
              {blogLabel}
            </Button>
          )}
        </div>
        <PostGrid>
          {posts.map((post) => {
            const firstTag =
              Array.isArray(post.tags) && post.tags.length > 0
                ? (post.tags[0] as Tag)
                : null

            return (
              <PostCard
                key={post.id}
                tag={firstTag?.title ?? undefined}
                tagVariant="blue"
                date={post.publishedAt ? formatDate(post.publishedAt) : undefined}
                title={post.title}
                excerpt={post.excerpt ?? undefined}
                href={`/posts/${post.slug}`}
              />
            )
          })}
        </PostGrid>
      </div>
    </section>
  )
}
