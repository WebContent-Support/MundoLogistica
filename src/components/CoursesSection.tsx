'use client';

import { useState } from 'react';
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
import { Course, COURSES_DATA } from '@/data/courses';

export default function CoursesSection() {
  const [activeCourse, setActiveCourse] = useState<Course | null>(null);

  // 6 cursos de destaque na homepage
  const homepageCourses = COURSES_DATA.slice(0, 6);

  return (
    <section
      id="cursos"
      data-theme="light"
      className="py-24 bg-white text-gray-900 relative border-t border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da 6ª Dobra - Texto Oficial da Cliente */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-300 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#df3500]" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#df3500]">
                Acervo de Cursos & Especialistas
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-950 tracking-tight leading-tight">
              Conheça os cursos disponíveis na nossa plataforma!
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mt-3 leading-relaxed">
              Treinamentos técnicos ministrados exclusivamente por executivos atuantes nas maiores cadeias de suprimentos.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/cursos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-orange-300 text-xs font-mono font-bold text-gray-700 hover:text-[#df3500] transition-all shadow-sm"
            >
              <span>Ver Catálogo Completo ({COURSES_DATA.length} cursos)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Grid com os 6 Cursos na Homepage */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {homepageCourses.map((course) => (
            <div
              key={course.id}
              onClick={() => setActiveCourse(course)}
              className="bg-white rounded-3xl border border-gray-200 hover:border-[#ff3d03] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 relative cursor-pointer"
            >
              {/* A Cantoneira Laranja da Marca MundoLogística */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#ff3d03] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#ff3d03] opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Topo do Card */}
              <div className="p-7">
                {/* Badges do Curso */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-mono font-bold text-[#df3500] bg-orange-50 border border-orange-200 px-3 py-1 rounded-full uppercase tracking-wider">
                    {course.category}
                  </span>
                  <span className="text-[10px] font-mono text-gray-700 font-bold bg-gray-100 px-2.5 py-0.5 rounded-md">
                    {course.level}
                  </span>
                </div>

                {/* Título do Curso */}
                <h3 className="text-xl font-bold text-gray-950 group-hover:text-[#df3500] transition-colors leading-snug mb-3">
                  {course.title}
                </h3>

                {/* Resumo */}
                <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed mb-6 font-normal">
                  {course.summary}
                </p>

                {/* Dados do Instrutor com Fotos Reais */}
                <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                  <div className="relative">
                    <img
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                      width={48}
                      height={48}
                      loading="lazy"
                      decoding="async"
                      className="w-12 h-12 rounded-full object-cover border-2 border-orange-100 shadow-sm"
                    />
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="text-sm font-bold text-gray-900 truncate">
                      {course.instructor.name}
                    </h4>
                    <p className="text-xs text-gray-600 truncate">
                      {course.instructor.role}
                    </p>
                    <p className="text-[10px] font-mono text-[#df3500] font-bold truncate">
                      {course.instructor.companyOrExperience}
                    </p>
                  </div>
                </div>
              </div>

              {/* Rodapé do Card */}
              <div className="px-7 py-4 bg-gray-50/70 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs font-mono text-gray-700 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#df3500]" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#df3500]" />
                    <span>Certificado</span>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#df3500] group-hover:text-[#ff3d03] transition-colors">
                  <span>Ver detalhes</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Botões de Ação ao Final da 6ª Dobra */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Botão que abre a página de cursos em outra aba */}
          <Link
            href="/cursos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold text-white bg-[#df3500] hover:bg-[#ff3d03] shadow-lg shadow-[#df3500]/30 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-orange-400/30 uppercase tracking-wider"
          >
            <span>Conhecer todos os cursos</span>
            <ExternalLink className="w-4 h-4" />
          </Link>

          <Link
            href="#proposta"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-gray-800 bg-gray-100 hover:bg-gray-200 transition-all border border-gray-300 uppercase tracking-wider cursor-pointer"
          >
            Solicitar Proposta Corporativa
            <ArrowRight className="w-4 h-4 text-[#df3500]" />
          </Link>
        </div>
      </div>

      {/* Modal de Detalhes da Ementa (Abre ao Clicar em Qualquer um dos 6 Cursos da Home) */}
      {activeCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-gray-200 text-gray-900">
            {/* Botão Fechar */}
            <button
              type="button"
              onClick={() => setActiveCourse(null)}
              className="absolute right-5 top-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Fechar modal de detalhes do curso"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Cabeçalho do Modal com a Cantoneira da Marca */}
            <div className="mb-6 relative pl-3">
              <div className="absolute top-0 left-0 w-2 h-full border-l-2 border-[#ff3d03]" />
              <span className="text-xs font-mono font-bold text-[#df3500] bg-orange-50 px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-3 border border-orange-200">
                {activeCourse.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-950 leading-tight mb-3">
                {activeCourse.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
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
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 block">
                  Especialista Responsável
                </span>
                <h4 className="text-base font-bold text-gray-950">{activeCourse.instructor.name}</h4>
                <p className="text-xs text-gray-600 font-medium">{activeCourse.instructor.role}</p>
                <p className="text-xs text-[#df3500] font-bold">{activeCourse.instructor.companyOrExperience}</p>
              </div>
            </div>

            {/* Módulos do Curso / Ementa */}
            <div className="mb-8">
              <h4 className="text-xs font-mono font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#df3500]" />
                Módulos e Conteúdos Abordados:
              </h4>
              <ul className="space-y-2.5">
                {activeCourse.modules.map((mod, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm text-gray-700 p-3.5 rounded-xl bg-gray-50 border border-gray-100"
                  >
                    <span className="w-6 h-6 rounded-full bg-orange-100 text-[#df3500] font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span>{mod}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Detalhes Rápidos */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-orange-50 border border-orange-200/80 mb-8 text-xs font-mono font-bold text-gray-800">
              <span>Carga Horária: {activeCourse.duration}</span>
              <span>Nível: {activeCourse.level}</span>
              <span className="text-[#df3500]">Certificado Incluso</span>
            </div>

            {/* CTA do Modal */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="#proposta"
                onClick={() => setActiveCourse(null)}
                className="flex-1 py-4 px-6 rounded-xl font-bold text-center text-sm text-white bg-[#df3500] hover:bg-[#ff3d03] transition-all shadow-md shadow-[#df3500]/25 cursor-pointer uppercase tracking-wider"
              >
                Liberar este curso para minha equipe
              </Link>
              <button
                type="button"
                onClick={() => setActiveCourse(null)}
                className="py-4 px-6 rounded-xl font-bold text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
