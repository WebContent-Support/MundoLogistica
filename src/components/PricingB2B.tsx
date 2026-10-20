'use client';

import { useState } from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

const TEAM_TIERS = [
  { id: 'small', label: '1 a 5 acessos' },
  { id: 'medium', label: '6 a 15 acessos' },
  { id: 'large', label: '16 a 40 acessos' },
  { id: 'enterprise', label: '+40 acessos' },
];

export default function PricingB2B() {
  const [selectedTier, setSelectedTier] = useState('medium');

  return (
    <section id="planos" data-theme="light" className="py-28 bg-white text-gray-900 border-t border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#d53300] bg-orange-100 border border-orange-300 px-3.5 py-1.5 rounded-full inline-block">
            Investimento Corporativo B2B
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-gray-950 mt-4 mb-4 tracking-tight">
            Planos dimensionados para o tamanho do seu time
          </h2>
          <p className="text-gray-600 text-lg">
            Faturamento corporativo simplificado: Boleto a prazo faturado, Nota Fiscal de Serviços eletrônica e contratos anuais.
          </p>

          {/* Seletor de Tamanho de Equipe */}
          <div className="mt-8 inline-flex flex-wrap justify-center gap-2 p-1.5 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm">
            {TEAM_TIERS.map((tier) => (
              <button
                key={tier.id}
                onClick={() => setSelectedTier(tier.id)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedTier === tier.id
                    ? 'bg-[#df3500] text-white shadow-md shadow-[#df3500]/30 scale-105'
                    : 'text-gray-700 hover:text-gray-950 hover:bg-gray-100'
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
          <div className="bg-gray-50/70 rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <span className="text-xs font-mono font-bold text-gray-600 uppercase tracking-widest block mb-2">
                  Plano Essencial
                </span>
                <h3 className="text-2xl font-black text-gray-950">Standard Corporativo</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Focado em atualização contínua, inteligência artificial e acervo completo de artigos.
                </p>
              </div>

              <div className="py-6 border-y border-gray-200 space-y-4 text-sm">
                <div className="font-mono text-xs font-bold text-gray-800 uppercase tracking-wider">
                  Recursos Inclusos:
                </div>
                <ul className="space-y-3">
                  {[
                    'Acesso completo a matérias e notícias exclusivas',
                    'Acervo em PDF com +1000 artigos técnicos',
                    'Revistas impressas enviadas no endereço da empresa',
                    'Biblioteca de webinars gravados com líderes',
                    'LogGPT (IA especialista em logística liberada)',
                    'Ferramenta avançada de busca temática',
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <div className="w-5 h-5 rounded-full bg-white text-gray-600 flex items-center justify-center shrink-0 mt-0.5 border border-gray-200 shadow-xs">
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
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-sm text-gray-800 bg-white hover:bg-gray-100 border border-gray-200 shadow-sm transition-colors cursor-pointer"
              >
                Solicitar Cotação Standard
              </a>
            </div>
          </div>

          {/* Plano Premium (O mais vendido com o bracket e borda laranja #ff3d03) */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-[#ff3d03] shadow-xl relative flex flex-col justify-between group">
            {/* O Quadrado / Cantoneira Laranja da Marca MundoLogística */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#ff3d03]" />
            <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#ff3d03]" />

            {/* Badge de Destaque */}
            <div className="absolute -top-4 right-8 bg-[#df3500] text-white text-xs font-mono font-black uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md shadow-[#df3500]/30 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Recomendado pela Liderança
            </div>

            <div>
              <div className="mb-6">
                <span className="text-xs font-mono font-bold text-[#d53300] uppercase tracking-widest block mb-2">
                  Suite Completa de Capacitação
                </span>
                <h3 className="text-2xl font-black text-gray-950">Premium Corporativo</h3>
                <p className="text-sm text-gray-600 mt-2">
                  A solução completa: todos os cursos, emissão de certificados e dashboard do gestor.
                </p>
              </div>

              <div className="py-6 border-y border-gray-100 space-y-4 text-sm">
                <div className="font-mono text-xs font-bold text-gray-900 uppercase tracking-wider flex items-center justify-between">
                  <span>Tudo do Standard, mais:</span>
                  <span className="text-[#d53300] font-bold">100% Liberado</span>
                </div>

                <ul className="space-y-3">
                  {[
                    'Todos os Cursos da MundoLogística Educação liberados',
                    'Certificados oficiais com validação de autenticidade',
                    'Mapa do Conhecimento para diagnóstico e nivelamento',
                    'Dashboard exclusivo do Gestor para acompanhamento do RH',
                    'Trilhas personalizadas de formação por cargo e função',
                    'Suporte consultivo e onboarding guiado para toda a equipe',
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-950 font-medium">
                      <div className="w-5 h-5 rounded-full bg-[#df3500] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
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
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-sm text-white bg-[#df3500] hover:bg-[#ff3d03] transition-all shadow-lg shadow-[#df3500]/25 hover:shadow-[#df3500]/40 cursor-pointer"
              >
                Solicitar Proposta para {TEAM_TIERS.find((t) => t.id === selectedTier)?.label}
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-[11px] font-mono text-center text-gray-600 mt-2">
                Faturamento via boleto corporativo • Sem taxas ocultas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
