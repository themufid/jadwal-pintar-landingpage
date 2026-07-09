'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { personas } from '@/config/content'
import * as Icons from 'lucide-react'

export function AboutSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Untuk Siapa Aplikasi Ini?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Jadwal Pintarku dirancang untuk berbagai kalangan. Siapapun Anda, aplikasi ini siap membantu mengorganisir waktu Anda.
            </p>
          </motion.div>
        </motion.div>

        {/* Personas Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {personas.map((persona) => {
            const IconComponent = Icons[persona.icon as keyof typeof Icons] as any
            return (
              <motion.div
                key={persona.id}
                variants={fadeInUp}
                className="group relative p-6 rounded-xl bg-card hover:bg-primary/5 border border-border hover:border-primary/30 transition-all duration-300 cursor-pointer"
              >
                {/* Icon Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold mb-2">{persona.name}</h3>
                  <p className="text-foreground/70 text-sm mb-3">{persona.description}</p>

                  {/* Benefit Badge */}
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-bold text-lg mt-0.5">✓</span>
                    <p className="text-sm font-medium text-primary">{persona.benefit}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
