import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Features() {
  return (
    <div className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Enterprise Design Teams<br />Build Robust Solutions
            </h2>
            <div className="mt-6 lg:max-w-xl">
              <p className="text-lg leading-8 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy eirmod tempor incidunt ut labore et dolore magna aliquypsum erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy eirmod tempor incidunt ut labore et dolore magna aliquypsum erat.
              </p>
              <div className="mt-8">
                <Button className="group">
                  Find out more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/digital-process-01.jpg"
                alt="Design process 1"
                width={400}
                height={300}
                className="rounded-lg object-cover"
              />
              <Image
                src="/images/digital-process-02.jpg"
                alt="Design process 2"
                width={400}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 -z-10 h-48 w-48 rounded-full bg-[#006B5E]/10" />
            <div className="absolute -top-6 -right-6 -z-10 h-48 w-48 rounded-full bg-[#006B5E]/10" />
          </div>
        </div>
      </div>
    </div>
  )
}

