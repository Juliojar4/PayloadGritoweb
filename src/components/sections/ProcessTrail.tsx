import React from 'react'
import { StepBullet } from '@/home/primitives'

export function ProcessTrail({
  steps,
  highlightIndex = -1,
  className = '',
}: {
  steps: { title: string; description?: string }[]
  highlightIndex?: number
  className?: string
}) {
  const root = ['relative pt-14 pb-3', className].filter(Boolean).join(' ')
  return (
    <div className={root}>
      <div
        aria-hidden="true"
        className="hidden md:block absolute left-[60px] right-[60px] top-[86px] h-[3px] bg-paper-dim"
      />
      <ol className="flex flex-col md:flex-row md:justify-between gap-12 md:gap-2 list-none p-0 m-0 relative">
        {steps.map((step, index) => (
          <li key={step.title} className="flex-1 px-2 text-center">
            <StepBullet
              variant={index === highlightIndex ? 'orange' : 'blue'}
              className="mx-auto"
            >
              {index + 1}
            </StepBullet>
            <p className="mt-3.5 m-0 font-display font-bold text-base">{step.title}</p>
            {step.description && (
              <p className="mt-1.5 m-0 text-sm text-mute max-w-[14rem] mx-auto">
                {step.description}
              </p>
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}
