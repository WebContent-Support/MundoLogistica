'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Sparkles, CheckCircle2, ShieldCheck, Flame, Play, Bot, TrendingUp, Users } from 'lucide-react';

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

const TABS: ('cursos' | 'loggpt' | 'dashboard')[] = ['cursos', 'loggpt', 'dashboard'];

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'cursos' | 'loggpt' | 'dashboard'>('cursos');
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveTab((current) => {
        const nextIndex = (TABS.indexOf(current) + 1) % TABS.length;
        return TABS[nextIndex];
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, activeTab]);

  return (
    <section data-theme="dark" className="relative overflow-hidden pt-8 pb-24 lg:pt-16 lg:pb-32 bg-[#06080d]">
      {/* Luz ambiente de fundo neon laranja */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-[#ff3d03]/25 via-[#ff3d03]/10 to-transparent blur-[120px] pointer-events-none rounded-full" />
      
      {/* Grade futurista de fundo com máscara radial */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Bloco Central de Copy */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Badge Luminous */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-[#ff3d03]/30 shadow-lg shadow-[#ff3d03]/10 mb-8 hover:border-[#ff3d03]/60 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff3d03] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff3d03]" />
            </span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Capacitação Corporativa B2B • Edição 2026
            </span>
          </div>

          {/* Headline Monumental com Gradiente */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] mb-8 text-white">
            Acelere a eficiência da sua logística com{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3d03] via-[#ff6a3d] to-[#ff9e7a] text-glow">
              quem dita as regras
            </span>{' '}
            do setor.
          </h1>

          {/* Subtítulo Executivo */}
          <p className="text-lg sm:text-xl text-gray-300 font-normal leading-relaxed mb-10 max-w-2xl mx-auto">
            Cursos técnicos ministrados pelos maiores diretores de Supply Chain do Brasil, acervo estratégico de 18 anos e o <strong className="text-white font-bold underline decoration-[#ff3d03] decoration-2 underline-offset-4">LogGPT</strong> — a primeira inteligência artificial especialista em logística do país.
          </p>

          {/* CTAs Duplos Ousados */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Link
              href="#proposta"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-black text-white bg-gradient-to-r from-[#ff3d03] to-[#df3500] hover:from-[#ff5722] hover:to-[#eb3b00] transition-all shadow-[0_0_40px_-5px_rgba(255,61,3,0.5)] hover:shadow-[0_0_50px_0px_rgba(255,61,3,0.7)] hover:scale-105 active:scale-95 border border-orange-400/30"
            >
              SOLICITAR PROPOSTA CORPORATIVA
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="#cursos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-gray-200 glass-panel hover:bg-white/10 border border-white/15 transition-all hover:scale-105"
            >
              <BookOpen className="w-4 h-4 text-[#ff3d03]" />
              Explorar Vitrine de Cursos
            </Link>
          </div>

          {/* Badges de Confiança Corporativa */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-semibold text-gray-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#ff3d03]" />
              <span>Painel de gestão em tempo real para o RH</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#ff3d03]" />
              <span>Certificados com chancela MundoLogística</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#ff3d03]" />
              <span>LogGPT IA 24/7 liberada para toda a equipe</span>
            </div>
          </div>
        </div>

        {/* MOCKUP INTERATIVO ESTILO LINEAR / RAYCAST */}
        <div className="relative max-w-5xl mx-auto mb-20">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#ff3d03]/40 via-orange-500/10 to-[#ff3d03]/40 blur-xl opacity-60" />
          
          <div
            className="relative glass-panel rounded-3xl border border-white/15 p-4 sm:p-6 shadow-2xl overflow-hidden group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Topbar da Janela com Abas */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-white/10 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs font-mono text-gray-300 ml-2">mundologistica.app • suite corporativa</span>
              </div>

              {/* Botões de Troca de Visão */}
              <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-xl border border-white/5">
                <button
                  type="button"
                  onClick={() => setActiveTab('cursos')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 relative cursor-pointer ${
                    activeTab === 'cursos'
                      ? 'bg-[#df3500] text-white shadow-md shadow-[#df3500]/30 scale-100'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  title="Ver Cursos e Especialistas"
                >
                  Vitrine de Cursos
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('loggpt')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 flex items-center gap-1 relative cursor-pointer ${
                    activeTab === 'loggpt'
                      ? 'bg-[#c92e00] text-white shadow-md shadow-[#c92e00]/30 scale-100'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  title="Ver Demonstração do LogGPT IA"
                >
                  <Bot className="w-3.5 h-3.5" />
                  LogGPT IA
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('dashboard')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 relative cursor-pointer ${
                    activeTab === 'dashboard'
                      ? 'bg-[#c92e00] text-white shadow-md shadow-[#c92e00]/30 scale-100'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  title="Ver Métricas de Telemetria RH"
                >
                  Dashboard RH
                </button>
              </div>
            </div>

            {/* Conteúdo Dinâmico da Janela com Transição Fade Suave */}
            <div className="grid grid-cols-1">
              {/* Tab 1: Vitrine de Cursos */}
              <div
                className={`col-start-1 row-start-1 transition-all duration-700 ease-in-out ${
                  activeTab === 'cursos'
                    ? 'opacity-100 translate-y-0 pointer-events-auto z-10'
                    : 'opacity-0 translate-y-2 pointer-events-none z-0'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#ff3d03]/40 transition-all">
                    <span className="text-[10px] font-mono text-[#ff3d03] bg-[#ff3d03]/10 px-2.5 py-0.5 rounded-full uppercase">
                      Supply Chain
                    </span>
                    <p className="text-sm font-bold text-white mt-2 mb-1">Customer Centricity na Logística</p>
                    <p className="text-xs text-gray-400">Profa. Tania Heck Trotta (Ex-executiva FMCG e Pharma)</p>
                    <div className="mt-4 flex items-center justify-between text-[11px] text-gray-400 border-t border-white/5 pt-2">
                      <span>12h de aulas</span>
                      <span className="text-[#ff3d03] font-bold">Certificado Oficial</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#ff3d03]/40 transition-all">
                    <span className="text-[10px] font-mono text-[#ff3d03] bg-[#ff3d03]/10 px-2.5 py-0.5 rounded-full uppercase">
                      Tributário & Custos
                    </span>
                    <p className="text-sm font-bold text-white mt-2 mb-1">Reforma Tributária e Transportes</p>
                    <p className="text-xs text-gray-400">Rafael Brito (CEO & Especialista Tributário)</p>
                    <div className="mt-4 flex items-center justify-between text-[11px] text-gray-400 border-t border-white/5 pt-2">
                      <span>10h de aulas</span>
                      <span className="text-[#ff3d03] font-bold">Certificado Oficial</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#ff3d03]/40 transition-all">
                    <span className="text-[10px] font-mono text-[#ff3d03] bg-[#ff3d03]/10 px-2.5 py-0.5 rounded-full uppercase">
                      Tecnologia & IA
                    </span>
                    <p className="text-sm font-bold text-white mt-2 mb-1">Veículos Autônomos na Logística</p>
                    <p className="text-xs text-gray-400">Marilia Ramalho (Americas Supply Chain Director)</p>
                    <div className="mt-4 flex items-center justify-between text-[11px] text-gray-400 border-t border-white/5 pt-2">
                      <span>10h de aulas</span>
                      <span className="text-[#ff3d03] font-bold">Certificado Oficial</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tab 2: LogGPT Console */}
              <div
                className={`col-start-1 row-start-1 transition-all duration-700 ease-in-out ${
                  activeTab === 'loggpt'
                    ? 'opacity-100 translate-y-0 pointer-events-auto z-10'
                    : 'opacity-0 translate-y-2 pointer-events-none z-0'
                }`}
              >
                <div className="p-6 rounded-2xl bg-black/60 border border-white/10 space-y-4 font-mono text-xs">
                  <div className="flex items-center gap-2 text-[#ff3d03]">
                    <Bot className="w-4 h-4" />
                    <span className="font-bold">LogGPT v3 Enterprise Console:</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-300">
                    <span className="text-orange-400">&gt; Pergunta do Gestor:</span> "Qual a fórmula para cálculo de estoque de segurança com lead time volátil?"
                  </div>
                  <div className="p-4 rounded-xl bg-[#ff3d03]/10 border border-[#ff3d03]/30 text-white leading-relaxed">
                    <span className="text-emerald-400">&gt; Resposta LogGPT:</span> SS = Z × √[(LT × σD²) + (D² × σLT²)]. Recomendamos o fator Z=1.65 (95% OTIF). Baseado no acervo técnico MundoLogística.
                  </div>
                </div>
              </div>

              {/* Tab 3: Dashboard RH */}
              <div
                className={`col-start-1 row-start-1 transition-all duration-700 ease-in-out ${
                  activeTab === 'dashboard'
                    ? 'opacity-100 translate-y-0 pointer-events-auto z-10'
                    : 'opacity-0 translate-y-2 pointer-events-none z-0'
                }`}
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                    <span className="text-xs text-gray-400">Horas de Treinamento da Equipe</span>
                    <div className="text-3xl font-black text-white mt-1">428h</div>
                    <span className="text-[11px] text-emerald-400 font-bold mt-1 block">+38% vs. mês anterior</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                    <span className="text-xs text-gray-400">Cursos Concluídos</span>
                    <div className="text-3xl font-black text-white mt-1">54</div>
                    <span className="text-[11px] text-[#ff3d03] font-bold mt-1 block">98.2% aprovação nos testes</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                    <span className="text-xs text-gray-400">Colaboradores Ativos</span>
                    <div className="text-3xl font-black text-white mt-1">28 / 30</div>
                    <span className="text-[11px] text-emerald-400 font-bold mt-1 block">93.3% engajamento semanal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Faixa de Grandes Clientes com visual Neon e Marquee Infinito */}
        <div className="pt-10 border-t border-white/10">
          <p className="text-center font-mono text-xs uppercase tracking-widest text-gray-400 mb-6">
            Capacitando as maiores operações logísticas do continente
          </p>

          <div className="relative w-full overflow-hidden">
            {/* Gradientes de fade suave nas laterais estilo Linear/Stripe */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-[#06080d] to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-[#06080d] to-transparent z-10" />

            {/* Marquee Track Infinito com pause no hover */}
            <div className="flex gap-4 sm:gap-6 w-max marquee-track animate-marquee py-2">
              {[...PARTNERS, ...PARTNERS].map((company, index) => (
                <div
                  key={`${company.name}-${index}`}
                  className="group flex items-center justify-center px-6 sm:px-8 py-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#ff3d03]/40 hover:bg-white/[0.06] hover:shadow-[0_0_25px_-5px_rgba(255,61,3,0.25)] transition-all duration-300 shrink-0 select-none cursor-default"
                  title={company.name}
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    width={120}
                    height={32}
                    decoding="async"
                    className="h-7 sm:h-8 w-auto max-w-[110px] sm:max-w-[130px] object-contain opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 brightness-0 invert"
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
