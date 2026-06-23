import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesGrid } from "@/components/ServicesGrid";
import { AboutCompany } from "@/components/AboutCompany";
import { ProjectsPortfolio } from "@/components/ProjectsPortfolio";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans selection:bg-orange-500/30">
      <Header />
      <HeroSection />
      <ServicesGrid />
      <AboutCompany />
      <ProjectsPortfolio />
      <ContactForm />
      <Footer />
    </main>
  );
}
