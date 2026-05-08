import React from 'react'
import Image from 'next/image'
import type { HomeSectionHeroBlock } from '@/payload-types'
import type { Media } from '@/payload-types'
import { HeroSection } from '@/home/sections'
import { Button, Orange } from '@/home/primitives'
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

export const HomeSectionHeroComponent: React.FC<HomeSectionHeroBlock> = ({
  titlePart1,
  titleAccent1,
  titlePart2,
  titleAccent2,
  description,
  cta1Label,
  cta1Href,
  cta2Label,
  cta2Href,
  image,
}) => {
  const media = image as Media

  return (
    <HeroSection
      title={
        <>
          <span className="font-light">{titlePart1}</span>
          <Orange>{titleAccent1}</Orange>,<br />
          <span className="font-light">{titlePart2}</span>
          <Orange>{titleAccent2}</Orange>
        </>
      }
      description={description}
      actions={
        <>
          <Button href={cta1Href} icon={<ArrowRight />}>
            {cta1Label}
          </Button>
          {cta2Label && (
            <Button href={cta2Href ?? '#'} variant="ghost">
              {cta2Label}
            </Button>
          )}
        </>
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
