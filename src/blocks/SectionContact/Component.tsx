import React from 'react'
import type { SectionContactBlock } from '@/payload-types'
import { FaleComAGente } from '@/components/sections'
import { ChatMark } from '@/home/illustrations'

export const SectionContactComponent: React.FC<SectionContactBlock> = ({
  email,
  emailHref,
  phone,
  phoneHref,
}) => {
  return (
    <FaleComAGente
      email={email}
      emailHref={emailHref}
      phone={phone}
      phoneHref={phoneHref}
      chatMark={<ChatMark size={120} />}
    />
  )
}
