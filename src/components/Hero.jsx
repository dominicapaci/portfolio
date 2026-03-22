export default function Hero() {
  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Eyebrow */}
        <p className="text-primary font-mono text-sm tracking-wider uppercase mb-6 opacity-80">
          Community launching April 2026
        </p>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-foreground leading-none tracking-tight mb-6">
          Build it.{' '}
          <span className="text-primary">
            Don&apos;t just prompt it.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Join the community where content creators build their own AI tools. Scraping pipelines, analytics dashboards, voice-matched script writers.{' '}
          <span className="text-foreground font-medium">You build it. You own it.</span>
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#signup"
            className="px-8 py-4 bg-primary text-primary-foreground font-heading font-bold text-lg rounded-xl hover:bg-primary-hover transition-all duration-200 glow-pulse"
          >
            Join the Waitlist
          </a>
          <p className="text-sm text-muted-foreground">
            Be first in when doors open
          </p>
        </div>
      </div>
    </section>
  )
}
