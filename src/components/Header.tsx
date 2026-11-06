'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-theme]');
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const theme = entry.target.getAttribute('data-theme') as 'light' | 'dark';
            if (theme) {
              setCurrentTheme(theme);
            }
          }
        });
      },
      {
        rootMargin: '-60px 0px -75% 0px',
        threshold: 0,
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      observer.disconnect();
    };
  }, []);

  const isDark = currentTheme === 'dark';

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (mobileMenuOpen) setMobileMenuOpen(false);

    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({
        behavior: 'smooth',
      });

      if (window.history.pushState) {
        window.history.pushState(null, '', `#${targetId}`);
      }
    }
  };

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
                width={178}
                height={36}
                decoding="async"
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
                width={178}
                height={36}
                decoding="async"
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
                  isDark ? 'text-gray-300' : 'text-gray-700 font-bold'
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
            <a
              href="#plataforma"
              onClick={(e) => handleNavClick(e, 'plataforma')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
                isDark
                  ? 'text-gray-300 hover:text-white hover:bg-white/10'
                  : 'text-gray-700 hover:text-gray-950 hover:bg-black/5'
              }`}
            >
              A Plataforma
            </a>
            <a
              href="#dashboard"
              onClick={(e) => handleNavClick(e, 'dashboard')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
                isDark
                  ? 'text-gray-300 hover:text-white hover:bg-white/10'
                  : 'text-gray-700 hover:text-gray-950 hover:bg-black/5'
              }`}
            >
              Dashboard do Líder
            </a>
            <a
              href="#depoimentos"
              onClick={(e) => handleNavClick(e, 'depoimentos')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
                isDark
                  ? 'text-gray-300 hover:text-white hover:bg-white/10'
                  : 'text-gray-700 hover:text-gray-950 hover:bg-black/5'
              }`}
            >
              Depoimentos
            </a>
            <a
              href="#especialistas"
              onClick={(e) => handleNavClick(e, 'especialistas')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
                isDark
                  ? 'text-gray-300 hover:text-white hover:bg-white/10'
                  : 'text-gray-700 hover:text-gray-950 hover:bg-black/5'
              }`}
            >
              Especialistas
            </a>
            <a
              href="#cursos"
              onClick={(e) => handleNavClick(e, 'cursos')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
                isDark
                  ? 'text-gray-300 hover:text-white hover:bg-white/10'
                  : 'text-gray-700 hover:text-gray-950 hover:bg-black/5'
              }`}
            >
              Cursos
            </a>
          </nav>

          {/* CTA Header: Solicitar Proposta B2B com rolagem suave instantânea */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#proposta"
              onClick={(e) => handleNavClick(e, 'proposta')}
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#df3500] hover:bg-[#ff3d03] shadow-md shadow-[#df3500]/30 transition-all duration-300 hover:scale-[1.02] flex items-center gap-2 border border-orange-400/30 cursor-pointer active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Solicitar Proposta B2B
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>
          </div>

          {/* Botão Mobile */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 transition-colors duration-200 focus:outline-none cursor-pointer ${
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
            <a
              href="#plataforma"
              onClick={(e) => handleNavClick(e, 'plataforma')}
              className={`block px-3 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                isDark
                  ? 'text-gray-200 hover:text-[#ff3d03] hover:bg-white/5'
                  : 'text-gray-700 hover:text-[#ff3d03] hover:bg-gray-100'
              }`}
            >
              A Plataforma
            </a>
            <a
              href="#dashboard"
              onClick={(e) => handleNavClick(e, 'dashboard')}
              className={`block px-3 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                isDark
                  ? 'text-gray-200 hover:text-[#ff3d03] hover:bg-white/5'
                  : 'text-gray-700 hover:text-[#ff3d03] hover:bg-gray-100'
              }`}
            >
              Dashboard do Líder
            </a>
            <a
              href="#depoimentos"
              onClick={(e) => handleNavClick(e, 'depoimentos')}
              className={`block px-3 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                isDark
                  ? 'text-gray-200 hover:text-[#ff3d03] hover:bg-white/5'
                  : 'text-gray-700 hover:text-[#ff3d03] hover:bg-gray-100'
              }`}
            >
              Depoimentos
            </a>
            <a
              href="#especialistas"
              onClick={(e) => handleNavClick(e, 'especialistas')}
              className={`block px-3 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                isDark
                  ? 'text-gray-200 hover:text-[#ff3d03] hover:bg-white/5'
                  : 'text-gray-700 hover:text-[#ff3d03] hover:bg-gray-100'
              }`}
            >
              Especialistas
            </a>
            <a
              href="#cursos"
              onClick={(e) => handleNavClick(e, 'cursos')}
              className={`block px-3 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                isDark
                  ? 'text-gray-200 hover:text-[#ff3d03] hover:bg-white/5'
                  : 'text-gray-700 hover:text-[#ff3d03] hover:bg-gray-100'
              }`}
            >
              Cursos da Plataforma
            </a>
            <div className="pt-2">
              <a
                href="#proposta"
                onClick={(e) => handleNavClick(e, 'proposta')}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white bg-[#df3500] hover:bg-[#ff3d03] transition-colors cursor-pointer active:scale-95"
              >
                Solicitar Proposta para Equipe
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
