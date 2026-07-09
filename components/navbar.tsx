'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Download } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { Button } from '@/components/ui/button'
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/jadwal-pintarku.png"
            alt="Jadwal Pintarku"
            width={40}
            height={40}
            className="rounded-lg"
          />

  <span className="font-bold text-lg hidden sm:inline text-foreground">
    {siteConfig.name}
  </span>
</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button + Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <a href={siteConfig.socialLinks.googlePlay} target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-primary to-accent"
              >
                <Download className="w-4 h-4" />
                Download
              </Button>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href={siteConfig.socialLinks.googlePlay} target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent mt-4"
              >
                <Download className="w-4 h-4" />
                Download di Google Play
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
