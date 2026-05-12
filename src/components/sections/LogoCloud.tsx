import React from 'react'
import { SectionTitle } from './SectionTitle'

export function LogoCloud({
  eyebrow,
  title,
  description,
  items,
  className = '',
}: {
  eyebrow?: string
  title: React.ReactNode
  description?: string
  items: React.ReactNode[]
  className?: string
}) {
  const root = ['bg-white border-y border-line px-12 py-22', className]
    .filter(Boolean)
    .join(' ')
  return (
    <section className={root}>
      <div className="max-w-7xl mx-auto">
        <SectionTitle eyebrow={eyebrow} description={description} align="center">
          {title}
        </SectionTitle>
      </div>
      <div className='max-w-7xl mx-auto mt-20'>
        <ul className="grid grid-cols-2 gap-x-8 gap-y-8 list-none p-0 m-0 items-center justify-items-center">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
