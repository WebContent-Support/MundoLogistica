'use client';

const PARTNERS = [
  { name: 'Ambev', logo: '/partners/ambev.svg' },
  { name: 'DHL Supply Chain', logo: '/partners/dhl.svg' },
  { name: 'Mercado Livre', logo: '/partners/mercado-livre.svg' },
  { name: 'Nestlé', logo: '/partners/nestle.svg' },
  { name: 'Pfizer', logo: '/partners/pfizer.svg' },
  { name: 'Suzano', logo: '/partners/suzano.svg' },
  { name: 'Natura', logo: '/partners/natura.svg' },
  { name: 'Yara Brasil', logo: '/partners/yara.svg' },
  { name: 'Dafiti', logo: '/partners/dafiti.svg' },
];

export default function Hero() {
  return (
    <section
      data-theme="dark"
      className="relative overflow-hidden pt-12 pb-14 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-16 bg-[#06080d] border-b border-white/10"
    >
      {/* Imagem de Fundo de Alta Resolução com Overlay Elegante */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Operações de Logística e Supply Chain"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105 transition-transform duration-1000"
        />
        {/* Camadas de gradiente para contraste e legibilidade impecáveis */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06080d] via-[#06080d]/80 to-[#06080d]/90" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-[#ff3d03]/20 via-[#ff3d03]/5 to-transparent blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Bloco Central de Copy - Sem altura exagerada (não ocupa a tela inteira) */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge Luminous */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel border border-[#ff3d03]/30 shadow-lg shadow-[#ff3d03]/10 mb-6 hover:border-[#ff3d03]/60 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff3d03] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff3d03]" />
            </span>
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-white">
              Capacitação Corporativa B2B • MundoLogística
            </span>
          </div>

          {/* Headline Monumental Exata do Cliente */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] mb-6 text-white">
            Sua equipe está preparada para os{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3d03] via-[#ff6a3d] to-[#ff9e7a] text-glow">
              próximos desafios
            </span>{' '}
            da logística?
          </h1>

          {/* Subtítulo Executivo de Apoio */}
          <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
            O ecossistema definitivo para desenvolver competências, acelerar a maturidade das operações e formar lideranças em Supply Chain com os maiores diretores do setor.
          </p>

          {/* Destaques Rápidos em Badges Discretas (sem CTA invasivo nesta dobra) */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-gray-300 pt-2 pb-8 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff3d03]" />
              <span>Cursos técnicos com diretores atuantes</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff3d03]" />
              <span>LogGPT IA especialista liberada</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff3d03]" />
              <span>Dashboard de telemetria para o líder</span>
            </div>
          </div>
        </div>

        {/* Faixa de Grandes Clientes com Marquee Infinito */}
        <div className="pt-8">
          <p className="text-center font-mono text-[11px] uppercase tracking-widest text-gray-400 mb-5">
            Empresas que capacitam suas equipes com a MundoLogística
          </p>

          <div className="relative w-full overflow-hidden">
            {/* Gradientes laterais de fade */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[#06080d] to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[#06080d] to-transparent z-10" />

            <div className="flex gap-4 sm:gap-6 w-max marquee-track animate-marquee py-2">
              {[...PARTNERS, ...PARTNERS].map((company, index) => (
                <div
                  key={`${company.name}-${index}`}
                  className="flex items-center justify-center px-6 sm:px-8 py-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#ff3d03]/40 hover:bg-white/[0.06] transition-all duration-300 shrink-0 select-none"
                  title={company.name}
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    width={110}
                    height={28}
                    decoding="async"
                    className="h-6 sm:h-7 w-auto max-w-[100px] sm:max-w-[120px] object-contain opacity-60 hover:opacity-100 transition-opacity brightness-0 invert"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
