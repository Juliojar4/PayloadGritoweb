import type { Metadata } from 'next'
import { HomePageComponent } from '@/Home/Component'

export default function Page() {
  return <HomePageComponent />
}

export const metadata: Metadata = {
  title: 'GritoWeb — Sites que gritam, negócios que escalam',
  description:
    'Estúdio digital especializado em WordPress, e-commerce e produtos web sob medida.',
}
