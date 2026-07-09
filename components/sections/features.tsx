'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { features } from '@/config/content'
import * as Icons from 'lucide-react'

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-t from-primary/5 to-transparent rounded-full blur-3xl" />

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
              Fitur-Fitur Unggulan
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Lengkap dengan semua fitur yang Anda butuhkan untuk mengelola jadwal dan meningkatkan produktivitas.
            </p>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {features.map((feature) => {
            const IconComponent = Icons[feature.icon as keyof typeof Icons] as any
            return (
              <motion.div
                key={feature.id}
                variants={fadeInUp}
                className="group relative p-5 rounded-lg bg-card hover:bg-primary/5 border border-border hover:border-primary/30 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mb-3 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                  <IconComponent className="w-5 h-5 text-primary" />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-sm mb-2 line-clamp-2">{feature.title}</h3>

                {/* Description */}
                <p className="text-xs text-foreground/60 line-clamp-2">{feature.description}</p>

                {/* Category badge */}
                {feature.category && (
                  <div className="mt-3 pt-3 border-t border-border">
                    <span className="inline-block text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {feature.category}
                    </span>
                  </div>
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
