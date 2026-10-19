import Link from 'next/link';
import { ArrowRight, BookOpen, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';

const PARTNER_LOGOS = [
  'Pfizer',
  'Dafiti',
  'Yara Brasil',
  'Ambev',
  'DHL Supply Chain',
  'Mercado Livre',
  'Suzano',
  'Natura'
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/50 via-white to-white pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Elementos visuais de fundo sutis */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-[#ff3d03]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-orange-400/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge de Destaque */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff3d03]/10 border border-[#ff3d03]/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#ff3d03] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#ff3d03]">
              Plataforma Corporativa B2B de Capacitação Logística
            </span>
          </div>

          {/* Headline Principal */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-950 tracking-tight leading-[1.15] mb-6">
            Acelere a eficiência da sua operação logística com{' '}
            <span className="relative inline-block text-[#ff3d03]">
              quem dita as tendências
              <svg
                className="absolute left-0 -bottom-2 w-full h-3 text-[#ff3d03]/30"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
              >
                <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>{' '}
            do setor.
          </h1>

          {/* Subtítulo persuasivo */}
          <p className="text-lg sm:text-xl text-gray-600 font-normal leading-relaxed mb-10 max-w-3xl mx-auto">
            Capacite seu time com cursos práticos ministrados pelos maiores executivos de mercado, acervo técnico consolidado em 18 anos de história e o <strong className="text-gray-900 font-semibold">LogGPT</strong> — a primeira inteligência artificial especialista em Supply Chain do Brasil.
          </p>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Link
              href="#proposta"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-[#ff3d03] hover:bg-[#e03502] transition-all shadow-xl shadow-[#ff3d03]/25 hover:shadow-[#ff3d03]/40 hover:-translate-y-0.5"
            >
              Solicitar Proposta para Equipe
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="#cursos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-gray-800 bg-white hover:bg-gray-50 border border-gray-200 transition-all hover:border-gray-300"
            >
              <BookOpen className="w-5 h-5 text-[#ff3d03]" />
              Conhecer Vitrine de Cursos
            </Link>
          </div>

          {/* Vantagens Rápidas */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 font-medium mb-16">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#ff3d03]" />
              <span>Painel de gestão para o RH</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#ff3d03]" />
              <span>Certificados reconhecidos pelo mercado</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#ff3d03]" />
              <span>Inteligência Artificial 24/7 inclusa</span>
            </div>
          </div>
        </div>

        {/* Banner de Prova Social / Clientes */}
        <div className="pt-8 border-t border-gray-100">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
            A escolha de capacitação de mais de 400 líderes e 10.000 profissionais em empresas como
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all">
            {PARTNER_LOGOS.map((company) => (
              <div
                key={company}
                className="text-base sm:text-lg font-black tracking-tighter text-gray-600 hover:text-[#ff3d03] transition-colors py-2"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
