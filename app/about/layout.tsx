import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre Nós',
  description:
    'Conheça a Plattano Technologies — seu parceiro de TI confiável em Florianópolis desde 2018. Engenheiros certificados, soluções comprovadas, atendimento excepcional.',
  alternates: {
    canonical: 'https://plattano.com/about',
  },
  openGraph: {
    title: 'Sobre Nós | Plattano Technologies',
    description:
      'Conheça a Plattano Technologies — seu parceiro de TI confiável em Florianópolis desde 2018.',
    url: 'https://plattano.com/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre Nós | Plattano Technologies',
    description: 'Seu parceiro de TI confiável em Florianópolis desde 2018.',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
