import React from 'react'
import type { SectionBlogBlock } from '@/payload-types'
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
  >
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
)

export const SectionBlogComponent: React.FC<SectionBlogBlock> = ({
  eyebrow,
  title,
  blogLabel,
  blogHref,
  posts,
}) => {
  return (
    <section className="bg-white border-t border-line px-12 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-9">
          <SectionTitle eyebrow={eyebrow} align="left">
            {parseTitle(title)}
          </SectionTitle>
          {blogLabel && (
            <Button variant="ghost" href={blogHref ?? '#'} icon={<ArrowRight />}>
              {blogLabel}
            </Button>
          )}
        </div>
        <PostGrid>
          {(posts ?? []).map((post) => (
            <PostCard
              key={post.id}
              tag={post.tag}
              tagVariant={post.tagVariant as 'blue' | 'orange'}
              date={post.date}
              title={post.title}
              excerpt={post.excerpt ?? undefined}
              href={post.href ?? '#'}
            />
          ))}
        </PostGrid>
      </div>
    </section>
  )
}
