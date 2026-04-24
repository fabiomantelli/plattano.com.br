import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidade | Plattano',
  description: 'Política de privacidade e informações de proteção de dados da Plattano.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Política de Privacidade
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            Última atualização: 26 de novembro de 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Informações que Coletamos</h2>
            <p className="text-gray-700 mb-4">
              Coletamos informações que você nos fornece diretamente, incluindo:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Nome e informações de contato (e-mail, telefone, endereço)</li>
              <li>Informações da empresa</li>
              <li>Preferências de comunicação</li>
              <li>Informações sobre suas necessidades de infraestrutura de TI</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Como Usamos Suas Informações</h2>
            <p className="text-gray-700 mb-4">
              Utilizamos as informações coletadas para:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Responder às suas solicitações e fornecer suporte ao cliente</li>
              <li>Enviar atualizações técnicas e de serviços</li>
              <li>Fornecer informações sobre nossos produtos e serviços</li>
              <li>Melhorar nosso site e serviços</li>
              <li>Cumprir obrigações legais</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Compartilhamento de Informações</h2>
            <p className="text-gray-700 mb-4">
              Não vendemos, negociamos nem alugamos suas informações pessoais a terceiros. Podemos compartilhar suas informações com:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Prestadores de serviços que auxiliam em nossas operações</li>
              <li>Parceiros tecnológicos (Veeam, SentinelOne, ExaGrid) quando necessário para a prestação de serviços</li>
              <li>Autoridades legais quando exigido por lei</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Segurança dos Dados</h2>
            <p className="text-gray-700">
              Implementamos medidas técnicas e organizacionais adequadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Toda transmissão de dados é criptografada com protocolos SSL/TLS.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Seus Direitos</h2>
            <p className="text-gray-700 mb-4">
              Você tem o direito de:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Acessar suas informações pessoais</li>
              <li>Corrigir informações imprecisas</li>
              <li>Solicitar a exclusão de suas informações</li>
              <li>Cancelar o recebimento de comunicações de marketing</li>
              <li>Opor-se ao processamento de suas informações</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies</h2>
            <p className="text-gray-700">
              Utilizamos cookies e tecnologias de rastreamento semelhantes para melhorar sua experiência de navegação, analisar o tráfego do site e entender a origem dos nossos visitantes. Você pode controlar os cookies por meio das configurações do seu navegador.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Retenção de Dados</h2>
            <p className="text-gray-700">
              Mantemos suas informações pessoais pelo tempo necessário para cumprir os objetivos descritos nesta política de privacidade, salvo quando um período de retenção maior for exigido por lei.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Privacidade de Menores</h2>
            <p className="text-gray-700">
              Nossos serviços não são destinados a pessoas com menos de 18 anos. Não coletamos intencionalmente informações pessoais de crianças.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Alterações nesta Política</h2>
            <p className="text-gray-700">
              Podemos atualizar esta política de privacidade periodicamente. Notificaremos sobre quaisquer alterações publicando a nova política nesta página e atualizando a data de &quot;Última atualização&quot;.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Fale Conosco</h2>
            <p className="text-gray-700 mb-4">
              Se você tiver alguma dúvida sobre esta política de privacidade ou nossas práticas de dados, entre em contato:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700">
                <strong>Plattano</strong><br />
                7345 W Sand Lake Rd Ste 210<br />
                Orlando, FL 32819<br />
                EUA<br />
                <br />
                E-mail: plattano@plattano.com<br />
                Telefone: (321) 313-8762
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Conformidade</h2>
            <p className="text-gray-700">
              Cumprimos as leis de proteção de dados aplicáveis, incluindo o GDPR (Regulamento Geral de Proteção de Dados) e o CCPA (Lei de Privacidade do Consumidor da Califórnia).
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
