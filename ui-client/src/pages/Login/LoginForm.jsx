import LoginForm from '../../components/Login/LoginForm';

export default function LoginPage({ onLogin }) {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <LoginForm onLogin={onLogin} />
    </div>
  );
}
