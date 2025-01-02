"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const navItems = ['Works', 'About', 'News', 'Contact']

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex lg:flex-1">
            <Link href="/" className={`text-xl font-semibold ${
              isScrolled ? 'text-[#006B5E]' : 'text-white'
            }`}>
              Webguru.oi
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className={`text-sm font-semibold ${
                  isScrolled ? 'text-gray-700 hover:text-[#006B5E]' : 'text-white hover:text-white/80'
                }`}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={
                  isScrolled ? 'text-[#006B5E]' : 'text-white'
                }>
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item}
                      href={`/${item.toLowerCase()}`}
                      className="text-lg font-semibold hover:text-[#006B5E]"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

