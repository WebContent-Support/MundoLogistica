'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight, Award, Sparkles, Building2 } from 'lucide-react';

const SPECIALISTS = [
  {
    name: 'Tania Heck Trotta',
    role: 'Executiva Sênior de Supply Chain',
    companyOrExperience: '+20 anos FMCG, Pharma e Medical Devices',
    avatar: '/instructors/tania-heck.png',
  },
  {
    name: 'Rafael Brito',
    role: 'CEO & Especialista Tributário',
    companyOrExperience: '+15 anos em estratégia financeira e tributos',
    avatar: '/instructors/rafael-brito.jpg',
  },
  {
    name: 'Ricardo Mello',
    role: 'COO & Executivo de Operações',
    companyOrExperience: 'Ex-executivo Cargill, J&J e Accenture',
    avatar: '/instructors/ricardo-mello.jpg',
  },
  {
    name: 'Danilo Doriguelo de Melo',
    role: 'Diretor Executivo de Supply Chain',
    companyOrExperience: 'Coautor de "Logística Viva" e pós Oxford',
    avatar: '/instructors/danilo-doriguelo.jpg',
  },
  {
    name: 'Marilia Ramalho',
    role: 'Americas Supply Chain Director',
    companyOrExperience: 'Fundadora do Women in Logistics (+25 anos)',
    avatar: '/instructors/marilia-ramalho.jpg',
  },
  {
    name: 'Francisco Tarosso',
    role: 'Diretor Sênior de Operações',
    companyOrExperience: 'Liderança em grandes multinacionais globais',
    avatar: '/instructors/francisco-tarosso.jpg',
  },
  {
    name: 'Daiana Nunes',
    role: 'Professora e Executiva de Supply Chain',
    companyOrExperience: 'Ex-Amazon Brasil, Petz e DPSP; Doutoranda FGV',
    avatar: '/instructors/daiana-nunes.jpg',
  },
  {
    name: 'Carlos Jardim',
    role: 'Diretor de Supply Chain',
    companyOrExperience: '+22 anos em farmacêutica e bens de consumo',
    avatar: '/instructors/carlos-jardim.jpg',
  },
  {
    name: 'Alberto Rodrigues',
    role: 'Diretor de Logística',
    companyOrExperience: 'Especialista em transporte granel e químicos',
    avatar: '/instructors/alberto-rodrigues.jpg',
  },
  {
    name: 'Alexandre Faria',
    role: 'VP de Supply Chain',
    companyOrExperience: 'Líder em e-commerce de grande porte e varejo',
    avatar: '/instructors/alexandre-faria.jpg',
  },
  {
    name: 'Renata Albuquerque',
    role: 'Head de Logística Internacional',
    companyOrExperience: '+18 anos gerenciando importações portuárias',
    avatar: '/instructors/renata-albuquerque.jpg',
  },
  {
    name: 'Eduardo Silveira',
    role: 'Consultor Sênior de E-commerce',
    companyOrExperience: 'Ex-gerente em marketplaces líderes',
    avatar: '/instructors/eduardo-silveira.jpg',
  },
];

export default function SpecialistsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="especialistas"
      data-theme="light"
      className="py-24 bg-[#f8fafc] text-gray-900 border-t border-gray-200 relative overflow-hidden"
    >
      {/* FOTOGRAFIA REAL DE FUNDO: Sala de Diretoria e Liderança Executiva */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src="/images/executive-boardroom.jpg"
          alt="Fotografia de Sala de Diretoria e Liderança"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc]/95 via-[#f8fafc]/85 to-[#f8fafc]/95" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da 5ª Dobra - Textos Exatos da Cliente */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-300 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#df3500]" />
              <span className="text-xs font-mono-tech font-bold uppercase tracking-widest text-[#df3500]">
                Corpo Docente de Elite
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-black text-gray-950 tracking-tight leading-tight">
              Temos um time com os <span className="font-editorial italic font-normal text-[#df3500]">maiores especialistas</span> e profissionais atuantes do segmento de logística e supply chain!
            </h2>
          </div>

          {/* Botões de Navegação do Carrossel */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => scroll('left')}
              aria-label="Rolar especialistas para a esquerda"
              className="w-12 h-12 rounded-2xl bg-white border border-gray-200 hover:border-[#df3500] hover:text-[#df3500] text-gray-700 flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Rolar especialistas para a direita"
              className="w-12 h-12 rounded-2xl bg-white border border-gray-200 hover:border-[#df3500] hover:text-[#df3500] text-gray-700 flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Galeria Horizontal com Rolagem Suave */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none scroll-smooth snap-x snap-mandatory"
        >
          {SPECIALISTS.map((spec) => (
            <div
              key={spec.name}
              className="w-[280px] sm:w-[320px] shrink-0 snap-start bg-white rounded-3xl p-6 border border-gray-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden hover:border-[#ff3d03]/60"
            >
              {/* Cantoneira Laranja da Marca MundoLogística */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#ff3d03] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#ff3d03] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Foto Real do Especialista com Borda Laranja */}
                <div className="relative mb-5 mx-auto w-32 h-32 sm:w-36 sm:h-36">
                  <img
                    src={spec.avatar}
                    alt={spec.name}
                    width={144}
                    height={144}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full rounded-2xl object-cover object-center border-2 border-orange-100 group-hover:border-[#ff3d03] shadow-md group-hover:shadow-lg transition-all"
                  />
                  <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white" />
                </div>

                {/* Nome e Cargo */}
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-gray-950 group-hover:text-[#df3500] transition-colors leading-snug mb-1">
                    {spec.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-sans font-semibold text-gray-700 mb-2">
                    {spec.role}
                  </p>
                  <p className="text-[11px] font-mono-tech text-[#df3500] font-bold bg-orange-50 px-2.5 py-1 rounded-lg inline-block border border-orange-100">
                    {spec.companyOrExperience}
                  </p>
                </div>
              </div>

              {/* Rodapé do Card */}
              <div className="pt-4 mt-5 border-t border-gray-100 flex items-center justify-center gap-1.5 text-[11px] font-mono-tech text-gray-500 font-semibold">
                <Award className="w-3.5 h-3.5 text-[#df3500]" />
                <span>Instrutor Homologado</span>
              </div>
            </div>
          ))}
        </div>

        {/* BOTÃO CTA DA 5ª DOBRA com Foco Óptico e Efeito Radar */}
        <div className="text-center pt-8 relative">
          {/* Spotlight suave atrás do botão */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-32 cta-spotlight-light pointer-events-none rounded-full" />

          <div className="relative inline-block">
            {/* Onda de Radar */}
            <div className="absolute inset-0 rounded-2xl bg-[#ff3d03]/35 radar-wave pointer-events-none" />

            <Link
              href="#proposta"
              className="relative inline-flex items-center justify-center gap-3 px-10 py-4 sm:px-12 sm:py-4.5 rounded-2xl text-sm sm:text-base font-heading font-black text-white bg-gradient-to-r from-[#ff3d03] to-[#df3500] hover:from-[#ff5722] hover:to-[#eb3b00] shadow-[0_10px_30px_rgba(255,61,3,0.35)] hover:shadow-[0_15px_40px_rgba(255,61,3,0.5)] hover:scale-105 active:scale-95 transition-all cursor-pointer border border-orange-300/40 uppercase tracking-wider shimmer-btn"
            >
              Quero receber uma proposta
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <span className="text-[11px] font-mono-tech text-gray-500 mt-3.5 block">
            Aulas gravadas e masterclasses ao vivo com quem lidera o mercado
          </span>
        </div>
      </div>
    </section>
  );
}

