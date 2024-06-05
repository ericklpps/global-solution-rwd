"use client"
import { useState } from 'react';
import { loginUser } from '@/app/services/ApiUsers';

export default function LoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (email: string, password: string) => {
    setError('');

    try {
      const user = await loginUser(email, password);

      if (user) {
        setIsLoggedIn(true); // Definir o estado de isLoggedIn como verdadeiro
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('Login failed');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Definir o estado de isLoggedIn como falso
  };

  return (
    <div className="container mx-auto p-4">
      {isLoggedIn ? ( // Verificar se o usuário está logado
        <div>
          <h1 className="text-2xl font-bold mb-4">Você está logado!</h1>
          <button onClick={handleLogout} className="bg-red-500 text-white p-2">
            Logout
          </button>
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} error={error} />
      )}
    </div>
  );
}

function LoginForm({ onLogin, error }: { onLogin: (email: string, password: string) => void; error: string }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onLogin(email, password);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border p-2"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border p-2"
          />
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white p-2">
          Login
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
}
