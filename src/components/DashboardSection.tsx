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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Mockup Interativo e Realista da Interface do Gestor */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div
              ref={dashboardRef}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/90 shadow-xl space-y-6 relative group"
            >
              {/* Cantoneira Laranja da Marca MundoLogística */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#ff3d03]" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#ff3d03]" />

              {/* Barra superior de telemetria */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 pl-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff3d03] animate-pulse" />
                  <span className="text-xs font-mono font-bold text-gray-700">
                    PAINEL DO LÍDER • TELEMETRIA DE DESENVOLVIMENTO
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  <Activity className="w-3 h-3" />
                  <span>Sincronizado em tempo real</span>
                </div>
              </div>

              {/* Cards de Métricas Rápidas */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <span className="text-[11px] font-mono text-gray-600 block mb-1">
                    Horas de Estudo da Equipe
                  </span>
                  <div className="text-3xl font-black text-gray-950 tabular-nums">
                    {hours}h
                  </div>
                  <span className="text-[10px] font-mono text-emerald-700 font-bold mt-1 block">
                    +38% vs. mês anterior
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <span className="text-[11px] font-mono text-gray-600 block mb-1">
                    Cursos Concluídos
                  </span>
                  <div className="text-3xl font-black text-[#df3500] tabular-nums">
                    {coursesCount}
                  </div>
                  <span className="text-[10px] font-mono text-gray-600 font-bold mt-1 block">
                    98.2% taxa de aprovação
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <span className="text-[11px] font-mono text-gray-600 block mb-1">
                    Engajamento Semanal
                  </span>
                  <div className="text-3xl font-black text-gray-950 tabular-nums">
                    {engagement}%
                  </div>
                  <span className="text-[10px] font-mono text-emerald-700 font-bold mt-1 block">
                    Ativos nos últimos 7 dias
                  </span>
                </div>
              </div>

              {/* Lista de Membros da Equipe */}
              <div>
                <p className="text-[11px] font-mono font-bold uppercase tracking-widest text-gray-600 mb-3">
                  Progresso Nominal por Colaborador
                </p>
                <div className="space-y-3">
                  {TEAM_MEMBERS.map((member, idx) => (
                    <div
                      key={member.name}
                      className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-gray-900">{member.name}</span>
                          <span className="text-gray-600 font-mono text-[11px]">• {member.role}</span>
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
          </div>

          {/* Coluna Texto Oficial da Cliente */}
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

            {/* Lista Oficial "Acompanhe:" */}
            <div className="pt-2 space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-900 block">
                Acompanhe:
              </span>
              <ul className="space-y-3">
                {[
                  'Quem está se desenvolvendo',
                  'O que está sendo consumido',
                  'Quais conteúdos foram concluídos',
                  'Como cada profissional está evoluindo',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-800 font-medium">
                    <div className="w-5 h-5 rounded-full bg-orange-100 text-[#df3500] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* BOTÃO CTA DA 3ª DOBRA: Texto Exato do Cliente */}
            <div className="pt-4">
              <Link
                href="#proposta"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-bold text-white bg-[#df3500] hover:bg-[#ff3d03] shadow-md shadow-[#df3500]/25 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-orange-400/30 uppercase tracking-wider"
              >
                Solicitar demonstração
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
