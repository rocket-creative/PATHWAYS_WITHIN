'use client'

interface CrisisBannerProps {
  variant?: 'therapy' | 'wellness' | 'landing'
}

export function CrisisBanner({ variant = 'therapy' }: CrisisBannerProps) {
  return (
    <div 
      className="bg-crisis text-white text-center py-2 text-sm" 
      role="banner"
      aria-label="Crisis support resources"
    >
      <div className="max-w-site mx-auto px-4">
        <span className="opacity-80">Crisis support 24/7:</span>{' '}
        <a href="tel:988" className="font-medium hover:underline focus:underline focus:outline-none">
          Call 988
        </a>
        <span className="opacity-50 mx-2">|</span>
        <a 
          href="https://988lifeline.org/chat" 
          className="hover:underline focus:underline focus:outline-none" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Chat
        </a>
        <span className="opacity-50 mx-2 hidden sm:inline">|</span>
        <span className="hidden sm:inline opacity-80">Text HOME to 741741</span>
      </div>
    </div>
  )
}

