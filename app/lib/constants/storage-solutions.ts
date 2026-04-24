export interface StorageSolution {
  id: string
  name: string
  tagline: string
  description: string
  features: {
    title: string
    description: string
    icon: string
  }[]
  idealFor: string[]
  pricing: string
}

export const exagrid: StorageSolution = {
  id: 'exagrid',
  name: 'ExaGrid',
  tagline: 'Appliance de Backup Storage',
  description:
    'Appliance de backup storage líder de mercado com deduplicação. Até 95% de redução de dados.',
  features: [
    {
      icon: '🗜️',
      title: 'Deduplicação Avançada',
      description: 'Até 95% de redução',
    },
    {
      icon: '⚡',
      title: 'Performance Ultra-Rápida',
      description: 'Backup/restore mais rápido do mercado',
    },
    {
      icon: '📈',
      title: 'Escalabilidade Linear',
      description: 'Adicione appliances conforme a necessidade',
    },
    {
      icon: '🔒',
      title: 'Retention Lock',
      description: 'Proteção contra ransomware',
    },
    {
      icon: '🤝',
      title: 'Integração Nativa',
      description: 'Veeam, Commvault, Veritas',
    },
    {
      icon: '🎯',
      title: 'Storage em Camadas',
      description: 'Landing zone + repositório',
    },
  ],
  idealFor: [
    'Grandes ambientes Veeam (>10TB)',
    'Necessidade de alta performance',
    'Crescimento previsível',
    'Infraestrutura on-premises',
  ],
  pricing: 'A partir de $X/TB/mês',
}

export const plattanoHot: StorageSolution = {
  id: 'plattano-hot',
  name: 'Plattano Hot Cloud Storage',
  tagline: 'Cloud Storage Compatível com S3',
  description:
    'Cloud storage compatível com S3 e proteção contra ransomware integrada. Preços transparentes.',
  features: [
    {
      icon: '☁️',
      title: 'Compatível com S3',
      description: 'Substituição direta (drop-in)',
    },
    {
      icon: '🛡️',
      title: 'Proteção contra Ransomware',
      description: 'Imutabilidade integrada',
    },
    {
      icon: '💰',
      title: 'Preços Transparentes',
      description: 'Sem surpresas',
    },
    {
      icon: '🚀',
      title: 'Performance Garantida',
      description: 'SLA de 99,9%',
    },
    {
      icon: '🌐',
      title: 'Multi-Região',
      description: 'Disponibilidade global',
    },
    {
      icon: '📊',
      title: 'Analytics de Uso',
      description: 'Monitoramento em tempo real',
    },
  ],
  idealFor: [
    'Workloads cloud-first',
    'Backup off-site',
    'Crescimento imprevisível',
    'Sem necessidade de CAPEX',
  ],
  pricing: '$X/TB/mês (tarifa flat)',
}

export const storageStats = [
  { value: '40%', label: 'Crescimento anual de dados' },
  { value: '60%', label: 'Economia potencial com deduplicação' },
  { value: '3x', label: 'Backups mais rápidos com ExaGrid' },
  { value: '99,9%', label: 'SLA de disponibilidade' },
]

export const comparisonTable = [
  {
    criterion: 'Implantação',
    exagrid: 'On-premises',
    plattanoHot: 'Cloud',
  },
  {
    criterion: 'CAPEX',
    exagrid: 'Sim',
    plattanoHot: 'Não',
  },
  {
    criterion: 'Escalabilidade',
    exagrid: 'Linear',
    plattanoHot: 'Ilimitada',
  },
  {
    criterion: 'Performance',
    exagrid: 'Ultra-rápida',
    plattanoHot: 'Rápida',
  },
  {
    criterion: 'Manutenção',
    exagrid: 'Mínima',
    plattanoHot: 'Zero',
  },
  {
    criterion: 'Ideal para',
    exagrid: '>10TB on-prem',
    plattanoHot: 'Cloud-first',
  },
]

export const caseStudies = [
  {
    industry: 'Manufatura',
    challenge: 'Backups de 50TB, crescimento anual de 30%',
    solution: 'ExaGrid + Veeam',
    result: '60% de economia, backup 3x mais rápido',
  },
  {
    industry: 'Startup SaaS',
    challenge: 'Cloud storage caro, crescimento imprevisível',
    solution: 'Plattano Hot Storage',
    result: '40% de economia, escalabilidade garantida',
  },
  {
    industry: 'Enterprise',
    challenge: 'Híbrido (on-prem + cloud)',
    solution: 'ExaGrid (on-prem) + Plattano Hot (cloud)',
    result: 'O melhor dos dois mundos, DR entre sites',
  },
]

export const faqs = [
  {
    question: 'O ExaGrid funciona com o Veeam?',
    answer: 'Sim. Integração nativa e certificada.',
  },
  {
    question: 'O Plattano Hot é compatível com S3?',
    answer: 'Sim. 100% compatível com a API S3.',
  },
  {
    question: 'Qual é o custo do ExaGrid?',
    answer: 'Depende do modelo. A partir de $X para 10TB.',
  },
  {
    question: 'O Plattano Hot tem lock-in?',
    answer: 'Não. API S3 padrão, migração facilitada.',
  },
  {
    question: 'Vocês oferecem POC?',
    answer: 'Sim. POC gratuito de 30 dias para ambas as soluções.',
  },
  {
    question: 'Posso usar os dois juntos?',
    answer:
      'Sim. Arquitetura híbrida com ExaGrid on-prem e Plattano Hot para cloud/DR.',
  },
]

export const savingsCalculator = {
  title: 'Calcule Sua Economia',
  description: 'Veja quanto você pode economizar com storage inteligente',
  inputs: [
    { label: 'Volume de dados (TB)', placeholder: '50' },
    { label: 'Crescimento anual (%)', placeholder: '30' },
    { label: 'Custo atual ($/TB)', placeholder: '100' },
  ],
}
