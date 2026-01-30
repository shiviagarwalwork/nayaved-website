'use client';

import { useState } from 'react';
import Image from 'next/image';
import ChatInterface from '@/components/ChatInterface';
import DoshaAssessment from '@/components/DoshaAssessment';
import KnowledgeBrowser from '@/components/KnowledgeBrowser';
import Homepage from '@/components/Homepage';
import PersonalizedPlan from '@/components/PersonalizedPlan';
import QuickStart from '@/components/QuickStart';
import AboutPage from '@/components/AboutPage';
import AppShowcase from '@/components/AppShowcase';
import ChakraIcon from '@/components/ChakraIcon';
import LotusLogo from '@/components/LotusLogo';
import FloatingAppBanner from '@/components/FloatingAppBanner';
import {
  MessageSquare,
  User,
  BookOpen,
  Menu,
  X,
  AlertCircle,
  Newspaper,
  CalendarCheck,
  Zap,
  Info,
  Smartphone,
  ChevronRight
} from 'lucide-react';

type Tab = 'app' | 'home' | 'quick' | 'chat' | 'dosha' | 'plan' | 'browser' | 'about';

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('app');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  const tabs = [
    { id: 'app' as Tab, label: 'NayaVed AI App', icon: Smartphone, description: 'AI-powered diagnostics' },
    { id: 'about' as Tab, label: 'About', icon: Info, description: 'Our mission & vision' },
    { id: 'quick' as Tab, label: 'Quick Fix', icon: Zap, description: 'Symptom solutions' },
    { id: 'plan' as Tab, label: 'My Daily Plan', icon: CalendarCheck, description: 'Personalized schedule' },
    { id: 'chat' as Tab, label: 'AI Advisor', icon: MessageSquare, description: 'Get personalized help' },
    { id: 'dosha' as Tab, label: 'Dosha Quiz', icon: User, description: 'Know your type' },
    { id: 'browser' as Tab, label: 'Texts', icon: BookOpen, description: 'Sacred manuscripts' },
    { id: 'home' as Tab, label: 'Ayurvedic Wisdom', icon: Newspaper, description: 'Ancient knowledge articles' }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Disclaimer Banner */}
      {showDisclaimer && (
        <div className="bg-[#FFF8E7] border-b border-[var(--palm-leaf)] px-4 py-3 relative z-10">
          <div className="max-w-7xl mx-auto flex items-start justify-between">
            <div className="flex items-start">
              <AlertCircle className="w-5 h-5 text-[var(--copper-brown)] mr-3 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-[var(--ink-brown)]">
                <strong className="text-[var(--copper-brown)]">Medical Disclaimer:</strong> This application provides educational information based on
                traditional Ayurvedic texts. It is not intended to diagnose, treat, cure, or prevent any disease.
                Always consult with a qualified healthcare professional.
              </div>
            </div>
            <button
              onClick={() => setShowDisclaimer(false)}
              className="ml-4 text-[var(--faded-ink)] hover:text-[var(--ink-black)] transition-colors p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Elegant Header */}
      <header className="relative bg-gradient-to-b from-white via-[var(--parchment-light)] to-[var(--parchment)] border-b border-[var(--palm-leaf)]">
        {/* Decorative gold line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--gold-leaf)] to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* NayaVed Logo */}
              <Image
                src="/images/Nayavednew.png"
                alt="NayaVed AI"
                width={80}
                height={80}
                style={{ objectFit: 'contain' }}
                className="h-16 w-16 md:h-20 md:w-20"
              />
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-[var(--ink-black)]" style={{fontFamily: 'Georgia, serif'}}>
                  NayaVed <span className="text-[var(--copper-brown)]">AI</span>
                </h1>
                <p className="text-[var(--copper-brown)] text-sm md:text-base font-medium">
                  Ancient Wisdom, Modern Wellness
                </p>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg border-2 border-[var(--palm-leaf)] hover:border-[var(--copper-brown)] hover:bg-[var(--parchment-light)] transition-all"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[var(--ink-black)]" /> : <Menu className="w-6 h-6 text-[var(--ink-black)]" />}
            </button>
          </div>
        </div>

        {/* Decorative bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--palm-leaf)] to-transparent"></div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className={`md:w-72 ${mobileMenuOpen ? 'block' : 'hidden md:block'}`}>
            <nav className="parchment-card rounded-xl p-4 sticky top-6">
              {/* Navigation Header */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[var(--palm-leaf)]">
                <ChakraIcon className="text-[var(--gold-leaf)]" size={24} />
                <span className="font-semibold text-[var(--ink-black)]">Navigate</span>
              </div>

              <ul className="space-y-1">
                {tabs.map(tab => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <li key={tab.id}>
                      <button
                        onClick={() => {
                          setActiveTab(tab.id);
                          setMobileMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all group ${
                          isActive
                            ? 'bg-gradient-to-r from-[var(--copper-brown)] to-[var(--henna)] text-white shadow-md'
                            : 'text-[var(--ink-brown)] hover:bg-[var(--parchment-dark)] hover:text-[var(--ink-black)]'
                        }`}
                      >
                        <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-[var(--copper-brown)]'}`} />
                        <div className="flex-1 text-left">
                          <span className="font-medium block text-sm">{tab.label}</span>
                          <span className={`text-xs ${isActive ? 'text-white/80' : 'text-[var(--faded-ink)]'}`}>
                            {tab.description}
                          </span>
                        </div>
                        <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-white' : 'text-[var(--palm-leaf)] group-hover:text-[var(--copper-brown)] group-hover:translate-x-1'}`} />
                      </button>
                    </li>
                  );
                })}
              </ul>

              {/* Features Section */}
              <div className="mt-6 pt-4 border-t border-[var(--palm-leaf)]">
                <h3 className="text-xs font-semibold text-[var(--faded-ink)] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <span className="text-[var(--gold-leaf)]">❖</span>
                  Sources
                </h3>
                <ul className="text-xs text-[var(--faded-ink)] space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold-leaf)]"></span>
                    Charaka Samhita
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--copper-brown)]"></span>
                    Sushruta Samhita
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--vermillion)]"></span>
                    Ashtanga Hridayam
                  </li>
                </ul>
              </div>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="animate-fade-in">
              {activeTab === 'app' && <AppShowcase onNavigate={(tab) => setActiveTab(tab as Tab)} />}
              {activeTab === 'home' && <Homepage />}
              {activeTab === 'about' && <AboutPage />}
              {activeTab === 'quick' && <QuickStart />}
              {activeTab === 'plan' && <PersonalizedPlan />}
              {activeTab === 'chat' && <ChatInterface />}
              {activeTab === 'dosha' && <DoshaAssessment onNavigate={(tab) => setActiveTab(tab as Tab)} />}
              {activeTab === 'browser' && <KnowledgeBrowser />}
            </div>
          </main>
        </div>
      </div>

      {/* Floating App Download Banner */}
      <FloatingAppBanner />

      {/* Elegant Footer */}
      <footer className="bg-gradient-to-b from-[var(--parchment)] via-[var(--parchment-dark)] to-[#D4C5A9] mt-16 border-t border-[var(--palm-leaf)]">
        {/* Decorative top line */}
        <div className="h-1 bg-gradient-to-r from-transparent via-[var(--gold-leaf)] to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-10">
            {/* About Section */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-full bg-white border border-[var(--gold-leaf)] flex items-center justify-center overflow-hidden">
                  <LotusLogo size={48} />
                </div>
                <h3 className="text-lg font-bold text-[var(--ink-black)]" style={{fontFamily: 'Georgia, serif'}}>NayaVed AI</h3>
              </div>
              <p className="text-sm text-[var(--ink-brown)] leading-relaxed">
                Bridging ancient Charaka Samhita wisdom with modern AI technology.
                Making 5,000-year-old healing knowledge accessible for the digital age.
              </p>
            </div>

            {/* Get the App Section */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--parchment-light)] to-white border border-[var(--gold-leaf)] flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-[var(--copper-brown)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--ink-black)]">Get the App</h3>
              </div>
              <div className="space-y-3">
                <a
                  href="https://apps.apple.com/app/nayaved-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[var(--ink-brown)] hover:text-[var(--copper-brown)] transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Download on App Store
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.nayaved.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[var(--ink-brown)] hover:text-[var(--copper-brown)] transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z"/>
                  </svg>
                  Get it on Google Play
                </a>
              </div>
            </div>

            {/* Sources Section */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--parchment-light)] to-white border border-[var(--gold-leaf)] flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-[var(--copper-brown)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--ink-black)]">Sources</h3>
              </div>
              <ul className="text-sm text-[var(--ink-brown)] space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-[var(--gold-leaf)]">❖</span>
                  Charaka Samhita
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--gold-leaf)]">❖</span>
                  Sushruta Samhita
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--gold-leaf)]">❖</span>
                  Ashtanga Hridayam
                </li>
              </ul>
            </div>

            {/* Disclaimer Section */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--parchment-light)] to-white border border-[var(--gold-leaf)] flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-[var(--copper-brown)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--ink-black)]">Disclaimer</h3>
              </div>
              <p className="text-sm text-[var(--ink-brown)] leading-relaxed">
                For educational purposes only. Not a substitute for professional medical advice.
                Always consult qualified healthcare providers for health concerns.
              </p>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-10 pt-8 border-t border-[var(--palm-leaf)]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white border border-[var(--gold-leaf)] flex items-center justify-center overflow-hidden">
                  <LotusLogo size={36} />
                </div>
                <span className="text-[var(--gold-leaf)] text-xl">❖</span>
                <span className="text-[var(--faded-ink)] text-sm italic" style={{fontFamily: 'Georgia, serif'}}>Where Charaka Samhita meets AI</span>
              </div>
              <p className="text-sm text-[var(--faded-ink)] text-center md:text-right">
                &copy; 2026 NayaVed AI
                <span className="mx-2">•</span>
                <span className="italic">Ancient wisdom, modern wellness</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
