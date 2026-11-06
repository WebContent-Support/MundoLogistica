'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Users,
  CheckCircle,
  Clock,
  Activity,
  ArrowRight,
  TrendingUp,
  BarChart3,
  Layers,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Check,
} from 'lucide-react';

const TEAM_MEMBERS = [
  {
    name: 'Lucas Ferreira',
    role: 'Supervisor de Armazém',
    course: 'Otimização de Armazenagem e WMS',
    targetProgress: 85,
    status: 'Em andamento',
  },
  {
    name: 'Mariana Costa',
    role: 'Analista de Planejamento',
    course: 'Gestão Baseada em Dados e S&OP',
    targetProgress: 100,
    status: 'Certificado Emitido',
  },
  {
    name: 'Rodrigo Silveira',
    role: 'Coordenador de Fretes',
    course: 'Reforma Tributária e Transportes',
    targetProgress: 60,
    status: 'Em andamento',
  },
  {
    name: 'Beatriz Almeida',
    role: 'Gerente de Supply Chain',
    course: 'Customer Centricity na Logística',
    targetProgress: 100,
    status: 'Certificado Emitido',
  },
];

export default function DashboardSection() {
  const dashboardRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Contadores numéricos rápidos
  const [hours, setHours] = useState(0);
  const [coursesCount, setCoursesCount] = useState(0);
  const [engagement, setEngagement] = useState(0);
  const [memberValues, setMemberValues] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.25 }
    );

    const el = dashboardRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1500;
    const startTime = performance.now();

    const updateCounters = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setHours(Math.round(easeProgress * 428));
      setCoursesCount(Math.round(easeProgress * 54));
      setEngagement(Number((easeProgress * 93.4).toFixed(1)));

      setMemberValues([
        Math.round(easeProgress * 85),
        Math.round(easeProgress * 100),
        Math.round(easeProgress * 60),
        Math.round(easeProgress * 100),
      ]);

      if (progress < 1) {
        requestAnimationFrame(updateCounters);
      }
    };

    const frameId = requestAnimationFrame(updateCounters);
    return () => cancelAnimationFrame(frameId);
  }, [hasAnimated]);

  return (
    <section
      id="dashboard"
      data-theme="light"
      className="py-24 bg-white text-gray-900 border-t border-gray-200 relative overflow-hidden"
    >
      {/* Imagem de Fundo de Centro de Controle / Torre de Comando */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src="/images/control-tower.jpg"
          alt="Torre de Controle Logística e Telemetria Operacional"
          className="w-full h-full object-cover opacity-12 mix-blend-multiply filter blur-[0.5px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      {/* Padrão geométrico suave de fundo */}
      <div className="absolute inset-0 bg-tech-grid-light opacity-40 pointer-events-none" />

      {/* Luz ambiente suave de fundo */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Mockup Interativo e Realista da Interface do Gestor com Profundidade Visual */}
          <div className="lg:col-span-7 order-2 lg:order-1 relative">
            {/* Brilho neon de profundidade */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-orange-400/20 to-[#df3500]/20 blur-xl opacity-70 pointer-events-none" />

            <div
              ref={dashboardRef}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-2xl space-y-6 relative group"
            >
              {/* Cantoneira Laranja da Marca MundoLogística */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#ff3d03]" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#ff3d03]" />

              {/* Barra superior estilo janela de sistema com botões Mac */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 pl-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="text-xs font-mono font-bold text-gray-700 ml-1">
                    painel.mundologistica.app • Visão do Líder
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  <Activity className="w-3 h-3" />
                  <span>Sincronizado</span>
                </div>
              </div>

              {/* Cards de Métricas Rápidas com Ícones */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 shadow-xs">
                  <span className="text-[11px] font-mono text-gray-500 block mb-1">
                    Horas de Estudo da Equipe
                  </span>
                  <div className="text-3xl font-black text-gray-950 tabular-nums">
                    {hours}h
                  </div>
                  <span className="text-[10px] font-mono text-emerald-600 font-bold mt-1 block">
                    +38% vs. mês anterior
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 shadow-xs">
                  <span className="text-[11px] font-mono text-gray-500 block mb-1">
                    Cursos Concluídos
                  </span>
                  <div className="text-3xl font-black text-[#df3500] tabular-nums">
                    {coursesCount}
                  </div>
                  <span className="text-[10px] font-mono text-gray-600 font-bold mt-1 block">
                    98.2% taxa de aprovação
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 shadow-xs">
                  <span className="text-[11px] font-mono text-gray-500 block mb-1">
                    Engajamento Semanal
                  </span>
                  <div className="text-3xl font-black text-gray-950 tabular-nums">
                    {engagement}%
                  </div>
                  <span className="text-[10px] font-mono text-emerald-600 font-bold mt-1 block">
                    Ativos nos últimos 7 dias
                  </span>
                </div>
              </div>

              {/* Lista Nominal de Colaboradores em Desenvolvimento */}
              <div>
                <p className="text-[11px] font-mono font-bold uppercase tracking-widest text-gray-600 mb-3">
                  Progresso Nominal por Colaborador
                </p>
                <div className="space-y-3">
                  {TEAM_MEMBERS.map((member, idx) => (
                    <div
                      key={member.name}
                      className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs shadow-xs"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-gray-900">{member.name}</span>
                          <span className="text-gray-500 font-mono text-[11px]">• {member.role}</span>
                        </div>
                        <span className="text-gray-600 text-[11px] block mt-0.5">{member.course}</span>
                      </div>

                      <div className="flex items-center gap-3 sm:w-48 shrink-0">
                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-[#ff3d03] to-[#ff7b4d] h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${hasAnimated ? member.targetProgress : 0}%` }}
                          />
                        </div>
                        <span className="font-mono font-bold text-gray-900 w-10 text-right tabular-nums">
                          {memberValues[idx]}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Chip Flutuante Criativo para Dar Profundidade */}
            <div className="absolute -bottom-4 -right-4 bg-black/90 text-white rounded-2xl p-3 shadow-xl border border-white/10 hidden sm:flex items-center gap-3 animate-float-slow z-20">
              <div className="w-9 h-9 rounded-xl bg-[#df3500] flex items-center justify-center text-white font-bold">
                <BarChart3 className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <span className="font-bold block">Relatórios Consolidados</span>
                <span className="text-[10px] font-mono text-gray-400">Exportação em PDF & Excel</span>
              </div>
            </div>
          </div>

          {/* Coluna de Texto com os 4 Pontos Oficiais da Cliente */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#df3500] bg-orange-100/80 border border-orange-300 px-3.5 py-1.5 rounded-full inline-block">
              Gestão & Acompanhamento
            </span>

            {/* Texto Destaque da Cliente */}
            <h2 className="text-3xl sm:text-5xl font-black text-gray-950 tracking-tight leading-[1.15]">
              Dashboard do líder
            </h2>

            {/* Texto Apoio da Cliente */}
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Acompanhe a participação e o progresso dos profissionais na plataforma e tenha mais visibilidade sobre a jornada de desenvolvimento da equipe!
            </p>

            {/* Lista Oficial "Acompanhe:" com Cards Criativos */}
            <div className="pt-2 space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-900 block">
                Acompanhe:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { text: 'Quem está se desenvolvendo', desc: 'Identificação individual' },
                  { text: 'O que está sendo consumido', desc: 'Aulas, artigos e módulos' },
                  { text: 'Quais conteúdos concluídos', desc: 'Certificados emitidos' },
                  { text: 'Como cada profissional evolui', desc: 'Maturidade técnica' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200/80 hover:border-orange-300 transition-colors"
                  >
                    <div className="flex items-center gap-2 font-bold text-sm text-gray-900 mb-0.5">
                      <div className="w-5 h-5 rounded-full bg-orange-100 text-[#df3500] flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-xs">{item.text}</span>
                    </div>
                    <span className="text-[11px] text-gray-500 pl-7 block">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* BOTÃO CTA DA 3ª DOBRA com Foco Óptico e Efeito Radar */}
            <div className="pt-4 relative">
              {/* Ponto de luz cônico atrás do botão */}
              <div className="absolute -inset-4 cta-spotlight-light pointer-events-none rounded-3xl" />

              <div className="relative inline-block">
                {/* Onda de Radar */}
                <div className="absolute inset-0 rounded-2xl bg-[#ff3d03]/40 radar-wave pointer-events-none" />

                <Link
                  href="#proposta"
                  className="relative inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-4.5 rounded-2xl text-sm sm:text-base font-black text-white bg-gradient-to-r from-[#ff3d03] to-[#df3500] hover:from-[#ff5722] hover:to-[#eb3b00] shadow-[0_10px_30px_rgba(255,61,3,0.35)] hover:shadow-[0_15px_40px_rgba(255,61,3,0.5)] hover:scale-105 active:scale-95 transition-all cursor-pointer border border-orange-300/40 uppercase tracking-wider shimmer-btn"
                >
                  Solicitar demonstração
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="flex items-center gap-2 mt-3 text-xs font-mono text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Demonstração prática guiada com dados reais de exemplo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
