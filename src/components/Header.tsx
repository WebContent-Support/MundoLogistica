'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo MundoLogística */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-[#ff3d03] flex items-center justify-center text-white font-extrabold text-xl shadow-md shadow-[#ff3d03]/20 group-hover:scale-105 transition-transform">
              ML
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-gray-900 leading-none">
                Mundo<span className="text-[#ff3d03]">Logística</span>
              </span>
              <span className="text-[10px] font-semibold tracking-wider text-gray-500 uppercase mt-0.5">
                Plataforma Corporativa B2B
              </span>
            </div>
          </Link>

          {/* Navegação Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="#ecossistema"
              className="text-sm font-medium text-gray-600 hover:text-[#ff3d03] transition-colors"
            >
              A Plataforma
            </Link>
            <Link
              href="#cursos"
              className="text-sm font-medium text-gray-600 hover:text-[#ff3d03] transition-colors flex items-center gap-1.5"
            >
              Vitrine de Cursos
              <span className="px-2 py-0.5 text-[10px] font-bold bg-[#ff3d03]/10 text-[#ff3d03] rounded-full">
                Novo
              </span>
            </Link>
            <Link
              href="#loggpt"
              className="text-sm font-medium text-gray-600 hover:text-[#ff3d03] transition-colors flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#ff3d03]" />
              LogGPT (IA)
            </Link>
            <Link
              href="#dashboard"
              className="text-sm font-medium text-gray-600 hover:text-[#ff3d03] transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="#planos"
              className="text-sm font-medium text-gray-600 hover:text-[#ff3d03] transition-colors"
            >
              Planos
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-gray-600 hover:text-[#ff3d03] transition-colors"
            >
              FAQ
            </Link>
          </nav>

          {/* CTA Header */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              href="#proposta"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white bg-[#ff3d03] hover:bg-[#e03502] transition-all shadow-md shadow-[#ff3d03]/25 hover:shadow-lg hover:shadow-[#ff3d03]/35 hover:-translate-y-0.5"
            >
              Solicitar Proposta
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Botão Mobile */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-[#ff3d03] focus:outline-none"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-3">
          <Link
            href="#ecossistema"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#ff3d03] hover:bg-orange-50 rounded-lg"
          >
            A Plataforma
          </Link>
          <Link
            href="#cursos"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#ff3d03] hover:bg-orange-50 rounded-lg"
          >
            Vitrine de Cursos
          </Link>
          <Link
            href="#loggpt"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#ff3d03] hover:bg-orange-50 rounded-lg"
          >
            LogGPT (IA Especialista)
          </Link>
          <Link
            href="#dashboard"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#ff3d03] hover:bg-orange-50 rounded-lg"
          >
            Dashboard do Gestor
          </Link>
          <Link
            href="#planos"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#ff3d03] hover:bg-orange-50 rounded-lg"
          >
            Planos Corporativos
          </Link>
          <Link
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#ff3d03] hover:bg-orange-50 rounded-lg"
          >
            Perguntas Frequentes
          </Link>
          <div className="pt-2">
            <Link
              href="#proposta"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-base font-bold text-white bg-[#ff3d03] hover:bg-[#e03502]"
            >
              Solicitar Proposta para Equipe
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
