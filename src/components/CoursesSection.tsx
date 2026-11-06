'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Search,
  Clock,
  Award,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  X,
  User,
  CheckCircle2,
  Sparkles,
  Filter,
  ArrowRight,
  BookOpen,
} from 'lucide-react';
import { Course, COURSES_DATA, CATEGORIES } from '@/data/courses';

export default function CoursesSection() {
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos os Cursos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCourse, setActiveCourse] = useState<Course | null>(null);

  // Filtragem inteligente em tempo real
  const filteredCourses = useMemo(() => {
    return COURSES_DATA.filter((course) => {
      const matchesCategory =
        selectedCategory === 'Todos os Cursos' || course.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === '' ||
        course.title.toLowerCase().includes(query) ||
        course.instructor.name.toLowerCase().includes(query) ||
        course.summary.toLowerCase().includes(query) ||
        course.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Cursos exibidos: se showAll estiver ativo ou houver busca/filtro, exibe a lista filtrada; se não, exibe os 6 primeiros
  const displayedCourses = useMemo(() => {
    if (showAll || searchQuery.trim() !== '' || selectedCategory !== 'Todos os Cursos') {
      return filteredCourses;
    }
    return COURSES_DATA.slice(0, 6);
  }, [showAll, searchQuery, selectedCategory, filteredCourses]);

  const handleToggleShowAll = () => {
    setShowAll((prev) => !prev);
    if (showAll) {
      setSelectedCategory('Todos os Cursos');
      setSearchQuery('');
    }
  };

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
            <div className="bg-gray-50 px-4 py-2.5 rounded-2xl border border-gray-200 text-xs font-mono font-bold text-gray-600 flex items-center gap-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#ff3d03] animate-pulse" />
              <span>
                Exibindo <strong className="text-gray-900 text-sm">{displayedCourses.length}</strong> de {COURSES_DATA.length} cursos
              </span>
            </div>
          </div>
        </div>

        {/* Barra de Filtros e Busca (Exibida quando showAll estiver ativo ou quando o usuário abrir o catálogo) */}
        {showAll && (
          <div className="bg-gray-50/90 rounded-3xl p-5 sm:p-6 mb-10 space-y-5 border border-gray-200 shadow-sm animate-fade-in">
            {/* Campo de Busca */}
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar curso por tema, especialista ou palavra-chave (ex: WMS, fretes, ESG, Tania)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-2xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#df3500] focus:ring-1 focus:ring-[#df3500] transition-all shadow-sm"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 p-1"
                  aria-label="Limpar busca"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Categorias / Trilhas */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-gray-700 mr-2 shrink-0">
                <Filter className="w-3.5 h-3.5 text-[#df3500]" />
                TRILHA:
              </div>
              {CATEGORIES.map((category) => {
                const isSelected = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 shrink-0 cursor-pointer ${
                      isSelected
                        ? 'bg-[#df3500] text-white shadow-md shadow-[#df3500]/25 scale-105'
                        : 'bg-white text-gray-800 hover:text-black hover:bg-gray-100 border border-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Grid de Cards dos Cursos - Layout Original com Cantoneira da Marca */}
        {displayedCourses.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-300 mb-12">
            <p className="text-gray-500 font-medium mb-3">Nenhum curso encontrado para sua pesquisa.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('Todos os Cursos');
                setSearchQuery('');
              }}
              className="text-sm font-bold text-[#df3500] hover:underline cursor-pointer"
            >
              Restaurar filtros e ver catálogo completo
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
            {displayedCourses.map((course) => (
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
        )}

        {/* Botão de Ação: Ver Todos os Cursos / Recolher */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={handleToggleShowAll}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold text-white bg-[#df3500] hover:bg-[#ff3d03] shadow-lg shadow-[#df3500]/30 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-orange-400/30 uppercase tracking-wider"
          >
            {showAll ? (
              <>
                <span>Mostrar Menos Cursos</span>
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                <span>Ver Todos os Cursos ({COURSES_DATA.length} disponíveis)</span>
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>

          <Link
            href="#proposta"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-gray-800 bg-gray-100 hover:bg-gray-200 transition-all border border-gray-300 uppercase tracking-wider cursor-pointer"
          >
            Solicitar Proposta Corporativa
            <ArrowRight className="w-4 h-4 text-[#df3500]" />
          </Link>
        </div>
      </div>

      {/* Modal de Detalhes da Ementa (Abre ao Clicar em Qualquer Curso) */}
      {activeCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-gray-200">
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
              <a
                href="#proposta"
                onClick={() => setActiveCourse(null)}
                className="flex-1 py-4 px-6 rounded-xl font-bold text-center text-sm text-white bg-[#df3500] hover:bg-[#ff3d03] transition-all shadow-md shadow-[#df3500]/25 cursor-pointer uppercase tracking-wider"
              >
                Liberar este curso para minha equipe
              </a>
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
