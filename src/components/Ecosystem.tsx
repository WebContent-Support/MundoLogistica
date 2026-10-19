import { Compass, BookCheck, Bot, Network, Award, TrendingUp, Users, Clock } from 'lucide-react';

const PILLARS = [
  {
    icon: Compass,
    title: 'Mapa do Conhecimento',
    description: 'Diagnóstico técnico preciso para identificar gaps de habilidades no seu time e direcionar estudos de forma personalizada.',
    tag: 'Direcionamento Estratégico',
  },
  {
    icon: BookCheck,
    title: 'Conteúdo Prático & Aplicável',
    description: 'Aulas objetivas, planilhas editáveis, estudos de caso e metodologias para aplicar direto no dia a dia da operação.',
    tag: 'Zero Teoria Inútil',
  },
  {
    icon: Bot,
    title: 'LogGPT Especialista',
    description: 'A primeira e única IA treinada com 18 anos de conteúdo da MundoLogística para tirar dúvidas técnicas do time 24 horas por dia.',
    tag: 'Tecnologia Exclusiva',
  },
  {
    icon: Network,
    title: 'Trilhas Customizadas por Cargo',
    description: 'Formação continuada sob medida para analistas, supervisores, gerentes e diretores de Supply Chain e Logística.',
    tag: 'Evolução Contínua',
  },
];

const METRICS = [
  { value: '+18 Anos', label: 'de autoridade e curadoria no mercado brasileiro' },
  { value: '+400', label: 'empresas líderes capacitando seus times' },
  { value: '+30 Cursos', label: 'especializados com grandes líderes do setor' },
  { value: '100%', label: 'dos cursos com certificado oficial de conclusão' },
];

export default function Ecosystem() {
  return (
    <section id="ecossistema" className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#ff3d03] bg-orange-100/70 px-3.5 py-1.5 rounded-full">
            Ecossistema Completo de Aprendizado
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-950 mt-4 mb-4 tracking-tight">
            Tudo o que sua equipe precisa para liderar a logística moderna
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Esqueça cursos genéricos da internet. Aqui o conteúdo é produzido exclusivamente por quem vive as dores e transformações da cadeia logística brasileira.
          </p>
        </div>

        {/* Grid de 4 Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-white rounded-2xl p-7 border border-gray-200/80 hover:border-[#ff3d03]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-orange-50 group-hover:bg-[#ff3d03] flex items-center justify-center text-[#ff3d03] group-hover:text-white transition-colors duration-300 mb-6 shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] font-bold text-[#ff3d03] uppercase tracking-wider block mb-2">
                    {pillar.tag}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#ff3d03] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Faixa de Métricas */}
        <div className="bg-gray-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-64 h-64 rounded-full bg-[#ff3d03]/20 blur-3xl pointer-events-none" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 text-center sm:text-left">
            {METRICS.map((metric) => (
              <div key={metric.value} className="border-l-2 border-[#ff3d03] pl-4 sm:pl-6">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2 tracking-tight">
                  <span className="text-[#ff3d03]">{metric.value.split(' ')[0]}</span>{' '}
                  <span className="text-white text-2xl sm:text-3xl font-bold">{metric.value.split(' ').slice(1).join(' ')}</span>
                </div>
                <p className="text-sm text-gray-400 font-medium">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
