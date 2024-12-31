import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const projects = [
  {
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: '/images/ecommerce.webp',
  },
  {
    title: 'Mobile Banking App',
    category: 'Mobile Development',
    image: '/images/mobile-banking.webp',
  },
  {
    title: 'Marketing Dashboard',
    category: 'UI/UX Design',
    image: '/images/dashboard.svg',
  },
  {
    title: 'Social Media Campaign',
    category: 'Digital Marketing',
    image: '/images/social-media-marketing.svg',
  },
]

export function Portfolio() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Latest Work</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore our recent projects and see how we&apos;ve helped businesses achieve their digital goals.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <Badge variant="secondary">{project.category}</Badge>
                  <h3 className="mt-2 text-lg font-semibold">{project.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

