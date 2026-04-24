export interface Solution {
  id: string
  icon: string
  title: string
  description: string
  stat: string
  href: string
}

export const solutions: Solution[] = [
  {
    id: 'data-protection',
    icon: '💾',
    title: 'Proteção de Dados',
    description: 'Proteja seus dados contra ransomware, falhas e desastres. Recuperação em minutos, não horas.',
    stat: '99,9% de disponibilidade',
    href: '/solutions/data-protection',
  },
  {
    id: 'cybersecurity',
    icon: '🛡️',
    title: 'Cibersegurança',
    description: 'Defesa com IA contra ameaças. Detecção e resposta automáticas 24/7.',
    stat: '99,8% de bloqueio de ameaças',
    href: '/solutions/cybersecurity',
  },
  {
    id: 'storage',
    icon: '📦',
    title: 'Storage',
    description: 'Storage escalável com deduplicação. Economize até 60% nos custos.',
    stat: 'Até 60% de economia',
    href: '/solutions/storage',
  },
]

export interface Partner {
  name: string
  logo: string
}

export const partners: Partner[] = [
  { name: 'Veeam', logo: '/images/partners/veeam-logo.svg' },
  { name: 'SentinelOne', logo: '/images/partners/sentinelone-logo.svg' },
  { name: 'ExaGrid', logo: '/images/partners/exagrid-logo.svg' },
  { name: 'Rainforest', logo: '/images/partners/rainforest-logo.svg' },
]

export interface Stat {
  value: string
  label: string
}

export const stats: Stat[] = [
  { value: '15+', label: 'Anos de Experiência' },
  { value: '500+', label: 'Clientes Protegidos' },
  { value: '40%', label: 'Economia Média' },
]

export interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
}

export const testimonials: Testimonial[] = [
  {
    quote: 'A Plattano nos ajudou a reduzir os custos de backup em 40% e melhorar nossa segurança. Equipe extremamente profissional.',
    author: 'John Smith',
    role: 'CTO',
    company: 'Tech Corp',
  },
  {
    quote: 'A implementação foi tranquila e o suporte é excelente. Nos sentimos muito mais seguros agora.',
    author: 'Maria Garcia',
    role: 'Diretora de TI',
    company: 'Healthcare Plus',
  },
  {
    quote: 'Melhor decisão que tomamos para nossa infraestrutura de TI. O ROI foi alcançado em menos de 6 meses.',
    author: 'David Chen',
    role: 'VP de Operações',
    company: 'Finance Solutions',
  },
]
