'use client';

import { useState, useEffect } from 'react';
import { X, Smartphone, Download } from 'lucide-react';

export default function FloatingAppBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user has dismissed the banner before
    const dismissed = localStorage.getItem('appBannerDismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    // Show banner after scrolling down a bit
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('appBannerDismissed', 'true');
  };

  if (isDismissed || !isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:w-96 z-50 animate-slide-up">
      <div className="relative bg-gradient-to-r from-[var(--copper-brown)] to-[var(--henna)] rounded-2xl p-4 shadow-2xl border-2 border-[var(--gold-leaf)]">
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
        >
          <X className="w-4 h-4 text-[var(--ink-black)]" />
        </button>

        <div className="flex items-center gap-4">
          {/* App Icon */}
          <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-inner flex-shrink-0">
            <Smartphone className="w-8 h-8 text-[var(--copper-brown)]" />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-bold text-lg leading-tight">Get NayaVed AI App</h3>
            <p className="text-white/80 text-sm mt-1">
              AI-powered Ayurvedic diagnostics in your pocket
            </p>
          </div>
        </div>

        {/* Download buttons */}
        <div className="flex gap-2 mt-4">
          <a
            href="https://apps.apple.com/app/nayaved-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-white text-[var(--copper-brown)] px-4 py-2.5 rounded-xl font-semibold text-sm hover:bg-gray-100 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            iOS
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.nayaved.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-white text-[var(--copper-brown)] px-4 py-2.5 rounded-xl font-semibold text-sm hover:bg-gray-100 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z"/>
            </svg>
            Android
          </a>
        </div>

        {/* Trust indicators */}
        <div className="flex items-center justify-center gap-4 mt-3 text-white/70 text-xs">
          <span className="flex items-center gap-1">
            <span className="text-[var(--gold-leaf)]">★</span> 4.8 Rating
          </span>
          <span>•</span>
          <span>Free Download</span>
          <span>•</span>
          <span>No Ads</span>
        </div>
      </div>
    </div>
  );
}
