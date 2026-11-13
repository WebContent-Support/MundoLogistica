'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Clock,
  Award,
  ChevronRight,
  X,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { Course, COURSES_DATA, fetchCoursesFromApi } from '@/data/courses';

const HOME4_COURSE_COVERS = [
  '/images/home4/curso-1.webp',
  '/images/home4/curso-2.webp',
  '/images/home4/curso-3.webp',
  '/images/home4/curso-4.webp',
  '/images/home4/curso-5.webp',
  '/images/home4/curso-6.webp',
];

interface CoursesSectionProps {
  variant?: 'default' | 'home4';
  ctaBannerImage?: string;
}

export default function CoursesSection({ variant = 'default', ctaBannerImage }: CoursesSectionProps) {
  const isHome4 = variant === 'home4';
  const [courses, setCourses] = useState<Course[]>(COURSES_DATA);
  const [activeCourse, setActiveCourse] = useState<Course | null>(null);

  useEffect(() => {
    if (!isHome4) return;
    let isMounted = true;
    fetchCoursesFromApi()
      .then(({ courses: apiCourses }) => {
        if (isMounted && apiCourses.length > 0) {
          setCourses(apiCourses);
        }
      })
      .catch(() => {
        // Mantém fallback estático caso a API esteja offline
      });
    return () => {
      isMounted = false;
    };
  }, [isHome4]);

  // 6 cursos de destaque na homepage
  const featured = courses.filter((c) => c.featuredHome);
  const rawHomepageCourses = (featured.length > 0 ? featured : courses).slice(0, 6);
  const homepageCourses = isHome4
    ? rawHomepageCourses.map((c, idx) => ({
        ...c,
        image: HOME4_COURSE_COVERS[idx % HOME4_COURSE_COVERS.length] || c.image,
      }))
    : rawHomepageCourses;
  const resolvedCtaBanner =
    ctaBannerImage || (isHome4 ? '/images/home4/banner-cta-2.webp' : '/images/directional-highway.jpg');

  return (
    <section
      id="cursos"
      data-theme="light"
      className="py-24 bg-white text-gray-900 relative border-t border-gray-200 overflow-hidden"
    >
      {/* FOTOGRAFIA REAL DE FUNDO: Frota Logística e Transporte de Cargas */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src="/images/logistics-fleet.jpg"
          srcSet="/images/logistics-fleet.webp 720w"
          sizes="100vw"
          width={720}
          height={477}
          loading="lazy"
          decoding="async"
          alt="Fotografia de Frotas de Transporte e Distribuição"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-white/95" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da 6ª Dobra - Texto Oficial da Cliente com Efeito Scroll Reveal */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 reveal-init">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-300 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#df3500]" />
              <span className="text-xs font-mono-tech font-bold uppercase tracking-widest text-[#df3500]">
                Acervo de Cursos & Especialistas
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-black text-gray-950 tracking-tight leading-tight">
              Conheça os <span className="font-editorial italic font-normal text-[#df3500]">cursos disponíveis</span> na nossa plataforma!
            </h2>
            <p className="text-gray-600 font-sans text-base sm:text-lg mt-3 leading-relaxed">
              Treinamentos técnicos ministrados exclusivamente por executivos atuantes nas maiores cadeias de suprimentos.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/cursos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-orange-300 text-xs font-mono-tech font-bold text-gray-700 hover:text-[#df3500] transition-all shadow-sm"
            >
              <span>Ver Catálogo Completo ({courses.length} cursos)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Grid com os 6 Cursos na Homepage com Efeito Cascata */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {homepageCourses.map((course, idx) => (
            <div
              key={course.id}
              onClick={() => setActiveCourse(course)}
              className={`bg-white rounded-3xl border border-gray-200 hover:border-[#ff3d03] shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5 relative cursor-pointer reveal-init delay-${(idx + 1) * 75}`}
            >
              {/* Foto de Capa do Treinamento com Efeito Cinema */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-900">
                <img
                  src={course.image}
                  alt={course.title}
                  width={520}
                  height={346}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover img-zoom group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {/* Badges Flutuantes sobre a Imagem */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono-tech font-bold text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full uppercase tracking-wider border border-white/20">
                    {course.category}
                  </span>
                  {course.level && (
                    <span className="text-[10px] font-mono-tech text-white font-bold bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20">
                      {course.level}
                    </span>
                  )}
                </div>

                {/* Duração & Certificado Flutuantes na Base da Foto */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-mono-tech">
                  {course.duration && (
                    <span className="flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 font-bold">
                      <Clock className="w-3.5 h-3.5 text-[#ff3d03]" />
                      {course.duration}
                    </span>
                  )}
                  <span className="ml-auto flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-amber-300 font-bold">
                    <Award className="w-3.5 h-3.5" />
                    Certificado
                  </span>
                </div>
              </div>

              {/* Corpo do Card */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Título do Curso */}
                  <h3 className="text-lg font-heading font-bold text-gray-950 group-hover:text-[#df3500] transition-colors leading-snug mb-2.5">
                    {course.title}
                  </h3>

                  {/* Resumo */}
                  <p className="text-xs sm:text-sm font-sans text-gray-600 line-clamp-2 leading-relaxed mb-5 font-normal">
                    {course.summary}
                  </p>
                </div>

                {/* Dados do Instrutor com Foto Oficial */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="relative shrink-0">
                    <img
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                      width={44}
                      height={44}
                      loading="lazy"
                      decoding="async"
                      className="w-11 h-11 rounded-full object-cover border-2 border-orange-100 shadow-sm"
                    />
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white" />
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="text-xs sm:text-sm font-heading font-bold text-gray-900 truncate">
                      {course.instructor.name}
                    </h4>
                    {course.instructor.role && (
                      <p className="text-[11px] font-sans text-gray-600 truncate">
                        {course.instructor.role}
                      </p>
                    )}
                    {course.instructor.companyOrExperience && (
                      <p className="text-[10px] font-mono-tech text-[#df3500] font-bold truncate">
                        {course.instructor.companyOrExperience}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Rodapé do Card com Cantoneira */}
              <div className="px-6 py-3.5 bg-gray-50/80 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#df3500] group-hover:text-[#ff3d03] transition-colors">
                <span className="font-mono-tech text-[11px] uppercase tracking-wider text-gray-500 group-hover:text-[#df3500]">
                  Ver ementa completa
                </span>
                <span className="inline-flex items-center gap-1 font-heading font-bold">
                  <span>Acessar</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* DOCK DE AÇÃO PANORÂMICO COM LINHAS DE PERSPECTIVA DIRECIONADAS AOS CTAs */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 mt-8 group reveal-scale delay-200">
          {/* Imagem de Fundo de Rodovia Noturna com Ponto de Fuga no Centro */}
          <div className="absolute inset-0 z-0">
            <img
              src={resolvedCtaBanner}
              width={960}
              height={315}
              loading="lazy"
              decoding="async"
              alt="Transporte Rodoviário com Linhas de Luz em Alta Velocidade"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
            />
            {/* Máscara cinema suave para deixar a foto e os faróis super visíveis */}
            <div className="absolute inset-0 bg-black/55" />
          </div>

          {/* Conteúdo Centralizado no Ponto de Fuga */}
          <div className="relative z-10 py-12 px-6 sm:px-12 text-center max-w-4xl mx-auto flex flex-col items-center">
            {/* Ponto de Luz / Spotlight Direcionado ao Centro */}
            <div className="absolute inset-0 cta-spotlight pointer-events-none" />

            <span className="text-[11px] font-mono-tech font-bold uppercase tracking-widest text-[#ff3d03] bg-black/70 px-4 py-1 rounded-full border border-[#ff3d03]/40 mb-3 inline-block">
              +30 Treinamentos Homologados • Atualização Contínua
            </span>
            <h3 className="text-2xl sm:text-4xl font-heading font-black text-white mb-3 tracking-tight">
              Explore o maior acervo prático de capacitação logística do país
            </h3>
            <p className="text-orange-200/90 font-editorial italic text-base sm:text-lg max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
              De S&OP e WMS a IA aplicada e negociação de fretes: aulas ministradas por executivos com vivência real de mercado.
            </p>

            {/* Ações Centrais no Ponto de Fuga com Efeito de Pulso */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto relative">
              {/* Botão que abre a página de cursos em outra aba (Botão Principal) */}
              <div className="relative w-full sm:w-auto">
                {/* Onda de Radar */}
                <div className="absolute inset-0 rounded-2xl bg-[#ff3d03] radar-wave pointer-events-none" />

                <Link
                  href="/cursos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-4.5 rounded-2xl text-sm sm:text-base font-heading font-black text-white bg-gradient-to-r from-[#ff3d03] to-[#df3500] hover:from-[#ff5722] hover:to-[#eb3b00] shadow-[0_0_40px_rgba(255,61,3,0.6)] hover:shadow-[0_0_60px_rgba(255,61,3,0.85)] hover:scale-105 active:scale-95 transition-all cursor-pointer border border-orange-300/40 uppercase tracking-wider shimmer-btn"
                >
                  <span>Conhecer todos os cursos</span>
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>

              {/* Botão de Proposta Corporativa */}
              <Link
                href="#proposta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 sm:px-9 sm:py-4.5 rounded-2xl text-sm sm:text-base font-heading font-bold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all border border-white/20 uppercase tracking-wider cursor-pointer hover:border-white/40"
              >
                <span>Solicitar Proposta Corporativa</span>
                <ArrowRight className="w-4 h-4 text-[#ff3d03]" />
              </Link>
            </div>

            <span className="text-[11px] font-mono text-gray-400 mt-4 block">
              Planos por assinatura com faturamento corporativo para empresas
            </span>
          </div>
        </div>
      </div>

      {/* Modal de Detalhes da Ementa (Abre ao Clicar em Qualquer um dos 6 Cursos da Home) */}
      {activeCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative border border-gray-200 text-gray-900">
            {/* Header com Foto de Capa do Curso */}
            <div className="relative aspect-[21/9] w-full overflow-hidden bg-gray-900">
              <img
                src={activeCourse.image}
                alt={activeCourse.title}
                width={800}
                height={350}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              
              {/* Botão Fechar no Topo da Foto */}
              <button
                type="button"
                onClick={() => setActiveCourse(null)}
                className="absolute right-4 top-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors cursor-pointer border border-white/20"
                aria-label="Fechar modal de detalhes do curso"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white">
                <span className="text-xs font-mono font-bold bg-[#df3500] px-3 py-1 rounded-full uppercase tracking-wider">
                  {activeCourse.category}
                </span>
                {activeCourse.level && (
                  <span className="text-xs font-mono font-bold bg-white/20 backdrop-blur-md px-3 py-1 rounded-md border border-white/20">
                    {activeCourse.level}
                  </span>
                )}
              </div>
            </div>

            <div className="p-6 sm:p-8">
              {/* Cabeçalho do Conteúdo */}
              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl font-heading font-black text-gray-950 leading-tight mb-3">
                  {activeCourse.title}
                </h3>
                <p className="text-gray-600 font-sans text-sm sm:text-base leading-relaxed">
                  {activeCourse.summary}
                </p>
              </div>

            {/* Instrutor com foto oficial */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 mb-6">
              <img
                src={activeCourse.instructor.avatar}
                alt={activeCourse.instructor.name}
                width={56}
                height={56}
                loading="lazy"
                decoding="async"
                className="w-14 h-14 rounded-full object-cover border-2 border-orange-200 shadow-sm"
              />
              <div>
                <span className="text-[10px] font-mono-tech uppercase tracking-widest text-gray-500 block">
                  Especialista Responsável
                </span>
                <h4 className="text-base font-heading font-bold text-gray-950">{activeCourse.instructor.name}</h4>
                {activeCourse.instructor.role && (
                  <p className="text-xs font-sans text-gray-600 font-medium">{activeCourse.instructor.role}</p>
                )}
                {activeCourse.instructor.companyOrExperience && (
                  <p className="text-xs font-mono-tech text-[#df3500] font-bold">{activeCourse.instructor.companyOrExperience}</p>
                )}
              </div>
            </div>

            {/* O que você vai aprender (da API / Planilha) */}
            {activeCourse.whatYouWillLearn && (
              <div className="mb-8">
                <h4 className="text-xs font-mono-tech font-bold text-gray-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#df3500]" />
                  O que você vai aprender:
                </h4>
                <div className="text-sm font-sans text-gray-700 leading-relaxed p-4 rounded-2xl bg-gray-50 border border-gray-100 whitespace-pre-line">
                  {activeCourse.whatYouWillLearn}
                </div>
              </div>
            )}

            {/* Módulos do Curso / Ementa (Apenas quando retornado pela API) */}
            {activeCourse.modules && activeCourse.modules.length > 0 && (
              <div className="mb-8">
                <h4 className="text-xs font-mono-tech font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#df3500]" />
                  Módulos e Conteúdos Abordados:
                </h4>
                <ul className="space-y-2.5">
                  {activeCourse.modules.map((mod, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm font-sans text-gray-700 p-3.5 rounded-xl bg-gray-50 border border-gray-100"
                    >
                      <span className="w-6 h-6 rounded-full bg-orange-100 text-[#df3500] font-mono-tech font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span>{mod}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Detalhes Rápidos */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-orange-50 border border-orange-200/80 mb-8 text-xs font-mono-tech font-bold text-gray-800">
              {activeCourse.duration && <span>Carga Horária: {activeCourse.duration}</span>}
              {activeCourse.level && <span>Nível: {activeCourse.level}</span>}
              <span className="text-[#df3500] ml-auto">Certificado Incluso</span>
            </div>

              {/* CTA do Modal */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="#proposta"
                onClick={() => setActiveCourse(null)}
                className="flex-1 py-4 px-6 rounded-xl font-heading font-bold text-center text-sm text-white bg-[#df3500] hover:bg-[#ff3d03] transition-all shadow-md shadow-[#df3500]/25 cursor-pointer uppercase tracking-wider"
              >
                Liberar este curso para minha equipe
              </Link>
              <button
                type="button"
                onClick={() => setActiveCourse(null)}
                className="py-4 px-6 rounded-xl font-heading font-bold text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
              >
                Fechar
              </button>
            </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
