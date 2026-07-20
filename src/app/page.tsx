import { HomeHero } from '@/components/home/HomeHero';
import { HomeIntroduction } from '@/components/home/HomeIntroduction';
import { SelectedWork } from '@/components/home/SelectedWork';
import { Capabilities } from '@/components/home/Capabilities';
import { CredibilityStrip } from '@/components/home/CredibilityStrip';
import { EngineeringPhilosophy } from '@/components/home/EngineeringPhilosophy';
import { HomeContactCTA } from '@/components/home/HomeContactCTA';

export default function Home() {
  return (
    <main id="main-content">
      <HomeHero />
      <HomeIntroduction />
      <SelectedWork />
      <Capabilities />
      <CredibilityStrip />
      <EngineeringPhilosophy />
      <HomeContactCTA />
    </main>
  );
}
