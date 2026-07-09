import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/about'
import { FeaturesSection } from '@/components/sections/features'
import { WhyChooseSection } from '@/components/sections/why-choose'
import { HowItWorksSection } from '@/components/sections/how-it-works'
import { TestimonialsSection } from '@/components/sections/testimonials'
import { FAQSection } from '@/components/sections/faq'
import { DownloadSection } from '@/components/sections/download'

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <WhyChooseSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FAQSection />
        <DownloadSection />
      </main>
      <Footer />
    </>
  )
}
