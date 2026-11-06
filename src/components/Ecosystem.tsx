'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  BookOpen,
  Sparkles,
  Bot,
  Compass,
  GitBranch,
  ArrowRight,
  CheckCircle2,
  Newspaper,
  Layers,
  Award,
  Zap,
  Check,
} from 'lucide-react';

const AI_PROMPTS = [
  'Pronto para apoiar seu time operacional...',
  'Qual fórmula de estoque de segurança calcular com lead time variável?',
  'Analisando impacto da Reforma Tributária em fretes fracionados...',
  'Simulando dimensionamento de frota e SLA de entrega...',
  'Consultando jurisprudência e normas da ANTT no acervo...',
];

export default function Ecosystem() {
  // Animação das barras do Mapa do Conhecimento
  const diagnosticRef = useRef<HTMLDivElement>(null);
  const [hasAnimatedBars, setHasAnimatedBars] = useState(false);
  const [wmsValue, setWmsValue] = useState(0);
  const [costsValue, setCostsValue] = useState(0);
  const [sopValue, setSopValue] = useState(0);

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
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [hasAnimatedBars]);

  useEffect(() => {
    if (!hasAnimatedBars) return;

    const duration = 1400;
    const startTime = performance.now();

    const updateCounters = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setWmsValue(Math.round(easeProgress * 88));
      setCostsValue(Math.round(easeProgress * 64));
      setSopValue(Math.round(easeProgress * 92));

      if (progress < 1) {
        requestAnimationFrame(updateCounters);
      }
    };

    const frameId = requestAnimationFrame(updateCounters);
    return () => cancelAnimationFrame(frameId);
  }, [hasAnimatedBars]);

  // Efeito Máquina de Escrever do LogGPT
  const [promptIndex, setPromptIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = AI_PROMPTS[promptIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        }, 35 + Math.random() * 20);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 3400);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length - 1));
        }, 18);
      } else {
        setIsDeleting(false);
        setPromptIndex((prev) => (prev + 1) % AI_PROMPTS.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, promptIndex]);

  return (
    <section
      id="plataforma"
      data-theme="light"
      className="py-24 bg-[#f8fafc] text-gray-900 relative border-t border-gray-200 overflow-hidden"
    >
      {/* Imagem de Fundo de Armazém com Perspectiva Arquitetônica */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src="/images/warehouse-perspective.jpg"
          alt="Perspectiva de Armazém e Centro de Distribuição"
          className="w-full h-full object-cover opacity-12 mix-blend-multiply filter blur-[0.5px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc] via-transparent to-[#f8fafc]" />
      </div>

      {/* Padrão geométrico suave de fundo */}
      <div className="absolute inset-0 bg-tech-grid-light opacity-40 pointer-events-none" />

      {/* Detalhes Visuais Sutis de Fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da 2ª Dobra - Textos Oficiais da Cliente */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#df3500]" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#df3500]">
              Itens da Plataforma
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-gray-950 tracking-tight leading-tight">
            Um ecossistema completo para desenvolver equipes de logística!
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl mt-4 font-medium leading-relaxed">
            Tudo o que o seu time terá acesso:
          </p>
        </div>

        {/* Divisão em 2 Grandes Blocos Visuais Ricos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-stretch">
          {/* BLOCO 01 - Conhecimento para sua equipe evoluir */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group overflow-hidden">
            {/* Cantoneira Laranja da Marca MundoLogística */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#ff3d03] opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#ff3d03] opacity-60 group-hover:opacity-100 transition-opacity" />

            <div>
              {/* Header do Bloco 01 */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-[#ff3d03]/20 flex items-center justify-center text-[#df3500] shadow-sm shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#df3500] block">
                    Bloco 01
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-950">
                    Conhecimento para sua equipe evoluir
                  </h3>
                </div>
              </div>

              {/* Composição Fotográfica Rica com Badge Flutuante */}
              <div className="relative mb-8 rounded-2xl overflow-hidden border border-gray-200/90 shadow-md aspect-[16/9] group-hover:shadow-lg transition-shadow">
                <img
                  src="/images/team-learning.jpg"
                  alt="Equipe de Logística em Treinamento"
                  width={800}
                  height={450}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover img-zoom group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-medium">
                  <span className="flex items-center gap-1.5 font-bold drop-shadow">
                    <Award className="w-4 h-4 text-[#ff3d03]" />
                    Capacitação Contínua & Prática
                  </span>
                  <span className="bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono font-bold border border-white/20">
                    +30 Cursos Homologados
                  </span>
                </div>
              </div>

              {/* Lista dos 3 Recursos Oficiais com Design Editorial */}
              <div className="space-y-5">
                {/* Item 1: Cursos */}
                <div className="p-5 rounded-2xl bg-gray-50/80 border border-gray-100 hover:border-orange-200 transition-colors">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-orange-100 text-[#df3500] flex items-center justify-center shrink-0 mt-0.5 font-bold shadow-xs">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-gray-950 mb-1">
                        Cursos de capacitação em logística
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Desenvolva as competências da sua equipe com cursos criados por especialistas e conteúdos alinhados aos desafios do setor.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item 2: Revista com Foto da Edição Impressa e Digital */}
                <div className="p-5 rounded-2xl bg-gray-50/80 border border-gray-100 hover:border-orange-200 transition-colors">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-orange-100 text-[#df3500] flex items-center justify-center shrink-0 mt-0.5 font-bold shadow-xs">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className="text-base font-bold text-gray-950">
                          Revista MundoLogística
                        </h4>
                        <span className="text-[10px] font-mono text-[#df3500] bg-orange-100 px-2.5 py-0.5 rounded-full font-bold border border-orange-200 shrink-0">
                          Digital & Impressa
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed mb-3">
                        Incluso as versões digital e impressa, além do acervo histórico com artigos, entrevistas, reportagens e análises do mercado logístico.
                      </p>

                      {/* Card Visual com Foto da Revista Impressa e Acervo */}
                      <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white border border-gray-200 shadow-xs">
                        <img
                          src="/images/magazine-open.jpg"
                          alt="Revista MundoLogística Impressa e Digital"
                          width={72}
                          height={54}
                          loading="lazy"
                          className="w-16 h-12 rounded-lg object-cover border border-gray-200 shadow-xs shrink-0"
                        />
                        <div className="text-xs">
                          <span className="font-bold text-gray-900 block leading-tight">
                            Edições Bimestrais Entregues na Empresa
                          </span>
                          <span className="text-gray-500 text-[11px] block mt-0.5">
                            +1000 artigos técnicos liberados para toda a equipe
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 3: Conteúdos especializados */}
                <div className="p-5 rounded-2xl bg-gray-50/80 border border-gray-100 hover:border-orange-200 transition-colors">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-orange-100 text-[#df3500] flex items-center justify-center shrink-0 mt-0.5 font-bold shadow-xs">
                      <Newspaper className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-gray-950 mb-1">
                        Conteúdos especializados
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Artigos, notícias, entrevistas e materiais exclusivos para acompanhar tendências, aprofundar conhecimentos e conhecer novas práticas para a logística.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BLOCO 02 - Aprendizado direcionado à realidade da logística */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group overflow-hidden">
            {/* Cantoneira Laranja da Marca MundoLogística */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#ff3d03] opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#ff3d03] opacity-60 group-hover:opacity-100 transition-opacity" />

            <div>
              {/* Header do Bloco 02 */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-[#ff3d03]/20 flex items-center justify-center text-[#df3500] shadow-sm shrink-0">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#df3500] block">
                    Bloco 02
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-950">
                    Aprendizado direcionado à realidade da logística
                  </h3>
                </div>
              </div>

              {/* Composição Fotográfica Rica com Badge Flutuante */}
              <div className="relative mb-8 rounded-2xl overflow-hidden border border-gray-200/90 shadow-md aspect-[16/9] group-hover:shadow-lg transition-shadow">
                <img
                  src="/images/warehouse-tech.jpg"
                  alt="Tecnologia e Operações de Logística"
                  width={800}
                  height={450}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover img-zoom group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-medium">
                  <span className="flex items-center gap-1.5 font-bold drop-shadow">
                    <Sparkles className="w-4 h-4 text-[#ff3d03]" />
                    Inteligência Artificial & Gestão
                  </span>
                  <span className="bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono font-bold border border-white/20">
                    LogGPT Integrado 24/7
                  </span>
                </div>
              </div>

              {/* Lista dos 3 Recursos Oficiais com Design Interativo */}
              <div className="space-y-5">
                {/* Item 1: LogGPT com Console Interativo */}
                <div className="p-5 rounded-2xl bg-gray-50/80 border border-gray-100 hover:border-orange-200 transition-colors">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-orange-100 text-[#df3500] flex items-center justify-center shrink-0 mt-0.5 font-bold shadow-xs">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className="text-base font-bold text-gray-950">
                          LogGPT | IA especializada em logística
                        </h4>
                        <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-bold shrink-0">
                          Online 24/7
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed mb-3">
                        Tirar dúvidas, explorar temas técnicos e utilizar uma IA especializada para apoiar análises, planejamentos e decisões do dia a dia.
                      </p>

                      {/* Mini Console Interativo do LogGPT */}
                      <div className="p-3.5 rounded-xl bg-[#0c1017] border border-gray-800 text-xs font-mono flex items-center gap-3 shadow-inner">
                        <span className="relative flex h-2 w-2 shrink-0">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        <div className="truncate text-gray-200 flex-1">
                          <span className="text-orange-400">&gt;</span> &ldquo;{displayText}&rdquo;
                          <span className="inline-block w-1.5 h-3 bg-[#ff3d03] ml-1 animate-pulse align-middle" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 2: Mapa do Conhecimento */}
                <div className="p-5 rounded-2xl bg-gray-50/80 border border-gray-100 hover:border-orange-200 transition-colors">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-orange-100 text-[#df3500] flex items-center justify-center shrink-0 mt-0.5 font-bold shadow-xs">
                      <Compass className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-bold text-gray-950 mb-1">
                        Mapa do Conhecimento
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed mb-3">
                        Identificar necessidades de desenvolvimento e ter mais clareza sobre as competências que sua equipe precisa aprimorar.
                      </p>

                      {/* Miniatura Gráfica do Diagnóstico */}
                      <div ref={diagnosticRef} className="space-y-2.5 font-mono text-[11px] p-3 rounded-xl bg-white border border-gray-200 shadow-xs">
                        <div className="flex justify-between font-bold text-gray-800">
                          <span>WMS & Acuracidade de Estoque</span>
                          <span className="text-[#df3500]">{wmsValue}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-[#df3500] h-full rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${hasAnimatedBars ? 88 : 0}%` }}
                          />
                        </div>

                        <div className="flex justify-between font-bold text-gray-800 pt-1">
                          <span>Custos de Fretes & Tributário</span>
                          <span className="text-[#df3500]">{costsValue}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-orange-500 h-full rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${hasAnimatedBars ? 64 : 0}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item 3: Trilhas de Aprendizagem */}
                <div className="p-5 rounded-2xl bg-gray-50/80 border border-gray-100 hover:border-orange-200 transition-colors">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-orange-100 text-[#df3500] flex items-center justify-center shrink-0 mt-0.5 font-bold shadow-xs">
                      <GitBranch className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-gray-950 mb-1">
                        Trilhas de aprendizagem personalizadas
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed mb-3">
                        Direcionamento de aprendizado de acordo com a função e as necessidades de cada profissional, com jornadas alinhadas aos desafios da logística.
                      </p>
                      <div className="flex flex-wrap gap-2 text-[11px] font-mono font-bold">
                        <span className="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-700">#Analistas</span>
                        <span className="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-700">#Supervisores</span>
                        <span className="px-3 py-1.5 rounded-lg bg-orange-100 text-[#df3500] border border-orange-200">#Gerentes</span>
                        <span className="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-700">#Diretores</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BANNER DIRECIONAL FOTOGRÁFICO COM CONVERGÊNCIA VISUAL PARA O CTA */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 mt-6 group">
          {/* Imagem de Fundo com Linhas de Perspectiva que Convergem ao Centro */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/directional-highway.jpg"
              alt="Transporte Logístico em Alta Velocidade"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-85"
            />
            {/* Gradiente escuro para legibilidade */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/90" />
            <div className="absolute inset-0 bg-tech-grid-dark opacity-30" />
          </div>

          {/* Conteúdo Centralizado no Ponto de Fuga */}
          <div className="relative z-10 py-12 px-6 sm:px-12 text-center max-w-3xl mx-auto flex flex-col items-center">
            {/* Ponto de Luz / Spotlight Cônico Direcionado ao CTA */}
            <div className="absolute inset-0 cta-spotlight pointer-events-none" />

            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-orange-400 bg-black/60 px-3.5 py-1 rounded-full border border-orange-500/30 mb-3 inline-block">
              Capacitação Corporativa de Alta Performance
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 tracking-tight">
              Pronto para elevar a maturidade técnica da sua equipe?
            </h3>
            <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto mb-8 font-normal">
              Garanta acesso contínuo aos cursos, acervo de revistas, diagnósticos e à inteligência do LogGPT.
            </p>

            {/* BOTÃO CTA DA 2ª DOBRA no Foco Visual com Efeito de Pulso */}
            <div className="relative inline-block">
              {/* Onda de Radar Pulsante */}
              <div className="absolute inset-0 rounded-2xl bg-[#ff3d03] radar-wave pointer-events-none" />

              <Link
                href="#proposta"
                className="relative inline-flex items-center justify-center gap-3 px-10 py-4 sm:px-12 sm:py-4.5 rounded-2xl text-sm sm:text-base font-black text-white bg-gradient-to-r from-[#ff3d03] to-[#df3500] hover:from-[#ff5722] hover:to-[#eb3b00] shadow-[0_0_40px_rgba(255,61,3,0.6)] hover:shadow-[0_0_60px_rgba(255,61,3,0.85)] hover:scale-105 active:scale-95 transition-all cursor-pointer border border-orange-300/40 uppercase tracking-wider shimmer-btn"
              >
                Solicite uma proposta
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <span className="text-[11px] font-mono text-gray-400 mt-4 block">
              Atendimento ágil para empresas • Resposta em até 2 horas úteis
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
