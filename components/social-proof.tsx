import Image from 'next/image'

const COMPANIES = [
  { name: 'Budget', logo: '/images/budget.png' },
  { name: 'Cargomatic', logo: '/images/cargomatic.png' },
  { name: 'Ripple', logo: '/images/ripple.png' },
  { name: 'Konux', logo: '/images/konux.png' },
  { name: 'FedEx', logo: '/images/fedex.png' },
  { name: 'Xerox', logo: '/images/xerox.png' },
]

export function SocialProof() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <p className="text-center text-lg font-semibold leading-8">
            More than <span className="text-[#006B5E]">80,000+</span> companies trust webguru.oi
          </p>
          <div className="mx-auto mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
            {COMPANIES.map((company) => (
              <Image
                key={company.name}
                src={company.logo}
                alt={company.name}
                width={158}
                height={48}
                className="max-h-12 w-full object-contain grayscale"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

