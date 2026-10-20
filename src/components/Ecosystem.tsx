'use client';

import { useState, useEffect, useRef } from 'react';
import { Compass, BookCheck, Bot, Network, Sparkles, TrendingUp, Cpu, Award, CheckCircle } from 'lucide-react';

const AI_PROMPTS = [
  'Pronto para apoiar seu time operacional...',
  'Qual fórmula de estoque de segurança você precisa calcular?',
  'Analisando impacto da Reforma Tributária em fretes fracionados...',
  'Simulando dimensionamento de frota e SLA de entrega...',
  'Consultando jurisprudência e normas de transporte no acervo...',
];

export default function Ecosystem() {
  // --- Animação das Barras e Contadores (ao aparecer na tela) ---
  const diagnosticRef = useRef<HTMLDivElement>(null);
  const [hasAnimatedBars, setHasAnimatedBars] = useState(false);
  const [wmsValue, setWmsValue] = useState(0);
  const [costsValue, setCostsValue] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedBars) {
          setHasAnimatedBars(true);
        }
      },
      { threshold: 0.25 }
    );

    const currentRef = diagnosticRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasAnimatedBars]);

  useEffect(() => {
    if (!hasAnimatedBars) return;

    const duration = 1400; // ms
    const startTime = performance.now();

    const updateCounters = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Curva suave ease-out exponencial
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setWmsValue(Math.round(easeProgress * 88));
      setCostsValue(Math.round(easeProgress * 64));

      if (progress < 1) {
        requestAnimationFrame(updateCounters);
      }
    };

    const frameId = requestAnimationFrame(updateCounters);
    return () => cancelAnimationFrame(frameId);
  }, [hasAnimatedBars]);

  // --- Animação dos Números da Faixa de Métricas (Scroll Trigger) ---
  const metricsRef = useRef<HTMLDivElement>(null);
  const [hasAnimatedMetrics, setHasAnimatedMetrics] = useState(false);
  const [metricYears, setMetricYears] = useState(0);
  const [metricLeaders, setMetricLeaders] = useState(0);
  const [metricCourses, setMetricCourses] = useState(0);
  const [metricValid, setMetricValid] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedMetrics) {
          setHasAnimatedMetrics(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = metricsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasAnimatedMetrics]);

  useEffect(() => {
    if (!hasAnimatedMetrics) return;

    const duration = 1600; // ms
    const startTime = performance.now();

    const updateCounters = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Suave curva ease-out exponencial
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setMetricYears(Math.round(easeProgress * 18));
      setMetricLeaders(Math.round(easeProgress * 400));
      setMetricCourses(Math.round(easeProgress * 30));
      setMetricValid(Math.round(easeProgress * 100));

      if (progress < 1) {
        requestAnimationFrame(updateCounters);
      }
    };

    const frameId = requestAnimationFrame(updateCounters);
    return () => cancelAnimationFrame(frameId);
  }, [hasAnimatedMetrics]);

  // --- Efeito Máquina de Escrever (Typewriter) Simulação de IA ---
  const aiRef = useRef<HTMLDivElement>(null);
  const [isAiActive, setIsAiActive] = useState(false);
  const [promptIndex, setPromptIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAiActive(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentAiRef = aiRef.current;
    if (currentAiRef) {
      observer.observe(currentAiRef);
    }

    return () => {
      if (currentAiRef) observer.unobserve(currentAiRef);
    };
  }, []);

  useEffect(() => {
    if (!isAiActive) return;

    const fullText = AI_PROMPTS[promptIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < fullText.length) {
        // Digitando letra por letra
        timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        }, 36 + Math.random() * 20);
      } else {
        // Pausa após terminar de digitar a mensagem inteira
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 3600);
      }
    } else {
      if (displayText.length > 0) {
        // Apagando letra por letra
        timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length - 1));
        }, 18);
      } else {
        // Avança para a próxima mensagem da IA
        setIsDeleting(false);
        setPromptIndex((prev) => (prev + 1) % AI_PROMPTS.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, promptIndex, isAiActive]);

  return (
    <section id="ecossistema" data-theme="light" className="py-28 bg-[#f8fafc] text-gray-900 relative border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho Bento */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#c23300]" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#c23300]">
              Metodologia de Capacitação B2B
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-gray-950 tracking-tight leading-tight">
            O ecossistema definitivo para <span className="text-[#c23300]">forjar líderes</span> em Supply Chain
          </h2>
          <p className="text-gray-600 text-lg mt-4 leading-relaxed">
            Eliminamos a distância entre teorias acadêmicas abstratas e a pressão real por corte de custos, assertividade de inventário e SLA nas operações.
          </p>
        </div>

        {/* BENTO GRID DE 4 PILARES COM ENQUADRAMENTO DA MARCA */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
          {/* Card 1 Grande (Col 7): Mapa do Conhecimento com cantoneira da marca */}
          <div className="md:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/90 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between group hover:border-[#ff3d03]/60">
            {/* Elemento Gráfico: A Cantoneira Laranja da Marca MundoLogística */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#ff3d03] opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#ff3d03] opacity-60 group-hover:opacity-100 transition-opacity" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-[#ff3d03]/20 flex items-center justify-center text-[#ff3d03] mb-6 shadow-sm">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#d53300] block mb-2">
                Pilar 01 • Diagnóstico de Competências
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-950 mb-4">
                Mapa do Conhecimento Logístico
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-lg">
                Identifique onde sua equipe perde tempo ou dinheiro. Um diagnóstico técnico que avalia o nível de maturidade em Armazenagem, Fretes, Gestão de Estoques e Compras, direcionando o aprendizado com precisão cirúrgica.
              </p>
            </div>

            {/* Simulação Visual do Diagnóstico com animação ao rolar na tela */}
            <div
              ref={diagnosticRef}
              className="p-4 sm:p-5 rounded-2xl bg-gray-50 border border-gray-100 space-y-3.5 font-mono text-xs"
            >
              <div className="flex justify-between text-gray-900 font-bold items-center">
                <span>Maturidade em WMS & Acuracidade de Estoque</span>
                <span className="text-[#d53300] font-black tabular-nums text-sm">
                  {wmsValue}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-[#df3500] h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_12px_rgba(223,53,0,0.3)]"
                  style={{ width: `${hasAnimatedBars ? 88 : 0}%` }}
                />
              </div>

              <div className="flex justify-between text-gray-900 font-bold items-center pt-1.5">
                <span>Engenharia de Custos de Fretes & Tributário</span>
                <span className="text-[#d53300] font-black tabular-nums text-sm">
                  {costsValue}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-orange-500 h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_12px_rgba(249,115,22,0.3)]"
                  style={{ width: `${hasAnimatedBars ? 64 : 0}%` }}
                />
              </div>
            </div>
          </div>

          {/* Card 2 Médio (Col 5): LogGPT IA */}
          <div className="md:col-span-5 bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/90 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between group hover:border-[#ff3d03]/60">
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#ff3d03] opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#ff3d03] opacity-60 group-hover:opacity-100 transition-opacity" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-[#ff3d03]/20 flex items-center justify-center text-[#ff3d03] mb-6 shadow-sm">
                <Bot className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#d53300] block mb-2">
                Pilar 02 • Inteligência Artificial
              </span>
              <h3 className="text-2xl font-black text-gray-950 mb-3">
                LogGPT Especialista 24/7
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                A única IA treinada sobre os 18 anos de acervo da MundoLogística. Respostas técnicas auditadas para tirar dúvidas de fórmulas, normas e rotas na hora.
              </p>
            </div>

            {/* Simulação de conversa com IA: efeito máquina de escrever com cursor pulsante */}
            <div
              ref={aiRef}
              className="p-4 rounded-xl bg-[#0c1017] border border-gray-800 text-xs font-mono flex items-start sm:items-center gap-3 min-h-[58px] shadow-inner"
            >
              <span className="relative flex h-2.5 w-2.5 shrink-0 mt-0.5 sm:mt-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <div className="leading-relaxed flex-1">
                <span className="text-gray-200 font-medium">
                  &ldquo;{displayText}&rdquo;
                </span>
                <span className="inline-block w-1.5 h-3.5 bg-[#ff3d03] ml-1 animate-pulse align-middle" />
              </div>
            </div>
          </div>


          {/* Card 3 Médio (Col 5): Conteúdo Prático & Ferramentas */}
          <div className="md:col-span-5 bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/90 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between group hover:border-[#ff3d03]/60">
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#ff3d03] opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#ff3d03] opacity-60 group-hover:opacity-100 transition-opacity" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-[#ff3d03]/20 flex items-center justify-center text-[#ff3d03] mb-6 shadow-sm">
                <BookCheck className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#d53300] block mb-2">
                Pilar 03 • Aplicação Imediata
              </span>
              <h3 className="text-2xl font-black text-gray-950 mb-3">
                Conteúdo Prático & Ferramentas
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Zero perda de tempo com conceitos ultrapassados. Aulas direto ao ponto, frameworks de cálculo, planilhas editáveis de S&OP e casos reais de multinacionais.
              </p>
            </div>
          </div>

          {/* Card 4 Grande (Col 7): Trilhas Customizadas por Cargo */}
          <div className="md:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/90 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between group hover:border-[#ff3d03]/60">
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#ff3d03] opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#ff3d03] opacity-60 group-hover:opacity-100 transition-opacity" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-[#ff3d03]/20 flex items-center justify-center text-[#ff3d03] mb-6 shadow-sm">
                <Network className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#d53300] block mb-2">
                Pilar 04 • Jornadas de Carreira
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-950 mb-4">
                Trilhas Customizadas para Cada Nível
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6 max-w-lg">
                Do analista júnior ao diretor executivo: conteúdos segmentados que preparam profissionais para os desafios técnicos de sua função e para os próximos degraus na hierarquia.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-xs font-mono font-bold">
              <span className="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-700">
                #Analistas de Frotas
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-700">
                #Supervisores de Armazém
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-orange-100 text-[#d53300] border border-orange-200">
                #Gerentes de Supply Chain
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-700">
                #Diretores de Operações
              </span>
            </div>
          </div>
        </div>

        {/* Faixa de Métricas em Fundo Escuro com Cantoneira Laranja e Contadores Animados */}
        <div
          ref={metricsRef}
          className="bg-gray-950 text-white rounded-3xl p-8 sm:p-12 border border-gray-800 shadow-2xl relative overflow-hidden"
        >
          {/* Brilho neon sutil de fundo */}
          <div className="absolute top-0 right-1/4 w-96 h-48 bg-[#ff3d03]/10 blur-[80px] pointer-events-none rounded-full" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-gray-800 relative z-10">
            <div className="pt-4 lg:pt-0 lg:px-4">
              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2 tabular-nums">
                <span className="text-[#ff3d03]">+{metricYears}</span> Anos
              </div>
              <p className="text-xs sm:text-sm text-gray-400 font-medium">De liderança editorial e curadoria técnica no Brasil</p>
            </div>

            <div className="pt-4 lg:pt-0 lg:px-4">
              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2 tabular-nums">
                <span className="text-[#ff3d03]">+{metricLeaders}</span> Líderes
              </div>
              <p className="text-xs sm:text-sm text-gray-400 font-medium">Grandes corporações capacitando seus times ativos</p>
            </div>

            <div className="pt-4 lg:pt-0 lg:px-4">
              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2 tabular-nums">
                <span className="text-[#ff3d03]">+{metricCourses}</span> Cursos
              </div>
              <p className="text-xs sm:text-sm text-gray-400 font-medium">Ministrados por diretores atuantes nas maiores cadeias</p>
            </div>

            <div className="pt-4 lg:pt-0 lg:px-4">
              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2 tabular-nums">
                <span className="text-[#ff3d03]">{metricValid}%</span> Válido
              </div>
              <p className="text-xs sm:text-sm text-gray-400 font-medium">Certificação corporativa reconhecida por todo o setor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
