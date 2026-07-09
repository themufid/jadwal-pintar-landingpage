'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Terms &amp; Conditions</h1>
          <p className="text-muted-foreground mb-12">Last updated: July 2026</p>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By downloading, installing, and using the Jadwal Pintarku mobile application (&quot;App&quot;), you agree to be bound by these Terms &amp; Conditions. If you do not agree to these terms, please do not use the App.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">2. License to Use</h2>
              <p className="mb-4">
                We grant you a limited, non-exclusive, non-transferable, revocable license to use the App for your personal, non-commercial purposes. You may not:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Modify, adapt, translate, or create derivative works of the App</li>
                <li>Reverse engineer, decompile, or disassemble the App</li>
                <li>Rent, lease, or lend the App</li>
                <li>Use the App for any commercial purpose without our express written consent</li>
                <li>Use the App in any way that violates applicable laws or regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">3. User Content</h2>
              <p className="mb-4">
                You retain all rights to any content you create within the App (&quot;User Content&quot;). By using the App, you grant us the right to use, copy, modify, and display your User Content to improve our services and for debugging purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">4. Prohibited Conduct</h2>
              <p className="mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Harass, abuse, or threaten other users</li>
                <li>Upload, post, or transmit any harmful or malicious content</li>
                <li>Attempt to gain unauthorized access to the App or its systems</li>
                <li>Interfere with the App&apos;s operation or security</li>
                <li>Collect or track personal information of others without consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">5. Disclaimer of Warranties</h2>
              <p className="mb-4">
                THE APP IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR THAT ANY DEFECTS WILL BE CORRECTED.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">6. Limitation of Liability</h2>
              <p className="mb-4">
                IN NO EVENT SHALL JADWAL PINTARKU BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE APP.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">7. Termination</h2>
              <p className="mb-4">
                We may terminate or suspend your account and access to the App at any time, without prior notice or liability, for conduct that violates these Terms or is otherwise harmful to our users.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">8. Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right to modify these Terms at any time. Changes will be effective when posted to the App. Your continued use of the App constitutes your acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">9. Contact Us</h2>
              <p className="mb-4">If you have questions about these Terms &amp; Conditions, please contact us at:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Email: cs.hinaitech@gmail.com</li>
                <li>Support: https://jadwal.hinaitech.com/contact</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
