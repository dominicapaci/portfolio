import { useState } from 'react'

// Pluggable submit function — swap this when email service is chosen
async function submitEmail(email) {
  // TODO: Replace with actual email service (ConvertKit, Mailchimp, etc.)
  console.log('Email submitted:', email)
  // Simulate API call
  return new Promise((resolve) => setTimeout(resolve, 1000))
}

export default function SignupForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    try {
      await submitEmail(email)
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="signup" className="relative z-10 py-32 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
          Be first in when doors open
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          Join the waitlist. No spam, no fluff. Just an invite when it&apos;s time to build.
        </p>

        {status === 'success' ? (
          <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
            <p className="text-primary font-heading font-bold text-lg mb-1">
              You&apos;re in.
            </p>
            <p className="text-muted-foreground text-sm">
              We&apos;ll reach out when it&apos;s time to build. Get ready.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-5 py-4 bg-surface border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_12px_rgba(0,255,255,0.08)] transition-all duration-200 font-body"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-8 py-4 bg-primary text-primary-foreground font-heading font-bold text-lg rounded-xl hover:bg-primary-hover transition-all duration-200 glow-pulse disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {status === 'loading' ? 'Joining...' : 'Join the Waitlist'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="text-error text-sm mt-3">
            Something went wrong. Try again.
          </p>
        )}
      </div>
    </section>
  )
}
