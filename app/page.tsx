import { Nav } from '@/components/nav'
import { Hero } from '@/components/hero'
import { SocialProof } from '@/components/social-proof'
import { Features } from '@/components/features'
import { Services } from '@/components/services'
import { Portfolio } from '@/components/portfolio'
import { Testimonials } from '@/components/testimonials'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <SocialProof />
      <Features />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

