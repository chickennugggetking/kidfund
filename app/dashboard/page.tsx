import Link from 'next/link';

const campaigns = [
  { name: 'School garden project', amount: '$2,430', progress: 72, status: 'Approved', category: 'School' },
  { name: 'Pet shelter fundraiser', amount: '$1,120', progress: 48, status: 'Pending', category: 'Animal care' },
  { name: 'Neighborhood cleanup', amount: '$890', progress: 36, status: 'Needs review', category: 'Community' }
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-soft p-6 text-ink md:p-10">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex flex-col gap-4 rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-primary">Parent dashboard</div>
            <h1 className="mt-2 text-3xl font-black text-night">Welcome back, Jenna</h1>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/create" className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-soft">
              Create fundraiser
            </Link>
            <Link href="/approval" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
              Approval queue
            </Link>
          </div>
        </header>

        <section className="mb-8 grid gap-4 md:grid-cols-4">
          {[
            ['Active', '12'],
            ['Pending', '3'],
            ['Donations', '$8.7k'],
            ['Families', '9']
          ].map(([label, value]) => (
            <div key={label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
              <div className="text-sm text-slate-500">{label}</div>
              <div className="mt-2 text-3xl font-black text-night">{value}</div>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.5fr_0.9fr]">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-2xl font-black text-night">Fundraisers</h2>
              <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">This month</div>
            </div>

            <div className="space-y-4">
              {campaigns.map((campaign) => (
                <div key={campaign.name} className="rounded-2xl border border-slate-200 bg-soft p-4">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <div className="text-lg font-bold text-night">{campaign.name}</div>
                      <div className="mt-1 text-sm text-slate-500">{campaign.category}</div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-primary/10 px-2 py-1 text-xs font-bold text-primary">{campaign.status}</div>
                      <div className="text-lg font-black text-night">{campaign.amount}</div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="mb-2 flex justify-between text-xs text-slate-500">
                      <span>Progress</span>
                      <span>{campaign.progress}%</span>
                    </div>
                    <div className="h-2.5 overflow-hidden rounded-full bg-slate-200">
                      <div className="h-full rounded-full bg-primary" style={{ width: `${campaign.progress}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="text-xl font-black text-night">Safety overview</h3>
              <div className="mt-5 space-y-4 text-sm text-slate-600">
                <div className="flex items-center justify-between rounded-2xl bg-safe/10 p-3 text-safe">
                  <span>Approved campaigns</span>
                  <span className="font-bold">12</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-amber-50 p-3 text-amber-700">
                  <span>Awaiting review</span>
                  <span className="font-bold">3</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-slate-100 p-3 text-slate-700">
                  <span>Restricted accounts</span>
                  <span className="font-bold">1</span>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-primary p-6 text-white shadow-soft">
              <div className="text-sm uppercase tracking-[0.2em] text-blue-100">Quick actions</div>
              <div className="mt-4 space-y-3 text-sm">
                <Link href="/create" className="block rounded-2xl bg-white/10 p-3 font-medium">
                  New campaign draft
                </Link>
                <Link href="/approval" className="block rounded-2xl bg-white/10 p-3 font-medium">
                  Review pending approval
                </Link>
                <Link href="/" className="block rounded-2xl bg-white/10 p-3 font-medium">
                  View public landing page
                </Link>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
