import { LineChart, Users, CheckCircle, Clock, Eye, TrendingUp, Layers, Activity } from 'lucide-react';

const TEAM_MEMBERS = [
  { name: 'Lucas Ferreira', role: 'Supervisor de Armazém', course: 'Otimização de Armazenagem e WMS', progress: 85, status: 'Em andamento' },
  { name: 'Mariana Costa', role: 'Analista de Planejamento', course: 'Gestão Baseada em Dados e S&OP', progress: 100, status: 'Certificado Emitido' },
  { name: 'Rodrigo Silveira', role: 'Coordenador de Fretes', course: 'Reforma Tributária e Transportes', progress: 60, status: 'Em andamento' },
  { name: 'Beatriz Almeida', role: 'Gerente de Supply Chain', course: 'Customer Centricity na Logística', progress: 100, status: 'Certificado Emitido' },
];

export default function DashboardSection() {
  return (
    <section id="dashboard" className="py-28 bg-[#06080d] text-white border-t border-white/10 relative overflow-hidden">
      {/* Luz ambiente de fundo */}
      <div className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-[#ff3d03]/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Mockup HUD do Gestor em Dark Luxury */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="glass-panel-glow rounded-3xl p-6 sm:p-8 border border-[#ff3d03]/30 shadow-2xl space-y-6">
              {/* Barra superior */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff3d03] animate-pulse" />
                  <span className="text-xs font-mono font-bold text-gray-300">
                    CONSOLE RH • PAINEL EM TEMPO REAL
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  <Activity className="w-3 h-3" />
                  <span>Sincronizado</span>
                </div>
              </div>

              {/* Cards de Métricas Rápidas */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                  <span className="text-[11px] font-mono text-gray-400 block mb-1">Horas de Estudo do Time</span>
                  <div className="text-3xl font-black text-white">428h</div>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold mt-1 block">+38% vs. mês anterior</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                  <span className="text-[11px] font-mono text-gray-400 block mb-1">Cursos Concluídos</span>
                  <div className="text-3xl font-black text-[#ff3d03]">54</div>
                  <span className="text-[10px] font-mono text-gray-400 font-bold mt-1 block">98.2% taxa de aprovação</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                  <span className="text-[11px] font-mono text-gray-400 block mb-1">Engajamento Semanal</span>
                  <div className="text-3xl font-black text-white">93.4%</div>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold mt-1 block">Ativos nos últimos 7 dias</span>
                </div>
              </div>

              {/* Lista de Membros da Equipe */}
              <div>
                <h4 className="text-[11px] font-mono font-bold uppercase tracking-widest text-gray-400 mb-3">
                  Progresso dos Colaboradores Ativos
                </h4>
                <div className="space-y-3">
                  {TEAM_MEMBERS.map((member) => (
                    <div
                      key={member.name}
                      className="p-4 rounded-2xl bg-black/40 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white">{member.name}</span>
                          <span className="text-gray-400 font-mono text-[11px]">• {member.role}</span>
                        </div>
                        <span className="text-gray-400 text-[11px] block mt-0.5">{member.course}</span>
                      </div>

                      <div className="flex items-center gap-3 sm:w-48 shrink-0">
                        <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-[#ff3d03] to-[#ff7b4d] h-2 rounded-full transition-all duration-500 shadow-sm shadow-[#ff3d03]/50"
                            style={{ width: `${member.progress}%` }}
                          />
                        </div>
                        <span className="font-mono font-bold text-white w-8 text-right">{member.progress}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Texto Persuasivo */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ff3d03] bg-[#ff3d03]/10 border border-[#ff3d03]/30 px-3.5 py-1.5 rounded-full inline-block">
              Visibilidade & ROI para a Liderança
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.1]">
              O desenvolvimento do time <span className="text-[#ff3d03]">não fica mais invisível</span>.
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              Diga adeus a treinamentos onde a empresa paga e nunca sabe se o colaborador realmente consumiu. Com o Dashboard Corporativo, o gestor e o RH têm controle total em tempo real.
            </p>

            <ul className="space-y-3.5 pt-2">
              {[
                'Quem está estudando e quantidade de horas dedicadas por semana',
                'Quais trilhas e cursos estão sendo mais aplicados no dia a dia',
                'Relatórios consolidados para prestação de contas de T&D e ISO',
                'Emissão e controle centralizado de certificados oficiais',
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-gray-300 font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#ff3d03]/20 text-[#ff3d03] flex items-center justify-center shrink-0">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <a
                href="#proposta"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#ff3d03] to-[#e03502] hover:scale-105 transition-all shadow-lg shadow-[#ff3d03]/30"
              >
                Solicitar Acesso ao Dashboard de Teste
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
