import React from 'react'
import type { HomeSectionLogoCloudBlock } from '@/payload-types'
import { LogoCloud } from '@/home/sections'
import { Orange } from '@/home/primitives'
import { LogoMark } from '@/home/cards'
import { Glyph } from '@/home/illustrations'

export const HomeSectionLogoCloudComponent: React.FC<HomeSectionLogoCloudBlock> = ({
  eyebrow,
  titleStart,
  titleAccent,
  titleEnd,
  description,
  partners,
}) => {
  return (
    <LogoCloud
      eyebrow={eyebrow}
      title={
        <>
          {titleStart}
          <Orange>{titleAccent}</Orange>
          {titleEnd}
        </>
      }
      description={description ?? undefined}
      items={(partners ?? []).map((partner) => (
        <LogoMark
          key={partner.id}
          name={partner.name}
          icon={<Glyph kind={partner.glyph as Parameters<typeof Glyph>[0]['kind']} />}
        />
      ))}
    />
  )
}
