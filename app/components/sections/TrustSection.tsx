'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Award, CheckCircle } from 'lucide-react'

export default function TrustSection() {
  const trustMetrics = [
    {
      icon: Shield,
      value: '0',
      label: 'Incidentes de Perda de Dados',
      description: 'Zero dados perdidos ou criptografados',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Lock,
      value: '0',
      label: 'Ataques Bem-sucedidos',
      description: 'Em clientes gerenciados',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Award,
      value: '50+',
      label: 'Certificações',
      description: 'Expertise reconhecida pelo mercado',
      color: 'text-primary-600',
      bgColor: 'bg-primary-50',
    },
    {
      icon: CheckCircle,
      value: '6.000+',
      label: 'Horas de Projeto',
      description: 'Entregues com sucesso',
      color: 'text-primary-600',
      bgColor: 'bg-primary-50',
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Seus Dados Estão Seguros Conosco
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Um histórico que fala por si mesmo
          </p>
        </motion.div>

        {/* Trust Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustMetrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-modern transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                  {/* Icon */}
                  <div className={`${metric.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`h-7 w-7 ${metric.color}`} />
                  </div>

                  {/* Value */}
                  <div className={`text-5xl font-bold ${metric.color} mb-2`}>
                    {metric.value}
                  </div>

                  {/* Label */}
                  <div className="text-lg font-semibold text-gray-900 mb-1">
                    {metric.label}
                  </div>

                  {/* Description */}
                  <div className="text-sm text-gray-600">
                    {metric.description}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-700 font-medium">
            Junte-se a mais de 1.100 empresas que confiam à Plattano seus dados críticos
          </p>
        </motion.div>
      </div>
    </section>
  )
}
