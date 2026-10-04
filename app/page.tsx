import Link from 'next/link';

const features = [
  {
    title: 'Parent-approved campaigns',
    text: 'Kids can draft ideas, but parents review and approve every fundraiser before it goes live.'
  },
  {
    title: 'Privacy-first',
    text: 'A child-safe system with limited data sharing and no public exposure unless the parent approves.'
  },
  {
    title: 'Easy donations',
    text: 'Supporters can give quickly while parents monitor all activity for safety and transparency.'
  }
];

const stats = [
  { label: 'Active campaigns', value: '42' },
  { label: 'Approved this week', value: '18' },
  { label: 'Donations tracked', value: '$12.4k' }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-soft text-ink">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-xl font-bold text-white shadow-soft">
            K
          </div>
          <div>
            <div className="text-lg font-bold">KidFund</div>
            <div className="text-xs text-slate-500">Safe giving for kids</div>
          </div>
        </div>

        <nav className="hidden gap-8 text-sm font-medium text-slate-600 md:flex">
          <Link href="#features">Features</Link>
          <Link href="#how-it-works">How it works</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
            Demo dashboard
          </Link>
          <Link href="/approval" className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-white shadow-soft">
            View approval queue
          </Link>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-20 pt-10 md:grid-cols-2 md:pt-20">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            Parent-first fundraising
          </div>
          <h1 className="max-w-xl text-5xl font-black tracking-tight text-night md:text-6xl">
            Help kids launch good causes with confidence.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-slate-600">
            KidFund makes it easy for children to create fundraising ideas while parents approve, monitor, and protect every step of the process.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/create" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:opacity-95">
              Start a campaign
            </Link>
            <Link href="/dashboard" className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300">
              Explore dashboard
            </Link>
          </div>

          <div className="mt-10 grid max-w-md grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
                <div className="text-2xl font-black text-night">{stat.value}</div>
                <div className="mt-1 text-xs text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-soft">
          <div className="rounded-[24px] bg-gradient-to-br from-primary via-blue-500 to-indigo-600 p-5 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.14em] text-blue-100">Fundraiser preview</div>
                <div className="mt-2 text-2xl font-black">School Garden Project</div>
              </div>
              <div className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">Approved</div>
            </div>

            <div className="mt-8 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
              <div className="mb-3 flex items-center justify-between text-sm text-blue-100">
                <span>Raised so far</span>
                <span>$2,430</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-white/20">
                <div className="h-full w-[72%] rounded-full bg-accent" />
              </div>
              <div className="mt-3 flex justify-between text-xs text-blue-50">
                <span>72% of $3,400 goal</span>
                <span>32 supporters</span>
              </div>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-2xl bg-white/10 p-3">
                <div className="text-blue-100">Category</div>
                <div className="mt-1 font-bold">School</div>
              </div>
              <div className="rounded-2xl bg-white/10 p-3">
                <div className="text-blue-100">Age group</div>
                <div className="mt-1 font-bold">8–12</div>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-night">Parent review status</div>
                <div className="mt-1 text-xs text-slate-500">Approved by mom • 2 mins ago</div>
              </div>
              <div className="rounded-full bg-safe/10 px-2 py-1 text-xs font-bold text-safe">Ready</div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Built for safety</div>
            <h2 className="mt-3 text-3xl font-black text-night">Everything families need to raise safely</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-3xl border border-slate-200 bg-soft p-6 shadow-soft">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-night">{feature.title}</h3>
                <p className="mt-3 text-slate-600">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 text-center">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">How it works</div>
          <h2 className="mt-3 text-3xl font-black text-night">Simple flow, safe oversight</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            ['1. Create idea', 'A child enters the cause, goal, timeline, and story.'],
            ['2. Parent reviews', 'A guardian checks the details, adds safety measures, and approves it.'],
            ['3. Launch & track', 'The fundraiser goes live and parents keep full visibility of donations and updates.']
          ].map(([step, text]) => (
            <div key={step} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="mb-4 text-4xl font-black text-primary">{step.split('.')[0]}</div>
              <h3 className="text-xl font-bold text-night">{step}</h3>
              <p className="mt-3 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
