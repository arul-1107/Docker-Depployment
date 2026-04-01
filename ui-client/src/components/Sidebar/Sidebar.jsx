import { LayoutDashboard, Users, Settings, LogOut } from 'lucide-react';

export default function Sidebar() {
  const items = [
    { icon: <LayoutDashboard size={20}/>, label: 'Dashboard', active: true },
    { icon: <Users size={20}/>, label: 'Users', active: false },
    { icon: <Settings size={20}/>, label: 'Settings', active: false },
  ];

  return (
    <div className="w-64 bg-white border-r border-slate-200 h-screen flex flex-col p-6">
      <div className="flex items-center gap-3 text-indigo-600 font-black text-2xl mb-12">
        <div className="w-8 h-8 bg-indigo-600 rounded-lg"></div>
        <span>CORE</span>
      </div>
      <nav className="flex-1 space-y-2">
        {items.map((item) => (
          <div key={item.label} className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all ${item.active ? 'bg-indigo-50 text-indigo-600' : 'text-slate-500 hover:bg-slate-50'}`}>
            {item.icon} <span className="font-bold">{item.label}</span>
          </div>
        ))}
      </nav>
      <button className="flex items-center gap-4 p-4 text-slate-400 hover:text-red-500 transition-colors mt-auto">
        <LogOut size={20}/> <span className="font-bold">Logout</span>
      </button>
    </div>
  );
}
