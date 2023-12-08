import { Metadata } from 'next'

import { getCodeBayuData } from '@/services/codebayu'

import Container from '@/common/components/elements/Container'
import { METADATA } from '@/common/constant/metadata'
import { CareerProps } from '@/common/types/careers'
import { ContentProps } from '@/common/types/learn'

import Home from '@/modules/home'

export const metadata: Metadata = {
  title: `${METADATA.creator} | Personal Website`,
  alternates: {
    canonical: process.env.DOMAIN
  }
}

export default async function HomePage() {
  const careers = await getCareers()
  const learns = await getLearns()
  return (
    <>
      <Container data-aos="fade-up">
        <Home careers={careers} learns={learns} />
      </Container>
    </>
  )
}

async function getCareers(): Promise<CareerProps[]> {
  const response = await getCodeBayuData()
  return response.careers
}

async function getLearns(): Promise<ContentProps[]> {
  const response = await getCodeBayuData()
  return response.learns
}
