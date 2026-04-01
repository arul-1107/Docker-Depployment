import Sidebar from '../../components/Sidebar/Sidebar';

export default function DashboardPage() {
  return (
    <div className="flex bg-slate-50 min-h-screen">
      <Sidebar />
      <main className="flex-1 p-12 overflow-y-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-black text-slate-900">Overview</h1>
          <p className="text-slate-500 mt-2">Welcome to your professional dashboard.</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-slate-400 font-bold uppercase tracking-wider text-xs mb-2">Metric {i}</h3>
              <p className="text-3xl font-black text-slate-800">$24,000</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
