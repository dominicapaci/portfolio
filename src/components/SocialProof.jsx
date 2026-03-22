const stats = [
  { value: '70K+', label: 'Views in the first week' },
  { value: '500+', label: 'Followers gained' },
  { value: '92', label: 'Posts analyzed in case study' },
  { value: '7', label: 'Strategy reports generated' },
]

export default function SocialProof() {
  return (
    <section className="relative z-10 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl sm:text-4xl font-heading font-extrabold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
