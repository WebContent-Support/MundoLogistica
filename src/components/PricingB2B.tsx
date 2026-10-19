'use client';

import { useState } from 'react';
import { Check, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';

const TEAM_TIERS = [
  { id: 'small', label: '1 a 5 acessos', discount: 'Ideal para equipes enxutas' },
  { id: 'medium', label: '6 a 15 acessos', discount: 'Recomendado para coordenações' },
  { id: 'large', label: '16 a 40 acessos', discount: 'Condições especiais corporativas' },
  { id: 'enterprise', label: '+40 acessos', discount: 'Atendimento consultivo Enterprise' },
];

export default function PricingB2B() {
  const [selectedTier, setSelectedTier] = useState('medium');

  return (
    <section id="planos" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#ff3d03] bg-orange-100/70 px-3.5 py-1.5 rounded-full">
            Investimento Corporativo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 mt-4 mb-4 tracking-tight">
            Planos sob medida para o tamanho da sua equipe
          </h2>
          <p className="text-gray-600 text-lg">
            Valores especiais com faturamento facilitado para empresas (Boleto faturado, Nota Fiscal e contratos anuais).
          </p>

          {/* Seletor de Tamanho de Equipe */}
          <div className="mt-8 inline-flex flex-wrap justify-center gap-2 p-1.5 bg-white rounded-2xl border border-gray-200 shadow-sm">
            {TEAM_TIERS.map((tier) => (
              <button
                key={tier.id}
                onClick={() => setSelectedTier(tier.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedTier === tier.id
                    ? 'bg-[#ff3d03] text-white shadow-md shadow-[#ff3d03]/25'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {tier.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Planos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Plano Standard */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-2">Plano Essencial</span>
                <h3 className="text-2xl font-black text-gray-900">Standard Corporativo</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Focado em atualização contínua, inteligência artificial e leitura das melhores análises do setor.
                </p>
              </div>

              <div className="py-6 border-y border-gray-100 space-y-4 text-sm">
                <div className="font-bold text-gray-900 text-xs uppercase tracking-wider">O que está incluso:</div>
                <ul className="space-y-3">
                  {[
                    'Acesso completo a matérias e notícias exclusivas',
                    'Acervo em PDF com +1000 artigos técnicos',
                    'Revistas impressas enviadas no endereço da empresa',
                    'Biblioteca de webinars gravados com líderes',
                    'LogGPT (Chat com IA especialista em logística)',
                    'Ferramenta avançada de busca de artigos',
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <div className="w-5 h-5 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-8 mt-6">
              <a
                href="#proposta"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-sm text-gray-800 bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                Solicitar Cotação Standard
              </a>
            </div>
          </div>

          {/* Plano Premium (O mais vendido com destaque em Laranja #ff3d03) */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-[#ff3d03] shadow-2xl relative flex flex-col justify-between">
            {/* Badge de Destaque */}
            <div className="absolute -top-3.5 right-8 bg-[#ff3d03] text-white text-xs font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-md shadow-[#ff3d03]/30 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Mais Vendido (Recomendado)
            </div>

            <div>
              <div className="mb-6">
                <span className="text-xs font-bold text-[#ff3d03] uppercase tracking-widest block mb-2">Plano Completo de Capacitação</span>
                <h3 className="text-2xl font-black text-gray-900">Premium Corporativo</h3>
                <p className="text-sm text-gray-500 mt-2">
                  A solução definitiva: todos os cursos, certificações oficiais e métricas de acompanhamento em tempo real.
                </p>
              </div>

              <div className="py-6 border-y border-gray-100 space-y-4 text-sm">
                <div className="font-bold text-gray-900 text-xs uppercase tracking-wider flex items-center justify-between">
                  <span>Tudo do Plano Standard, mais:</span>
                  <span className="text-[#ff3d03] font-bold">100% de Acesso</span>
                </div>

                <ul className="space-y-3">
                  {[
                    'Todos os Cursos da MundoLogística Educação liberados',
                    'Certificados oficiais de conclusão emitidos pelo portal',
                    'Mapa do Conhecimento para diagnóstico e direcionamento',
                    'Dashboard exclusivo do Gestor para acompanhamento do RH',
                    'Trilhas de formação personalizadas por cargo',
                    'Suporte consultivo e onboarding guiado para a equipe',
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-900 font-medium">
                      <div className="w-5 h-5 rounded-full bg-[#ff3d03] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-8 mt-6">
              <a
                href="#proposta"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-sm text-white bg-[#ff3d03] hover:bg-[#e03502] transition-all shadow-xl shadow-[#ff3d03]/25 hover:shadow-[#ff3d03]/40"
              >
                Solicitar Proposta para {TEAM_TIERS.find((t) => t.id === selectedTier)?.label}
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-[11px] text-center text-gray-400 mt-2">
                Faturamento via boleto corporativo • Sem taxa de adesão
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
