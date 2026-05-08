import React from 'react'
import type { HomeSectionContactBlock } from '@/payload-types'
import { FaleComAGente } from '@/home/sections'
import { ChatMark } from '@/home/illustrations'

export const HomeSectionContactComponent: React.FC<HomeSectionContactBlock> = ({
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
