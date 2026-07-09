'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-12">Last updated: July 2026</p>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">1. Introduction</h2>
              <p className="mb-4">
                Jadwal Pintarku (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;, or the &quot;Company&quot;) operates the Jadwal Pintarku mobile application (the &quot;App&quot;). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our service and the choices you have associated with that data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">2. Information Collection and Use</h2>
              <p className="mb-4">We collect several different types of information for various purposes to provide and improve our Service to you.</p>
              
              <h3 className="text-xl font-semibold mb-2 text-accent">2.1 Types of Data Collected:</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Personal Information: Name, email address, phone number, postal address, profile information</li>
                <li>Usage Data: Information about how you use the App (features accessed, time spent, interactions)</li>
                <li>Device Information: Device type, operating system version, unique device identifiers, device settings</li>
                <li>Location Data: Approximate location based on IP address (with your consent)</li>
                <li>Calendar Data: Your schedule, events, and calendar preferences (only with explicit permission)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">3. Use of Data</h2>
              <p className="mb-4">Jadwal Pintarku uses the collected data for various purposes:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features of our App</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so we can improve our Service</li>
                <li>To monitor the usage of our Service</li>
                <li>To detect, prevent, and address technical and security issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">4. Security of Data</h2>
              <p className="mb-4">
                The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">5. Changes to This Privacy Policy</h2>
              <p className="mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date at the top of this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">6. Contact Us</h2>
              <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Email: jadwal.hinaitech.com</li>
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
