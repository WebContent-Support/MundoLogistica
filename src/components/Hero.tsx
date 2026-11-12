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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch mb-14">
          {/* Coluna de Texto (7 colunas no desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-between text-center lg:text-left space-y-6 lg:space-y-0">
            <div className="space-y-6">
              {/* Badge Luminous com Pulso e Entrada Coreografada */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel border border-[#ff3d03]/30 shadow-lg shadow-[#ff3d03]/10 hover:border-[#ff3d03]/60 transition-colors animate-hero-eyebrow">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff3d03] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff3d03]" />
                </span>
                <span className="text-[11px] font-mono-tech font-bold uppercase tracking-widest text-white">
                  Capacitação Corporativa B2B • Edição 2026
                </span>
              </div>

              {/* Headline Exata do Documento da Cliente com Contraste Tipográfico */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-[1.12] text-white animate-hero-title">
                Sua equipe está preparada para os{' '}
                <span className="font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ff3d03] via-[#ff6a3d] to-[#ff9e7a] text-glow hero-highlight-pill">
                  próximos desafios
                </span>{' '}
                da logística?
              </h1>

              {/* Subtítulo Executivo de Apoio */}
              <p className="text-base sm:text-lg text-gray-300 font-sans leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-hero-subtitle">
                O ecossistema definitivo para <span className="font-editorial italic font-normal text-white">desenvolver competências</span>, acelerar a maturidade das operações e formar lideranças em Supply Chain com os maiores diretores do setor.
              </p>
            </div>

            {/* Badges de Confiança Corporativa com Micro-Ícones (alinhados horizontalmente com o bloco do gestor) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 lg:pt-8 text-xs font-heading font-semibold text-gray-300 animate-hero-badges">
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-2.5 hover:border-[#ff3d03]/30 transition-colors min-h-[52px]">
                <div className="w-6 h-6 rounded-lg bg-[#ff3d03]/20 text-[#ff3d03] flex items-center justify-center shrink-0">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <span>Cursos técnicos com diretores</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-2.5 hover:border-[#ff3d03]/30 transition-colors min-h-[52px]">
                <div className="w-6 h-6 rounded-lg bg-[#ff3d03]/20 text-[#ff3d03] flex items-center justify-center shrink-0">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <span>LogGPT IA especialista 24/7</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-2.5 hover:border-[#ff3d03]/30 transition-colors min-h-[52px]">
                <div className="w-6 h-6 rounded-lg bg-[#ff3d03]/20 text-[#ff3d03] flex items-center justify-center shrink-0">
                  <TrendingUp className="w-3.5 h-3.5" />
                </div>
                <span>Dashboard de telemetria RH</span>
              </div>
            </div>
          </div>

          {/* Coluna Visual Rica: Composição de Liderança com Sistemas em Profundidade 3D (5 colunas) */}
          <div className="lg:col-span-5 relative flex flex-col justify-between">
            <div className="relative mx-auto max-w-md lg:max-w-none pt-4 flex-1 flex flex-col justify-end items-center">
              {/* Brilho neon central de fundo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gradient-to-tr from-[#ff3d03]/35 via-orange-500/20 to-amber-500/10 blur-3xl opacity-70 pointer-events-none" />

              {/* Sistema 1: Deslocado no topo para esquerda (atrás do gestor) */}
              <div className="absolute -top-4 sm:-top-8 -left-4 sm:-left-8 lg:-left-12 w-[62%] sm:w-[68%] lg:w-[72%] max-w-[340px] z-10 pointer-events-none animate-hero-system-1">
                <div className="animate-float-subtle-1">
                  <img
                    src="/images/sistema-1.webp"
                    alt="Sistema de Gestão Logística 1"
                    width={750}
                    height={400}
                    loading="eager"
                    decoding="async"
                    className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.7)]"
                  />
                </div>
              </div>

              {/* Sistema 2: Deslocado em baixo para direita (mais projetado para fora, revelando o sistema) */}
              <div className="absolute bottom-14 sm:bottom-12 -right-8 sm:-right-14 lg:-right-20 xl:-right-24 w-[64%] sm:w-[70%] lg:w-[74%] max-w-[340px] sm:max-w-[390px] z-10 pointer-events-none animate-hero-system-2">
                <div className="animate-float-subtle-2">
                  <img
                    src="/images/sistema-2.webp"
                    alt="Sistema de Gestão Logística 2"
                    width={672}
                    height={400}
                    loading="eager"
                    decoding="async"
                    className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.75)]"
                  />
                </div>
              </div>

              {/* Imagem do Gestor (em primeiro plano, centralizado, sem movimento contínuo - apenas entrada) */}
              <div className="relative z-20 mx-auto max-w-[280px] sm:max-w-[340px] lg:max-w-[360px] xl:max-w-[380px] animate-hero-gestor">
                <img
                  src="/images/gestor.webp"
                  alt="Líder e Gestor de Supply Chain"
                  width={800}
                  height={1000}
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-auto object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.9)] block"
                />
              </div>

              {/* Elemento Flutuante 1 (Topo Direito): Telemetria OTIF */}
              <div className="absolute -top-3 -right-2 sm:-right-4 lg:-right-6 z-30 animate-hero-chip-1">
                <div className="bg-black/95 backdrop-blur-xl border border-white/20 rounded-2xl p-3 shadow-2xl animate-float-slow hidden sm:flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold shrink-0">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span className="font-mono-tech font-bold text-sm">OTIF 98.4%</span>
                      <span className="text-[9px] font-mono-tech text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/30 font-bold">
                        +14%
                      </span>
                    </div>
                    <span className="text-[10px] font-mono-tech text-gray-400">Eficiência Operacional</span>
                  </div>
                </div>
              </div>

              {/* Elemento Flutuante 2 (Inferior Esquerdo): Acervo Técnico posicionado abaixo do sistema-1, sem cobri-lo */}
              <div className="absolute bottom-16 sm:bottom-20 -left-2 sm:-left-6 lg:-left-10 z-30 animate-hero-chip-2">
                <div className="bg-black/95 backdrop-blur-xl border border-[#ff3d03]/50 rounded-2xl p-3 shadow-2xl animate-float-reverse hidden sm:flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#ff3d03]/20 border border-[#ff3d03]/40 flex items-center justify-center text-[#ff3d03] font-bold shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-heading font-bold text-white block">+18 Anos de Acervo</span>
                    <span className="text-[10px] font-editorial italic text-orange-400">Curadoria Homologada</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bloco Inferior em Baixo do Gestor: Alinhado na mesma linha horizontal que os 3 blocos da esquerda */}
            <div className="w-full max-w-sm sm:max-w-md mx-auto pt-6 lg:pt-8 z-30">
              <div className="p-3 rounded-xl bg-[#0a0e17]/95 backdrop-blur-xl border border-white/15 shadow-2xl flex items-center gap-3 text-white min-h-[52px]">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#ff3d03] to-[#df3500] flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#ff3d03]/30">
                  <Award className="w-4 h-4" />
                </div>
                <div className="min-w-0 text-left">
                  <span className="text-[10px] font-mono-tech uppercase tracking-widest text-[#ff3d03] font-bold block truncate">
                    MundoLogística Educação Corporativa
                  </span>
                  <p className="text-xs font-heading font-bold text-white leading-tight">
                    Formando os líderes das maiores cadeias do país
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Faixa de Grandes Clientes com Marquee Infinito */}
        <div className="pt-8 border-t border-white/10 reveal-init delay-200">
          <p className="text-center font-mono-tech text-[11px] uppercase tracking-widest text-gray-400 mb-5">
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
