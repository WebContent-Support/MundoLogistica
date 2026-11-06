'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Quote, Star, Building2, Play, ArrowRight } from 'lucide-react';

const TESTIMONIALS = [
  {
    author: 'Alexandre Faria',
    role: 'COO',
    company: 'Dafiti',
    quote:
      'A MundoLogística tem sido uma parceira valiosa, oferecendo conteúdos de alta qualidade e ferramentas inovadoras, como o LogGPT, que nos ajudam a aprimorar nossas operações...',
    avatar: '/instructors/alexandre-faria.jpg',
  },
  {
    author: 'Carlos Jardim',
    role: 'Executivo de Supply Chain',
    company: 'Pfizer',
    quote:
      'É uma leitura obrigatória para qualquer profissional de logística que deseje se manter atualizado e informado.',
    avatar: '/instructors/carlos-jardim.jpg',
  },
  {
    author: 'Alberto Rodrigues',
    role: 'Logística e Supply Chain',
    company: 'Yara Brasil',
    quote:
      'A plataforma oferece conteúdo de qualidade, sendo indispensável para profissionais que atuam e acompanham as tendências do setor logístico.',
    avatar: '/instructors/alberto-rodrigues.jpg',
  },
];

export default function SocialProof() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      id="depoimentos"
      data-theme="dark"
      className="py-24 bg-[#070a10] text-white border-t border-white/10 relative overflow-hidden"
    >
      {/* FOTOGRAFIA REAL DE FUNDO: Torre de Controle e Sala de Operações Logísticas */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/control-tower.jpg"
          alt="Torre de Controle Logística e Telemetria Operacional"
          className="w-full h-full object-cover opacity-65 object-center"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070a10] via-transparent to-[#070a10]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho da 4ª Dobra - Textos Oficiais */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono-tech font-bold uppercase tracking-widest text-[#ff3d03] bg-[#ff3d03]/10 border border-[#ff3d03]/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
            Depoimentos & Casos Reais
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight leading-tight">
            Veja o que profissionais que conhecem a plataforma, têm a dizer sobre <span className="font-editorial italic font-normal text-orange-400">essa experiência</span>:
          </h2>
        </div>

        {/* Player de Vídeo Institucional */}
        <div className="max-w-4xl mx-auto mb-16 relative">
          <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-[#ff3d03]/40 to-orange-600/20 blur-2xl opacity-40 pointer-events-none" />

          <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/15 aspect-video shadow-2xl bg-black">
            {isPlaying ? (
              <iframe
                src="https://www.youtube-nocookie.com/embed/Yho4vdRKQOs?autoplay=1&rel=0"
                title="Conheça a Plataforma MundoLogística"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            ) : (
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                className="relative w-full h-full flex items-center justify-center group cursor-pointer focus:outline-none"
                aria-label="Assistir apresentação da plataforma MundoLogística"
              >
                {/* Poster / Thumbnail HD */}
                <img
                  src="https://img.youtube.com/vi/Yho4vdRKQOs/maxresdefault.jpg"
                  alt="Apresentação MundoLogística"
                  width={1280}
                  height={720}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                />

                {/* Camada gradiente escura para contraste cinema */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent group-hover:via-black/20 transition-all duration-300" />

                {/* Botão Play Neon Pulsante */}
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#ff3d03] to-[#ff5c2b] flex items-center justify-center text-white shadow-[0_0_40px_rgba(255,61,3,0.7)] group-hover:scale-110 group-hover:shadow-[0_0_60px_rgba(255,61,3,0.9)] transition-all duration-300 border border-orange-300/40">
                    <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-current translate-x-0.5" />
                  </div>
                  <div className="text-center">
                    <span className="text-sm sm:text-base font-heading font-bold text-white tracking-wide block drop-shadow-md">
                      Assistir Apresentação da Plataforma
                    </span>
                    <span className="text-xs font-mono-tech text-gray-300 bg-black/60 px-3 py-1 rounded-full border border-white/10 mt-1.5 inline-block">
                      Vídeo Exclusivo • 3 min
                    </span>
                  </div>
                </div>
              </button>
            )}
          </div>
        </div>

        {/* Grid de Depoimentos em Dark Glass */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.author}
              className="glass-panel rounded-3xl p-8 border border-white/10 hover:border-[#ff3d03]/50 shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center gap-1 text-[#ff3d03] mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-[#ff3d03]/40 mb-3" />
                <p className="text-slate-100 font-editorial text-base sm:text-lg leading-relaxed italic mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <img
                  src={t.avatar}
                  alt={t.author}
                  width={52}
                  height={52}
                  loading="lazy"
                  decoding="async"
                  className="w-13 h-13 rounded-full object-cover border-2 border-[#ff3d03]/60 shadow-md shadow-[#ff3d03]/20"
                />
                <div>
                  <h3 className="font-heading font-bold text-white text-base">{t.author}</h3>
                  <p className="text-xs font-sans text-gray-300">{t.role}</p>
                  <p className="text-xs font-mono-tech font-bold text-[#ff3d03] flex items-center gap-1 mt-0.5">
                    <Building2 className="w-3 h-3" />
                    {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTÃO CTA DA 4ª DOBRA com Foco Óptico e Efeito Radar */}
        <div className="text-center relative pt-4">
          {/* Spotlight cônico atrás do botão */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-32 cta-spotlight pointer-events-none rounded-full" />

          <div className="relative inline-block">
            {/* Onda de Radar */}
            <div className="absolute inset-0 rounded-2xl bg-[#ff3d03]/40 radar-wave pointer-events-none" />

            <Link
              href="#proposta"
              className="relative inline-flex items-center justify-center gap-3 px-10 py-4 sm:px-12 sm:py-4.5 rounded-2xl text-sm sm:text-base font-heading font-black text-white bg-gradient-to-r from-[#ff3d03] to-[#df3500] hover:from-[#ff5722] hover:to-[#eb3b00] shadow-[0_0_40px_rgba(255,61,3,0.5)] hover:shadow-[0_0_60px_rgba(255,61,3,0.8)] hover:scale-105 active:scale-95 transition-all cursor-pointer border border-orange-300/40 uppercase tracking-wider shimmer-btn"
            >
              Solicite uma proposta
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <span className="text-[11px] font-mono-tech text-gray-400 mt-3.5 block">
            Junte-se às lideranças que já transformaram seus times
          </span>
        </div>
      </div>
    </section>
  );
}
