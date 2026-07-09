'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PhoneMockup } from '@/components/phone-mockup'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { siteConfig } from '@/config/site'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={fadeInUp} className="space-y-6 md:space-y-8">
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 w-fit"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">Solusi Penjadwalan Terbaik</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                Atur Jadwal Lebih <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Pintar</span>, Hidup Lebih Teratur.
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 text-balance max-w-lg">
                Aplikasi penjadwalan pintar yang membantu Anda mengelola waktu, tugas, dan aktivitas sehari-hari dengan lebih efisien dan produktif.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href={siteConfig.socialLinks.googlePlay} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="gap-2 bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:shadow-primary/50 w-full sm:w-auto"
                >
                  Download di Google Play
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 w-full sm:w-auto"
              >
                <Play className="w-4 h-4" />
                Pelajari Lebih Lanjut
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-bold text-white border-2 border-background"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-foreground/60">
                  <span className="font-semibold text-foreground">10K+</span> Pengguna
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-sm text-foreground/60">
                  <span className="font-semibold text-foreground">5.0</span> Rating
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Phone Mockup */}
          <motion.div
            variants={fadeInUp}
            className="hidden lg:flex justify-center items-center"
          >
            <PhoneMockup />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs text-foreground/50 uppercase tracking-widest">Scroll untuk melanjutkan</p>
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [2, 6, 2] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-foreground/50 rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
