// app/login/page.tsx
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
        setError('Email ou senha inválidos');
      }
    } catch (error) {
      setError('Erro ao fazer login');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Definir o estado de isLoggedIn
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl text-center font-bold mb-4">Voluntário, faça o login abaixo:</h1>
      <br/>
      <div className="max-w-md mx-auto">
        {isLoggedIn ? ( // Verificar se o usuário está logado
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Você está logado!</h2>
            <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
              Logout
            </button>
          </div>
        ) : (
          <LoginForm onLogin={handleLogin} error={error} />
        )}
      </div>
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
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border border-gray-300 rounded-md mt-1 px-3 py-2 w-full focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border border-gray-300 rounded-md mt-1 px-3 py-2 w-full focus:outline-none focus:border-blue-500"
        />
      </div>
      <button type="submit" className="bg-customColor text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
        Login
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
}
