import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import PerspectiveSection from '@/components/PerspectiveSection';
import NippySection from '@/components/NippySection';
import CommunitySection from '@/components/CommunitySection';
import InfrastructureSection from '@/components/InfrastructureSection';
import EcosystemSection from '@/components/EcosystemSection';
import FutureSection from '@/components/FutureSection';
import UalaSection from '@/components/UalaSection';

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen font-sans">
      <HeroSection />
      <ProblemSection />
      <PerspectiveSection />
      <NippySection />
      <CommunitySection />
      <InfrastructureSection />
      <EcosystemSection />
      <UalaSection />
      <FutureSection />
    </div>
  );
};

export default Index;