import type { Metadata } from 'next'
import DataProtectionPageClient from './DataProtectionPageClient'

export const metadata: Metadata = {
  title: 'Soluções de Proteção de Dados | Veeam Backup & Recovery | Plattano Technologies',
  description:
    'Veeam Gold Partner. Proteção de dados completa com backup, recuperação e proteção contra ransomware para ambientes físicos, virtuais e cloud. Trial gratuito disponível.',
  keywords: [
    'parceiro Veeam',
    'proteção de dados',
    'soluções de backup',
    'disaster recovery',
    'backup Veeam',
    'proteção contra ransomware',
    'backup cloud',
    'recuperação de dados',
    'backup empresarial',
  ],
  alternates: {
    canonical: 'https://plattano.com/solutions/data-protection',
  },
  openGraph: {
    title: 'Soluções de Proteção de Dados | Veeam Backup & Recovery | Plattano',
    description:
      'Veeam Gold Partner. Proteção de dados completa com backup, recuperação e proteção contra ransomware. Trial gratuito.',
    url: 'https://plattano.com/solutions/data-protection',
    siteName: 'Plattano Technologies',
    images: [
      {
        url: 'https://plattano.com/images/home/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Soluções de Proteção de Dados',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soluções de Proteção de Dados | Veeam Backup & Recovery',
    description: 'Proteção de dados completa com Veeam. Veeam Gold Partner.',
  },
}

export default function DataProtectionPage() {
  return <DataProtectionPageClient />
}
