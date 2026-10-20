'use client';

import { useState } from 'react';
import { Quote, Star, Building2, Play } from 'lucide-react';

const TESTIMONIALS = [
  {
    author: 'Alberto Rodrigues',
    role: 'Diretor de Logística',
    company: 'Yara Brasil',
    quote: 'A MundoLogística é a referência técnica mais sólida que temos no país. Capacitar nossos analistas e supervisores com este acervo elevou consideravelmente o nível das discussões estratégicas e a maturidade da nossa operação.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=75&fm=webp',
  },
  {
    author: 'Alexandre Faria',
    role: 'VP de Supply Chain',
    company: 'Dafiti',
    quote: 'A facilidade de ter cursos práticos ministrados por quem realmente está no campo de batalha, combinada com o LogGPT para tirar dúvidas diárias, trouxe uma agilidade inédita para o nosso time de operações e transporte.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=75&fm=webp',
  },
  {
    author: 'Carlos Jardim',
    role: 'Diretor de Supply Chain',
    company: 'Pfizer',
    quote: 'Em um setor altamente regulado e crítico como o farmacêutico, a profundidade técnica dos materiais da MundoLogística é indispensável para mantermos nossa equipe atualizada com as melhores práticas mundiais.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=75&fm=webp',
  },
];

export default function SocialProof() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section data-theme="dark" className="py-28 bg-[#090d14] text-white border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ff3d03] bg-[#ff3d03]/10 border border-[#ff3d03]/30 px-3.5 py-1.5 rounded-full inline-block">
            Autoridade Comprovada
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 mb-4 tracking-tight">
            Validado por quem lidera as maiores operações
          </h2>
          <p className="text-gray-300 text-lg">
            Mais de 400 corporações confiam na curadoria técnica da MundoLogística para formar seus quadros de especialistas.
          </p>
        </div>

        {/* Player de Vídeo Estilo Cinema com Façade de Alta Performance (Zero Third-Party Cookies & 500KB+ JS Saving) */}
        <div className="max-w-4xl mx-auto mb-20 relative">
          <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-[#ff3d03]/50 to-orange-600/30 blur-2xl opacity-40 pointer-events-none" />
          
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:via-black/20 transition-all duration-300" />

                {/* Botão Play Neon Pulsante */}
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#ff3d03] to-[#ff5c2b] flex items-center justify-center text-white shadow-[0_0_50px_rgba(255,61,3,0.7)] group-hover:scale-110 group-hover:shadow-[0_0_70px_rgba(255,61,3,0.9)] transition-all duration-300 border border-orange-300/40">
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current translate-x-0.5" />
                  </div>
                  <div className="text-center">
                    <span className="text-sm sm:text-base font-bold text-white tracking-wide block drop-shadow-md">
                      Assistir Apresentação Corporativa
                    </span>
                    <span className="text-xs font-mono text-gray-300 bg-black/60 px-3 py-1 rounded-full border border-white/10 mt-1.5 inline-block">
                      Vídeo Exclusivo • 3 min
                    </span>
                  </div>
                </div>
              </button>
            )}
          </div>
        </div>

        {/* Grid de Depoimentos em Dark Glass */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed italic mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <img
                  src={t.avatar}
                  alt={t.author}
                  width={48}
                  height={48}
                  loading="lazy"
                  decoding="async"
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#ff3d03]/60 shadow-md shadow-[#ff3d03]/20"
                />
                <div>
                  <h3 className="font-bold text-white text-sm">{t.author}</h3>
                  <p className="text-xs text-gray-300">{t.role}</p>
                  <p className="text-xs font-mono font-bold text-[#ff3d03] flex items-center gap-1 mt-0.5">
                    <Building2 className="w-3 h-3" />
                    {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
