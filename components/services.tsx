import { Code2, Palette, LineChart, Smartphone } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.',
    icon: Code2,
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design solutions that enhance user experience and engagement.',
    icon: Palette,
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic marketing solutions to grow your online presence and reach.',
    icon: LineChart,
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: Smartphone,
  },
]

export function Services() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We provide comprehensive digital solutions to help your business grow and succeed in the digital age.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="bg-white/50 backdrop-blur-sm">
              <CardHeader>
                <service.icon className="h-8 w-8 text-[#006B5E]" />
                <CardTitle className="mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

