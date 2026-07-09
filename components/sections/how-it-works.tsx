'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { timelineSteps } from '@/config/content'
import * as Icons from 'lucide-react'

export function HowItWorksSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

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
              Cara Memulai
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Prosesnya mudah dan cepat. Dalam 6 langkah sederhana, Anda sudah bisa mulai menggunakan Jadwal Pintarku.
            </p>
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative"
        >
          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {timelineSteps.map((step, index) => {
              const IconComponent = Icons[step.icon as keyof typeof Icons] as any
              return (
                <motion.div
                  key={step.id}
                  variants={fadeInUp}
                  className="relative"
                >
                  {/* Step Circle */}
                  <div className="mb-6 flex flex-col items-center">
                    <div className="relative z-10 w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-4 border-4 border-background shadow-lg">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-secondary text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-foreground/60">{step.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
