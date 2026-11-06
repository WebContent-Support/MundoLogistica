'use client';

import { useState, useEffect } from 'react';
import { Sparkles, CheckCircle2, TrendingUp, Bot, ShieldCheck, Award } from 'lucide-react';

const PARTNERS = [
  { name: 'Ambev', logo: '/partners/ambev.svg' },
  { name: 'DHL Supply Chain', logo: '/partners/dhl.svg' },
  { name: 'Mercado Livre', logo: '/partners/mercado-livre.svg' },
  { name: 'Nestlé', logo: '/partners/nestle.svg' },
  { name: 'Pfizer', logo: '/partners/pfizer.svg' },
  { name: 'Suzano', logo: '/partners/suzano.svg' },
  { name: 'Natura', logo: '/partners/natura.svg' },
  { name: 'Yara Brasil', logo: '/partners/yara.svg' },
  { name: 'Dafiti', logo: '/partners/dafiti.svg' },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      data-theme="dark"
      className="relative overflow-hidden pt-12 pb-14 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-16 bg-[#06080d] border-b border-white/10"
    >
      {/* FOTOGRAFIA REAL DE FUNDO: Centro de Distribuição Logístico de Grande Porte */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src="/images/hero-bg.jpg"
          alt="Fotografia de Centro de Distribuição e Galpão Logístico"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center opacity-75"
        />
        {/* Máscara suave para contraste do texto sem apagar a fotografia */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06080d] via-transparent to-black/60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Composição em Grid Assimétrico: Copy Impactante + Composição Visual Rica */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-14">
          {/* Coluna de Texto (7 colunas no desktop) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Badge Luminous com Pulso */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel border border-[#ff3d03]/30 shadow-lg shadow-[#ff3d03]/10 hover:border-[#ff3d03]/60 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff3d03] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff3d03]" />
              </span>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-white">
                Capacitação Corporativa B2B • Edição 2026
              </span>
            </div>

            {/* Headline Exata do Documento da Cliente */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] text-white">
              Sua equipe está preparada para os{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3d03] via-[#ff6a3d] to-[#ff9e7a] text-glow">
                próximos desafios
              </span>{' '}
              da logística?
            </h1>

            {/* Subtítulo Executivo de Apoio */}
            <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              O ecossistema definitivo para desenvolver competências, acelerar a maturidade das operações e formar lideranças em Supply Chain com os maiores diretores do setor.
            </p>

            {/* Badges de Confiança Corporativa com Micro-Ícones */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-semibold text-gray-300">
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-lg bg-[#ff3d03]/20 text-[#ff3d03] flex items-center justify-center shrink-0">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <span>Cursos técnicos com diretores</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-lg bg-[#ff3d03]/20 text-[#ff3d03] flex items-center justify-center shrink-0">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <span>LogGPT IA especialista 24/7</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-lg bg-[#ff3d03]/20 text-[#ff3d03] flex items-center justify-center shrink-0">
                  <TrendingUp className="w-3.5 h-3.5" />
                </div>
                <span>Dashboard de telemetria RH</span>
              </div>
            </div>
          </div>

          {/* Coluna Visual Rica: Composição Fotográfica com Cards Flutuantes (5 colunas) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Brilho neon de fundo */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#ff3d03]/40 to-orange-500/20 blur-2xl opacity-60 pointer-events-none" />

              {/* Card Principal com Fotografia Real de Liderança em Logística */}
              <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/20 shadow-2xl group">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src="/images/supply-chain-director.jpg"
                    alt="Liderança em Gestão de Supply Chain e Operações"
                    width={800}
                    height={500}
                    fetchPriority="high"
                    className="w-full h-full object-cover object-top img-zoom group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                  
                  {/* Badge Interno no Topo da Imagem */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-white bg-black/70 backdrop-blur-md px-3 py-1 rounded-full uppercase tracking-wider border border-white/20">
                      Operações & Supply Chain
                    </span>
                    <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-emerald-500/40">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Em Tempo Real
                    </span>
                  </div>
                </div>

                {/* Bloco Inferior do Card: Texto Limpo e Sem Nenhuma Sobreposição */}
                <div className="p-4 sm:p-5 bg-[#0a0e17]/95 border-t border-white/10 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff3d03] font-bold block mb-1">
                    MundoLogística Educação Corporativa
                  </span>
                  <p className="text-sm font-bold text-white leading-snug">
                    Formando os líderes das maiores cadeias do país
                  </p>
                </div>
              </div>

              {/* Elemento Flutuante 1 (Topo Direito): Telemetria OTIF */}
              <div className="absolute -top-3 -right-3 sm:-right-5 bg-black/95 backdrop-blur-xl border border-white/20 rounded-2xl p-3 shadow-2xl animate-float-slow hidden sm:flex items-center gap-3 z-20">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold shrink-0">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>OTIF 98.4%</span>
                    <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/30 font-bold">
                      +14%
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-gray-400">Eficiência Operacional</span>
                </div>
              </div>

              {/* Elemento Flutuante 2 (Topo Esquerdo): Acervo Técnico */}
              <div className="absolute -top-3 -left-3 sm:-left-5 bg-black/95 backdrop-blur-xl border border-[#ff3d03]/50 rounded-2xl p-3 shadow-2xl animate-float-reverse hidden sm:flex items-center gap-3 z-20">
                <div className="w-9 h-9 rounded-xl bg-[#ff3d03]/20 border border-[#ff3d03]/40 flex items-center justify-center text-[#ff3d03] font-bold shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">+18 Anos de Acervo</span>
                  <span className="text-[10px] font-mono text-gray-400">Curadoria Homologada</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Faixa de Grandes Clientes com Marquee Infinito */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-center font-mono text-[11px] uppercase tracking-widest text-gray-400 mb-5">
            Empresas que capacitam suas equipes com a MundoLogística
          </p>

          <div className="relative w-full overflow-hidden">
            {/* Gradientes laterais de fade */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[#06080d] to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[#06080d] to-transparent z-10" />

            <div className="flex gap-4 sm:gap-6 w-max marquee-track animate-marquee py-2">
              {[...PARTNERS, ...PARTNERS].map((company, index) => (
                <div
                  key={`${company.name}-${index}`}
                  className="flex items-center justify-center px-6 sm:px-8 py-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#ff3d03]/40 hover:bg-white/[0.06] transition-all duration-300 shrink-0 select-none"
                  title={company.name}
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    width={110}
                    height={28}
                    decoding="async"
                    className="h-6 sm:h-7 w-auto max-w-[100px] sm:max-w-[120px] object-contain opacity-60 hover:opacity-100 transition-opacity brightness-0 invert"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
