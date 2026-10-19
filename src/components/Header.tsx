'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      // Amostragem na altura do centro do cabeçalho (~50px do topo)
      const sampleY = 50;
      const elements = document.querySelectorAll<HTMLElement>('[data-theme]');

      let detectedTheme: 'light' | 'dark' = 'dark';
      for (let i = 0; i < elements.length; i++) {
        const rect = elements[i].getBoundingClientRect();
        if (rect.top <= sampleY && rect.bottom >= sampleY) {
          const theme = elements[i].getAttribute('data-theme') as 'light' | 'dark';
          if (theme) {
            detectedTheme = theme;
            break;
          }
        }
      }
      setCurrentTheme(detectedTheme);
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const isDark = currentTheme === 'dark';

  return (
    <header className="sticky top-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 pb-2 transition-all">
      <div className="max-w-7xl mx-auto">
        {/* Cápsula Flutuante Única com Fundo Transparente Frosted Glass & Backdrop-Blur para TODAS as seções */}
        <div className="rounded-2xl px-5 py-3 flex items-center justify-between backdrop-blur-xl sm:backdrop-blur-2xl bg-neutral-900/[0.08] dark:bg-black/20 border border-neutral-400/20 shadow-xl shadow-black/5 transition-all duration-300 ease-in-out">
          
          {/* Logo Oficial MundoLogística com troca de cor perfeitamente alinhada (0px de mudança de tamanho) */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative py-1 h-8 sm:h-9 w-[158px] sm:w-[178px] flex items-center">
              {/* Versão Branca para seções escuras */}
              <img
                src="/logo-white.png"
                alt="MundoLogística"
                className={`absolute left-0 top-1/2 -translate-y-1/2 h-8 sm:h-9 w-auto object-contain transition-opacity duration-300 group-hover:scale-105 ${
                  isDark
                    ? 'opacity-100 pointer-events-auto'
                    : 'opacity-0 pointer-events-none'
                }`}
              />
              {/* Versão Escura Oficial para seções claras */}
              <img
                src="/logo-oficial.png"
                alt="MundoLogística"
                className={`absolute left-0 top-1/2 -translate-y-1/2 h-8 sm:h-9 w-auto object-contain transition-opacity duration-300 group-hover:scale-105 ${
                  !isDark
                    ? 'opacity-100 pointer-events-auto'
                    : 'opacity-0 pointer-events-none'
                }`}
              />
            </div>

            {/* Divisor & Subtítulo Corporativo */}
            <div
              className={`hidden sm:flex flex-col border-l pl-3 transition-colors duration-300 ${
                isDark ? 'border-white/15' : 'border-neutral-400/30'
              }`}
            >
              <span
                className={`text-[10px] font-mono uppercase tracking-widest transition-colors duration-300 ${
                  isDark ? 'text-gray-400' : 'text-gray-600 font-bold'
                }`}
              >
                Corporate Suite
              </span>
              <span className="text-[9px] font-mono text-[#ff3d03] font-bold">
                B2B Plataforma
              </span>
            </div>
          </Link>

          {/* Navegação Desktop sem background interno (100% transparente sobre o blur da cápsula) */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="#ecossistema"
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 ${
                isDark
                  ? 'text-gray-300 hover:text-white hover:bg-white/10'
                  : 'text-gray-700 hover:text-gray-950 hover:bg-black/5'
              }`}
            >
              Ecossistema
            </Link>
            <Link
              href="#cursos"
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 flex items-center gap-1.5 ${
                isDark
                  ? 'text-gray-300 hover:text-white hover:bg-white/10'
                  : 'text-gray-700 hover:text-gray-950 hover:bg-black/5'
              }`}
            >
              Vitrine de Cursos
              <span
                className={`px-1.5 py-0.5 text-[9px] font-mono font-bold rounded transition-colors duration-300 ${
                  isDark
                    ? 'bg-[#ff3d03]/20 text-[#ff3d03] border border-[#ff3d03]/40'
                    : 'bg-orange-100 text-[#ff3d03] border border-orange-300'
                }`}
              >
                NOVO
              </span>
            </Link>
            <Link
              href="#loggpt"
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 flex items-center gap-1 ${
                isDark
                  ? 'text-gray-300 hover:text-white hover:bg-white/10'
                  : 'text-gray-700 hover:text-gray-950 hover:bg-black/5'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#ff3d03]" />
              LogGPT (IA)
            </Link>
            <Link
              href="#dashboard"
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 ${
                isDark
                  ? 'text-gray-300 hover:text-white hover:bg-white/10'
                  : 'text-gray-700 hover:text-gray-950 hover:bg-black/5'
              }`}
            >
              Dashboard RH
            </Link>
            <Link
              href="#planos"
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 ${
                isDark
                  ? 'text-gray-300 hover:text-white hover:bg-white/10'
                  : 'text-gray-700 hover:text-gray-950 hover:bg-black/5'
              }`}
            >
              Planos
            </Link>
            <Link
              href="#faq"
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 ${
                isDark
                  ? 'text-gray-300 hover:text-white hover:bg-white/10'
                  : 'text-gray-700 hover:text-gray-950 hover:bg-black/5'
              }`}
            >
              FAQ
            </Link>
          </nav>

          {/* CTA Header */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="#proposta"
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#ff3d03] to-[#ff5c2b] shadow-lg shadow-[#ff3d03]/30 hover:shadow-[#ff3d03]/60 transition-all duration-300 hover:scale-[1.02] flex items-center gap-2 border border-orange-400/30"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Solicitar Proposta B2B
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          </div>

          {/* Botão Mobile */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 transition-colors duration-200 focus:outline-none ${
                isDark
                  ? 'text-gray-300 hover:text-white'
                  : 'text-gray-700 hover:text-gray-950'
              }`}
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {mobileMenuOpen && (
          <div
            className={`lg:hidden mt-2 rounded-2xl p-5 space-y-3 animate-fade-in transition-all duration-300 backdrop-blur-2xl ${
              isDark
                ? 'bg-[#06080d]/90 border border-white/10 text-gray-200'
                : 'bg-white/95 border border-gray-200 shadow-2xl text-gray-800'
            }`}
          >
            <Link
              href="#ecossistema"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                isDark
                  ? 'text-gray-200 hover:text-[#ff3d03] hover:bg-white/5'
                  : 'text-gray-700 hover:text-[#ff3d03] hover:bg-gray-100'
              }`}
            >
              Ecossistema
            </Link>
            <Link
              href="#cursos"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                isDark
                  ? 'text-gray-200 hover:text-[#ff3d03] hover:bg-white/5'
                  : 'text-gray-700 hover:text-[#ff3d03] hover:bg-gray-100'
              }`}
            >
              Vitrine de Cursos
            </Link>
            <Link
              href="#loggpt"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                isDark
                  ? 'text-gray-200 hover:text-[#ff3d03] hover:bg-white/5'
                  : 'text-gray-700 hover:text-[#ff3d03] hover:bg-gray-100'
              }`}
            >
              LogGPT (IA Especialista)
            </Link>
            <Link
              href="#dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                isDark
                  ? 'text-gray-200 hover:text-[#ff3d03] hover:bg-white/5'
                  : 'text-gray-700 hover:text-[#ff3d03] hover:bg-gray-100'
              }`}
            >
              Dashboard do Gestor
            </Link>
            <Link
              href="#planos"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                isDark
                  ? 'text-gray-200 hover:text-[#ff3d03] hover:bg-white/5'
                  : 'text-gray-700 hover:text-[#ff3d03] hover:bg-gray-100'
              }`}
            >
              Planos Corporativos
            </Link>
            <Link
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                isDark
                  ? 'text-gray-200 hover:text-[#ff3d03] hover:bg-white/5'
                  : 'text-gray-700 hover:text-[#ff3d03] hover:bg-gray-100'
              }`}
            >
              Perguntas Frequentes
            </Link>
            <div className="pt-2">
              <Link
                href="#proposta"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white bg-[#ff3d03] hover:bg-[#e03502] transition-colors"
              >
                Solicitar Proposta para Equipe
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
