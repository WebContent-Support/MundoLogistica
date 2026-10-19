'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight, Sparkles, Flame } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 pb-2 transition-all">
      <div className="max-w-7xl mx-auto">
        <div className="glass-panel rounded-2xl px-5 py-3 flex items-center justify-between border border-white/10 shadow-2xl shadow-black/80">
          {/* Logo MundoLogística */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff3d03] to-[#e03502] flex items-center justify-center text-white font-black text-xl shadow-lg shadow-[#ff3d03]/40 group-hover:scale-105 transition-transform duration-300">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#06080d]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-white leading-none">
                Mundo<span className="text-[#ff3d03]">Logística</span>
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mt-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff3d03]" />
                Corporate Suite
              </span>
            </div>
          </Link>

          {/* Navegação Desktop */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] p-1.5 rounded-xl border border-white/5">
            <Link
              href="#ecossistema"
              className="px-3.5 py-1.5 text-xs font-semibold text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
            >
              Ecossistema
            </Link>
            <Link
              href="#cursos"
              className="px-3.5 py-1.5 text-xs font-semibold text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all flex items-center gap-1.5"
            >
              Vitrine de Cursos
              <span className="px-1.5 py-0.5 text-[9px] font-mono font-bold bg-[#ff3d03]/20 text-[#ff3d03] border border-[#ff3d03]/40 rounded">
                NOVO
              </span>
            </Link>
            <Link
              href="#loggpt"
              className="px-3.5 py-1.5 text-xs font-semibold text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#ff3d03]" />
              LogGPT
            </Link>
            <Link
              href="#dashboard"
              className="px-3.5 py-1.5 text-xs font-semibold text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
            >
              Dashboard RH
            </Link>
            <Link
              href="#planos"
              className="px-3.5 py-1.5 text-xs font-semibold text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
            >
              Planos
            </Link>
            <Link
              href="#faq"
              className="px-3.5 py-1.5 text-xs font-semibold text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
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
              className="p-2 text-gray-300 hover:text-white focus:outline-none"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 glass-panel-glow rounded-2xl p-5 space-y-3 animate-fade-in border border-white/10">
            <Link
              href="#ecossistema"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-gray-200 hover:text-[#ff3d03] hover:bg-white/5 rounded-lg"
            >
              A Plataforma
            </Link>
            <Link
              href="#cursos"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-gray-200 hover:text-[#ff3d03] hover:bg-white/5 rounded-lg"
            >
              Vitrine de Cursos
            </Link>
            <Link
              href="#loggpt"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-gray-200 hover:text-[#ff3d03] hover:bg-white/5 rounded-lg"
            >
              LogGPT (IA Especialista)
            </Link>
            <Link
              href="#dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-gray-200 hover:text-[#ff3d03] hover:bg-white/5 rounded-lg"
            >
              Dashboard do Gestor
            </Link>
            <Link
              href="#planos"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-gray-200 hover:text-[#ff3d03] hover:bg-white/5 rounded-lg"
            >
              Planos Corporativos
            </Link>
            <Link
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-gray-200 hover:text-[#ff3d03] hover:bg-white/5 rounded-lg"
            >
              Perguntas Frequentes
            </Link>
            <div className="pt-2">
              <Link
                href="#proposta"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white bg-[#ff3d03] hover:bg-[#e03502]"
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
