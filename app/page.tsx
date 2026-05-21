export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          API Monitoring
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Track API Response Times{" "}
          <span className="text-[#58a6ff]">by Geography</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Monitor your API performance from multiple geographic regions. Detect regional slowdowns instantly and keep your users happy worldwide.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
        >
          Get Started — $19/mo
        </a>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-[#58a6ff] text-2xl font-bold mb-2">🌍 Multi-Region</div>
            <p className="text-[#8b949e] text-sm">Ping your APIs from US, EU, Asia, and more simultaneously.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-[#58a6ff] text-2xl font-bold mb-2">⚡ Real-Time Alerts</div>
            <p className="text-[#8b949e] text-sm">Instant notifications when a region exceeds your latency threshold.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-[#58a6ff] text-2xl font-bold mb-2">📊 Visual Dashboard</div>
            <p className="text-[#8b949e] text-sm">Beautiful charts showing response time trends per region over time.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-10">One plan. Everything included. No surprises.</p>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Up to 10 API endpoints monitored",
              "6 geographic regions",
              "1-minute check intervals",
              "Email & Slack alerts",
              "30-day data retention",
              "CSV export"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-center transition-colors duration-200"
          >
            Start Monitoring Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Which regions do you monitor from?</h3>
            <p className="text-[#8b949e] text-sm">We run workers in US East, US West, EU West, EU Central, Asia Pacific, and South America to give you a true global picture of your API performance.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">How quickly will I be alerted to a slowdown?</h3>
            <p className="text-[#8b949e] text-sm">Checks run every minute. If a region exceeds your configured threshold, you receive an alert within 60 seconds via email or Slack webhook.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Can I cancel anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Cancel anytime from your billing portal with no questions asked. Your data is available for export before cancellation.</p>
          </div>
        </div>
      </section>

      <footer className="text-center py-10 text-[#8b949e] text-sm border-t border-[#21262d]">
        © {new Date().getFullYear()} API Geography Tracker. All rights reserved.
      </footer>
    </main>
  );
}
