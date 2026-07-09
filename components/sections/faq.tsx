'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { faqItems } from '@/config/content'
import { ChevronDown, Search } from 'lucide-react'

export function FAQSection() {
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const filteredFAQs = useMemo(() => {
    if (!searchTerm) return faqItems
    const term = searchTerm.toLowerCase()
    return faqItems.filter(
      (item) =>
        item.question.toLowerCase().includes(term) ||
        item.answer.toLowerCase().includes(term)
    )
  }, [searchTerm])

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="faq" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12"
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-6">
              Temukan jawaban untuk pertanyaan Anda tentang Jadwal Pintarku.
            </p>
          </motion.div>

          {/* Search Box */}
          <motion.div variants={fadeInUp} className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground/40" />
            <input
              type="text"
              placeholder="Cari pertanyaan..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </motion.div>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-3"
        >
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className="border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-colors"
              >
                <button
                  onClick={() => toggleExpanded(item.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors text-left"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{item.question}</h3>
                    <p className="text-xs text-foreground/40 mt-1">{item.category}</p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-primary transition-transform flex-shrink-0 ml-4 ${
                      expandedId === item.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Answer */}
                {expandedId === item.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="px-6 py-4 bg-muted/30 border-t border-border"
                  >
                    <p className="text-foreground/70 leading-relaxed">{item.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))
          ) : (
            <motion.div
              variants={fadeInUp}
              className="text-center py-8 text-foreground/60"
            >
              <p>Tidak ada pertanyaan yang cocok dengan pencarian Anda.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
