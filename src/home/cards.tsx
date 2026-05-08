import React from 'react'
import { IconBadge, Tag, Avatar } from './primitives'

// ── LogoMark ────────────────────────────────────────────────

export function LogoMark({
  name,
  icon,
  className = '',
}: {
  name: string
  icon: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={['inline-flex items-center gap-2.5 text-mute', className]
        .filter(Boolean)
        .join(' ')}
    >
      {icon}
      <span className="font-display font-semibold text-[17px] tracking-tight whitespace-nowrap">
        {name}
      </span>
    </div>
  )
}

// ── ServiceCard ─────────────────────────────────────────────

const serviceAccentText: Record<string, string> = {
  blue: 'text-blue',
  orange: 'text-orange',
}

export function ServiceCard({
  variant = 'blue',
  icon,
  title,
  description,
  bullets,
  ctaLabel,
  href,
  className = '',
}: {
  variant?: 'blue' | 'orange'
  icon: React.ReactNode
  title: string
  description?: string
  bullets?: string[]
  ctaLabel?: string
  href?: string
  className?: string
}) {
  const baseClasses = [
    'block bg-white border border-line rounded-3xl p-7',
    'flex flex-col gap-3.5 no-underline',
    'transition-shadow duration-150 motion-reduce:transition-none',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-paper',
    href ? 'hover:shadow-[0_8px_28px_rgba(8,7,23,0.06)] cursor-pointer' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const titleClasses = `font-display font-bold text-2xl ${serviceAccentText[variant]}`

  const inner = (
    <>
      <IconBadge variant={variant} size="md">
        {icon}
      </IconBadge>
      <h3 className={titleClasses}>{title}</h3>
      {description && <p className="text-mute text-[15px] m-0">{description}</p>}
      {bullets && bullets.length > 0 && (
        <ul className="m-0 p-0 list-none flex flex-col gap-1.5 mt-1">
          {bullets.map((bullet) => (
            <li key={bullet} className={`text-sm flex gap-2 ${serviceAccentText[variant]}`}>
              <span aria-hidden="true" className="font-bold shrink-0">✓</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
      {ctaLabel && (
        <span
          className={`mt-1 inline-flex items-center gap-1.5 font-display font-medium text-sm ${serviceAccentText[variant]}`}
        >
          {ctaLabel}
          <span className="text-base">→</span>
        </span>
      )}
    </>
  )

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {inner}
      </a>
    )
  }
  return <div className={baseClasses}>{inner}</div>
}

// ── ProjectCard ─────────────────────────────────────────────

const projectAccentBg: Record<string, string> = {
  blue: 'bg-blue/8',
  orange: 'bg-orange/10',
}

export function ProjectCard({
  client,
  title,
  result,
  tag,
  tagVariant = 'blue',
  year,
  motif,
  accent = 'blue',
  href,
  className = '',
}: {
  client?: string
  title: string
  result?: string
  tag?: string
  tagVariant?: 'blue' | 'orange'
  year?: string
  motif?: React.ReactNode
  accent?: 'blue' | 'orange'
  href?: string
  className?: string
}) {
  const baseClasses = [
    'flex flex-col rounded-3xl overflow-hidden bg-white border border-line no-underline text-inherit',
    'transition-shadow duration-150 motion-reduce:transition-none',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-paper',
    href ? 'hover:shadow-[0_8px_28px_rgba(8,7,23,0.08)] cursor-pointer' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const inner = (
    <>
      <div
        className={`relative flex items-center justify-center min-h-[230px] p-6 ${projectAccentBg[accent]}`}
      >
        {motif}
        {tag && (
          <span className="absolute top-4 left-4">
            <Tag variant={tagVariant}>{tag}</Tag>
          </span>
        )}
        {year && (
          <time className="absolute top-4 right-4 font-mono text-xs text-mute">{year}</time>
        )}
      </div>
      <div className="px-6 pt-5 pb-6">
        {client && (
          <p className="m-0 font-display font-medium text-xs text-blue uppercase tracking-[0.08em]">
            {client}
          </p>
        )}
        <h3 className="mt-1.5 text-[22px] font-bold m-0">{title}</h3>
        {result && (
          <div className="mt-4 pt-3.5 border-t border-dashed border-line flex items-center justify-between">
            <span className="font-mono text-[13px] text-orange font-bold">{result}</span>
            <span aria-hidden="true" className="text-blue text-[22px]">
              →
            </span>
          </div>
        )}
      </div>
    </>
  )

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {inner}
      </a>
    )
  }
  return <article className={baseClasses}>{inner}</article>
}

// ── TestimonialCard ─────────────────────────────────────────

const testimonialSurface: Record<string, string> = {
  paper: 'bg-white',
  card: 'bg-card',
}

export function TestimonialCard({
  quote,
  author,
  role,
  surface = 'paper',
  avatarVariant = 'blue',
  className = '',
}: {
  quote: string
  author: string
  role?: string
  surface?: 'paper' | 'card'
  avatarVariant?: 'blue' | 'orange'
  className?: string
}) {
  const root = [
    'relative border border-line rounded-3xl p-7',
    testimonialSurface[surface],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <figure className={root}>
      <span
        aria-hidden="true"
        className="absolute top-4.5 right-5.5 font-display font-black text-orange/50 leading-[0.7] text-6xl"
      >
        &ldquo;
      </span>
      <blockquote className="m-0 pr-10">
        <p className="m-0 font-display font-light text-lg text-ink leading-snug">{quote}</p>
      </blockquote>
      <figcaption className="mt-4.5 pt-4 border-t border-dashed border-line flex items-center gap-3.5">
        <Avatar name={author} variant={avatarVariant} size="md" />
        <div>
          <div className="font-display font-bold text-[15px]">{author}</div>
          {role && <div className="text-mute text-xs">{role}</div>}
        </div>
      </figcaption>
    </figure>
  )
}

// ── PostCard ─────────────────────────────────────────────────

export function PostCard({
  tag,
  tagVariant = 'blue',
  date,
  title,
  excerpt,
  href,
  ctaLabel = 'Ler artigo',
  className = '',
}: {
  tag?: string
  tagVariant?: 'blue' | 'orange'
  date?: string
  title: string
  excerpt?: string
  href?: string
  ctaLabel?: string
  className?: string
}) {
  const baseClasses = [
    'flex flex-col gap-3 bg-paper border border-line rounded-3xl p-6',
    'no-underline text-inherit',
    'transition-shadow duration-150 motion-reduce:transition-none',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-paper',
    href ? 'hover:shadow-[0_8px_28px_rgba(8,7,23,0.06)] cursor-pointer' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const inner = (
    <>
      <div className="flex items-center justify-between">
        {tag && <Tag variant={tagVariant}>{tag}</Tag>}
        {date && <time className="font-mono text-xs text-mute">{date}</time>}
      </div>
      <h3 className="text-[22px] font-bold m-0">{title}</h3>
      {excerpt && <p className="m-0 text-[15px] text-mute">{excerpt}</p>}
      {ctaLabel && (
        <span className="mt-auto pt-2 font-display font-medium text-sm text-blue inline-flex items-center gap-1.5">
          {ctaLabel}
          <span className="text-base">→</span>
        </span>
      )}
    </>
  )

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {inner}
      </a>
    )
  }
  return <article className={baseClasses}>{inner}</article>
}
