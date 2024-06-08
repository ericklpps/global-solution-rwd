"use client";
import { useState } from 'react';
import { addUser } from '@/app/services/ApiUsers';
import { IUser } from '@/app/types/pages';

export default function CadastroPage() {
  const [cpf, setCpf] = useState('');
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cep, setCep] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Formatar a data de nascimento
    const formattedDateOfBirth = formatDateOfBirth(dataNascimento);

    try {
      const newUser: IUser = { id: cpf, nomeUsuario, sobrenome, cep, email, senha, dataNascimento: formattedDateOfBirth};
      await addUser(newUser);
      setSuccessMessage('Cadastro realizado com sucesso! Redirecionando para a página de login...');
      setTimeout(() => {
        // Redirecionar para a página de login após 3 segundos
        window.location.href = '/login';
      }, 3000);
    } catch (error) {
      setErrorMessage('Erro ao cadastrar usuário');
    }
  };


  // Função data de nascimento no formato "ano-mês-dia"
  const formatDateOfBirth = (date: string): string => {
    const [year, month, day] = date.split('-');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl text-center font-bold mb-4">Cadastre-se para participar do programa de pontos!</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md space-y-4">
        <div>
          <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">CPF</label>
          <input
            id="cpf"
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
            className="border border-gray-300 rounded-md mt-1 px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="nomeUsuario" className="block text-sm font-medium text-gray-700">Nome</label>
          <input
            id="nomeUsuario"
            type="text"
            value={nomeUsuario}
            onChange={(e) => setNomeUsuario(e.target.value)}
            required
            className="border border-gray-300 rounded-md mt-1 px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="sobrenome" className="block text-sm font-medium text-gray-700">Sobrenome</label>
          <input
            id="sobrenome"
            type="text"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
            required
            className="border border-gray-300 rounded-md mt-1 px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="dataNascimento" className="block text-sm font-medium text-gray-700">Data de Nascimento (AAAA-MM-DD)</label>
          <input
            id="dataNascimento"
            type="text"
            pattern="\d{4}-\d{2}-\d{2}"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
            required
            className="border border-gray-300 rounded-md mt-1 px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          />
          <p className="text-xs text-gray-500">Digite a data de nascimento no formato "ano-mês-dia" (AAAA-MM-DD)</p>
        </div>
        <div>
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
        <div>
          <label htmlFor="senha" className="block text-sm font-medium text-gray-700">Senha</label>
          <input
            id="senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            className="border border-gray-300 rounded-md mt-1 px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="cep" className="block text-sm font-medium text-gray-700">CEP</label>
          <input
            id="cep"
            type="text"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            required
            className="border border-gray-300 rounded-md mt-1 px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <button type="submit" className="bg-customColor text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full">
          Cadastrar
        </button>
        {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
      </form>
    </div>
  );
}
