import React from 'react'
import Image from 'next/image'
import type { SectionHeroBlock } from '@/payload-types'
import type { Media } from '@/payload-types'
import { HeroSection } from '@/components/sections'
import { Button } from '@/home/primitives'
import { parseTitle } from '@/utilities/parseTitle'
import { Sparkle } from '@/home/illustrations'

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

export const SectionHeroComponent: React.FC<SectionHeroBlock> = ({
  eyebrow,
  title,
  description,
  cta1Label,
  cta1Href,
  cta2Label,
  cta2Href,
  image,
}) => {
  const media = image as Media

  const hasActions = cta1Label || cta2Label

  return (
    <HeroSection
      eyebrow={eyebrow ?? undefined}
      title={parseTitle(title, 'font-light')}
      description={description}
      actions={
        hasActions ? (
          <>
            {cta1Label && (
              <Button href={cta1Href ?? '#'} icon={<ArrowRight />}>
                {cta1Label}
              </Button>
            )}
            {cta2Label && (
              <Button href={cta2Href ?? '#'} variant="ghost">
                {cta2Label}
              </Button>
            )}
          </>
        ) : undefined
      }
      media={
        media && typeof media !== 'string' ? (
          <div className="relative">
            <Sparkle size={38} color="#080717" className="absolute top-5 right-12" />
            <Sparkle size={24} color="#FE9D2B" className="absolute bottom-14 left-2.5" />
            <Image
              src={media.url!}
              alt={media.alt || ''}
              width={media.width ?? 480}
              height={media.height ?? 480}
              className="w-full max-w-[480px] h-auto"
            />
          </div>
        ) : undefined
      }
    />
  )
}
