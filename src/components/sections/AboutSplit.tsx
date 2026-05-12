import React from 'react'

export function AboutSplit({
  media,
  children,
  className = '',
}: {
  media: React.ReactNode
  children: React.ReactNode
  className?: string
}) {
  const root = ['relative px-12 py-24', className].filter(Boolean).join(' ')
  return (
    <section className={root}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.05fr] gap-16 items-center">
        <div className="relative">{media}</div>
        <div>{children}</div>
      </div>
    </section>
  )
}

export function AboutFeatures({
  items,
  className = '',
}: {
  items: { title: string; description: string }[]
  className?: string
}) {
  const root = ['grid grid-cols-1 sm:grid-cols-2 gap-5 list-none p-0 m-0', className]
    .filter(Boolean)
    .join(' ')
  return (
    <ul className={root}>
      {items.map((item) => (
        <li key={item.title} className="flex gap-3">
          <span
            aria-hidden="true"
            className="flex shrink-0 items-center justify-center h-7 w-7 rounded-full bg-orange text-white font-black text-sm"
          >
            ✓
          </span>
          <div>
            <div className="font-display font-bold text-[15px] text-ink">{item.title}</div>
            <p className="m-0 text-mute text-sm mt-0.5">{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
