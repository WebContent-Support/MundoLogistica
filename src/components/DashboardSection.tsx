import { LineChart, Users, CheckCircle, Clock, Eye, TrendingUp, Layers } from 'lucide-react';

const DASHBOARD_METRICS = [
  { label: 'Horas de Capacitação do Time', value: '384h', change: '+24% este mês', icon: Clock },
  { label: 'Cursos Concluídos c/ Certificado', value: '42', change: '95% de aprovação', icon: CheckCircle },
  { label: 'Engajamento da Equipe', value: '89.4%', change: 'Acima da média de mercado', icon: TrendingUp },
];

const TEAM_MEMBERS = [
  { name: 'Lucas Ferreira', role: 'Supervisor de Armazém', course: 'Otimização de Armazenagem e WMS', progress: 85, status: 'Em andamento' },
  { name: 'Mariana Costa', role: 'Analista de Planejamento', course: 'Gestão Baseada em Dados e S&OP', progress: 100, status: 'Certificado Emitido' },
  { name: 'Rodrigo Silveira', role: 'Coordenador de Fretes', course: 'Reforma Tributária e Impactos em Transportes', progress: 60, status: 'Em andamento' },
  { name: 'Beatriz Almeida', role: 'Gerente de Supply Chain', course: 'Customer Centricity na Logística', progress: 100, status: 'Certificado Emitido' },
];

export default function DashboardSection() {
  return (
    <section id="dashboard" className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Mockup Interativo do Painel do Gestor */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/90 shadow-2xl space-y-6">
              {/* Barra superior do Painel */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="text-xs font-bold text-gray-500 ml-2">Painel do Gestor B2B • Visão Geral da Equipe</span>
                </div>
                <span className="text-xs font-bold text-[#ff3d03] bg-orange-50 px-3 py-1 rounded-full">
                  Ao Vivo
                </span>
              </div>

              {/* Cards de Métricas do Dashboard */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {DASHBOARD_METRICS.map((metric) => {
                  const Icon = metric.icon;
                  return (
                    <div key={metric.label} className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="w-8 h-8 rounded-lg bg-[#ff3d03]/10 text-[#ff3d03] flex items-center justify-center mb-2">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-2xl font-black text-gray-900 block tracking-tight">{metric.value}</span>
                      <span className="text-xs text-gray-500 font-medium block">{metric.label}</span>
                      <span className="text-[10px] text-emerald-600 font-bold mt-1 block">{metric.change}</span>
                    </div>
                  );
                })}
              </div>

              {/* Tabela de Membros da Equipe */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                  Progresso Individual dos Colaboradores
                </h4>
                <div className="space-y-3">
                  {TEAM_MEMBERS.map((member) => (
                    <div
                      key={member.name}
                      className="p-3.5 rounded-xl bg-gray-50/70 border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-gray-900">{member.name}</span>
                          <span className="text-gray-400">• {member.role}</span>
                        </div>
                        <span className="text-gray-500 text-[11px] block mt-0.5">{member.course}</span>
                      </div>

                      <div className="flex items-center gap-3 sm:w-44 shrink-0">
                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-[#ff3d03] h-2 rounded-full transition-all duration-500"
                            style={{ width: `${member.progress}%` }}
                          />
                        </div>
                        <span className="font-bold text-gray-700 w-8 text-right">{member.progress}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Texto Persuasivo */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#ff3d03] bg-orange-100/70 px-3.5 py-1.5 rounded-full">
              Visibilidade & ROI para o RH
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight leading-tight">
              O desenvolvimento do seu time <span className="text-[#ff3d03]">não fica mais invisível</span>.
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Diga adeus a treinamentos onde a empresa paga e não sabe se a equipe realmente aprendeu. Com o Dashboard Corporativo da MundoLogística, o gestor acompanha cada etapa em tempo real.
            </p>

            <ul className="space-y-3 pt-2">
              {[
                'Quem está aprendendo e horas dedicadas por semana',
                'Quais trilhas e cursos estão sendo mais consumidos',
                'Taxa de conclusão e notas nos testes práticos',
                'Exportação de relatórios para auditoria de T&D e ISO',
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-gray-800 font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#ff3d03]/10 text-[#ff3d03] flex items-center justify-center shrink-0">
                    <CheckCircle className="w-3.5 h-3.5" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <a
                href="#proposta"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#ff3d03] hover:bg-[#e03502] transition-colors shadow-md shadow-[#ff3d03]/25"
              >
                Conhecer o Painel do Gestor
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
