import React from 'react'
import type { HomeSectionProcessBlock } from '@/payload-types'
import { SectionTitle, ProcessTrail } from '@/home/sections'
import { Orange } from '@/home/primitives'
import { Sparkle } from '@/home/illustrations'

export const HomeSectionProcessComponent: React.FC<HomeSectionProcessBlock> = ({
  eyebrow,
  titleStart,
  titleAccent,
  titleEnd,
  description,
  highlightIndex,
  steps,
}) => {
  return (
    <section className="relative px-12 py-24 overflow-hidden">
      <Sparkle size={42} color="#FE9D2B" className="absolute top-14 right-20" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <SectionTitle eyebrow={eyebrow} align="center" description={description ?? undefined}>
            {titleStart}
            <Orange>{titleAccent}</Orange>
            {titleEnd}
          </SectionTitle>
        </div>
        <ProcessTrail
          steps={(steps ?? []).map((s) => ({
            title: s.title,
            description: s.description ?? undefined,
          }))}
          highlightIndex={highlightIndex ?? -1}
        />
      </div>
    </section>
  )
}
