import React from 'react'
import type { Hero } from '@/payload-types'
import type { Media } from '@/payload-types'
import Image from 'next/image'

export const HeroBlock: React.FC<Hero> = ({ title, 'hero-image': heroImage }) => {
  const image = heroImage as Media 

  return (
    <section className="container">
      <h1>{title}</h1>
      {image && typeof image !== 'string' && (
        <Image
          src={image.url!}
          alt={image.alt || title}
          width={image.width!}
          height={image.height!}
        />
      )}
    </section>
  )
}