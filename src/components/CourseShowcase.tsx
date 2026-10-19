'use client';

import { useState, useMemo } from 'react';
import { Search, Clock, Award, ChevronRight, X, User, CheckCircle2, Sparkles, Filter, PlayCircle, BookOpen } from 'lucide-react';
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
    <section id="cursos" className="py-28 bg-[#06080d] relative border-t border-white/10">
      {/* Luz ambiente de fundo neon laranja */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#ff3d03]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff3d03]/10 border border-[#ff3d03]/30 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#ff3d03]" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ff3d03]">
                Acervo de Cursos & Especialistas
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Vitrine Dinâmica de Cursos
            </h2>
            <p className="text-gray-400 text-lg mt-3 leading-relaxed">
              Explore o catálogo de capacitação da assinatura corporativa. Treinamentos práticos ministrados exclusivamente por executivos de ponta.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="glass-panel px-4 py-2.5 rounded-2xl border border-white/10 text-xs font-mono font-bold text-gray-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ff3d03] animate-pulse" />
              <span>
                Mostrando <strong className="text-white text-sm">{filteredCourses.length}</strong> de {COURSES_DATA.length} cursos
              </span>
            </div>
          </div>
        </div>

        {/* Barra de Filtros e Busca em Dark Glass */}
        <div className="glass-panel rounded-3xl p-4 sm:p-6 mb-12 space-y-5 border border-white/10 shadow-2xl">
          {/* Campo de Busca */}
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar curso por tema, especialista ou palavra-chave (ex: WMS, fretes, ESG, Tania)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-black/50 border border-white/10 rounded-2xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#ff3d03] focus:ring-1 focus:ring-[#ff3d03] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white p-1"
                aria-label="Limpar busca"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Categorias / Trilhas */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-gray-400 mr-2 shrink-0">
              <Filter className="w-3.5 h-3.5 text-[#ff3d03]" />
              TRILHA:
            </div>
            {CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 shrink-0 ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#ff3d03] to-[#e03502] text-white shadow-lg shadow-[#ff3d03]/30 scale-105 border border-orange-400/40'
                      : 'bg-white/[0.04] text-gray-300 hover:text-white hover:bg-white/[0.08] border border-white/5'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid de Cards dos Cursos em Dark Luxury */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-20 glass-panel rounded-3xl border border-dashed border-white/10">
            <p className="text-gray-400 font-medium mb-3">Nenhum curso encontrado para sua pesquisa.</p>
            <button
              onClick={() => {
                setSelectedCategory('Todos os Cursos');
                setSearchQuery('');
              }}
              className="text-sm font-bold text-[#ff3d03] hover:underline"
            >
              Restaurar filtros e ver catálogo completo
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="glass-panel rounded-3xl border border-white/10 hover:border-[#ff3d03]/60 hover:shadow-[0_0_35px_-5px_rgba(255,61,3,0.3)] transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
              >
                {/* Topo do Card */}
                <div className="p-7">
                  {/* Badges do Curso */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="text-[10px] font-mono font-bold text-[#ff3d03] bg-[#ff3d03]/15 border border-[#ff3d03]/30 px-3 py-1 rounded-full uppercase tracking-wider">
                      {course.category}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-md">
                      {course.level}
                    </span>
                  </div>

                  {/* Título do Curso */}
                  <h3 className="text-xl font-black text-white group-hover:text-[#ff3d03] transition-colors leading-snug mb-3">
                    {course.title}
                  </h3>

                  {/* Resumo */}
                  <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed mb-6 font-normal">
                    {course.summary}
                  </p>

                  {/* Dados do Instrutor */}
                  <div className="flex items-center gap-3 pt-5 border-t border-white/5">
                    <div className="relative">
                      <img
                        src={course.instructor.avatar}
                        alt={course.instructor.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-[#ff3d03]/40 shadow-md shadow-[#ff3d03]/20"
                      />
                      <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-black" />
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="text-sm font-bold text-white truncate">
                        {course.instructor.name}
                      </h4>
                      <p className="text-xs text-gray-400 truncate">
                        {course.instructor.role}
                      </p>
                      <p className="text-[10px] font-mono text-[#ff3d03] font-medium truncate">
                        {course.instructor.companyOrExperience}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Rodapé do Card */}
                <div className="px-7 py-4 bg-black/40 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#ff3d03]" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-[#ff3d03]" />
                      <span>Certificado</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveCourse(course)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#ff3d03] group-hover:text-white transition-colors group/btn"
                  >
                    <span>Ver Ementa</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Faixa inferior de incentivo */}
        <div className="mt-16 glass-panel-glow rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#ff3d03]/30">
          <div>
            <span className="text-[11px] font-mono font-bold text-[#ff3d03] uppercase tracking-wider block mb-1">
              Customização Corporativa
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
              Precisa de uma trilha sob medida para sua equipe?
            </h3>
            <p className="text-gray-400 text-sm sm:text-base max-w-xl">
              Nossos especialistas em educação corporativa estruturam uma grade alinhada aos desafios imediatos de corte de custos e SLA da sua empresa.
            </p>
          </div>
          <a
            href="#proposta"
            className="shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#ff3d03] to-[#e03502] hover:scale-105 transition-all shadow-lg shadow-[#ff3d03]/30"
          >
            Falar com Consultor B2B
          </a>
        </div>
      </div>

      {/* Modal Dark Luxury da Ementa */}
      {activeCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="bg-[#0b0f17] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-white/15">
            {/* Botão Fechar */}
            <button
              onClick={() => setActiveCourse(null)}
              className="absolute right-5 top-5 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Cabeçalho do Modal */}
            <div className="mb-6">
              <span className="text-xs font-mono font-bold text-[#ff3d03] bg-[#ff3d03]/15 border border-[#ff3d03]/30 px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
                {activeCourse.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-3">
                {activeCourse.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {activeCourse.summary}
              </p>
            </div>

            {/* Instrutor */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/10 mb-6">
              <img
                src={activeCourse.instructor.avatar}
                alt={activeCourse.instructor.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-[#ff3d03]"
              />
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 block">Instrutor Responsável</span>
                <h4 className="text-base font-bold text-white">{activeCourse.instructor.name}</h4>
                <p className="text-xs text-gray-400 font-medium">{activeCourse.instructor.role}</p>
                <p className="text-xs text-[#ff3d03] font-semibold">{activeCourse.instructor.companyOrExperience}</p>
              </div>
            </div>

            {/* Módulos do Curso / Ementa */}
            <div className="mb-8">
              <h4 className="text-xs font-mono font-bold text-gray-300 uppercase tracking-wider mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ff3d03]" />
                Módulos e Conteúdos Abordados:
              </h4>
              <ul className="space-y-2.5">
                {activeCourse.modules.map((mod, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-gray-300 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="w-6 h-6 rounded-full bg-[#ff3d03]/20 text-[#ff3d03] font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span>{mod}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Detalhes Rápidos */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-[#ff3d03]/10 border border-[#ff3d03]/30 mb-8 text-xs font-mono font-bold text-gray-200">
              <span>Duração: {activeCourse.duration}</span>
              <span>Nível: {activeCourse.level}</span>
              <span className="text-[#ff3d03]">Certificado Incluso</span>
            </div>

            {/* CTA do Modal */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#proposta"
                onClick={() => setActiveCourse(null)}
                className="flex-1 py-4 px-6 rounded-xl font-bold text-center text-sm text-white bg-gradient-to-r from-[#ff3d03] to-[#e03502] hover:scale-[1.02] transition-all shadow-lg shadow-[#ff3d03]/30"
              >
                Liberar este curso para minha equipe
              </a>
              <button
                onClick={() => setActiveCourse(null)}
                className="py-4 px-6 rounded-xl font-bold text-sm text-gray-300 bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
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
