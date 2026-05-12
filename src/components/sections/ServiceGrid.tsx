import React from 'react'

export function ServiceGrid({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={['grid grid-cols-1 md:grid-cols-3 gap-5', className].filter(Boolean).join(' ')}
    >
      {children}
    </div>
  )
}
