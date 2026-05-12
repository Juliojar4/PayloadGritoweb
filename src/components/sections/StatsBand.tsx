import React from 'react'
import { OrangeBlob, DotGrid } from '@/home/illustrations'

export function StatsBand({
  stats,
  showDecoration = true,
  className = '',
}: {
  stats: { value: string; label: string }[]
  showDecoration?: boolean
  className?: string
}) {
  const root = [
    'relative bg-blue text-white px-12 py-18 overflow-hidden',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section className={root}>
      {showDecoration && (
        <>
          <div aria-hidden="true" className="absolute -top-10 -right-10 opacity-20">
            <OrangeBlob size={260} />
          </div>
          <div aria-hidden="true" className="absolute -bottom-10 left-10 opacity-40">
            <DotGrid cols={10} rows={4} gap={18} color="#FE9D2B" opacity={1} />
          </div>
        </>
      )}
      <dl className="relative max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 m-0">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-2">
            <dd className="order-1 m-0 font-display font-black text-6xl leading-none tracking-tight text-white">
              {stat.value}
            </dd>
            <dt className="order-2 m-0 font-display font-medium text-base text-orange-300">
              {stat.label}
            </dt>
          </div>
        ))}
      </dl>
    </section>
  )
}
