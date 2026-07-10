'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmitted(true)
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    })

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
    setIsLoading(false)
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get in Touch</h1>
            <p className="text-xl text-muted-foreground">
              Have questions about Jadwal Pintarku? We&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-lg border border-border p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-accent/10 border border-accent rounded-lg">
                  <p className="text-accent font-semibold">✓ Message sent successfully!</p>
                  <p className="text-sm text-muted-foreground">We&apos;ll get back to you within 24 hours.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  {isLoading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-5">
              {/* Email */}
              <div className="flex gap-4 items-start rounded-xl border border-border bg-card p-5">
                <Mail className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email Support</h3>
                  <p className="text-muted-foreground">
                    cs.hinaitech@gmail.com
                  </p>
                  <p className="text-sm text-muted-foreground">
                    We typically respond within 24 hours.
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-start rounded-xl border border-border bg-card p-5">
                <Phone className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <p className="text-muted-foreground">
                    +62 821 4413 7914
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Monday – Friday | 09.00 AM – 06.00 PM (WIB)
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4 items-start rounded-xl border border-border bg-card p-5">
                <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Office Address</h3>
                  <p className="text-muted-foreground">
                    Jalan Trisnomaju III
                  </p>
                  <p className="text-muted-foreground">
                    Negerikaton, Pesawaran, Lampung, Indonesia
                  </p>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-border p-6">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Response Time
              </h3>

              <p className="text-muted-foreground text-sm leading-7">
                Our support team is committed to providing timely assistance. We
                usually reply to all inquiries within <strong>24 hours</strong> on
                business days. For urgent issues, please contact us via email or
                phone during our working hours.
              </p>
            </div>

            {/* Account Deletion */}
            <div className="rounded-xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20 p-6">
              <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-4">
                Account &amp; Data Deletion
              </h3>

              <p className="text-muted-foreground leading-7">
                If you would like to permanently delete your Jadwal Pintarku account
                and all associated data, please send your request using the contact
                form on this page or email us directly.
              </p>

              <div className="mt-6 space-y-5">

                <div>
                  <h4 className="font-semibold text-foreground">
                    Email Address
                  </h4>
                  <p className="text-muted-foreground">
                    cs.hinaitech@gmail.com
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground">
                    Email Subject
                  </h4>
                  <p className="text-muted-foreground">
                    Account Deletion Request
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Please include
                  </h4>

                  <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                    <li>Your full name</li>
                    <li>Your registered email address</li>
                    <li>Reason for deletion (optional)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Data that will be deleted
                  </h4>

                  <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                    <li>User account information</li>
                    <li>User profile information</li>
                    <li>Schedules and timetable data</li>
                    <li>Application settings and preferences</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground">
                    Processing Time
                  </h4>

                  <p className="text-muted-foreground">
                    Account deletion requests will be processed within
                    <strong> 7 business days</strong>.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground">
                    Data Retention
                  </h4>

                  <p className="text-muted-foreground leading-7">
                    Some information may be retained only when required by applicable
                    laws, legal obligations, fraud prevention, or security purposes.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Quick Links
              </h3>

              <div className="space-y-3">
                <a
                  href="/privacy-policy"
                  className="block text-primary hover:text-primary/80 transition-colors"
                >
                  → Privacy Policy
                </a>

                <a
                  href="/terms-conditions"
                  className="block text-primary hover:text-primary/80 transition-colors"
                >
                  → Terms &amp; Conditions
                </a>

                <a
                  href="/#faq"
                  className="block text-primary hover:text-primary/80 transition-colors"
                >
                  → Frequently Asked Questions
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
