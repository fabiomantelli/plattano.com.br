import type { Metadata } from 'next'
import CybersecurityPageClient from './CybersecurityPageClient'

export const metadata: Metadata = {
  title: 'Soluções de Cibersegurança | SentinelOne & Rainforest | Plattano Technologies',
  description:
    'Cibersegurança com IA via SentinelOne e Rainforest. Proteção contra ameaças avançadas, ransomware e ataques à marca. Trial gratuito de 30 dias disponível.',
  keywords: [
    'parceiro SentinelOne',
    'cibersegurança Florianópolis',
    'proteção de endpoint',
    'plataforma XDR',
    'proteção contra ransomware',
    'proteção de marca',
    'monitoramento dark web',
    'soluções de cibersegurança',
    'segurança Rainforest',
  ],
  alternates: {
    canonical: 'https://plattano.com/solutions/cybersecurity',
  },
  openGraph: {
    title: 'Soluções de Cibersegurança | SentinelOne & Rainforest | Plattano',
    description:
      'Proteção com IA contra ameaças avançadas, ransomware e ataques à marca. Trial gratuito de 30 dias.',
    url: 'https://plattano.com/solutions/cybersecurity',
    siteName: 'Plattano Technologies',
    images: [
      {
        url: 'https://plattano.com/images/home/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Soluções de Cibersegurança',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soluções de Cibersegurança | SentinelOne & Rainforest',
    description: 'Proteção com IA contra ameaças avançadas e ransomware.',
  },
}

export default function CybersecurityPage() {
  return <CybersecurityPageClient />
}
