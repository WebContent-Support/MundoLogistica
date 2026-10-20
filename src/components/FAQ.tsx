'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: 'Como funciona o acesso da equipe à plataforma e aos cursos?',
    answer: 'Cada colaborador recebe um login individual com e-mail corporativo e senha. O acesso é 100% online, permitindo que a equipe assista às aulas e consulte o acervo via computador, tablet ou celular, no próprio ritmo de trabalho ou em horários determinados pela empresa.',
  },
  {
    question: 'A empresa recebe Nota Fiscal e faturamento corporativo?',
    answer: 'Sim! Emitimos Nota Fiscal de serviços eletrônica (NFS-e) para todas as contratações corporativas. O pagamento pode ser feito via boleto bancário faturado, transferência bancária ou cartão de crédito corporativo.',
  },
  {
    question: 'O RH e o gestor conseguem acompanhar o progresso dos colaboradores?',
    answer: 'Sim. No plano Premium Corporativo, o gestor de logística e o time de RH têm acesso ao Dashboard de Acompanhamento exclusivo, com métricas de horas estudadas, cursos concluídos, notas em testes e certificados emitidos.',
  },
  {
    question: 'Os cursos emitem certificado oficial de conclusão?',
    answer: 'Sim. Ao finalizar todos os módulos e avaliações práticas de qualquer curso, o colaborador recebe automaticamente o Certificado Oficial da MundoLogística Educação, com validação de carga horária e assinatura dos especialistas.',
  },
  {
    question: 'É possível incluir novos colaboradores ao longo do contrato?',
    answer: 'Com certeza. Caso sua equipe cresça ou você queira estender o benefício para outros departamentos, você pode solicitar a inclusão de novas licenças a qualquer momento com valores proporcionais ao período restante do contrato.',
  },
  {
    question: 'Como funciona o envio das revistas impressas para a empresa?',
    answer: 'As edições bimestrais da tradicional revista impressa da MundoLogística são enviadas diretamente para o endereço comercial cadastrado da sua empresa, sem custos adicionais de frete, enquanto a assinatura corporativa estiver ativa.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" data-theme="light" className="py-28 bg-[#f8fafc] text-gray-900 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#c23300] bg-orange-100 border border-orange-300 px-3.5 py-1.5 rounded-full inline-block">
            Tire Suas Dúvidas
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-gray-950 mt-4 mb-3 tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-600 text-base">
            Tudo o que você precisa saber sobre a contratação corporativa da MundoLogística.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs transition-all duration-300 relative group"
              >
                {/* Cantoneira Laranja da Marca MundoLogística no item aberto */}
                {isOpen && (
                  <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-[#ff3d03]" />
                )}

                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                >
                  <span className="text-base font-bold text-gray-900 pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      isOpen ? 'bg-[#ff3d03] text-white rotate-180' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-gray-600 leading-relaxed border-t border-gray-100 font-sans">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
