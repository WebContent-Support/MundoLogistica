'use client';

import { useState, useMemo } from 'react';
import { Search, Clock, Award, ChevronRight, X, User, CheckCircle2, Sparkles, Filter } from 'lucide-react';
import { Course, COURSES_DATA, CATEGORIES } from '@/data/courses';

export default function CourseShowcase() {
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

  return (
    <section id="cursos" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 mb-4">
              <Sparkles className="w-4 h-4 text-[#ff3d03]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff3d03]">
                Acervo de Cursos & Especialistas
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight">
              Vitrine Dinâmica de Cursos
            </h2>
            <p className="text-gray-600 text-lg mt-3">
              Explore os treinamentos disponíveis na assinatura corporativa. Aulas ministradas por quem ocupa posições de liderança em grandes operações globais.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-4 py-2 rounded-xl">
              Mostrando <strong className="text-gray-900">{filteredCourses.length}</strong> de {COURSES_DATA.length} cursos
            </span>
          </div>
        </div>

        {/* Barra de Filtros e Busca */}
        <div className="bg-gray-50 border border-gray-200/80 rounded-2xl p-4 sm:p-6 mb-12 space-y-5">
          {/* Campo de Busca */}
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar curso por tema, instrutor ou tecnologia (ex: WMS, fretes, ESG, Tania)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#ff3d03] focus:border-transparent transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                aria-label="Limpar busca"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Categorias / Trilhas */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500 mr-2 shrink-0">
              <Filter className="w-3.5 h-3.5" />
              Filtrar por:
            </div>
            {CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 shrink-0 ${
                    isSelected
                      ? 'bg-[#ff3d03] text-white shadow-md shadow-[#ff3d03]/25'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200/80'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid de Cards de Cursos */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
            <p className="text-gray-500 font-medium mb-3">Nenhum curso encontrado para os critérios selecionados.</p>
            <button
              onClick={() => {
                setSelectedCategory('Todos os Cursos');
                setSearchQuery('');
              }}
              className="text-sm font-bold text-[#ff3d03] hover:underline"
            >
              Limpar filtros e ver todos os cursos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-gray-200/90 hover:border-[#ff3d03] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Topo do Card */}
                <div className="p-6 sm:p-7">
                  {/* Badges do Curso */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-bold text-[#ff3d03] bg-orange-50 px-3 py-1 rounded-full uppercase tracking-wider">
                      {course.category}
                    </span>
                    <span className="text-[11px] font-semibold text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-md">
                      {course.level}
                    </span>
                  </div>

                  {/* Título do Curso */}
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#ff3d03] transition-colors leading-snug mb-3">
                    {course.title}
                  </h3>

                  {/* Resumo */}
                  <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed mb-6">
                    {course.summary}
                  </p>

                  {/* Dados do Instrutor */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <img
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-orange-100 shadow-sm"
                    />
                    <div className="overflow-hidden">
                      <h4 className="text-sm font-bold text-gray-900 truncate">
                        {course.instructor.name}
                      </h4>
                      <p className="text-xs text-gray-500 truncate">
                        {course.instructor.role}
                      </p>
                      <p className="text-[10px] text-[#ff3d03] font-medium truncate">
                        {course.instructor.companyOrExperience}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Rodapé do Card */}
                <div className="px-6 py-4 bg-gray-50/70 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs font-semibold text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gray-400" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-gray-400" />
                      <span>Certificado</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveCourse(course)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#ff3d03] hover:text-[#e03502] transition-colors group/btn"
                  >
                    <span>Ver Ementa</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Faixa inferior de incentivo */}
        <div className="mt-16 bg-orange-50 border border-orange-200/80 rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2">
              Precisa de uma trilha customizada para a sua empresa?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Nossos consultores educacionais ajudam a mapear os cursos ideais para os desafios da sua cadeia de suprimentos.
            </p>
          </div>
          <a
            href="#proposta"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-[#ff3d03] hover:bg-[#e03502] transition-all shadow-md shadow-[#ff3d03]/20"
          >
            Falar com Especialista B2B
          </a>
        </div>
      </div>

      {/* Modal de Detalhes do Curso */}
      {activeCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-gray-100">
            {/* Botão Fechar */}
            <button
              onClick={() => setActiveCourse(null)}
              className="absolute right-5 top-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Cabeçalho do Modal */}
            <div className="mb-6">
              <span className="text-xs font-bold text-[#ff3d03] bg-orange-50 px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
                {activeCourse.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight mb-3">
                {activeCourse.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {activeCourse.summary}
              </p>
            </div>

            {/* Instrutor */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 mb-6">
              <img
                src={activeCourse.instructor.avatar}
                alt={activeCourse.instructor.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-orange-200"
              />
              <div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Instrutor Responsável</span>
                <h4 className="text-base font-bold text-gray-900">{activeCourse.instructor.name}</h4>
                <p className="text-xs text-gray-600 font-medium">{activeCourse.instructor.role}</p>
                <p className="text-xs text-[#ff3d03] font-semibold">{activeCourse.instructor.companyOrExperience}</p>
              </div>
            </div>

            {/* Módulos do Curso / Ementa */}
            <div className="mb-8">
              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ff3d03]" />
                Módulos e Conteúdos Abordados:
              </h4>
              <ul className="space-y-3">
                {activeCourse.modules.map((mod, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-gray-700 p-3 rounded-xl bg-gray-50/50 border border-gray-100">
                    <span className="w-6 h-6 rounded-full bg-[#ff3d03]/10 text-[#ff3d03] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span>{mod}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Detalhes Rápidos */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 mb-8 text-xs font-bold text-gray-700">
              <span>Carga Horária: {activeCourse.duration}</span>
              <span>Nível: {activeCourse.level}</span>
              <span>Certificado Incluso</span>
            </div>

            {/* CTA do Modal */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#proposta"
                onClick={() => setActiveCourse(null)}
                className="flex-1 py-3.5 px-6 rounded-xl font-bold text-center text-white bg-[#ff3d03] hover:bg-[#e03502] transition-colors shadow-md shadow-[#ff3d03]/25"
              >
                Liberar este curso para minha equipe
              </a>
              <button
                onClick={() => setActiveCourse(null)}
                className="py-3.5 px-6 rounded-xl font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
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
