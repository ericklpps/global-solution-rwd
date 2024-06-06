"use client"
import { useState } from 'react';
import { addUser } from '@/app/services/ApiUsers';

export default function CadastroPage() {
  const [user_name, setUser_name] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [date_of_birth, setDateOfBirth] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Formatar a data de nascimento
    const formattedDateOfBirth = formatDateOfBirth(date_of_birth);

    try {
      await addUser({ user_name, lastname, email, password, date_of_birth: formattedDateOfBirth });
      setSuccessMessage('Cadastro realizado com sucesso! Redirecionando para a página de login...');
      setTimeout(() => {
        // Redirecionar para a página de login após 3 segundos
        window.location.href = '/login';
      }, 3000);
    } catch (error) {
      setErrorMessage('Erro ao cadastrar usuário');
    }
  };

  // Função para formatar a data de nascimento no formato "ano-mês-dia"
  const formatDateOfBirth = (date: string): string => {
    const [year, month, day] = date.split('-');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl text-center font-bold mb-4">Cadastre-se para participar do programa de pontos!</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
        <div className="mb-4">
          <label htmlFor="user_name" className="block text-sm font-medium text-gray-700">Nome</label>
          <input
            id="user_name"
            type="text"
            value={user_name}
            onChange={(e) => setUser_name(e.target.value)}
            required
            className="border border-gray-300 rounded-md mt-1 px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">Sobrenome</label>
          <input
            id="lastname"
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
            className="border border-gray-300 rounded-md mt-1 px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date_of_birth" className="block text-sm font-medium text-gray-700">Data de Nascimento (AAAA-MM-DD)</label>
          <input
            id="date_of_birth"
            type="text"
            pattern="\d{4}-\d{2}-\d{2}"
            value={date_of_birth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            required
            className="border border-gray-300 rounded-md mt-1 px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          />
          <p className="text-xs text-gray-500">Digite a data de nascimento no formato "ano-mês-dia" (AAAA-MM-DD)</p>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
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
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
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
          Cadastrar
        </button>
        {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
      </form>
    </div>
  );
}
