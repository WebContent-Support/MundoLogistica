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
    <section id="planos" className="py-28 bg-[#090d14] text-white border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ff3d03] bg-[#ff3d03]/10 border border-[#ff3d03]/30 px-3.5 py-1.5 rounded-full inline-block">
            Investimento Corporativo B2B
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 mb-4 tracking-tight">
            Planos dimensionados para o tamanho do seu time
          </h2>
          <p className="text-gray-400 text-lg">
            Faturamento corporativo simplificado: Boleto a prazo, Nota Fiscal de Serviços eletrônica e contratos anuais.
          </p>

          {/* Seletor de Tamanho de Equipe */}
          <div className="mt-8 inline-flex flex-wrap justify-center gap-2 p-1.5 glass-panel rounded-2xl border border-white/10 shadow-lg">
            {TEAM_TIERS.map((tier) => (
              <button
                key={tier.id}
                onClick={() => setSelectedTier(tier.id)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedTier === tier.id
                    ? 'bg-gradient-to-r from-[#ff3d03] to-[#e03502] text-white shadow-lg shadow-[#ff3d03]/30 scale-105 border border-orange-400/40'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
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
          <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <span className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest block mb-2">
                  Plano Essencial
                </span>
                <h3 className="text-2xl font-black text-white">Standard Corporativo</h3>
                <p className="text-sm text-gray-400 mt-2">
                  Focado em atualização contínua, inteligência artificial e acervo completo de artigos.
                </p>
              </div>

              <div className="py-6 border-y border-white/10 space-y-4 text-sm">
                <div className="font-mono text-xs font-bold text-gray-400 uppercase tracking-wider">
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
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-white/5 text-gray-400 flex items-center justify-center shrink-0 mt-0.5 border border-white/10">
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
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-sm text-gray-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                Solicitar Cotação Standard
              </a>
            </div>
          </div>

          {/* Plano Premium (O mais vendido com glow neon #ff3d03) */}
          <div className="glass-panel-glow rounded-3xl p-8 sm:p-10 border-2 border-[#ff3d03] shadow-2xl relative flex flex-col justify-between">
            {/* Badge de Destaque Neon */}
            <div className="absolute -top-4 right-8 bg-gradient-to-r from-[#ff3d03] to-[#e03502] text-white text-xs font-mono font-black uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg shadow-[#ff3d03]/40 flex items-center gap-1.5 border border-orange-300/40">
              <Sparkles className="w-3.5 h-3.5" />
              Recomendado pela Liderança
            </div>

            <div>
              <div className="mb-6">
                <span className="text-xs font-mono font-bold text-[#ff3d03] uppercase tracking-widest block mb-2">
                  Suite Completa de Capacitação
                </span>
                <h3 className="text-2xl font-black text-white">Premium Corporativo</h3>
                <p className="text-sm text-gray-300 mt-2">
                  A solução completa: todos os cursos, emissão de certificados e dashboard do gestor.
                </p>
              </div>

              <div className="py-6 border-y border-white/10 space-y-4 text-sm">
                <div className="font-mono text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center justify-between">
                  <span>Tudo do Standard, mais:</span>
                  <span className="text-[#ff3d03] font-bold">100% Liberado</span>
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
                    <li key={idx} className="flex items-start gap-3 text-white font-medium">
                      <div className="w-5 h-5 rounded-full bg-[#ff3d03] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-md shadow-[#ff3d03]/40">
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
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#ff3d03] to-[#e03502] hover:scale-[1.02] transition-all shadow-xl shadow-[#ff3d03]/30 hover:shadow-[#ff3d03]/50 border border-orange-400/40"
              >
                Solicitar Proposta para {TEAM_TIERS.find((t) => t.id === selectedTier)?.label}
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-[11px] font-mono text-center text-gray-400 mt-2">
                Faturamento via boleto corporativo • Sem taxas ocultas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
