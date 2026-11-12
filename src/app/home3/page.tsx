import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Ecosystem from '@/components/Ecosystem';
import DashboardSection from '@/components/DashboardSection';
import SocialProof from '@/components/SocialProof';
import SpecialistsSection from '@/components/SpecialistsSection';
import CoursesSection from '@/components/CoursesSection';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';
import './home3.css';

export default function Home3() {
  return (
    <div className="home2-theme home3-theme min-h-screen flex flex-col bg-[#06080d] text-white selection:bg-[#ff3d03] selection:text-white">
      <Header homeHref="/home3" />
      <main className="flex-1">
        {/* 1ª DOBRA - HEADER/CABEÇALHO */}
        <Hero />

        {/* 2ª DOBRA - ITENS DA PLATAFORMA */}
        <Ecosystem variant="home2" />

        {/* 3ª DOBRA - DASHBOARD DO LÍDER */}
        <DashboardSection />

        {/* 4ª DOBRA - PROVA SOCIAL */}
        <SocialProof />

        {/* 5ª DOBRA - ESPECIALISTAS */}
        <SpecialistsSection />

        {/* 6ª DOBRA - CURSOS */}
        <CoursesSection />

        {/* 7ª DOBRA - FORMULÁRIO */}
        <LeadForm />
      </main>
      {/* RODAPÉ */}
      <Footer />
    </div>
  );
}
