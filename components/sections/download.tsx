'use client'

import { motion } from 'framer-motion'
import QRCode from 'react-qr-code'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import { Download } from 'lucide-react'

const PLAY_STORE_URL =
  siteConfig.socialLinks.googlePlay || 'https://play.google.com/store/'

export function DownloadSection() {
  return (
    <section
      id="download"
      className="relative overflow-hidden py-20 md:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10" />
      <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mx-auto max-w-4xl"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="mb-12 text-center">
            <h2 className="mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-3xl font-bold text-transparent md:text-5xl">
              Siap Memulai Perjalanan Anda?
            </h2>

            <p className="text-lg text-foreground/70 md:text-xl">
              Unduh Jadwal Pintarku sekarang dan rasakan perbedaannya dalam
              mengelola waktu Anda.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeInUp}
            className="mb-12 flex flex-col items-center justify-center gap-6 sm:flex-row"
          >
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="gap-3 bg-gradient-to-r from-primary to-accent px-8 hover:shadow-2xl hover:shadow-primary/50"
              >
                <Download className="h-5 w-5" />
                Download di Google Play
              </Button>
            </a>

            <Button
              size="lg"
              variant="outline"
              disabled
              className="gap-3 opacity-50"
            >
              <Download className="h-5 w-5" />
              Coming Soon: App Store
            </Button>
          </motion.div>

          {/* QR & Info */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 items-center gap-10 md:grid-cols-2"
          >
            {/* QR Code */}
            <div className="flex justify-center">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-105"
              >
                <div className="rounded-3xl bg-white p-6 shadow-2xl">
                  <QRCode
                    value={PLAY_STORE_URL}
                    size={220}
                    bgColor="#FFFFFF"
                    fgColor="#000000"
                    level="H"
                  />
                </div>
              </a>
            </div>

            {/* Information */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">
                  Scan QR Code untuk Download
                </h3>

                <p className="text-foreground/70">
                  Scan QR Code menggunakan kamera smartphone Anda dan langsung
                  diarahkan ke halaman Google Play untuk mengunduh aplikasi
                  Jadwal Pintarku.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  'Gratis selamanya',
                  'Tidak ada iklan mengganggu',
                  'Sinkronisasi real-time',
                  'Akses offline',
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                      <span className="text-xs text-white">✓</span>
                    </div>

                    <span className="text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="rounded-xl bg-primary/10 p-5">
                  <p className="text-2xl font-bold text-primary">10K+</p>
                  <p className="text-sm text-foreground/60">
                    Pengguna Aktif
                  </p>
                </div>

                <div className="rounded-xl bg-accent/10 p-5">
                  <p className="text-2xl font-bold text-accent">5.0★</p>
                  <p className="text-sm text-foreground/60">Rating</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}