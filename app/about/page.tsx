import type { Metadata } from 'next'
import AboutPageClient from './AboutPageClient'

export const metadata: Metadata = {
  title: 'Sobre Nós | Plattano Technologies | Parceiro de TI Confiável na Flórida',
  description:
    'Conheça a Plattano Technologies, seu parceiro de TI confiável na Flórida. 7+ anos protegendo mais de 1.100 empresas com soluções comprovadas de backup, storage e cibersegurança.',
  keywords: [
    'empresa de TI Flórida',
    'serviços de TI Orlando',
    'soluções de TI empresarial',
    'especialistas em proteção de dados',
    'especialistas em cibersegurança',
    'parceiro de TI Flórida',
  ],
  alternates: {
    canonical: 'https://plattano.com/about',
  },
  openGraph: {
    title: 'Sobre a Plattano Technologies | Parceiro de TI Confiável na Flórida',
    description:
      '7+ anos protegendo mais de 1.100 empresas com soluções de TI comprovadas. Baseados em Orlando, Flórida.',
    url: 'https://plattano.com/about',
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
    title: 'Sobre a Plattano Technologies | Parceiro de TI Confiável',
    description: '7+ anos protegendo mais de 1.100 empresas com soluções de TI comprovadas.',
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
