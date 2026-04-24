export interface NavLink {
  label: string
  href: string
  external?: boolean
}

export const mainNav: NavLink[] = [
  {
    label: 'Soluções',
    href: '#solutions',
  },
  {
    label: 'Sobre',
    href: '/about',
  },
  {
    label: 'Contato',
    href: '/contact',
  },
]

export const ctaButton = {
  text: 'Fale Conosco',
  href: '/contact',
}

export const footerNav = {
  solutions: [
    {
      label: 'Proteção de Dados',
      href: '/solutions/data-protection',
    },
    {
      label: 'Cibersegurança',
      href: '/solutions/cybersecurity',
    },
    {
      label: 'Storage',
      href: '/solutions/storage',
    },
  ],
  company: [
    {
      label: 'Sobre Nós',
      href: '/about',
    },
    {
      label: 'Contato',
      href: '/contact',
    },
  ],
  legal: [
    {
      label: 'Política de Privacidade',
      href: '/privacy',
    },
  ],
}
