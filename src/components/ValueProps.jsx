import { PipelineIcon, VoiceIcon, DashboardIcon, BuildIcon } from './Icons3D'

const props = [
  {
    Icon: PipelineIcon,
    title: 'AI Content Pipeline',
    description:
      'Scrape every piece of data from your accounts, run 7 different analyses, and get a full content strategy. Automated.',
  },
  {
    Icon: VoiceIcon,
    title: 'Voice-Matched Scripts',
    description:
      'AI that actually sounds like you. Extract your speaking style from transcripts, then generate scripts that match your voice.',
  },
  {
    Icon: DashboardIcon,
    title: 'Analytics Dashboard',
    description:
      'Interactive dashboards that make your data visual. See what\'s working, spot patterns humans miss, make smarter decisions.',
  },
  {
    Icon: BuildIcon,
    title: 'Build-Along Format',
    description:
      'Not a course. I build it live, you replicate it for your brand. You keep everything you create.',
  },
]

export default function ValueProps() {
  return (
    <section className="relative z-10 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            What you&apos;ll build
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Production tools, not toy demos. Real systems you own and run for your brand.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {props.map((prop, i) => (
            <div
              key={i}
              className="card-3d group bg-surface/60 backdrop-blur-sm border border-border-subtle rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              <prop.Icon />
              <h3 className="text-lg font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {prop.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
