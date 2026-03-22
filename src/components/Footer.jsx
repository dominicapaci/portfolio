export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border-subtle py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-lg font-heading font-bold text-foreground">DC</span>
          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dominic Capaci
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://www.tiktok.com/@dominiccapaci"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            TikTok
          </a>
          <a
            href="https://www.instagram.com/dominiccapaci.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}
