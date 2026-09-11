import ExperienceGallery from '@/components/ExperienceGallery';
import FAQ from '@/components/FAQ';
import FeaturedTalk from '@/components/FeaturedTalk';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LiveInCast from '@/components/LiveInCast';
import Manifesto from '@/components/Manifesto';
import MentalModel from '@/components/MentalModel';
import MissionSection from '@/components/MissionSection';
import PerceptionMoment from '@/components/PerceptionMoment';
import ProblemSection from '@/components/ProblemSection';
import ProcessTimeline from '@/components/ProcessTimeline';
import ProposalForm from '@/components/ProposalForm';
import SiteEffects from '@/components/SiteEffects';
import SpeakerBio from '@/components/SpeakerBio';
import TalksSection from '@/components/TalksSection';
import TransformationSection from '@/components/TransformationSection';
import WhatsAppFab from '@/components/WhatsAppFab';
import { structuredData } from './structured-data';

/**
 * A página é uma jornada, não uma pilha de seções:
 * quem é ele → ele entende meu problema → por que a abordagem é diferente →
 * que resultado gera → qual palestra → ele tem autoridade → como funciona →
 * minhas objeções → falar com ele.
 *
 * O ritmo alterna escuro/claro de propósito: impacto → respiro → conteúdo →
 * imagem → prova → impacto → conversão.
 */
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <a className="skip-link" href="#main">
        Ir para o conteúdo
      </a>

      <Header />

      <main id="main">
        <span id="top" />

        <Hero />
        <ProblemSection />
        <Manifesto />
        <TransformationSection />
        <MentalModel />
        <PerceptionMoment />
        <FeaturedTalk />
        <TalksSection />
        <ExperienceGallery />
        <MissionSection />
        <SpeakerBio />
        <LiveInCast />
        <ProcessTimeline />
        <FAQ />
        <FinalCTA />
        <ProposalForm />
      </main>

      <Footer />
      <WhatsAppFab />
      <SiteEffects />
    </>
  );
}
