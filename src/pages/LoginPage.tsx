import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { Calendar, Eye, EyeOff, Lock, Hash } from 'lucide-react';
import toast from 'react-hot-toast';

const LoginPage = () => {
  const [nim, setNim] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const { login, isLoading } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await login(nim, password);
      toast.success('Login berhasil! Selamat datang.');
      navigate('/dashboard');
    } catch (err: unknown) {
      toast.error((err as Error).message || 'Login gagal');
    }
  };

  return (
    <div className="login-page">
      <div className="login-bg">
        <div className="bg-shape bg-shape-1" />
        <div className="bg-shape bg-shape-2" />
        <div className="bg-shape bg-shape-3" />
      </div>

      <div className="login-card">
        <div className="login-header">
          <div className="login-logo">
            <Calendar size={32} />
          </div>
          <h1>EventHub</h1>
          <p>Event Management System</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>user</label>
            <div className="input-wrapper">
              <Hash size={16} className="input-icon" />
              <input
                type="text"
                value={nim}
                onChange={(e) => setNim(e.target.value)}
                placeholder="Masukkan User Anda"
                required
                autoComplete="username"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Sandi</label>
            <div className="input-wrapper">
              <Lock size={16} className="input-icon" />
              <input
                type={showPass ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan Sandi Anda"
                required
                autoComplete="current-password"
              />
              <button
                type="button"
                className="toggle-pass"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <button type="submit" className="btn-login" disabled={isLoading}>
            {isLoading ? (
              <span className="loading-spinner" />
            ) : (
              'Masuk'
            )}
          </button>
        </form>

        <p className="login-hint">
          Default: User<strong>24090119</strong> / Sandi <strong>password123</strong>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
