import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { ThreeCardsBlock as ThreeCardsBlockProps } from '@/payload-types'
import type { Media } from '@/payload-types'

export const ThreeCardsBlock: React.FC<ThreeCardsBlockProps> = ({
  sectionTitle,
  sectionTitleHighlight,
  ctaLabel,
  ctaUrl,
  cards,
}) => {
  if (!cards || cards.length === 0) return null

  const borderClass = (color: string) =>
    color === 'secondary' ? 'border-secondary' : 'border-primary'

  return (
    <section className="mt-20 p-4 md:p-8 lg:px-0">
      {/* Section heading */}
      <div className="text-center md:text-left">
        <h2 className="capitalize text-primary font-bold text-2xl md:text-3xl lg:text-4xl">
          {sectionTitle}{' '}
          <span className="text-secondary">{sectionTitleHighlight}</span>
        </h2>
      </div>

      <div className="px-2 md:px-0 lg:px-16">
        <div className="flex flex-col md:flex-row md:justify-around md:gap-4 lg:gap-4">
          {cards.map((card, index) => {
            const image = card.image as Media | null
            const border = borderClass(card.borderColor ?? 'primary')

            /* ── Card 0: image overflows top-center ── */
            if (index === 0) {
              return (
                <div key={index} className="mt-12  w-full">
                  <div className={`${border} border-3 rounded-xl p-4 md:p-6 lg:h-97 relative`}>
                    {image && typeof image !== 'string' && (
                      <div className="overflow-visible flex justify-center pt-5 mt-[-3rem] md:mt-[-4rem] lg:mt-[-5rem]">
                        <Image
                          src={image.url!}
                          alt={image.alt || card.title}
                          width={295}
                          height={286}
                          className="w-[140px] md:w-[180px] lg:w-[250px]"
                        />
                      </div>
                    )}
                    <h3 className="text-primary mb-4 md:text-center">
                      {card.titleHighlight ? (
                        <>
                          {card.title}
                          <span className="text-secondary">{card.titleHighlight}</span>
                        </>
                      ) : (
                        card.title
                      )}
                    </h3>
                    <p className="text-black md:text-center">{card.description}</p>
                  </div>
                </div>
              )
            }

            /* ── Card 1: image above card on mobile, below card on desktop ── */
            if (index === 1) {
              return (
                <div key={index} className="mt-12  w-full">
                  <div className={`${border} border-3 rounded-xl p-4 md:p-6 lg:h-97`}>
                    {/* Mobile image */}
                    {image && typeof image !== 'string' && (
                      <div className="mt-[-6rem] md:mt-[-7rem] lg:hidden flex justify-center pt-5">
                        <Image
                          src={image.url!}
                          alt={image.alt || card.title}
                          width={140}
                          height={128}
                          className="md:w-[180px]"
                        />
                      </div>
                    )}
                    <h3 className="text-primary mb-4 md:text-center">
                      {card.titleHighlight ? (
                        <>
                          {card.title}{' '}
                          <span className="text-secondary">{card.titleHighlight}</span>
                        </>
                      ) : (
                        card.title
                      )}
                    </h3>
                    <p className="text-black md:text-center">{card.description}</p>
                  </div>
                  {/* Desktop image */}
                  {image && typeof image !== 'string' && (
                    <div className="hidden lg:flex justify-center items-center pt-5 lg:pt-0 mt-[-9rem]">
                      <Image
                        src={image.url!}
                        alt={image.alt || card.title}
                        width={250}
                        height={229}
                      />
                    </div>
                  )}
                </div>
              )
            }

            /* ── Card 2: image overflows top-right on desktop, bottom-right on mobile ── */
            return (
              <div key={index} className="mt-12 w-full">
                {/* Desktop image above card */}
                {image && typeof image !== 'string' && (
                  <div className="hidden lg:flex justify-end mr-[-27px] lg:mb-[-140px]">
                    <Image
                      src={image.url!}
                      alt={image.alt || card.title}
                      width={250}
                      height={271}
                    />
                  </div>
                )}
                <div
                  className={`${border} border-3 rounded-xl p-4 md:p-6 lg:h-97 lg:flex justify-end lg:flex-col`}
                >
                  <h3 className="text-secondary mb-4 md:text-center">
                    {card.titleHighlight ? (
                      <>
                        {card.title}
                        <span className="text-primary">{card.titleHighlight}</span>
                      </>
                    ) : (
                      card.title
                    )}
                  </h3>
                  <p className="text-black md:text-center">{card.description}</p>
                  {/* Mobile image */}
                  {image && typeof image !== 'string' && (
                    <div className="mb-[-4rem] md:mb-[-6rem] flex justify-end pt-5 mr-[-27px] lg:hidden">
                      <Image
                        src={image.url!}
                        alt={image.alt || card.title}
                        width={140}
                        height={152}
                        className="md:w-[180px]"
                      />
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

 
      </div>

      {/* CTA — mobile */}
      {ctaLabel && ctaUrl && (
        <div className="flex justify-center mt-24 md:hidden">
          <Link
            href={ctaUrl}
            className="px-3 py-1 text-white text-xl bg-primary rounded-3xl"
          >
            {ctaLabel}
          </Link>
        </div>
      )}
    </section>
  )
}
