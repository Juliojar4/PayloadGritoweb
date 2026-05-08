import React from 'react'
import { StepBullet } from './primitives'
import { DotGrid, OrangeBlob } from './illustrations'

// ── SectionTitle ───────────────────────────────────────────

export function SectionTitle({
  eyebrow,
  description,
  align = 'center',
  className = '',
  children,
}: {
  eyebrow?: string
  description?: string
  align?: 'left' | 'center'
  className?: string
  children: React.ReactNode
}) {
  const alignClasses: Record<string, string> = {
    left: '',
    center: 'text-center items-center mx-auto',
  }
  const root = ['flex flex-col gap-3 max-w-3xl', alignClasses[align], className]
    .filter(Boolean)
    .join(' ')
  return (
    <header className={root}>
      {eyebrow && <p className="font-eyebrow m-0">{eyebrow}</p>}
      <h2 className="m-0 text-blue">{children}</h2>
      {description && (
        <p className="body-text text-mute m-0 mt-2 max-w-prose">{description}</p>
      )}
    </header>
  )
}

// ── HeroSection ────────────────────────────────────────────

export function HeroSection({
  eyebrow,
  title,
  description,
  actions,
  media,
  trustLine,
  className = '',
}: {
  eyebrow?: string
  title: React.ReactNode
  description?: string
  actions?: React.ReactNode
  media?: React.ReactNode
  trustLine?: string
  className?: string
}) {
  const hasMedia = !!media
  const root = ['relative px-12 py-16', className].filter(Boolean).join(' ')
  const inner = hasMedia
    ? 'max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.1fr_1fr] items-center gap-12'
    : 'max-w-7xl mx-auto'

  return (
    <section className={root}>
      <div className={inner}>
        <div>
          {eyebrow && <p className="font-eyebrow m-0 mb-3">{eyebrow}</p>}
          <h1 className="m-0 text-blue">{title}</h1>
          {description && <p className="body-text text-mute mt-4 max-w-xl">{description}</p>}
          {actions && <div className="mt-6 flex flex-wrap gap-3">{actions}</div>}
          {trustLine && <p className="text-xs text-ink-soft mt-7 max-w-xl">{trustLine}</p>}
        </div>
        {hasMedia && (
          <div className="flex justify-center items-center min-h-[420px]">{media}</div>
        )}
      </div>
    </section>
  )
}

// ── LogoCloud layout ───────────────────────────────────────

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
        <ul className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-10 list-none p-0 m-0 items-center justify-items-center">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

// ── AboutSplit ─────────────────────────────────────────────

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

// ── ServiceGrid ────────────────────────────────────────────

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

// ── ProjectGrid ────────────────────────────────────────────

export function ProjectGrid({
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

// ── PostGrid ───────────────────────────────────────────────

export function PostGrid({
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

// ── ProcessTrail ───────────────────────────────────────────

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

// ── StatsBand ──────────────────────────────────────────────

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

// ── TestimonialsSection ────────────────────────────────────

export function TestimonialsSection({
  leading,
  children,
  className = '',
}: {
  leading: React.ReactNode
  children: React.ReactNode
  className?: string
}) {
  const root = ['relative px-12 py-24', className].filter(Boolean).join(' ')
  return (
    <section className={root}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <div className="self-start">{leading}</div>
        <div className="flex flex-col gap-5">{children}</div>
      </div>
    </section>
  )
}

// ── CtaBanner ──────────────────────────────────────────────

const ctaBannerVariant: Record<string, string> = {
  blue: 'bg-blue text-white',
  orange: 'bg-orange text-white',
}

export function CtaBanner({
  eyebrow,
  title,
  description,
  actions,
  media,
  variant = 'blue',
  className = '',
}: {
  eyebrow?: string
  title: React.ReactNode
  description?: string
  actions?: React.ReactNode
  media?: React.ReactNode
  variant?: 'blue' | 'orange'
  className?: string
}) {
  const root = ['px-12 py-20', className].filter(Boolean).join(' ')
  const inner = [
    'relative max-w-7xl mx-auto rounded-[32px] overflow-hidden',
    'p-10 md:p-14',
    'grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-10 items-center',
    ctaBannerVariant[variant],
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section className={root}>
      <div className={inner}>
        <div className="relative z-10">
          {eyebrow && <p className="font-eyebrow m-0 mb-2.5 text-white/85">{eyebrow}</p>}
          {title && <h2 className="m-0 text-white">{title}</h2>}
          {description && <p className="mt-3.5 max-w-[28rem] text-white/85">{description}</p>}
          {actions && <div className="mt-7 flex flex-wrap gap-3">{actions}</div>}
        </div>
        {media && <div className="relative z-10 flex justify-center">{media}</div>}
      </div>
    </section>
  )
}

// ── FaleComAGente ──────────────────────────────────────────

const channelClasses =
  'inline-flex items-center gap-3 px-6 py-3.5 rounded-full border-[1.5px] border-blue text-blue no-underline font-display font-medium transition-colors duration-150 motion-reduce:transition-none hover:bg-blue hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-paper'

function MailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M20 21a17 17 0 0 1-17-17v-1a2 2 0 0 1 2-2h3a2 2 0 0 1 2 1.7l.6 3.6a2 2 0 0 1-.6 1.8l-1.8 1.8a14 14 0 0 0 6.9 6.9l1.8-1.8a2 2 0 0 1 1.8-.6l3.6.6a2 2 0 0 1 1.7 2v3a2 2 0 0 1-2 2z" />
    </svg>
  )
}

export function FaleComAGente({
  email = 'contato@gritoweb.com',
  emailHref = 'mailto:contato@gritoweb.com',
  phone = '(15) 99739-4486',
  phoneHref = 'tel:+5515997394486',
  chatMark,
  className = '',
}: {
  email?: string
  emailHref?: string
  phone?: string
  phoneHref?: string
  chatMark: React.ReactNode
  className?: string
}) {
  const root = ['relative px-12 py-16 bg-paper border-t border-line', className]
    .filter(Boolean)
    .join(' ')

  return (
    <section className={root}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex items-center gap-6">
          {chatMark}
          <p className="m-0 font-display leading-none">
            <span className="block font-light text-[42px] text-blue">Fale com</span>
            <span className="block font-black text-[58px] text-orange">a gente!</span>
          </p>
        </div>
        <address className="not-italic flex flex-col gap-3.5">
          <a href={emailHref} className={channelClasses}>
            <MailIcon />
            {email}
          </a>
          <a href={phoneHref} className={channelClasses}>
            <PhoneIcon />
            {phone}
          </a>
        </address>
      </div>
    </section>
  )
}
