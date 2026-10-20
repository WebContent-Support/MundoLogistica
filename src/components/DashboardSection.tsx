'use client';

import { useState, useEffect, useRef } from 'react';
import { LineChart, Users, CheckCircle, Clock, Eye, TrendingUp, Layers, Activity } from 'lucide-react';

const TEAM_MEMBERS = [
  { name: 'Lucas Ferreira', role: 'Supervisor de Armazém', course: 'Otimização de Armazenagem e WMS', targetProgress: 85, status: 'Em andamento' },
  { name: 'Mariana Costa', role: 'Analista de Planejamento', course: 'Gestão Baseada em Dados e S&OP', targetProgress: 100, status: 'Certificado Emitido' },
  { name: 'Rodrigo Silveira', role: 'Coordenador de Fretes', course: 'Reforma Tributária e Transportes', targetProgress: 60, status: 'Em andamento' },
  { name: 'Beatriz Almeida', role: 'Gerente de Supply Chain', course: 'Customer Centricity na Logística', targetProgress: 100, status: 'Certificado Emitido' },
];

export default function DashboardSection() {
  const dashboardRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Contadores numéricos rápidos
  const [hours, setHours] = useState(0);
  const [coursesCount, setCoursesCount] = useState(0);
  const [engagement, setEngagement] = useState(0);

  // Progresso individual dos colaboradores
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

    const duration = 1500; // ms
    const startTime = performance.now();

    const updateCounters = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Suave curva ease-out exponencial
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
    <section id="dashboard" data-theme="light" className="py-28 bg-[#f8fafc] text-gray-900 border-t border-gray-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Mockup HUD do Gestor em Estilo Claro Executivo */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div
              ref={dashboardRef}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/90 shadow-xl space-y-6 relative group"
            >
              {/* Cantoneira Laranja da Marca MundoLogística */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#ff3d03]" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#ff3d03]" />

              {/* Barra superior */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 pl-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff3d03] animate-pulse" />
                  <span className="text-xs font-mono font-bold text-gray-700">
                    PAINEL DO GESTOR • TELEMETRIA DE CAPACITAÇÃO
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  <Activity className="w-3 h-3" />
                  <span>Sincronizado</span>
                </div>
              </div>

              {/* Cards de Métricas Rápidas */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <span className="text-[11px] font-mono text-gray-500 block mb-1">Horas de Estudo da Equipe</span>
                  <div className="text-3xl font-black text-gray-950 tabular-nums">{hours}h</div>
                  <span className="text-[10px] font-mono text-emerald-600 font-bold mt-1 block">+38% vs. mês anterior</span>
                </div>

                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <span className="text-[11px] font-mono text-gray-500 block mb-1">Cursos Concluídos</span>
                  <div className="text-3xl font-black text-[#ff3d03] tabular-nums">{coursesCount}</div>
                  <span className="text-[10px] font-mono text-gray-500 font-bold mt-1 block">98.2% taxa de aprovação</span>
                </div>

                <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                  <span className="text-[11px] font-mono text-gray-500 block mb-1">Engajamento Semanal</span>
                  <div className="text-3xl font-black text-gray-950 tabular-nums">{engagement}%</div>
                  <span className="text-[10px] font-mono text-emerald-600 font-bold mt-1 block">Ativos nos últimos 7 dias</span>
                </div>
              </div>

              {/* Lista de Membros da Equipe */}
              <div>
                <p className="text-[11px] font-mono font-bold uppercase tracking-widest text-gray-600 mb-3">
                  Progresso Individual dos Colaboradores
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


          {/* Coluna Texto Persuasivo */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#c23300] bg-orange-100/70 border border-orange-300 px-3.5 py-1.5 rounded-full inline-block">
              Visibilidade & ROI para a Liderança
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-gray-950 tracking-tight leading-[1.1]">
              O desenvolvimento do time <span className="text-[#c23300]">não fica mais invisível</span>.
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Diga adeus a treinamentos corporativos onde a empresa investe e nunca sabe se o colaborador realmente consumiu. Com o Dashboard da MundoLogística, o gestor e o RH têm controle total em tempo real.
            </p>

            <ul className="space-y-3.5 pt-2">
              {[
                'Quem está estudando e quantidade de horas dedicadas por semana',
                'Quais trilhas e cursos estão sendo mais aplicados no dia a dia',
                'Relatórios consolidados para prestação de contas de T&D e ISO',
                'Emissão e controle centralizado de certificados oficiais',
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                  <div className="w-5 h-5 rounded-full bg-orange-100 text-[#c23300] flex items-center justify-center shrink-0">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <a
                href="#proposta"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-white bg-[#ff3d03] hover:bg-[#e03502] transition-all shadow-md shadow-[#ff3d03]/25"
              >
                Solicitar Demonstração do Painel
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
