'use client';

import { useState } from 'react';
import { Calculator, ArrowRight, TrendingUp, DollarSign, Clock, Award } from 'lucide-react';

export default function RoiCalculator() {
  const [teamSize, setTeamSize] = useState<number>(15);

  // Cálculos dinâmicos
  const trainingHours = teamSize * 32;
  const certifiedProfessionals = teamSize;
  const estimatedSavings = (teamSize * 4500).toLocaleString('pt-BR');

  return (
    <section className="py-24 bg-[#06080d] text-white border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel-glow rounded-3xl p-8 sm:p-12 border border-[#ff3d03]/30 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Lado do Slider / Controle */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff3d03]/10 border border-[#ff3d03]/30 text-xs font-mono font-bold text-[#ff3d03]">
                <Calculator className="w-3.5 h-3.5" />
                SIMULADOR DE IMPACTO CORPORATIVO
              </div>

              <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                Calcule o retorno de capacitar seu time com a MundoLogística
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                Ajuste o número de colaboradores da sua equipe de logística para estimar o impacto direto em horas de treinamento e eficiência operacional.
              </p>

              {/* Slider Interativo */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-gray-300">Tamanho da Equipe:</span>
                  <span className="text-2xl font-black text-[#ff3d03] font-mono">{teamSize} colaboradores</span>
                </div>

                <input
                  type="range"
                  min="2"
                  max="100"
                  step="1"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-2.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#ff3d03]"
                />

                <div className="flex justify-between text-[11px] font-mono text-gray-500">
                  <span>2 pessoas</span>
                  <span>25 pessoas</span>
                  <span>50 pessoas</span>
                  <span>100+ pessoas</span>
                </div>
              </div>
            </div>

            {/* Lado das Métricas Projetadas */}
            <div className="lg:col-span-6 bg-black/60 rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6">
              <span className="text-[11px] font-mono text-gray-400 uppercase tracking-widest block">
                Projeção Anual Estimada
              </span>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="flex items-center gap-2 text-gray-400 text-xs mb-1">
                    <Clock className="w-3.5 h-3.5 text-[#ff3d03]" />
                    <span>Horas de Capacitação</span>
                  </div>
                  <div className="text-2xl font-black text-white font-mono">{trainingHours}h</div>
                  <span className="text-[10px] text-gray-500">no ano</span>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="flex items-center gap-2 text-gray-400 text-xs mb-1">
                    <Award className="w-3.5 h-3.5 text-[#ff3d03]" />
                    <span>Certificados Emitidos</span>
                  </div>
                  <div className="text-2xl font-black text-white font-mono">{certifiedProfessionals}</div>
                  <span className="text-[10px] text-gray-500">profissionais</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-[#ff3d03]/15 to-transparent border border-[#ff3d03]/30">
                <span className="text-xs text-orange-300 font-mono block mb-1">
                  Economia e Otimização Operacional Estimada:
                </span>
                <div className="text-3xl font-black text-white font-mono">
                  R$ {estimatedSavings}
                </div>
                <span className="text-[11px] text-gray-400 mt-1 block">
                  Em prevenção de erros de frete, acuracidade de estoque e redução de retrabalho.
                </span>
              </div>

              <a
                href="#proposta"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#ff3d03] to-[#e03502] hover:scale-[1.02] transition-all shadow-md shadow-[#ff3d03]/25 uppercase tracking-wider"
              >
                Solicitar Cotação para {teamSize} Pessoas
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
