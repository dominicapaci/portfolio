const personas = [
  {
    label: 'Content Creators',
    pain: 'Spending hours on content with no data on what works. AI tools feel generic.',
    outcome: 'Build your own AI content pipeline. Scrape, analyze, create. All informed by your real data.',
  },
  {
    label: 'Founders & Solopreneurs',
    pain: 'Need content at scale but can\'t afford a team. Generic AI doesn\'t match your brand.',
    outcome: 'An AI content system that runs without a team. And actually sounds like you.',
  },
  {
    label: 'Agencies & Teams',
    pain: 'Manual workflows don\'t scale. Need automation that\'s customizable per client.',
    outcome: 'Production pipelines built with the same stack agencies use. Automate across accounts.',
  },
]

export default function WhoItsFor() {
  return (
    <section className="relative z-10 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Who this is for
          </h2>
          <p className="text-muted-foreground text-lg">
            Builders who want to own their tools, not rent someone else&apos;s prompts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personas.map((p, i) => (
            <div
              key={i}
              className="bg-surface/40 backdrop-blur-sm border border-border-subtle rounded-xl p-6 hover:border-primary/20 transition-all duration-300"
            >
              <span className="inline-block px-3 py-1 text-xs font-mono font-semibold text-primary bg-primary/10 rounded-full mb-4">
                {p.label}
              </span>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                <span className="text-foreground font-medium">The pain:</span> {p.pain}
              </p>
              <p className="text-sm text-foreground leading-relaxed">
                <span className="text-primary font-medium">What you get:</span> {p.outcome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
