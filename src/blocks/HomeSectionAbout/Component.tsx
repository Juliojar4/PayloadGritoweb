import React from 'react'
import Image from 'next/image'
import type { HomeSectionAboutBlock } from '@/payload-types'
import type { Media } from '@/payload-types'
import { AboutSplit, AboutFeatures } from '@/home/sections'
import { Button, Orange } from '@/home/primitives'

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

export const HomeSectionAboutComponent: React.FC<HomeSectionAboutBlock> = ({
  eyebrow,
  titlePart1,
  titleAccent1,
  titlePart2,
  titleAccent2,
  description,
  ctaLabel,
  ctaHref,
  features,
  image,
}) => {
  const media = image as Media

  return (
    <AboutSplit
      media={
        media && typeof media !== 'string' ? (
          <Image
            src={media.url!}
            alt={media.alt || ''}
            width={media.width ?? 520}
            height={media.height ?? 520}
            className="w-full max-w-[520px] h-auto"
          />
        ) : null
      }
    >
      <p className="font-eyebrow m-0 mb-2">{eyebrow}</p>
      <h2 className="m-0 text-blue">
        {titlePart1}
        <Orange>{titleAccent1}</Orange>
        {titlePart2 &&
          titlePart2.split('\n').map((part, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {part}
            </span>
          ))}
        {titleAccent2 && <Orange>{titleAccent2}</Orange>}
      </h2>
      <p className="body-text mt-4 text-ink-soft">{description}</p>
      <AboutFeatures
        items={(features ?? []).map((f) => ({ title: f.title, description: f.description }))}
        className="mt-7"
      />
      <div className="mt-8">
        <Button variant="blue" href={ctaHref} icon={<ArrowRight />}>
          {ctaLabel}
        </Button>
      </div>
    </AboutSplit>
  )
}
