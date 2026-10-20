'use client';

import { useState, useEffect, useRef } from 'react';
import { Bot, Sparkles, Send, ShieldCheck, Database, Zap, Terminal, CornerDownLeft } from 'lucide-react';

const SAMPLE_CONVERSATIONS = [
  {
    topic: 'Tributário & Custos',
    question: 'Quais os principais impactos da Reforma Tributária no frete rodoviário?',
    answer: 'Com a unificação no IBS e CBS, a cumulatividade de créditos tributários sobre insumos de transporte (diesel, pneus, manutenção) muda radicalmente. Transportadores que operam no Simples ou possuem frotas terceirizadas precisarão renegociar contratos para evitar perda de margem de até 12% no curto prazo.',
    source: 'Artigo Especialista • Edição 104 MundoLogística',
  },
  {
    topic: 'Armazenagem & Estoques',
    question: 'Como calcular o estoque de segurança com lead time variável?',
    answer: 'Utilize a fórmula ajustada de desvio padrão composto: SS = Z × √[(LT × σD²) + (D² × σLT²)], onde Z é o fator de nível de serviço desejado (ex: 1.65 para 95%), LT é o lead time médio, σD é o desvio da demanda e σLT é o desvio do lead time do fornecedor.',
    source: 'Framework Técnico • Gestão Avançada de WMS',
  },
  {
    topic: 'Supply Chain Estratégico',
    question: 'Qual o OTIF de referência para operações de alta complexidade (FMCG)?',
    answer: 'No setor de bens de consumo (FMCG), o benchmark de mercado para On-Time In-Full (OTIF) varia entre 95% e 98%. Desvios abaixo de 92% geralmente apontam para falhas de slotting no WMS ou gargalos no agendamento de janelas nas docas dos clientes.',
    source: 'Benchmark de Mercado • Pesquisa Anual MundoLogística',
  },
];

export default function LogGPTSection() {
  const [activeChat, setActiveChat] = useState(0);
  const [displayedAnswer, setDisplayedAnswer] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const consoleRef = useRef<HTMLDivElement>(null);

  // Observa quando a seção entra na tela do usuário
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    const el = consoleRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  // Efeito Máquina de Escrever (Typewriter streaming de IA)
  useEffect(() => {
    if (!isInView) return;

    const fullAnswer = SAMPLE_CONVERSATIONS[activeChat].answer;
    setDisplayedAnswer('');
    setIsTyping(true);

    let charIndex = 0;
    const interval = setInterval(() => {
      charIndex += 1;
      setDisplayedAnswer(fullAnswer.slice(0, charIndex));

      if (charIndex >= fullAnswer.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 14);

    return () => clearInterval(interval);
  }, [activeChat, isInView]);

  // Rotação automática a cada 6 segundos após a conclusão da resposta
  useEffect(() => {
    if (!isInView || isTyping || isPaused) return;

    const timer = setTimeout(() => {
      setActiveChat((curr) => (curr + 1) % SAMPLE_CONVERSATIONS.length);
    }, 6000);

    return () => clearTimeout(timer);
  }, [isInView, isTyping, isPaused, activeChat]);

  return (
    <section id="loggpt" data-theme="dark" className="py-28 bg-[#090d14] text-white relative overflow-hidden border-t border-white/10">
      {/* Luz ambiente de fundo neon */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff3d03]/15 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Coluna Texto Explicativo */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff3d03]/10 border border-[#ff3d03]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#ff3d03]" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ff3d03]">
                Inteligência Artificial Nativa
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.1]">
              LogGPT:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3d03] to-[#ff7b4d]">
                a IA de 18 anos
              </span>{' '}
              ao lado do seu time 24/7.
            </h2>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              Dúvidas técnicas e cálculos operacionais não podem esperar o dia seguinte. O LogGPT é a primeira IA generativa alimentada exclusivamente com o acervo técnico, fórmulas revisadas e pesquisas da MundoLogística.
            </p>

            {/* Destaques Técnicos */}
            <div className="space-y-4 pt-2">
              <div className="glass-panel p-4 rounded-2xl border border-white/10 flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#ff3d03]/15 border border-[#ff3d03]/30 flex items-center justify-center text-[#ff3d03] shrink-0 mt-0.5">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Acervo Fechado & Confiável</h3>
                  <p className="text-xs text-gray-400 mt-0.5">Sem respostas genéricas ou alucinações. 100% embasado nas normas da ANTT, boas práticas de S&OP e jurisprudência tributária.</p>
                </div>
              </div>

              <div className="glass-panel p-4 rounded-2xl border border-white/10 flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#ff3d03]/15 border border-[#ff3d03]/30 flex items-center justify-center text-[#ff3d03] shrink-0 mt-0.5">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Validação Imediata de Fórmulas</h3>
                  <p className="text-xs text-gray-400 mt-0.5">Seus analistas validam dimensionamento de frotas, inventários de segurança e reajuste paramétrico de diesel em segundos.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#proposta"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#ff3d03] to-[#e03502] hover:scale-105 transition-all shadow-lg shadow-[#ff3d03]/30"
              >
                Solicitar Demonstração do LogGPT
              </a>
            </div>
          </div>

          {/* Coluna Console Futurista LogGPT */}
          <div className="lg:col-span-7">
            <div
              ref={consoleRef}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="glass-panel-glow rounded-3xl border border-[#ff3d03]/30 p-6 sm:p-8 shadow-2xl relative transition-all"
            >
              {/* Header do Terminal */}
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#ff3d03] flex items-center justify-center text-white font-bold shadow-lg shadow-[#ff3d03]/30">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-white text-sm">LogGPT Enterprise Engine</h3>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    <span className="text-[10px] font-mono text-gray-400">Versão Corporativa • Modelo Especializado</span>
                  </div>
                </div>

                <span className="text-[10px] font-mono font-bold text-[#ff3d03] bg-[#ff3d03]/10 border border-[#ff3d03]/30 px-3 py-1 rounded-full uppercase">
                  Acesso Ilimitado
                </span>
              </div>

              {/* Seletor de Consultas Pré-Configuradas */}
              <div className="mb-6">
                <p className="text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-2">Simular consulta da equipe:</p>
                <div className="flex flex-wrap gap-2">
                  {SAMPLE_CONVERSATIONS.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveChat(idx)}
                      className={`text-xs px-3.5 py-1.5 rounded-xl font-semibold transition-all cursor-pointer ${
                        activeChat === idx
                          ? 'bg-[#df3500] text-white shadow-md shadow-[#df3500]/30 font-bold scale-105'
                          : 'bg-white/5 text-gray-200 hover:bg-white/10 border border-white/10'
                      }`}
                    >
                      {item.topic}
                    </button>
                  ))}
                </div>
              </div>

              {/* Janela de Mensagens */}
              <div className="space-y-4 mb-6">
                {/* Pergunta */}
                <div className="flex justify-end">
                  <div className="bg-white/10 text-white rounded-2xl rounded-tr-none px-5 py-3.5 text-sm max-w-[85%] border border-white/15">
                    <p className="text-[10px] font-mono text-orange-400 uppercase mb-1">Supervisor de Operações:</p>
                    <p>{SAMPLE_CONVERSATIONS[activeChat].question}</p>
                  </div>
                </div>

                {/* Resposta */}
                <div className="flex justify-start">
                  <div className="bg-black/70 text-gray-200 rounded-2xl rounded-tl-none p-5 sm:p-6 text-sm max-w-[95%] border border-[#ff3d03]/30 space-y-3 w-full">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-1.5 text-[#ff3d03] font-bold">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>LogGPT Análise Técnica:</span>
                      </div>
                      {isTyping && (
                        <span className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                          Processando resposta...
                        </span>
                      )}
                    </div>
                    <p className="leading-relaxed text-gray-300 text-xs sm:text-sm font-sans min-h-[4.5rem]">
                      {displayedAnswer}
                      {isTyping && (
                        <span className="inline-block w-1.5 h-4 bg-[#ff3d03] ml-1 animate-pulse align-middle" />
                      )}
                    </p>
                    <div className="pt-2 text-[10px] font-mono text-gray-400 flex items-center justify-between border-t border-white/10">
                      <span>{SAMPLE_CONVERSATIONS[activeChat].source}</span>
                      <span className="text-emerald-400 font-bold">Auditado</span>
                    </div>
                  </div>
                </div>
              </div>


              {/* Input Fake Terminal */}
              <div className="flex items-center gap-3 bg-black/80 rounded-2xl p-3 border border-white/10">
                <Terminal className="w-4 h-4 text-gray-500 shrink-0 ml-1" />
                <input
                  type="text"
                  disabled
                  placeholder="Pergunte qualquer fórmula, norma ou prática de logística..."
                  className="bg-transparent text-xs text-gray-500 w-full focus:outline-none cursor-not-allowed font-mono"
                />
                <button
                  type="button"
                  disabled
                  aria-label="Enviar pergunta ao LogGPT"
                  className="w-8 h-8 rounded-xl bg-[#df3500]/70 flex items-center justify-center text-white shrink-0 cursor-not-allowed"
                >
                  <CornerDownLeft className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
