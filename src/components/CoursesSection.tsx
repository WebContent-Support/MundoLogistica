'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  Clock,
  Award,
  ArrowRight,
  Sparkles,
  X,
  Search,
  Filter,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { Course, COURSES_DATA, CATEGORIES } from '@/data/courses';

export default function CoursesSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeCourse, setActiveCourse] = useState<Course | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos os Cursos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // 3 cursos de destaque solicitados pela cliente
  const featuredCourses = COURSES_DATA.slice(0, 3);

  const filteredCourses = COURSES_DATA.filter((course) => {
    const matchesCategory =
      selectedCategory === 'Todos os Cursos' || course.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === '' ||
      course.title.toLowerCase().includes(query) ||
      course.instructor.name.toLowerCase().includes(query) ||
      course.summary.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  const getCourseImage = (index: number) => {
    const images = [
      '/images/course-centricity.jpg',
      '/images/course-tax.jpg',
      '/images/course-wms.jpg',
    ];
    return images[index % images.length];
  };

  return (
    <section
      id="cursos"
      data-theme="light"
      className="py-24 bg-white text-gray-900 border-t border-gray-200 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da 6ª Dobra - Texto Exato da Cliente */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#df3500]" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#df3500]">
              Capacitação Contínua
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-gray-950 tracking-tight leading-tight">
            Conheça os cursos disponíveis na nossa plataforma!
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-4 leading-relaxed">
            Formação técnica de alto impacto ministrada exclusivamente por líderes atuantes nas maiores cadeias de suprimentos.
          </p>
        </div>

        {/* 03 Cursos em Destaque Conforme Direcionamento Visual da Cliente */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {featuredCourses.map((course, idx) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl border border-gray-200/90 hover:border-[#ff3d03] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 relative"
            >
              {/* Cantoneira Laranja da Marca MundoLogística */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#ff3d03] opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#ff3d03] opacity-0 group-hover:opacity-100 transition-opacity z-10" />

              <div>
                {/* Capa Fotográfica em Alta Resolução */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={getCourseImage(idx)}
                    alt={course.title}
                    width={600}
                    height={375}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-mono font-bold text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full uppercase tracking-wider border border-white/20">
                      {course.category}
                    </span>
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-7">
                  {/* Nome do Curso */}
                  <h3 className="text-xl font-bold text-gray-950 group-hover:text-[#df3500] transition-colors leading-snug mb-3">
                    {course.title}
                  </h3>

                  {/* Resumo Objetivo */}
                  <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed mb-6">
                    {course.summary}
                  </p>

                  {/* Nome e Cargo do Especialista */}
                  <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                    <img
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                      width={48}
                      height={48}
                      loading="lazy"
                      decoding="async"
                      className="w-12 h-12 rounded-full object-cover border-2 border-orange-100 shadow-sm"
                    />
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
              </div>

              {/* Rodapé do Card */}
              <div className="px-7 py-4 bg-gray-50/70 border-t border-gray-100 flex items-center justify-between text-xs font-mono text-gray-700 font-medium">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#df3500]" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#df3500]" />
                  <span>Certificado Oficial</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTÃO CTA DA 6ª DOBRA: Texto Exato do Cliente (Abre Catálogo Completo) */}
        <div className="text-center">
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl text-sm font-bold text-white bg-[#df3500] hover:bg-[#ff3d03] shadow-lg shadow-[#df3500]/30 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-orange-400/30 uppercase tracking-wider"
          >
            Conhecer os cursos
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Modal / Catálogo Completo de Cursos (Para visualização integral) */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-gray-200">
            {/* Header do Modal */}
            <div className="p-6 sm:p-8 border-b border-gray-200 flex items-center justify-between bg-gray-50/80">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#df3500] block mb-1">
                  Catálogo Completo • MundoLogística
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-gray-950">
                  Todos os Cursos Disponíveis
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="w-10 h-10 rounded-xl bg-white border border-gray-200 text-gray-500 hover:text-gray-900 flex items-center justify-center cursor-pointer transition-colors"
                aria-label="Fechar catálogo"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Filtros e Busca */}
            <div className="p-6 border-b border-gray-100 bg-white space-y-4">
              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Buscar curso, especialista ou palavra-chave..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#df3500]"
                />
              </div>

              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-[#df3500] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Lista dos Cursos */}
            <div className="p-6 overflow-y-auto flex-1 space-y-4 bg-gray-50/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredCourses.map((c) => (
                  <div
                    key={c.id}
                    className="p-5 bg-white rounded-2xl border border-gray-200 hover:border-[#df3500] transition-colors shadow-xs"
                  >
                    <span className="text-[10px] font-mono text-[#df3500] font-bold uppercase tracking-wider block mb-1">
                      {c.category} • {c.duration}
                    </span>
                    <h4 className="text-base font-bold text-gray-950 mb-2">{c.title}</h4>
                    <p className="text-xs text-gray-600 line-clamp-2 mb-4">{c.summary}</p>
                    <div className="flex items-center gap-2.5 pt-3 border-t border-gray-100">
                      <img
                        src={c.instructor.avatar}
                        alt={c.instructor.name}
                        width={36}
                        height={36}
                        className="w-9 h-9 rounded-full object-cover border border-orange-100"
                      />
                      <div className="text-xs">
                        <span className="font-bold text-gray-900 block">{c.instructor.name}</span>
                        <span className="text-gray-500 text-[11px]">{c.instructor.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Rodapé do Modal */}
            <div className="p-6 border-t border-gray-200 bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-gray-500 font-mono">
                Total de {COURSES_DATA.length} cursos incluídos na assinatura corporativa
              </span>
              <a
                href="#proposta"
                onClick={() => setModalOpen(false)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-[#df3500] hover:bg-[#ff3d03] transition-colors uppercase tracking-wider text-center"
              >
                Solicitar Proposta para Todos os Cursos
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

