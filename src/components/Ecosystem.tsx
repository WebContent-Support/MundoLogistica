import { Compass, BookCheck, Bot, Network, Sparkles, TrendingUp, Cpu, Award } from 'lucide-react';

export default function Ecosystem() {
  return (
    <section id="ecossistema" className="py-28 bg-[#090d14] relative border-t border-white/10">
      {/* Luz ambiente pontual */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#ff3d03]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho Bento */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff3d03]/10 border border-[#ff3d03]/30 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#ff3d03]" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ff3d03]">
              Arquitetura Educacional B2B
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            O ecossistema definitivo para <span className="text-[#ff3d03]">forjar líderes</span> em Supply Chain
          </h2>
          <p className="text-gray-400 text-lg mt-4 leading-relaxed">
            Desenvolvido para eliminar a lacuna entre a teoria acadêmica e a pressão por corte de custos e SLA das operações reais.
          </p>
        </div>

        {/* BENTO GRID DE 4 PILARES */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
          {/* Card 1 Grande (Col 7): Mapa do Conhecimento */}
          <div className="md:col-span-7 glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden flex flex-col justify-between group hover:border-[#ff3d03]/50 transition-all duration-300">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#ff3d03]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#ff3d03]/20 transition-all" />
            
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#ff3d03]/10 border border-[#ff3d03]/30 flex items-center justify-center text-[#ff3d03] mb-6 shadow-lg shadow-[#ff3d03]/15">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#ff3d03] block mb-2">
                Pilar 01 • Diagnóstico de Competências
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                Mapa do Conhecimento Logístico
              </h3>
              <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-lg">
                Identifique exatamente onde sua equipe perde dinheiro ou tempo. Um diagnóstico estruturado que mapeia gaps técnicos em Transporte, Armazenagem, Gestão de Estoque e Compras, direcionando o estudo com precisão cirúrgica.
              </p>
            </div>

            {/* Simulação Visual do Diagnóstico */}
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-3 font-mono text-xs">
              <div className="flex justify-between text-gray-400">
                <span>Nível de Maturidade em WMS & Estoques</span>
                <span className="text-[#ff3d03] font-bold">88%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-1.5">
                <div className="bg-[#ff3d03] h-1.5 rounded-full w-[88%]" />
              </div>
              <div className="flex justify-between text-gray-400 pt-1">
                <span>Engenharia de Custos de Fretes & Tributário</span>
                <span className="text-orange-400 font-bold">64%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-1.5">
                <div className="bg-orange-500 h-1.5 rounded-full w-[64%]" />
              </div>
            </div>
          </div>

          {/* Card 2 Médio (Col 5): LogGPT IA */}
          <div className="md:col-span-5 glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden flex flex-col justify-between group hover:border-[#ff3d03]/50 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#ff3d03]/10 border border-[#ff3d03]/30 flex items-center justify-center text-[#ff3d03] mb-6 shadow-lg shadow-[#ff3d03]/15">
                <Bot className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#ff3d03] block mb-2">
                Pilar 02 • Inteligência Artificial
              </span>
              <h3 className="text-2xl font-black text-white mb-4">
                LogGPT Especialista 24/7
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                A única IA treinada sobre os 18 anos de acervo da MundoLogística. Respostas técnicas auditadas para tirar dúvidas de fórmulas, normas e rotas na hora.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black/60 border border-white/10 text-xs font-mono text-gray-300 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="truncate">"Pronto para apoiar o seu time operacional..."</span>
            </div>
          </div>

          {/* Card 3 Médio (Col 5): Conteúdo Prático & Planilhas */}
          <div className="md:col-span-5 glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden flex flex-col justify-between group hover:border-[#ff3d03]/50 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#ff3d03]/10 border border-[#ff3d03]/30 flex items-center justify-center text-[#ff3d03] mb-6 shadow-lg shadow-[#ff3d03]/15">
                <BookCheck className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#ff3d03] block mb-2">
                Pilar 03 • Aplicação Imediata
              </span>
              <h3 className="text-2xl font-black text-white mb-4">
                Conteúdo Prático & Ferramentas
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Zero perda de tempo com conceitos ultrapassados. Aulas direto ao ponto, frameworks de cálculo, planilhas editáveis de S&OP e casos reais de multinacionais.
              </p>
            </div>
          </div>

          {/* Card 4 Grande (Col 7): Trilhas Personalizadas por Cargo */}
          <div className="md:col-span-7 glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden flex flex-col justify-between group hover:border-[#ff3d03]/50 transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#ff3d03]/10 border border-[#ff3d03]/30 flex items-center justify-center text-[#ff3d03] mb-6 shadow-lg shadow-[#ff3d03]/15">
                <Network className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#ff3d03] block mb-2">
                Pilar 04 • Jornadas de Carreira
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                Trilhas Customizadas para Cada Nível
              </h3>
              <p className="text-gray-400 text-base leading-relaxed mb-6 max-w-lg">
                Do analista júnior ao diretor executivo: conteúdos segmentados que preparam profissionais para os desafios técnicos de sua função e para os próximos degraus na hierarquia.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-xs font-mono font-bold">
              <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300">
                #Analistas de Frotas
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300">
                #Supervisores de Armazém
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-[#ff3d03]/20 border border-[#ff3d03]/40 text-[#ff3d03]">
                #Gerentes de Supply Chain
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300">
                #Diretores de Operações
              </span>
            </div>
          </div>
        </div>

        {/* Métrica Monumental */}
        <div className="glass-panel-glow rounded-3xl p-8 sm:p-12 border border-[#ff3d03]/30 relative overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            <div className="pt-4 lg:pt-0 lg:px-4">
              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2">
                <span className="text-[#ff3d03]">+18</span> Anos
              </div>
              <p className="text-xs sm:text-sm text-gray-400 font-medium">De liderança editorial e curadoria técnica no Brasil</p>
            </div>

            <div className="pt-4 lg:pt-0 lg:px-4">
              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2">
                <span className="text-[#ff3d03]">+400</span> Líderes
              </div>
              <p className="text-xs sm:text-sm text-gray-400 font-medium">Grandes corporações capacitando seus times ativos</p>
            </div>

            <div className="pt-4 lg:pt-0 lg:px-4">
              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2">
                <span className="text-[#ff3d03]">+30</span> Cursos
              </div>
              <p className="text-xs sm:text-sm text-gray-400 font-medium">Ministrados por diretores atuantes nas maiores cadeias</p>
            </div>

            <div className="pt-4 lg:pt-0 lg:px-4">
              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2">
                <span className="text-[#ff3d03]">100%</span> Válido
              </div>
              <p className="text-xs sm:text-sm text-gray-400 font-medium">Certificação corporativa reconhecida por todo o setor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
