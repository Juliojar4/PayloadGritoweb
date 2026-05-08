import React from 'react'
import type { FaqBlockBlock } from '@/payload-types'
import { SectionTitle } from '@/home/sections'
import { Orange } from '@/home/primitives'
import { FaqAccordion } from './Component.client'

export const FaqBlockComponent: React.FC<FaqBlockBlock> = ({
  eyebrow,
  titleStart,
  titleAccent,
  titleEnd,
  defaultOpenIndex,
  items,
}) => {
  return (
    <section className="px-12 py-22">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <SectionTitle eyebrow={eyebrow ?? undefined} align="center">
            {titleStart}
            {titleAccent && <Orange>{titleAccent}</Orange>}
            {titleEnd}
          </SectionTitle>
        </div>
        <FaqAccordion
          items={(items ?? []).map((item) => ({
            question: item.question,
            answer: item.answer,
          }))}
          defaultOpenIndex={defaultOpenIndex ?? 0}
        />
      </div>
    </section>
  )
}
