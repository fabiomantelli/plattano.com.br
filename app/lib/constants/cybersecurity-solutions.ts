export interface CybersecuritySolution {
  id: string
  name: string
  tagline: string
  description: string
  features: {
    title: string
    description: string
    icon: string
  }[]
  useCases: string[]
  differentiators: string[]
}

export const sentinelOne: CybersecuritySolution = {
  id: 'sentinelone',
  name: 'SentinelOne',
  tagline: 'Proteção de Endpoint com IA',
  description:
    'Plataforma XDR líder de mercado com IA autônoma. Detecção e resposta em menos de 1 segundo.',
  features: [
    {
      icon: '🤖',
      title: 'IA Autônoma',
      description: 'Detecção e resposta sem intervenção humana',
    },
    {
      icon: '⚡',
      title: 'Resposta Instantânea',
      description: 'Bloqueio em < 1 segundo',
    },
    {
      icon: '🔍',
      title: 'Plataforma XDR',
      description: 'Visibilidade completa (endpoint, cloud, identidade)',
    },
    {
      icon: '📱',
      title: 'Cobertura Total',
      description: 'Windows, Mac, Linux, mobile, containers',
    },
    {
      icon: '🏆',
      title: 'Líder Gartner',
      description: '#1 em EPP e EDR',
    },
    {
      icon: '🔄',
      title: 'Rollback Automático',
      description: 'Rollback de ransomware sem perda de dados',
    },
  ],
  useCases: [
    'Empresas com endpoints distribuídos',
    'Necessidade de resposta automática',
    'Ambientes heterogêneos (multi-OS)',
    'Modelo de segurança Zero Trust',
  ],
  differentiators: [
    'Sem impacto na performance',
    'Rollback automático de ransomware',
    'Threat hunting integrado',
    'Conformidade (PCI-DSS, HIPAA, SOC 2)',
  ],
}

export const rainforest: CybersecuritySolution = {
  id: 'rainforest',
  name: 'Rainforest',
  tagline: 'Proteção de Marca e Detecção de Vazamentos',
  description:
    'Monitoramento de marca 24/7 e detecção de vazamentos na dark web. Proteja sua reputação digital.',
  features: [
    {
      icon: '🌐',
      title: 'Brand Intelligence',
      description: 'Monitoramento de marca 24/7',
    },
    {
      icon: '🔓',
      title: 'Detecção de Vazamentos',
      description: 'Detecção de credenciais vazadas',
    },
    {
      icon: '🎭',
      title: 'Proteção contra Fraudes',
      description: 'Proteção contra phishing e fraudes',
    },
    {
      icon: '☁️',
      title: 'Segurança na Cloud',
      description: 'Monitoramento de apps na cloud',
    },
    {
      icon: '🛡️',
      title: 'Segurança de Apps',
      description: 'Análise de vulnerabilidades',
    },
    {
      icon: '🚨',
      title: 'Takedown Service',
      description: 'Remoção de sites fraudulentos',
    },
  ],
  useCases: [
    'Empresas com forte presença digital',
    'E-commerce e fintech',
    'Proteção de propriedade intelectual',
    'Gestão de reputação de marca',
  ],
  differentiators: [
    'Monitoramento na dark web',
    'Takedown de sites fraudulentos',
    'Alertas em tempo real',
    'Relatórios executivos',
  ],
}

export const threatStats = [
  { value: '11s', label: 'Frequência de ataques de ransomware' },
  { value: '$4,54M', label: 'Custo médio por violação' },
  { value: '207 dias', label: 'Tempo médio de detecção' },
  { value: '+150%', label: 'Aumento em ataques sofisticados' },
]

export const comparisonTable = [
  {
    need: 'Proteção de endpoint',
    sentinelone: true,
    rainforest: false,
  },
  {
    need: 'Monitoramento de marca',
    sentinelone: false,
    rainforest: true,
  },
  {
    need: 'Resposta automática',
    sentinelone: true,
    rainforest: false,
  },
  {
    need: 'Detecção de vazamentos',
    sentinelone: false,
    rainforest: true,
  },
  {
    need: 'Conformidade',
    sentinelone: true,
    rainforest: true,
  },
]

export const caseStudies = [
  {
    industry: 'E-commerce',
    challenge: 'Phishing + credential stuffing',
    solution: 'SentinelOne + Rainforest',
    result: '99,8% de bloqueio, $200K economizados',
  },
  {
    industry: 'Saúde',
    challenge: 'Ransomware + conformidade HIPAA',
    solution: 'SentinelOne XDR',
    result: 'Zero violações, auditoria aprovada',
  },
  {
    industry: 'Financeiro',
    challenge: 'Fraude de marca + APTs',
    solution: 'Rainforest + SentinelOne',
    result: '15 sites fraudulentos removidos, 0 incidentes',
  },
]

export const faqs = [
  {
    question: 'O SentinelOne substitui o antivírus tradicional?',
    answer:
      'Sim. É uma solução de nova geração que substitui o AV legado com proteção baseada em IA.',
  },
  {
    question: 'O Rainforest monitora a dark web?',
    answer:
      'Sim. Monitoramento 24/7 de fóruns, marketplaces e vazamentos.',
  },
  {
    question: 'Quanto custa?',
    answer:
      'SentinelOne: por endpoint. Rainforest: por domínio. Solicite uma proposta.',
  },
  {
    question: 'Posso testar?',
    answer: 'Sim. SentinelOne: 30 dias. Rainforest: scan gratuito.',
  },
  {
    question: 'Vocês oferecem SOC?',
    answer: 'Sim. SOC as a Service com SentinelOne + analistas 24/7.',
  },
  {
    question: 'Qual é o tempo de implementação?',
    answer:
      'SentinelOne: 1-2 semanas. Rainforest: imediato após configuração.',
  },
]
