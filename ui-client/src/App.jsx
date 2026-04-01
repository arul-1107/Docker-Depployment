import { useState } from 'react';
import LoginPage from './pages/Login/LoginPage';
import DashboardPage from './pages/Dashboard/DashboardPage';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => setIsLoggedIn(true);

  return (
    <div className="font-sans antialiased text-slate-900">
      {isLoggedIn ? <DashboardPage /> : <LoginPage onLogin={handleLogin} />}
    </div>
  );
}

