'use client'

import React, { useState } from 'react'

function AccordionItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string
  answer: string
  open: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="w-full text-left py-6 flex items-start justify-between gap-6 bg-transparent border-0 cursor-pointer font-display text-lg font-medium text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-paper rounded-sm"
      >
        <span className="flex-1">{question}</span>
        <span
          aria-hidden="true"
          className={[
            'shrink-0 inline-flex items-center justify-center h-7 w-7 rounded-full text-base font-normal leading-none',
            'transition-[background-color,color,transform] duration-150 motion-reduce:transition-none',
            open ? 'bg-orange text-white rotate-45' : 'bg-blue/8 text-blue',
          ].join(' ')}
        >
          +
        </span>
      </button>
      {open && (
        <div className="pb-7 pr-10">
          <p className="m-0 text-base text-ink-soft leading-relaxed max-w-3xl">{answer}</p>
        </div>
      )}
    </div>
  )
}

export function FaqAccordion({
  items,
  defaultOpenIndex = 0,
}: {
  items: { question: string; answer: string }[]
  defaultOpenIndex?: number
}) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex)

  return (
    <div className="flex flex-col">
      {items.map((item, index) => (
        <AccordionItem
          key={item.question}
          question={item.question}
          answer={item.answer}
          open={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
        />
      ))}
    </div>
  )
}
