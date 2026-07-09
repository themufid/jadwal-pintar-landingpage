'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { floatingAnimation } from '@/lib/animations'

export function PhoneMockup() {
  return (
    <motion.div
      variants={floatingAnimation}
      initial="initial"
      animate="animate"
      className="relative w-64 h-auto"
    >
      <div className="relative">
        {/* Phone Frame */}
        <div className="relative bg-black rounded-[3rem] overflow-hidden shadow-2xl border-[10px] border-black w-full">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-b-3xl z-10" />

          {/* Screen Content */}
          <div className="relative bg-gradient-to-b from-indigo-600 to-purple-600 aspect-square overflow-hidden">
            <Image
              src="/images/phone-mockup.png"
              alt="Jadwal Pintarku App"
              width={280}
              height={560}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black rounded-full" />
        </div>
      </div>
    </motion.div>
  )
}
