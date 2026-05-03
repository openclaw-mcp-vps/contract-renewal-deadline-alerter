export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          For Small Business &amp; Procurement Teams
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Never Miss a Contract Renewal<br />or Cancellation Deadline
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Automatically track contract terms and receive timely alerts before auto-renewals lock you in or cancellation windows close. Stay in control of every agreement.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-lg"
        >
          Start for $13/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No contracts required.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
        {[
          { icon: '📅', title: 'Deadline Tracking', desc: 'Upload contracts and we extract renewal and cancellation dates automatically.' },
          { icon: '🔔', title: 'Smart Alerts', desc: 'Get email notifications 90, 60, 30, and 7 days before critical deadlines.' },
          { icon: '✅', title: 'Action Guidance', desc: 'Each alert includes a clear recommendation: renew, cancel, or renegotiate.' },
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$13</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited contracts',
              'Email alerts at 90/60/30/7 days',
              'Action recommendations per alert',
              'Dashboard with deadline calendar',
              'CSV export of all contracts',
              'Priority email support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How do I add my contracts?',
              a: 'You can manually enter contract details or upload a PDF. Our system extracts the key dates and terms for you.',
            },
            {
              q: 'What types of contracts does it support?',
              a: 'Any contract with a renewal or cancellation deadline — software subscriptions, vendor agreements, leases, service contracts, and more.',
            },
            {
              q: 'Can I customize when alerts are sent?',
              a: 'Yes. You choose which intervals matter to you — default is 90, 60, 30, and 7 days before each deadline, but you can adjust per contract.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} Contract Renewal Deadline Alerter. All rights reserved.
      </footer>
    </main>
  )
}
