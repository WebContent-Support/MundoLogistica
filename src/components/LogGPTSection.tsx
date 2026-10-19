'use client';

import { useState } from 'react';
import { Bot, Sparkles, Send, ShieldCheck, Database, Zap } from 'lucide-react';

const SAMPLE_CONVERSATIONS = [
  {
    question: 'Quais os principais impactos da Reforma Tributária no frete rodoviário?',
    answer: 'Com a unificação no IBS e CBS, a cumulatividade de créditos tributários sobre insumos de transporte (diesel, pneus, manutenção) muda radicalmente. Transportadores que operam no Simples ou possuem frotas terceirizadas precisarão renegociar contratos para evitar perda de margem de até 12% no curto prazo.',
    topic: 'Tributário & Custos',
  },
  {
    question: 'Como calcular o estoque de segurança com lead time variável?',
    answer: 'Utilize a fórmula ajustada de desvio padrão composto: SS = Z × √[(LT × σD²) + (D² × σLT²)], onde Z é o fator de nível de serviço desejado (ex: 1.65 para 95%), LT é o lead time médio, σD é o desvio da demanda e σLT é o desvio do lead time do fornecedor.',
    topic: 'Armazenagem & Estoques',
  },
  {
    question: 'Qual o OTIF de referência para operações de alta complexidade (FMCG)?',
    answer: 'No setor de bens de consumo (FMCG), o benchmark de mercado para On-Time In-Full (OTIF) varia entre 95% e 98%. Desvios abaixo de 92% geralmente apontam para falhas de slotting no WMS ou gargalos no agendamento de janelas nas docas dos clientes.',
    topic: 'Supply Chain Estratégico',
  },
];

export default function LogGPTSection() {
  const [activeChat, setActiveChat] = useState(0);

  return (
    <section id="loggpt" className="py-24 bg-gray-950 text-white relative overflow-hidden">
      {/* Luz ambiente laranja no fundo */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -ml-40 w-96 h-96 rounded-full bg-[#ff3d03]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Coluna Texto Explicativo */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff3d03]/15 border border-[#ff3d03]/30">
              <Sparkles className="w-4 h-4 text-[#ff3d03]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff3d03]">
                Inteligência Artificial Nativa
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              LogGPT:{' '}
              <span className="text-[#ff3d03]">o especialista de 18 anos</span> respondendo ao seu time 24/7.
            </h2>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              Dúvidas técnicas não esperam o próximo dia útil. O LogGPT é a primeira IA generativa alimentada exclusivamente com o acervo técnico, artigos revisados e pesquisas da MundoLogística.
            </p>

            {/* Benefícios rápidos */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#ff3d03]/20 flex items-center justify-center text-[#ff3d03] shrink-0 mt-0.5">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Acervo Verificado e Seguro</h4>
                  <p className="text-xs text-gray-400">Zero alucinações genéricas: respostas embasadas em normas e boas práticas reais.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#ff3d03]/20 flex items-center justify-center text-[#ff3d03] shrink-0 mt-0.5">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Resolução Imediata de Gargalos</h4>
                  <p className="text-xs text-gray-400">Validação de cálculos de frete, fórmulas de estoque e dimensionamento de equipes.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#proposta"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#ff3d03] hover:bg-[#e03502] transition-colors shadow-lg shadow-[#ff3d03]/25"
              >
                Solicitar Demonstração do LogGPT
              </a>
            </div>
          </div>

          {/* Coluna Interface Simulada do Chat LogGPT */}
          <div className="lg:col-span-7">
            <div className="bg-gray-900 rounded-3xl border border-gray-800 shadow-2xl p-6 sm:p-8 relative">
              {/* Topo da Janela do Chat */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-gray-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#ff3d03] flex items-center justify-center text-white font-bold shadow-md shadow-[#ff3d03]/30">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-white text-sm">LogGPT Corporativo</h4>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <span className="text-[11px] text-gray-400">MundoLogística AI Engine v3</span>
                  </div>
                </div>

                <span className="text-[11px] font-semibold text-gray-400 bg-gray-800/80 px-3 py-1 rounded-full">
                  Exclusivo Assinantes
                </span>
              </div>

              {/* Botões de Perguntas Rápidas */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-gray-400 mb-2">Selecione um exemplo de consulta técnica:</p>
                <div className="flex flex-wrap gap-2">
                  {SAMPLE_CONVERSATIONS.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveChat(idx)}
                      className={`text-xs px-3.5 py-1.5 rounded-lg font-medium transition-all ${
                        activeChat === idx
                          ? 'bg-[#ff3d03] text-white font-bold'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {item.topic}
                    </button>
                  ))}
                </div>
              </div>

              {/* Balão da Pergunta */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-end">
                  <div className="bg-gray-800 text-white rounded-2xl rounded-tr-none px-5 py-3 text-sm max-w-[85%] border border-gray-700">
                    <p className="text-xs text-orange-400 font-bold mb-1">Analista de Supply Chain:</p>
                    <p>{SAMPLE_CONVERSATIONS[activeChat].question}</p>
                  </div>
                </div>

                {/* Balão da Resposta LogGPT */}
                <div className="flex justify-start">
                  <div className="bg-gray-950 text-gray-200 rounded-2xl rounded-tl-none p-5 text-sm max-w-[95%] border border-gray-800 space-y-2">
                    <div className="flex items-center gap-1.5 text-xs text-[#ff3d03] font-bold">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>LogGPT Resposta Especializada:</span>
                    </div>
                    <p className="leading-relaxed text-gray-300 text-xs sm:text-sm">
                      {SAMPLE_CONVERSATIONS[activeChat].answer}
                    </p>
                    <div className="pt-2 text-[10px] text-gray-500 flex items-center gap-2">
                      <span>Fonte: Acervo Técnico MundoLogística</span>
                      <span>•</span>
                      <span>Base de Conhecimento Auditada</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Barra de Input Simulada */}
              <div className="flex items-center gap-3 bg-gray-950 rounded-xl p-2.5 border border-gray-800">
                <input
                  type="text"
                  disabled
                  placeholder="Pergunte qualquer fórmula, norma ou prática de logística..."
                  className="bg-transparent text-xs text-gray-500 w-full px-3 focus:outline-none cursor-not-allowed"
                />
                <button
                  disabled
                  className="w-8 h-8 rounded-lg bg-[#ff3d03]/60 flex items-center justify-center text-white shrink-0 cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
