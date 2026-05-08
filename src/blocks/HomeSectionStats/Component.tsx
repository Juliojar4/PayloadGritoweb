import React from 'react'
import type { HomeSectionStatsBlock } from '@/payload-types'
import { StatsBand } from '@/home/sections'

export const HomeSectionStatsComponent: React.FC<HomeSectionStatsBlock> = ({
  stats,
  showDecoration,
}) => {
  return (
    <StatsBand
      stats={(stats ?? []).map((s) => ({ value: s.value, label: s.label }))}
      showDecoration={showDecoration ?? true}
    />
  )
}
