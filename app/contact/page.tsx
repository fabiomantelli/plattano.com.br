import type { Metadata } from 'next'
import ContactPageClient from './ContactPageClient'

export const metadata: Metadata = {
  title: 'Fale Conosco | Plattano Technologies | Soluções de TI em Florianópolis',
  description:
    'Entre em contato com a Plattano Technologies. Localizada em Florianópolis, SC. Ligue (321) 313-8762 ou envie e-mail para plattano@plattano.com.br. Tempo médio de resposta: 4 horas.',
  keywords: [
    'contato Plattano',
    'suporte de TI em Florianópolis',
    'serviços de TI em Florianópolis',
    'consultoria de TI',
    'contato TI empresarial',
    'contato Plattano Technologies',
  ],
  alternates: {
    canonical: 'https://plattano.com/contact',
  },
  openGraph: {
    title: 'Fale com a Plattano Technologies | Soluções de TI em Florianópolis',
    description:
      'Entre em contato com nossos especialistas de TI. Localizada em Florianópolis, SC. Resposta em até 4 horas.',
    url: 'https://plattano.com/contact',
    siteName: 'Plattano Technologies',
    images: [
      {
        url: 'https://plattano.com/images/home/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Contato Plattano Technologies',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fale com a Plattano Technologies',
    description: 'Entre em contato com nossos especialistas de TI. Resposta em até 4 horas.',
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
