import { Seo } from '@/components/Seo'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FloatingWhatsapp } from '@/components/layout/FloatingWhatsapp'
import { HeroSection } from '@/components/sections/HeroSection'
import { BusinessPillarsSection } from '@/components/sections/BusinessPillarsSection'
import { WegAuthoritySection } from '@/components/sections/WegAuthoritySection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { StoreSection } from '@/components/sections/StoreSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { TrustStrip } from '@/components/sections/TrustStrip'
import { TeamSection } from '@/components/sections/TeamSection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'

function App() {
  return (
    <>
      <Seo />
      <Header />
      <main>
        <HeroSection />
        <TrustStrip />
        <BusinessPillarsSection />
        <WegAuthoritySection />
        <ServicesSection />
        <StoreSection />
        <ProjectsSection />
        <TeamSection />
        <FinalCTASection />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  )
}

export default App
