import Image from 'next/image'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "Working with Webguru.oi transformed our digital presence. Their team's expertise and dedication exceeded our expectations.",
    author: "Sarah Johnson",
    role: "CEO, TechStart",
    image: "/images/testimo-01.jpeg"
  },
  {
    quote: "The level of creativity and technical skill they brought to our project was impressive. Highly recommended!",
    author: "Michael Chen",
    role: "Marketing Director, InnovateCo",
    image: "/images/testimo-02.jpeg"
  },
  {
    quote: "Their strategic approach to digital solutions helped us achieve our business goals faster than we imagined.",
    author: "Emma Davis",
    role: "Product Manager, GrowthLabs",
    image: "/images/testimo-03.jpeg"
  },
]

export function Testimonials() {
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Clients Say</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Don&apos;t just take our word for it - hear from some of our satisfied clients.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="bg-white">
              <CardHeader>
                <Quote className="h-8 w-8 text-[#006B5E]" />
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{testimonial.quote}</p>
                <div className="mt-6 flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

