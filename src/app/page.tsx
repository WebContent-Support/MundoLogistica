import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Ecosystem from '@/components/Ecosystem';
import CourseShowcase from '@/components/CourseShowcase';
import LogGPTSection from '@/components/LogGPTSection';
import DashboardSection from '@/components/DashboardSection';
import RoiCalculator from '@/components/RoiCalculator';
import SocialProof from '@/components/SocialProof';
import PricingB2B from '@/components/PricingB2B';
import LeadForm from '@/components/LeadForm';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#06080d] text-white selection:bg-[#ff3d03] selection:text-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <Ecosystem />
        <CourseShowcase />
        <LogGPTSection />
        <DashboardSection />
        <RoiCalculator />
        <SocialProof />
        <PricingB2B />
        <LeadForm />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
