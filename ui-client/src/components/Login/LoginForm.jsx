import React from 'react';

export default function LoginForm({ onLogin }) {
  return (
    <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900">Welcome Back</h2>
        <p className="text-slate-500 mt-2">Enter your credentials to continue</p>
      </div>
      <div className="space-y-5">
        <input type="email" placeholder="Email" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
        <input type="password" placeholder="Password" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
        <button onClick={onLogin} className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-indigo-600 transition-all shadow-lg active:scale-95">
          Log In
        </button>
      </div>
    </div>
  );
}
