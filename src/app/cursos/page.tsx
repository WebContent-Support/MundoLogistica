'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Search,
  Clock,
  Award,
  ChevronRight,
  X,
  User,
  CheckCircle2,
  Sparkles,
  Filter,
  ArrowRight,
  ArrowLeft,
  BookOpen,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Course, COURSES_DATA, CATEGORIES } from '@/data/courses';

export default function VitrineCursosPage() {
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
    <div className="min-h-screen flex flex-col bg-[#06080d] text-white selection:bg-[#ff3d03] selection:text-white">
      <Header />

      <main className="flex-1">
        {/* Banner Superior da Vitrine com Fotografia de Fundo */}
        <section data-theme="dark" className="relative pt-12 pb-16 bg-[#06080d] border-b border-white/10 overflow-hidden">
          {/* Imagem de Fundo de Perspectiva de Armazém */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src="/images/warehouse-perspective.jpg"
              alt="Centro de Distribuição e Operações"
              className="w-full h-full object-cover opacity-25 mix-blend-luminosity filter blur-[0.5px]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#06080d] via-[#06080d]/90 to-[#06080d]/80" />
            <div className="absolute inset-0 bg-tech-grid-dark opacity-35" />
          </div>

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-[#ff3d03]/20 via-[#ff3d03]/5 to-transparent blur-[120px] pointer-events-none rounded-full" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Link Voltar para a Home */}
            <div className="mb-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-wider"
              >
                <ArrowLeft className="w-4 h-4 text-[#ff3d03]" />
                Voltar para a Página Principal
              </Link>
            </div>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff3d03]/10 border border-[#ff3d03]/30 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#ff3d03]" />
                <span className="text-xs font-mono-tech font-bold uppercase tracking-widest text-[#ff3d03]">
                  Catálogo Completo de Capacitação B2B
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight leading-tight mb-4">
                Vitrine de <span className="font-editorial italic font-normal text-orange-400">Cursos</span> MundoLogística
              </h1>
              <p className="text-gray-300 font-sans text-base sm:text-lg leading-relaxed">
                Explore todo o acervo disponível na assinatura corporativa. Treinamentos técnicos de alto nível ministrados exclusivamente por executivos atuantes nas maiores cadeias de suprimentos do Brasil.
              </p>
            </div>
          </div>
        </section>

        {/* Seção Principal de Cursos com Filtros (Estilo Claro) */}
        <section data-theme="light" className="py-16 bg-[#f8fafc] text-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Barra de Filtros e Busca */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 mb-12 space-y-6 border border-gray-200/90 shadow-sm">
              {/* Topo da barra: Contador e Busca */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="relative flex-1 max-w-2xl">
                  <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Buscar curso por tema, especialista ou palavra-chave (ex: WMS, fretes, ESG, Tania)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-10 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#df3500] focus:ring-1 focus:ring-[#df3500] transition-all"
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

                <div className="bg-gray-50 px-4 py-2.5 rounded-2xl border border-gray-200 text-xs font-mono-tech font-bold text-gray-600 flex items-center gap-2 shrink-0 self-start md:self-auto">
                  <span className="w-2 h-2 rounded-full bg-[#ff3d03] animate-pulse" />
                  <span>
                    Exibindo <strong className="text-gray-900 text-sm font-mono-tech">{filteredCourses.length}</strong> de {COURSES_DATA.length} cursos
                  </span>
                </div>
              </div>

              {/* Categorias / Trilhas */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2 border-t border-gray-100">
                <div className="flex items-center gap-1.5 text-xs font-mono-tech font-bold text-gray-700 mr-2 shrink-0">
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
                      className={`px-4 py-2 rounded-xl text-xs font-heading font-bold whitespace-nowrap transition-all duration-200 shrink-0 cursor-pointer ${
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

            {/* Grid com Todos os Cursos */}
            {filteredCourses.length === 0 ? (
              <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-gray-300">
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course) => (
                  <div
                    key={course.id}
                    onClick={() => setActiveCourse(course)}
                    className="bg-white rounded-3xl border border-gray-200 hover:border-[#ff3d03] shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5 relative cursor-pointer"
                  >
                    {/* Foto de Capa do Treinamento com Efeito Cinema */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-900">
                      <img
                        src={course.image}
                        alt={course.title}
                        width={600}
                        height={375}
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
                        <span className="text-[10px] font-mono-tech text-white font-bold bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20">
                          {course.level}
                        </span>
                      </div>

                      {/* Duração & Certificado Flutuantes na Base da Foto */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-mono-tech">
                        <span className="flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 font-bold">
                          <Clock className="w-3.5 h-3.5 text-[#ff3d03]" />
                          {course.duration}
                        </span>
                        <span className="flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-amber-300 font-bold">
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

                      {/* Dados do Instrutor com Fotos Reais */}
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
                          <p className="text-[11px] font-sans text-gray-600 truncate">
                            {course.instructor.role}
                          </p>
                          <p className="text-[10px] font-mono-tech text-[#df3500] font-bold truncate">
                            {course.instructor.companyOrExperience}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Rodapé do Card */}
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
            )}

            {/* Bloco Inferior de Chamada para Proposta com Fotografia Direcional */}
            <div className="mt-16 relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 group">
              {/* Imagem de Fundo de Rodovia Logística Noturna com Linhas de Luz Convergentes */}
              <div className="absolute inset-0 z-0">
                <img
                  src="/images/directional-highway.jpg"
                  alt="Transporte Logístico Rodoviário Noturno"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/90" />
                <div className="absolute inset-0 bg-tech-grid-dark opacity-35" />
              </div>

              <div className="relative z-10 p-8 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="max-w-xl">
                  <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest block mb-2">
                    Atendimento Corporativo
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 leading-tight">
                    Quer liberar todo este acervo para a sua equipe?
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    Oferecemos planos dimensionados com faturamento via boleto a prazo, relatórios do RH e suporte consultivo.
                  </p>
                </div>

                <div className="relative shrink-0">
                  {/* Onda de Radar */}
                  <div className="absolute inset-0 rounded-2xl bg-[#ff3d03] radar-wave pointer-events-none" />

                  <Link
                    href="/#proposta"
                    className="relative inline-flex items-center gap-2.5 px-9 py-4.5 rounded-2xl font-black text-sm text-white bg-gradient-to-r from-[#ff3d03] to-[#df3500] hover:from-[#ff5722] hover:to-[#eb3b00] transition-all shadow-[0_0_35px_rgba(255,61,3,0.6)] hover:shadow-[0_0_55px_rgba(255,61,3,0.85)] uppercase tracking-wider cursor-pointer shimmer-btn border border-orange-300/40"
                  >
                    <span>Solicitar Proposta para Equipe</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modal de Detalhes da Ementa */}
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
                <span className="text-xs font-mono font-bold bg-white/20 backdrop-blur-md px-3 py-1 rounded-md border border-white/20">
                  {activeCourse.level}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              {/* Cabeçalho do Conteúdo */}
              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl font-black text-gray-950 leading-tight mb-3">
                  {activeCourse.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {activeCourse.summary}
                </p>
              </div>

            {/* Instrutor */}
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
                <p className="text-xs font-sans text-gray-600 font-medium">{activeCourse.instructor.role}</p>
                <p className="text-xs font-mono-tech text-[#df3500] font-bold">{activeCourse.instructor.companyOrExperience}</p>
              </div>
            </div>

            {/* Módulos */}
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

            {/* Detalhes Rápidos */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-orange-50 border border-orange-200/80 mb-8 text-xs font-mono-tech font-bold text-gray-800">
              <span>Carga Horária: {activeCourse.duration}</span>
              <span>Nível: {activeCourse.level}</span>
              <span className="text-[#df3500]">Certificado Incluso</span>
            </div>

            {/* CTA do Modal */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/#proposta"
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

      <Footer />
    </div>
  );
}

