const steps = [
  {
    number: '01',
    title: 'I build it live',
    description: 'Watch me build production AI tools from scratch. Pipelines, dashboards, script generators. Every step explained.',
  },
  {
    number: '02',
    title: 'You replicate it',
    description: 'Follow along and build the same system for your brand. Your data, your account, your custom setup.',
  },
  {
    number: '03',
    title: 'You own it',
    description: 'Everything you build is yours. No subscriptions, no dependencies. Your tools, running for your business.',
  },
]

export default function HowItWorks() {
  return (
    <section className="relative z-10 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-muted-foreground text-lg">
            Not a course. A workshop where you ship real tools.
          </p>
        </div>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <div key={i} className="relative flex gap-8 items-start group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute left-[27px] top-[56px] w-px h-[calc(100%-16px)] bg-gradient-to-b from-primary/40 to-primary/10" />
              )}

              {/* Number circle */}
              <div className="flex-shrink-0 w-14 h-14 rounded-full border-2 border-primary/40 flex items-center justify-center text-primary font-mono text-sm font-bold group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(0,255,255,0.15)] transition-all duration-300">
                {step.number}
              </div>

              {/* Content */}
              <div className="pb-12">
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
