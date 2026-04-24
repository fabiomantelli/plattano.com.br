import { z } from 'zod'

export const contactFormSchema = z.object({
  firstName: z.string().min(2, 'O nome deve ter pelo menos 2 caracteres'),
  lastName: z.string().min(2, 'O sobrenome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Por favor, insira um e-mail válido'),
  company: z.string().min(2, 'O nome da empresa deve ter pelo menos 2 caracteres'),
  phone: z.string().optional(),
  interest: z.enum([
    'data-protection',
    'cybersecurity',
    'storage',
    'managed-services',
    'other',
  ]),
  message: z.string().max(500, 'A mensagem deve ter menos de 500 caracteres').optional(),
  acceptPrivacy: z.boolean().refine((val) => val === true, {
    message: 'Você deve aceitar a política de privacidade',
  }),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
