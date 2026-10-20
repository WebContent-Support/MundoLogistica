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
    <section data-theme="light" className="py-24 bg-white text-gray-900 border-t border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gray-50/80 rounded-3xl p-8 sm:p-12 border border-gray-200/90 shadow-lg max-w-5xl mx-auto relative group">
          {/* O Quadrado / Cantoneira Laranja da Marca MundoLogística */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#ff3d03]" />
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#ff3d03]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pl-2">
            {/* Lado do Slider / Controle */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 border border-orange-300 text-xs font-mono font-bold text-[#c23300]">
                <Calculator className="w-3.5 h-3.5" />
                SIMULADOR DE IMPACTO CORPORATIVO
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-gray-950 tracking-tight">
                Calcule o retorno de capacitar seu time com a MundoLogística
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed">
                Ajuste o número de colaboradores da sua equipe de logística para estimar o impacto direto em horas de treinamento e eficiência operacional.
              </p>

              {/* Slider Interativo */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center text-sm font-bold">
                  <label htmlFor="team-size-slider" className="text-gray-700 cursor-pointer">
                    Tamanho da Equipe:
                  </label>
                  <span className="text-2xl font-black text-[#c23300] font-mono">{teamSize} colaboradores</span>
                </div>

                <input
                  id="team-size-slider"
                  name="teamSize"
                  aria-label="Tamanho da equipe de logística em colaboradores"
                  type="range"
                  min="2"
                  max="100"
                  step="1"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-2.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#c92e00]"
                />

                <div className="flex justify-between text-[11px] font-mono text-gray-600">
                  <span>2 pessoas</span>
                  <span>25 pessoas</span>
                  <span>50 pessoas</span>
                  <span>100+ pessoas</span>
                </div>
              </div>
            </div>

            {/* Lado das Métricas Projetadas em Card Limpo */}
            <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/90 shadow-md space-y-6">
              <span className="text-[11px] font-mono text-gray-600 uppercase tracking-widest block font-bold">
                Projeção Anual Estimada
              </span>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="flex items-center gap-2 text-gray-700 text-xs mb-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#c23300]" />
                    <span>Horas de Capacitação</span>
                  </div>
                  <div className="text-2xl font-black text-gray-900 font-mono">{trainingHours}h</div>
                  <span className="text-[10px] text-gray-600">no ano</span>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="flex items-center gap-2 text-gray-700 text-xs mb-1 font-medium">
                    <Award className="w-3.5 h-3.5 text-[#c23300]" />
                    <span>Certificados Oficiais</span>
                  </div>
                  <div className="text-2xl font-black text-gray-900 font-mono">{certifiedProfessionals}</div>
                  <span className="text-[10px] text-gray-600">profissionais</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-orange-50 border border-orange-200/80">
                <span className="text-xs text-orange-950 font-mono font-bold block mb-1">
                  Economia e Eficiência Operacional Estimada:
                </span>
                <div className="text-3xl font-black text-[#c23300] font-mono">
                  R$ {estimatedSavings}
                </div>
                <span className="text-[11px] text-gray-700 mt-1 block">
                  Em prevenção de erros tributários de frete, acuracidade de estoque e redução de turnover.
                </span>
              </div>

              <a
                href="#proposta"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-xs text-white bg-[#c92e00] hover:bg-[#b02800] transition-all shadow-md shadow-[#c92e00]/25 uppercase tracking-wider cursor-pointer"
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
