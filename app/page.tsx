import type { Metadata } from 'next'
import HeroSection from './components/sections/HeroSection'
import TrustSection from './components/sections/TrustSection'
import SolutionsSection from './components/sections/SolutionsSection'
import PartnersSection from './components/sections/PartnersSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import CTASection from './components/sections/CTASection'
import StructuredData from './components/seo/StructuredData'
import { generateWebSiteSchema } from './lib/seo/generateStructuredData'

export const metadata: Metadata = {
  title: 'Plattano Technologies | Soluções de TI Empresarial na Flórida',
  description:
    'Provedor líder de soluções de backup, storage e cibersegurança na Flórida. Parceiro certificado Veeam, ExaGrid e SentinelOne. Proteja e escale seu negócio.',
  keywords: [
    'soluções de TI Flórida',
    'parceiro Veeam',
    'soluções de backup',
    'cibersegurança',
    'proteção de dados',
    'cloud storage',
    'TI empresarial',
    'serviços de TI Orlando',
    'parceiro ExaGrid',
    'parceiro SentinelOne',
  ],
  alternates: {
    canonical: 'https://plattano.com',
  },
  openGraph: {
    title: 'Plattano Technologies | Soluções de TI Empresarial na Flórida',
    description:
      'Provedor líder de soluções de backup, storage e cibersegurança na Flórida. Confiado por mais de 1.100 empresas.',
    url: 'https://plattano.com',
    siteName: 'Plattano Technologies',
    images: [
      {
        url: 'https://plattano.com/images/home/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Plattano Technologies',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plattano Technologies | Soluções de TI Empresarial',
    description:
      'Provedor líder de soluções de backup, storage e cibersegurança na Flórida.',
    images: ['https://plattano.com/images/home/logo.webp'],
  },
}

export default function NewHomePage() {
  const websiteSchema = generateWebSiteSchema()

  return (
    <>
      <StructuredData data={websiteSchema} />
      <HeroSection />
      <TrustSection />
      <SolutionsSection />
      <PartnersSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
