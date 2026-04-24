import type { Metadata } from 'next'
import StoragePageClient from './StoragePageClient'

export const metadata: Metadata = {
  title: 'Soluções de Storage | ExaGrid & Hot Cloud Storage | Plattano Technologies',
  description:
    'Soluções de storage empresarial com ExaGrid e Plattano Hot Cloud Storage. Reduza os custos de storage em até 85% com object storage compatível com S3 e deduplicação.',
  keywords: [
    'parceiro ExaGrid',
    'cloud storage',
    'object storage',
    'storage S3',
    'deduplicação de dados',
    'soluções de storage',
    'storage empresarial',
  ],
  alternates: {
    canonical: 'https://plattano.com/solutions/storage',
  },
  openGraph: {
    title: 'Soluções de Storage | ExaGrid & Hot Cloud Storage | Plattano',
    description:
      'Soluções de storage empresarial. Reduza os custos de storage em até 85% com object storage compatível com S3.',
    url: 'https://plattano.com/solutions/storage',
    siteName: 'Plattano Technologies',
    images: [
      {
        url: 'https://plattano.com/images/home/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Soluções de Storage',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soluções de Storage | ExaGrid & Hot Cloud Storage',
    description: 'Soluções de storage empresarial. Reduza os custos de storage em até 85%.',
  },
}

export default function StoragePage() {
  return <StoragePageClient />
}
