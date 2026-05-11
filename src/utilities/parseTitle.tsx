import React from 'react'

/**
 * Renders a title string with accent highlighting and line breaks.
 *
 * Syntax:
 *   *word*  → <span class="text-orange">word</span>
 *   \n      → <br />
 *
 * @param raw           The title string from Payload.
 * @param nonAccentClass  Optional class applied to plain (non-orange) text spans.
 *                       Useful when the surrounding element's default weight needs overriding,
 *                       e.g. "font-light" in a hero heading.
 *
 * Example:
 *   parseTitle('Sites que *gritam*,\nnegócios que *escalam*.')
 */
export function parseTitle(raw?: string | null, nonAccentClass?: string): React.ReactNode {
  if (!raw) return null

  const lines = raw.split('\n')
  const nodes: React.ReactNode[] = []

  lines.forEach((line, li) => {
    line.split('*').forEach((part, pi) => {
      if (!part) return
      if (pi % 2 === 1) {
        nodes.push(
          <span key={`${li}-${pi}`} className="text-orange">
            {part}
          </span>,
        )
      } else if (nonAccentClass) {
        nodes.push(
          <span key={`${li}-${pi}`} className={nonAccentClass}>
            {part}
          </span>,
        )
      } else {
        nodes.push(part)
      }
    })
    if (li < lines.length - 1) nodes.push(<br key={`br-${li}`} />)
  })

  return nodes.length === 1 ? nodes[0] : nodes
}
