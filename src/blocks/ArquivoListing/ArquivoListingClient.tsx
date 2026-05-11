'use client'

import React, { useState, useMemo } from 'react'
import { parseTitle } from '@/utilities/parseTitle'

// ── Types ─────────────────────────────────────────────────────────────────────

export type ArquivoItem = {
  id: string
  title: string
  slug: string
  year: string | null
  client: string | null
  service: string | null
  serviceId: string | null
  result: string | null
  href: string
}

export type FilterOption = {
  label: string
  value: string
}

export type ArquivoListingClientProps = {
  items: ArquivoItem[]
  filters: FilterOption[]
  eyebrow?: string | null
  title?: string | null
  showYear: boolean
  showSearch: boolean
  showFilters: boolean
}

// ── Primitives ────────────────────────────────────────────────────────────────

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.3-4.3" />
  </svg>
)

const tagBase = 'inline-flex items-center px-3 py-1.5 rounded-full font-body text-xs font-bold uppercase tracking-[0.04em]'

function ServiceTag({ children, index }: { children: React.ReactNode; index: number }) {
  const variant = index % 2 === 0 ? 'bg-blue/10 text-blue' : 'bg-orange/15 text-orange-700'
  return <span className={`${tagBase} ${variant}`}>{children}</span>
}

const filterPillBase = [
  'px-4 py-2 rounded-full font-display font-medium text-sm cursor-pointer',
  'border-[1.5px] transition-colors duration-150 motion-reduce:transition-none',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-paper',
].join(' ')

// ── Table ─────────────────────────────────────────────────────────────────────

function ArquivoTable({
  items,
  showYear,
}: {
  items: ArquivoItem[]
  showYear: boolean
}) {
  const cols = showYear
    ? 'grid-cols-[80px_1.4fr_2fr_1fr_1fr_60px]'
    : 'grid-cols-[1.4fr_2fr_1fr_1fr_60px]'

  const headerClasses = `grid ${cols} gap-5 px-4 py-3.5 font-body font-bold text-[11px] uppercase tracking-[0.12em] text-mute border-b border-line`
  const rowClasses = `grid ${cols} gap-5 px-4 py-5 items-center border-b border-line text-inherit no-underline transition-colors duration-150 motion-reduce:transition-none hover:bg-blue/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-paper`

  return (
    <div className="flex flex-col" role="table" aria-label="Lista de arquivos">
      <div className={headerClasses} role="row">
        {showYear && <span role="columnheader">Ano</span>}
        <span role="columnheader">Cliente</span>
        <span role="columnheader">Projeto</span>
        <span role="columnheader">Serviço</span>
        <span role="columnheader">Resultado</span>
        <span role="columnheader" aria-hidden="true" />
      </div>

      {items.map((item, index) => (
        <a key={item.id} href={item.href} className={rowClasses} role="row">
          {showYear && (
            <span role="cell" className="font-display font-black text-[22px] text-orange">
              {item.year ?? '—'}
            </span>
          )}
          <span role="cell" className="font-display font-bold text-[15px] text-blue">
            {item.client ?? '—'}
          </span>
          <span role="cell" className="font-display font-medium text-[17px] text-ink">
            {item.title}
          </span>
          <span role="cell">
            {item.service ? (
              <ServiceTag index={index}>{item.service}</ServiceTag>
            ) : (
              <span className="text-mute text-sm">—</span>
            )}
          </span>
          <span role="cell" className="font-mono text-[13px] text-ink-soft">
            {item.result ?? '—'}
          </span>
          <span role="cell" aria-hidden="true" className="text-right text-blue text-[22px]">
            →
          </span>
        </a>
      ))}

      {items.length === 0 && (
        <p className="text-center text-mute py-20 col-span-full">Nenhum arquivo encontrado.</p>
      )}
    </div>
  )
}

// ── Main ──────────────────────────────────────────────────────────────────────

export function ArquivoListingClient({
  items,
  filters,
  eyebrow,
  title,
  showYear,
  showSearch,
  showFilters,
}: ArquivoListingClientProps) {
  const [search, setSearch] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return items.filter((item) => {
      const matchesFilter = activeFilter === 'all' || item.serviceId === activeFilter
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        (item.client ?? '').toLowerCase().includes(q) ||
        (item.result ?? '').toLowerCase().includes(q)
      return matchesFilter && matchesSearch
    })
  }, [items, search, activeFilter])

  return (
    <section className="px-6 md:px-12 py-24">
      <div className="max-w-7xl mx-auto">

        {/* Header row */}
        <div className="flex items-baseline justify-between gap-6 flex-wrap mb-6">
          <header className="flex flex-col gap-3 max-w-3xl">
            {eyebrow && <p className="font-eyebrow m-0">{eyebrow}</p>}
            <h2 className="m-0 text-blue">
              {parseTitle(title)}
            </h2>
          </header>

          {showSearch && (
            <div className="relative inline-flex">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-mute pointer-events-none">
                <SearchIcon />
              </span>
              <input
                type="search"
                aria-label="Buscar arquivos"
                placeholder="Buscar no arquivo…"
                value={search}
                onChange={(e) => { setSearch(e.target.value); }}
                className="w-full min-w-[280px] py-3 pl-11 pr-5 rounded-full border-[1.5px] border-line bg-white font-body text-sm text-ink placeholder:text-mute focus:outline-none focus:border-blue transition-colors duration-150 motion-reduce:transition-none"
              />
            </div>
          )}
        </div>

        {/* Filter pills */}
        {showFilters && filters.length > 0 && (
          <div
            className="pb-7 mb-7 border-b border-dashed border-line"
            role="group"
            aria-label="Filtrar por serviço"
          >
            <div className="flex flex-wrap gap-2.5 items-center">
              <span className="font-body font-bold text-xs uppercase tracking-[0.12em] text-mute mr-2">
                Filtrar por
              </span>
              {[{ label: 'Todos', value: 'all' }, ...filters].map((opt) => {
                const active = opt.value === activeFilter
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => { setActiveFilter(opt.value); }}
                    aria-pressed={active}
                    className={`${filterPillBase} ${
                      active
                        ? 'bg-blue text-white border-transparent'
                        : 'bg-transparent text-blue border-blue hover:bg-blue/5'
                    }`}
                  >
                    {opt.label}
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* Table */}
        <ArquivoTable items={filtered} showYear={showYear} />
      </div>
    </section>
  )
}
