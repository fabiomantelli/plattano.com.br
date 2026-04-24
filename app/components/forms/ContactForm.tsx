'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from '../ui/button'
import { contactFormSchema, type ContactFormData } from '../../lib/validations/contact'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // TODO: Implement API call to /api/contact
      console.log('Form data:', data)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setSubmitStatus('success')
      reset()

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-4 flex items-start">
          <CheckCircle className="h-5 w-5 text-secondary-600 mr-3 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-semibold text-secondary-900">Mensagem enviada com sucesso!</p>
            <p className="text-sm text-secondary-700 mt-1">
              Retornaremos em até 4 horas.
            </p>
          </div>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
          <AlertCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-semibold text-red-900">Erro ao enviar mensagem</p>
            <p className="text-sm text-red-700 mt-1">
              Tente novamente ou ligue diretamente para nós.
            </p>
          </div>
        </div>
      )}

      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
            Nome *
          </label>
          <input
            {...register('firstName')}
            type="text"
            id="firstName"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
            placeholder="João"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
            Sobrenome *
          </label>
          <input
            {...register('lastName')}
            type="text"
            id="lastName"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
            placeholder="Silva"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          E-mail Corporativo *
        </label>
        <input
          {...register('email')}
          type="email"
          id="email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
          placeholder="joao@empresa.com.br"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
          Empresa *
        </label>
        <input
          {...register('company')}
          type="text"
          id="company"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
          placeholder="Sua Empresa Ltda."
        />
        {errors.company && (
          <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
          Telefone (opcional)
        </label>
        <input
          {...register('phone')}
          type="tel"
          id="phone"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
          placeholder="(321) 313-8762"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>

      {/* Interest */}
      <div>
        <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
          Tenho interesse em *
        </label>
        <select
          {...register('interest')}
          id="interest"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
        >
          <option value="">Selecione uma opção</option>
          <option value="data-protection">Proteção de Dados (Veeam)</option>
          <option value="cybersecurity">Cibersegurança (SentinelOne/Rainforest)</option>
          <option value="storage">Storage (ExaGrid/Plattano Hot)</option>
          <option value="managed-services">Serviços Gerenciados</option>
          <option value="other">Outro</option>
        </select>
        {errors.interest && (
          <p className="mt-1 text-sm text-red-600">{errors.interest.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Mensagem (opcional)
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
          placeholder="Conte-nos sobre suas necessidades..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* Privacy Policy */}
      <div className="flex items-start">
        <input
          {...register('acceptPrivacy')}
          type="checkbox"
          id="acceptPrivacy"
          className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
        />
        <label htmlFor="acceptPrivacy" className="ml-3 text-sm text-gray-600">
          Aceito a{' '}
          <a href="/privacy" className="text-primary-600 hover:text-primary-700 underline">
            política de privacidade
          </a>{' '}
          e concordo em receber comunicações da Plattano *
        </label>
      </div>
      {errors.acceptPrivacy && (
        <p className="text-sm text-red-600">{errors.acceptPrivacy.message}</p>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full"
        isLoading={isSubmitting}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
      </Button>

      <p className="text-xs text-center text-gray-500">
        Tempo médio de resposta: 4 horas
      </p>
    </form>
  )
}
