'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { whyChooseItems } from '@/config/content'
import { CheckCircle } from 'lucide-react'

export function WhyChooseSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16"
        >
          <motion.div variants={fadeInUp} className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mengapa Memilih Jadwal Pintarku?
            </h2>
            <p className="text-lg text-foreground/70">
              Kami berkomitmen memberikan solusi terbaik untuk manajemen waktu Anda dengan fitur canggih dan antarmuka yang intuitif.
            </p>
          </motion.div>
        </motion.div>

        {/* Checklist */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:max-w-4xl"
        >
          {whyChooseItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground/80 font-medium">{item}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
