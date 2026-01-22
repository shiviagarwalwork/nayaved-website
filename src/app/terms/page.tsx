'use client';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--parchment-light)] to-[var(--parchment)]">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[var(--ink-black)] mb-4" style={{fontFamily: 'Georgia, serif'}}>
            Terms of Service
          </h1>
          <p className="text-[var(--ink-brown)]">Last updated: January 21, 2026</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[var(--palm-leaf)]">
          <div className="prose prose-lg max-w-none text-[var(--ink-brown)]">

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[var(--ink-black)] mb-4">1. Acceptance of Terms</h2>
              <p>
                Welcome to NayaVed AI. By accessing or using our mobile application and website (collectively, the "Services"),
                you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do
                not use our Services.
              </p>
              <p className="mt-4">
                We reserve the right to modify these Terms at any time. Your continued use of the Services after any
                changes constitutes your acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[var(--ink-black)] mb-4">2. Description of Services</h2>
              <p>
                NayaVed AI provides educational content and wellness information based on traditional Ayurvedic principles.
                Our Services include:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Dosha assessment questionnaires</li>
                <li>AI-powered analysis of tongue, eye, skin, and nail images (Pariksha diagnostics)</li>
                <li>Personalized daily routines (Dinacharya) and dietary recommendations</li>
                <li>Educational content about Ayurvedic practices and principles</li>
                <li>Access to traditional Ayurvedic texts and references (Charaka Samhita)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[var(--ink-black)] mb-4">3. Medical Disclaimer</h2>
              <p className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                <strong>IMPORTANT:</strong> NayaVed AI is NOT a medical device and is NOT intended to diagnose, treat, cure,
                or prevent any disease or health condition. The information provided through our Services is for
                educational and informational purposes only.
              </p>
              <p className="mt-4">
                You should always:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Consult with a qualified healthcare provider before making any health-related decisions</li>
                <li>Seek professional medical advice for any health concerns or symptoms</li>
                <li>Not rely solely on NayaVed AI for medical diagnosis or treatment decisions</li>
                <li>Continue any prescribed treatments or medications as directed by your healthcare provider</li>
              </ul>
              <p className="mt-4">
                The AI analysis features are experimental and should be considered as general wellness information,
                not medical diagnosis.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[var(--ink-black)] mb-4">4. User Accounts and Responsibilities</h2>
              <p>
                When using our Services, you agree to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Use the Services only for lawful purposes</li>
                <li>Not attempt to reverse engineer, decompile, or hack the Services</li>
                <li>Not upload malicious content, viruses, or harmful code</li>
                <li>Not use the Services to harass, abuse, or harm others</li>
                <li>Not submit images that contain inappropriate or illegal content</li>
                <li>Keep your account credentials secure and confidential</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[var(--ink-black)] mb-4">5. Image Submissions</h2>
              <p>
                When you submit images for AI analysis (tongue, eye, skin, nail diagnostics), you:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Confirm that you are submitting images of yourself or have authorization to submit images of the person depicted</li>
                <li>Grant us a limited license to process and analyze the images for the purpose of providing the Services</li>
                <li>Understand that images are processed by AI and deleted after analysis (not stored permanently)</li>
                <li>Acknowledge that AI analysis results are for informational purposes only</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[var(--ink-black)] mb-4">6. Intellectual Property</h2>
              <p>
                All content, features, and functionality of our Services, including but not limited to text, graphics,
                logos, icons, images, audio clips, and software, are the exclusive property of NayaVed AI or its licensors
                and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="mt-4">
                Traditional Ayurvedic knowledge, including references from classical texts like the Charaka Samhita,
                is part of humanity's shared heritage. Our presentation and interpretation of this knowledge, however,
                is proprietary.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[var(--ink-black)] mb-4">7. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>
                  NayaVed AI and its affiliates, officers, employees, agents, and licensors shall not be liable for any
                  indirect, incidental, special, consequential, or punitive damages arising out of or relating to your
                  use of the Services.
                </li>
                <li>
                  We are not liable for any health outcomes resulting from following or not following recommendations
                  provided through our Services.
                </li>
                <li>
                  Our total liability for any claims arising from your use of the Services shall not exceed the amount
                  you paid us, if any, in the twelve (12) months preceding the claim.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[var(--ink-black)] mb-4">8. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless NayaVed AI and its affiliates, officers, directors,
                employees, and agents from and against any claims, liabilities, damages, losses, costs, or expenses
                (including reasonable attorneys' fees) arising out of or relating to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Your use of the Services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of another party</li>
                <li>Any content you submit through the Services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[var(--ink-black)] mb-4">9. Third-Party Services</h2>
              <p>
                Our Services may contain links to or integrate with third-party websites or services. We are not
                responsible for the content, privacy policies, or practices of any third-party services. Your use of
                such services is at your own risk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[var(--ink-black)] mb-4">10. Termination</h2>
              <p>
                We reserve the right to suspend or terminate your access to the Services at any time, with or without
                cause, with or without notice. Upon termination, your right to use the Services will immediately cease.
              </p>
              <p className="mt-4">
                You may stop using the Services at any time by uninstalling the app and ceasing to access the website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[var(--ink-black)] mb-4">11. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of California,
                United States, without regard to its conflict of law provisions.
              </p>
              <p className="mt-4">
                Any disputes arising from these Terms or your use of the Services shall be resolved through binding
                arbitration in accordance with the rules of the American Arbitration Association.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[var(--ink-black)] mb-4">12. Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable or invalid, that provision shall be
                limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in
                full force and effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[var(--ink-black)] mb-4">13. Entire Agreement</h2>
              <p>
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and NayaVed AI
                regarding your use of the Services and supersede all prior agreements and understandings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[var(--ink-black)] mb-4">14. Contact Us</h2>
              <p>If you have any questions about these Terms of Service, please contact us:</p>
              <ul className="list-none mt-4 space-y-2">
                <li><strong>Email:</strong> legal@nayaved.com</li>
                <li><strong>Website:</strong> https://nayaved.com</li>
              </ul>
            </section>

          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <a
            href="/"
            className="inline-flex items-center text-[var(--copper-brown)] hover:text-[var(--henna)] font-medium"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
