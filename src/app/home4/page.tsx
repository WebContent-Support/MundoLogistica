'use client';

import { useState } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Ecosystem from '@/components/Ecosystem';
import DashboardSection from '@/components/DashboardSection';
import SocialProof from '@/components/SocialProof';
import SpecialistsSection from '@/components/SpecialistsSection';
import CoursesSection from '@/components/CoursesSection';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';
import './home4.css';

const CTA_BANNERS = [
  { label: 'CTA (1)', src: '/images/home4/banner-cta-1.webp' },
  { label: 'CTA (2)', src: '/images/home4/banner-cta-2.webp' },
  { label: 'CTA (3)', src: '/images/home4/banner-cta-3.webp' },
  { label: 'CTA (4)', src: '/images/home4/banner-cta-4.webp' },
];

const LARGE_BGS = [
  { label: 'Fundo (1)', src: '/images/home4/fundo-grande-1.webp' },
  { label: 'Fundo (2)', src: '/images/home4/fundo-grande-2.webp' },
];

export default function Home4() {
  const [panelOpen, setPanelOpen] = useState(false);
  const [heroBg, setHeroBg] = useState('/images/home4/fundo-grande-1.webp');
  const [gestorImg, setGestorImg] = useState('/images/home4/gestor2.webp');
  const [cta1Img, setCta1Img] = useState('/images/home4/banner-cta-1.webp');
  const [cta2Img, setCta2Img] = useState('/images/home4/banner-cta-2.webp');
  const [depoimentosBg, setDepoimentosBg] = useState('/images/home4/fundo-grande-1.webp');
  const [footerBg, setFooterBg] = useState<string | null>('/images/home4/fundo-grande-2.webp');

  return (
    <div className="home2-theme home3-theme home4-theme min-h-screen flex flex-col bg-[#06080d] text-white selection:bg-[#ff3d03] selection:text-white">
      <Header homeHref="/home4" />
      <main className="flex-1">
        {/* 1ª DOBRA - HEADER/CABEÇALHO */}
        <Hero variant="home4" gestorImage={gestorImg} heroBgImage={heroBg} />

        {/* 2ª DOBRA - ITENS DA PLATAFORMA */}
        <Ecosystem variant="home4" ctaBannerImage={cta1Img} />

        {/* 3ª DOBRA - DASHBOARD DO LÍDER */}
        <DashboardSection />

        {/* 4ª DOBRA - PROVA SOCIAL */}
        <SocialProof variant="home4" bgImage={depoimentosBg} />

        {/* 5ª DOBRA - ESPECIALISTAS */}
        <SpecialistsSection />

        {/* 6ª DOBRA - CURSOS */}
        <CoursesSection variant="home4" ctaBannerImage={cta2Img} />

        {/* 7ª DOBRA - FORMULÁRIO */}
        <LeadForm variant="home4" />
      </main>
      {/* RODAPÉ */}
      <Footer variant="home4" bgImage={footerBg} />

      {/* Painel Flutuante de Teste das Variações de Imagens (Exclusivo Home 4) */}
      <div className="fixed bottom-4 right-4 z-50">
        {panelOpen ? (
          <div className="bg-[#0b0f17]/95 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl w-80 text-xs space-y-3.5 text-white">
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <span className="font-mono font-bold uppercase tracking-wider text-[#ff3d03] flex items-center gap-1.5">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Testador de Imagens (Home 4)
              </span>
              <button
                type="button"
                onClick={() => setPanelOpen(false)}
                className="p-1 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Fundo do Hero */}
            <div>
              <span className="text-[10px] font-mono uppercase text-gray-400 block mb-1.5">
                Fundo do Hero (Cabeçalho):
              </span>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  ...LARGE_BGS,
                  { label: 'Original', src: '/images/hero-bg.jpg' },
                ].map((opt) => (
                  <button
                    key={opt.src}
                    type="button"
                    onClick={() => setHeroBg(opt.src)}
                    className={`px-2 py-1.5 rounded-lg font-mono text-[11px] border transition cursor-pointer ${
                      heroBg === opt.src
                        ? 'bg-[#ff3d03] border-[#ff3d03] text-white font-bold'
                        : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Gestor */}
            <div>
              <span className="text-[10px] font-mono uppercase text-gray-400 block mb-1.5">Foto do Gestor (Hero):</span>
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  { label: 'gestor2.webp (Novo)', src: '/images/home4/gestor2.webp' },
                  { label: 'gestor.webp (Atual)', src: '/images/gestor.webp' },
                ].map((opt) => (
                  <button
                    key={opt.src}
                    type="button"
                    onClick={() => setGestorImg(opt.src)}
                    className={`px-2.5 py-1.5 rounded-lg font-mono text-[11px] border transition cursor-pointer ${
                      gestorImg === opt.src
                        ? 'bg-[#ff3d03] border-[#ff3d03] text-white font-bold'
                        : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Banner CTA 1 (Ecossistema) */}
            <div>
              <span className="text-[10px] font-mono uppercase text-gray-400 block mb-1.5">
                Banner CTA 1 (&ldquo;Pronto para elevar...&rdquo;):
              </span>
              <div className="grid grid-cols-4 gap-1.5">
                {CTA_BANNERS.map((opt) => (
                  <button
                    key={opt.src}
                    type="button"
                    onClick={() => setCta1Img(opt.src)}
                    className={`px-2 py-1.5 rounded-lg font-mono text-[11px] border transition cursor-pointer ${
                      cta1Img === opt.src
                        ? 'bg-[#ff3d03] border-[#ff3d03] text-white font-bold'
                        : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Banner CTA 2 (Cursos) */}
            <div>
              <span className="text-[10px] font-mono uppercase text-gray-400 block mb-1.5">
                Banner CTA 2 (&ldquo;Explore o maior acervo...&rdquo;):
              </span>
              <div className="grid grid-cols-4 gap-1.5">
                {CTA_BANNERS.map((opt) => (
                  <button
                    key={opt.src}
                    type="button"
                    onClick={() => setCta2Img(opt.src)}
                    className={`px-2 py-1.5 rounded-lg font-mono text-[11px] border transition cursor-pointer ${
                      cta2Img === opt.src
                        ? 'bg-[#ff3d03] border-[#ff3d03] text-white font-bold'
                        : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Fundo Grande: Depoimentos */}
            <div>
              <span className="text-[10px] font-mono uppercase text-gray-400 block mb-1.5">
                Fundo Seção Depoimentos:
              </span>
              <div className="grid grid-cols-2 gap-1.5">
                {LARGE_BGS.map((opt) => (
                  <button
                    key={opt.src}
                    type="button"
                    onClick={() => setDepoimentosBg(opt.src)}
                    className={`px-2.5 py-1.5 rounded-lg font-mono text-[11px] border transition cursor-pointer ${
                      depoimentosBg === opt.src
                        ? 'bg-[#ff3d03] border-[#ff3d03] text-white font-bold'
                        : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Fundo Grande: Rodapé */}
            <div>
              <span className="text-[10px] font-mono uppercase text-gray-400 block mb-1.5">
                Fundo Rodapé (Footer):
              </span>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { label: 'Só Degradê', src: null },
                  ...LARGE_BGS,
                ].map((opt) => (
                  <button
                    key={opt.label}
                    type="button"
                    onClick={() => setFooterBg(opt.src)}
                    className={`px-2 py-1.5 rounded-lg font-mono text-[11px] border transition cursor-pointer ${
                      footerBg === opt.src
                        ? 'bg-[#ff3d03] border-[#ff3d03] text-white font-bold'
                        : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setPanelOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0b0f17]/90 hover:bg-[#0b0f17] text-white border border-[#ff3d03]/50 shadow-xl text-xs font-mono font-bold cursor-pointer transition"
          >
            <SlidersHorizontal className="w-4 h-4 text-[#ff3d03]" />
            <span>Alternar Variações de Imagens</span>
          </button>
        )}
      </div>
    </div>
  );
}
