import Link from 'next/link';

const queue = [
  { name: 'Bake sale for art club', child: 'Ella', reason: 'Need approval for goal and image', status: 'Pending review' },
  { name: 'Community library drive', child: 'Leo', reason: 'Awaiting parent confirmation', status: 'Needs parent action' },
  { name: 'Animal shelter fundraiser', child: 'Mia', reason: 'Ready to publish', status: 'Approved' }
];

export default function ApprovalPage() {
  return (
    <main className="min-h-screen bg-soft p-6 text-ink md:p-10">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 flex flex-col gap-4 rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-primary">Approval center</div>
            <h1 className="mt-2 text-3xl font-black text-night">Review fundraiser requests</h1>
          </div>

          <Link href="/dashboard" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
            Back to dashboard
          </Link>
        </header>

        <div className="space-y-4">
          {queue.map((item) => (
            <div key={item.name} className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-soft">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-xl font-bold text-night">{item.name}</div>
                  <div className="mt-1 text-sm text-slate-500">Submitted by {item.child}</div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">{item.status}</div>
                  <button className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">Approve</button>
                  <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Review</button>
                </div>
              </div>

              <p className="mt-4 text-sm text-slate-600">{item.reason}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
