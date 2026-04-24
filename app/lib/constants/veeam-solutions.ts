export interface VeeamSolution {
  id: string
  title: string
  description: string
  features: string[]
  useCases: string[]
  icon: string
}

export const veeamSolutions: VeeamSolution[] = [
  {
    id: 'backup-replication',
    title: 'Veeam Backup & Replication',
    description: 'Backup completo para VMs, servidores físicos e estações de trabalho.',
    icon: '💾',
    features: [
      'Backup incremental forever',
      'Recuperação instantânea de VM',
      'Replicação para DR',
      'Suporte a VMware, Hyper-V, Nutanix',
      'Backup de estações de trabalho',
    ],
    useCases: [
      'Empresas com infraestrutura on-premises',
      'Ambientes virtualizados',
      'Requisito de RTO < 15 minutos',
    ],
  },
  {
    id: 'microsoft-365',
    title: 'Veeam for Microsoft 365',
    description: 'Backup completo de Exchange, SharePoint, OneDrive e Teams.',
    icon: '📧',
    features: [
      'Proteção de e-mails, arquivos e Teams',
      'Recuperação granular (item-level)',
      'Retenção ilimitada',
      'eDiscovery avançado',
      'Conformidade (GDPR, HIPAA)',
    ],
    useCases: [
      'Empresas 100% Microsoft 365',
      'Requisitos de conformidade',
      'Proteção contra exclusão acidental',
    ],
  },
  {
    id: 'cloud-backup',
    title: 'Veeam Cloud Backup',
    description: 'Backup nativo para AWS, Azure e Google Cloud.',
    icon: '☁️',
    features: [
      'Backup de VMs na cloud',
      'Backup de banco de dados (RDS, SQL)',
      'Gerenciamento de snapshots',
      'Replicação entre regiões',
      'Otimização de custos',
    ],
    useCases: [
      'Workloads cloud-native',
      'Ambientes multi-cloud',
      'Disaster recovery entre regiões',
    ],
  },
  {
    id: 'recovery-orchestrator',
    title: 'Veeam Recovery Orchestrator',
    description: 'Orquestração automatizada de disaster recovery.',
    icon: '🔄',
    features: [
      'Planos de DR automatizados',
      'Testes sem impacto',
      'Failover/failback automático',
      'Relatórios de conformidade',
      'Automação de runbook',
    ],
    useCases: [
      'Empresas com SLA crítico',
      'Conformidade rigorosa',
      'Testes frequentes de DR',
    ],
  },
  {
    id: 'veeam-one',
    title: 'Veeam ONE',
    description: 'Monitoramento e analytics para infraestrutura Veeam.',
    icon: '📊',
    features: [
      'Monitoramento 24/7',
      'Planejamento de capacidade',
      'Otimização de performance',
      'Alertas proativos',
      'Dashboards de conformidade',
    ],
    useCases: [
      'Grandes ambientes Veeam',
      'Necessidade de visibilidade',
      'Otimização de custos',
    ],
  },
]

export interface ManagedService {
  id: string
  title: string
  description: string
  features: string[]
  icon: string
}

export const managedServices: ManagedService[] = [
  {
    id: 'managed-backup',
    title: 'Serviço de Backup Gerenciado',
    description: 'Gerenciamento completo 24/7',
    icon: '🛡️',
    features: [
      'Monitoramento proativo',
      'Suporte dedicado',
      'SLA garantido',
      'Relatórios periódicos',
    ],
  },
  {
    id: 'offsite-backup',
    title: 'Backup Off-site',
    description: 'Backup para nosso datacenter',
    icon: '🌐',
    features: [
      'Replicação automática',
      'Testes mensais de restauração',
      'Conformidade inclusa',
      'Storage seguro',
    ],
  },
  {
    id: 'baas-cloud',
    title: 'BaaS para Cloud',
    description: 'Backup as a Service',
    icon: '☁️',
    features: [
      'Pay-as-you-go',
      'Sem CAPEX',
      'Escalável',
      'Gerenciado por especialistas',
    ],
  },
]

export const dataProtectionStats = [
  { value: '60%', label: 'das empresas sofrem perda de dados anualmente' },
  { value: 'R$ 22M+', label: 'custo médio por incidente' },
  { value: 'R$ 1,5M+', label: 'custo de downtime por hora' },
  { value: '150%', label: 'aumento nos ataques de ransomware (2024)' },
]

export const whyPlattano = [
  {
    icon: '🏆',
    title: 'Veeam Gold Partner',
    description: 'Nível máximo de certificação',
  },
  {
    icon: '👨‍💻',
    title: 'Equipe Certificada',
    description: '15+ engenheiros Veeam',
  },
  {
    icon: '📍',
    title: 'Suporte Local',
    description: 'Baseados em Florianópolis, suporte PT/EN',
  },
  {
    icon: '⚡',
    title: 'Resposta Rápida',
    description: 'SLA de 4 horas',
  },
  {
    icon: '💰',
    title: 'Preço Competitivo',
    description: 'Até 30% mais barato que concorrentes',
  },
]

export const caseStudies = [
  {
    industry: 'Saúde',
    challenge: 'Conformidade HIPAA + backup de 50TB',
    solution: 'Veeam B&R + Serviço Gerenciado',
    result: '100% conformidade, RTO de 10 min',
  },
  {
    industry: 'Financeiro',
    challenge: 'Proteção M365 + eDiscovery',
    solution: 'Veeam for M365 + Arquivamento',
    result: 'Economia de $50K/ano em litígios',
  },
  {
    industry: 'Manufatura',
    challenge: 'DR para planta crítica',
    solution: 'Veeam + Recovery Orchestrator',
    result: 'Testes de DR automatizados, RTO < 1 hora',
  },
]

export const faqs = [
  {
    question: 'Quanto custa o Veeam?',
    answer:
      'Depende do seu ambiente. O licenciamento é por socket, instância ou workload. Solicite uma proposta personalizada.',
  },
  {
    question: 'O Veeam protege contra ransomware?',
    answer:
      'Sim. Backups imutáveis, air-gap e integração com SentinelOne.',
  },
  {
    question: 'Posso testar antes de comprar?',
    answer: 'Sim. Trial de 30 dias ou POC gratuito.',
  },
  {
    question: 'Quanto tempo leva a implementação?',
    answer:
      'Implementação básica: 1-2 semanas. Ambientes complexos: 4-6 semanas.',
  },
  {
    question: 'Vocês oferecem treinamento?',
    answer: 'Sim. Treinamento incluso na implementação + documentação.',
  },
  {
    question: 'Qual é o SLA de suporte?',
    answer: 'Suporte 24/7 com SLA de 4 horas (crítico) e 24 horas (não crítico).',
  },
  {
    question: 'Posso migrar de outra solução?',
    answer:
      'Sim. Oferecemos migração assistida a partir de Backup Exec, Commvault, entre outros.',
  },
]
