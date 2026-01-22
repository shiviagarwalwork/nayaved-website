'use client';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--parchment-light)] to-[var(--parchment)]">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[var(--ink-black)] mb-4" style={{fontFamily: 'Georgia, serif'}}>
            Privacy Policy
          </h1>
          <p className="text-[var(--ink-brown)]">Last updated: January 21, 2026</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[var(--palm-leaf)]">
          <div className="prose prose-lg max-w-none text-[var(--ink-brown)]">

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[var(--ink-black)] mb-4">Introduction</h2>
              <p>
                Welcome to NayaVed AI ("we," "our," or "us"). We are committed to protecting your privacy and personal information.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our
                mobile application and website (collectively, the "Services").
              </p>
              <p className="mt-4">
                Please read this Privacy Policy carefully. By using our Services, you agree to the collection and use of
                information in accordance with this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[var(--ink-black)] mb-4">Information We Collect</h2>

              <h3 className="text-xl font-semibold text-[var(--ink-black)] mt-6 mb-3">Personal Information</h3>
              <p>We may collect the following types of personal information:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Health Information:</strong> Dosha assessment responses, symptoms you report, and health-related preferences</li>
                <li><strong>Images:</strong> Photos of tongue, eyes, skin, or nails that you voluntarily submit for AI analysis</li>
                <li><strong>Usage Data:</strong> How you interact with our app, features you use, and time spent on various sections</li>
                <li><strong>Device Information:</strong> Device type, operating system, and unique device identifiers</li>
              </ul>

              <h3 className="text-xl font-semibold text-[var(--ink-black)] mt-6 mb-3">Information Stored Locally</h3>
              <p>
                Most of your personal health data is stored locally on your device and is not transmitted to our servers unless
                you explicitly use features that require server processing (such as AI image analysis).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[var(--ink-black)] mb-4">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Provide personalized Ayurvedic recommendations based on your dosha and health profile</li>
                <li>Perform AI-powered analysis of images you submit (tongue, eyes, skin, nails)</li>
                <li>Generate personalized daily routines and dietary recommendations</li>
                <li>Improve our Services and develop new features</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send important notices about the app (with your consent)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[var(--ink-black)] mb-4">AI Image Analysis</h2>
              <p>
                When you use our diagnostic features (Jihva Pariksha, Netra Pariksha, Twak Pariksha, Nakha Pariksha),
                your images are:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Transmitted securely to our AI processing service (powered by Anthropic's Claude)</li>
                <li>Analyzed solely for the purpose of providing health insights</li>
                <li><strong>Not stored permanently</strong> on our servers after analysis</li>
                <li><strong>Not used to train AI models</strong></li>
                <li><strong>Not shared with third parties</strong> for marketing purposes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[var(--ink-black)] mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information, including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Encryption of data in transit using HTTPS/TLS</li>
                <li>Secure cloud infrastructure with access controls</li>
                <li>Regular security assessments and updates</li>
                <li>Limited employee access to personal data</li>
              </ul>
              <p className="mt-4">
                However, no method of transmission over the Internet or electronic storage is 100% secure.
                We cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[var(--ink-black)] mb-4">Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this
                Privacy Policy, unless a longer retention period is required by law.
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Local Data:</strong> Stored on your device until you delete the app or clear app data</li>
                <li><strong>Images:</strong> Deleted immediately after AI analysis is complete</li>
                <li><strong>Usage Analytics:</strong> Retained in anonymized form for up to 2 years</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[var(--ink-black)] mb-4">Third-Party Services</h2>
              <p>We may use the following third-party services:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Anthropic (Claude AI):</strong> For AI-powered diagnostic analysis</li>
                <li><strong>Vercel:</strong> For hosting our backend services</li>
                <li><strong>Expo:</strong> For app updates and notifications</li>
              </ul>
              <p className="mt-4">
                These third parties have their own privacy policies governing their use of your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[var(--ink-black)] mb-4">Your Rights</h2>
              <p>Depending on your location, you may have the following rights:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Opt-out:</strong> Opt out of certain data processing activities</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at the email address provided below.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[var(--ink-black)] mb-4">Children's Privacy</h2>
              <p>
                Our Services are not intended for children under 13 years of age. We do not knowingly collect personal
                information from children under 13. If you are a parent or guardian and believe your child has provided
                us with personal information, please contact us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[var(--ink-black)] mb-4">Medical Disclaimer</h2>
              <p className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                <strong>Important:</strong> NayaVed AI provides general wellness information based on Ayurvedic principles.
                Our Services are for educational purposes only and are not intended to diagnose, treat, cure, or prevent
                any disease. Always consult with a qualified healthcare provider before making any health-related decisions
                or changes to your diet or lifestyle.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[var(--ink-black)] mb-4">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy
                Policy periodically for any changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[var(--ink-black)] mb-4">Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
              <ul className="list-none mt-4 space-y-2">
                <li><strong>Email:</strong> privacy@nayaved.app</li>
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
