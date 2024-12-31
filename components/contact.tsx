import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Contact() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get in Touch</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Ready to start your digital journey? Contact us today and let&apos;s discuss your project.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-[#006B5E]" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">info@webguru.oi</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="h-6 w-6 text-[#006B5E]" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="h-6 w-6 text-[#006B5E]" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-600">123 Digital Street, Tech City, 12345</p>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Input placeholder="Subject" />
            <Textarea placeholder="Your Message" className="min-h-[150px]" />
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  )
}

