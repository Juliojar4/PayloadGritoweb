import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []

  return (
    <footer className="mt-auto border-t border-border bg-primary">
      <div className="container py-8 gap-8 flex flex-col items-center">
        <Link className="flex items-center" href="/">
          <Logo />
        </Link>

        <div className='flex flex-col items-center'>
          <p className='text-white text-xs text-thin'>©2026 GritoWeb | Todos os direitos reservados</p>
          <p className='text-white text-xs text-thin'>CNPJ: 27.467.329/0001-13</p>
        </div>
         
      </div>
    </footer>
  )
}
