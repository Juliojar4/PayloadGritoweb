import React from 'react'
import type { SectionTestimonialsBlock } from '@/payload-types'
import { SectionTitle, TestimonialsSection } from '@/components/sections'
import { parseTitle } from '@/utilities/parseTitle'
import { TestimonialCard } from '@/home/cards'

export const SectionTestimonialsComponent: React.FC<SectionTestimonialsBlock> = ({
  eyebrow,
  title,
  description,
  ratingValue,
  reviewCount,
  testimonials,
}) => {
  return (
    <TestimonialsSection
      leading={
        <>
          <SectionTitle
            eyebrow={eyebrow}
            align="left"
            description={description ?? undefined}
          >
            {parseTitle(title)}
          </SectionTitle>
          <div className="mt-6 flex items-center gap-2">
            <div className="flex gap-0.5">
              {[0, 1, 2, 3, 4].map((index) => (
                <svg
                  key={index}
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="#FE9D2B"
                  aria-hidden="true"
                >
                  <polygon points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9" />
                </svg>
              ))}
            </div>
            <span className="font-display font-bold text-blue ml-1">{ratingValue}</span>
            <span className="text-mute text-sm">· {reviewCount}</span>
          </div>
        </>
      }
    >
      {(testimonials ?? []).map((testimonial) => (
        <TestimonialCard
          key={testimonial.id}
          quote={testimonial.quote}
          author={testimonial.author}
          role={testimonial.role ?? undefined}
          avatarVariant={testimonial.avatarVariant as 'blue' | 'orange'}
          surface={testimonial.surface as 'paper' | 'card'}
        />
      ))}
    </TestimonialsSection>
  )
}
