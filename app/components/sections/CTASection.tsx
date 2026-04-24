'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { ArrowRight, Phone } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-white mb-6"
        >
          Pronto para Transformar Sua Infraestrutura de TI?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-white/90 mb-12"
        >
          Agende uma consulta gratuita com nossos especialistas. Sem compromisso.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="bg-white text-primary-600 hover:bg-gray-100"
          >
            <Link href="/contact">
              Agendar Consulta Gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-white text-white hover:bg-white/10"
          >
            <a href="tel:+13213138762">
              <Phone className="mr-2 h-5 w-5" />
              Ligar: (321) 313-8762
            </a>
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-white/80 text-sm"
        >
          Tempo médio de resposta: 4 horas
        </motion.p>
      </div>
    </section>
  )
}
