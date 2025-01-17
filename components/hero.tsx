import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-[#006B5E]">
      <div className="absolute inset-0 bg-dots-pattern opacity-10" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-dots-pattern-large opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 pt-16 lg:px-8 lg:pt-0">
        <div className="flex min-h-screen flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative z-10 mx-auto max-w-2xl lg:mx-0 lg:max-w-none lg:pt-24 px-4 sm:px-6 lg:px-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Digital Creating Trends Lead the Changes
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy eirmod tempor incidunt ut labore et dolore magna aliquypsum erat, sed diam voluptua.
            </p>
            <div className="mt-8">
              <Button variant="default" className="group bg-white border border-green-600 text-[#006B5E] hover:bg-white/90 rounded-tr-2xl rounded-bl-2xl">
                See all case
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          <div className="relative lg:col-start-2">
            <Image
              src="/images/hero.svg"
              alt="Team collaboration"
              width={600}
              height={600}
              className="w-full rounded-lg object-cover"
              priority
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-white" style={{
        borderTopLeftRadius: '50% 100%',
        borderTopRightRadius: '50% 100%',
      }} />
    </div>
  )
}

