import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border-subtle'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <span className="text-xl font-heading font-bold text-foreground tracking-tight">
            DC
          </span>
          <span className="hidden sm:inline text-sm text-muted-foreground">
            Dominic Capaci
          </span>
        </a>

        {/* CTA */}
        <a
          href="#signup"
          className="px-5 py-2 bg-primary text-primary-foreground font-heading font-semibold text-sm rounded-lg hover:bg-primary-hover transition-all duration-200 glow-pulse"
        >
          Join the Waitlist
        </a>
      </div>
    </nav>
  )
}
