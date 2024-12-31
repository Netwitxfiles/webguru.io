"use client"

import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export function Nav() {
  const navItems = ['Works', 'About', 'News', 'Contact']

  return (
    <nav className="flex items-center justify-between p-6 lg:px-8 absolute top-0 left-0 right-0 z-50">
      <div className="flex lg:flex-1">
        <Link href="/" className="text-xl font-semibold text-white">
          Webguru.oi
        </Link>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden lg:flex lg:gap-x-12">
        {navItems.map((item) => (
          <Link
            key={item}
            href="/"
            className="text-sm font-semibold text-white hover:text-white/80"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href="/"
                  className="text-lg font-semibold hover:text-primary"
                >
                  {item}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

