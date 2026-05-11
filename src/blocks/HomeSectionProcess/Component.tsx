import React from 'react'
import type { HomeSectionProcessBlock } from '@/payload-types'
import { SectionTitle, ProcessTrail } from '@/home/sections'
import { parseTitle } from '@/utilities/parseTitle'
import { Sparkle } from '@/home/illustrations'

export const HomeSectionProcessComponent: React.FC<HomeSectionProcessBlock> = ({
  background,
  eyebrow,
  title,
  description,
  highlightIndex,
  steps,
}) => {
  const isWhite = background === 'white'

  return (
    <section
      className={`relative px-12 py-24 overflow-hidden${isWhite ? ' bg-white' : ''}`}
    >
      {!isWhite && <Sparkle size={42} color="#FE9D2B" className="absolute top-14 right-20" />}
      <div className="max-w-7xl mx-auto">
        <div className={`mb-6 ${isWhite ? 'max-w-2xl' : 'text-center max-w-2xl mx-auto'}`}>
          <SectionTitle
            eyebrow={eyebrow}
            align={isWhite ? 'left' : 'center'}
            description={description ?? undefined}
          >
            {parseTitle(title)}
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
