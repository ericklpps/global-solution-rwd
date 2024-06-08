"use client";
import { useState } from 'react';
import { addVolunteer } from '@/app/services/ApiVolunteers';
import { IVolunteer } from '@/app/types/pages';

export default function Voluntarios() {
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [telefone, setTelefone] = useState('');
    const [pontoDeColeta, setPontoDeColeta] = useState('');
    const [funcaoUsuario, setFuncaoUsuario] = useState('');
    const [cpf, setCpf] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const volunteer: IVolunteer = {
            nomeVoluntario: nomeCompleto,
            telefone: telefone,
            pontoColeta: pontoDeColeta,
            funcaoUsuario: funcaoUsuario,
            id: cpf
        };
        try {
            await addVolunteer(volunteer);
            alert(`Inscrição registrada! Apresente seu CPF no ponto de coleta.`);
        } catch (error) {
            console.error('Error adding volunteer:', error);
        }
    };

    return (
        <div className="container mx-auto py-8 px-4 text-center">
            <h1 className="text-center text-6xl font-bold mb-6">Seja um Voluntário</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6 p-6 border border-gray-300 rounded-lg shadow-lg bg-white mb-8">
                <div>
                    <label htmlFor="nomeCompleto" className="block mb-2 font-medium">Nome Completo:</label>
                    <input 
                        type="text" 
                        id="nomeCompleto" 
                        value={nomeCompleto} 
                        onChange={(event) => setNomeCompleto(event.target.value)} 
                        required 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-900"
                    />
                </div>
                <div>
                    <label htmlFor="telefone" className="block mb-2 font-medium">Telefone (Formato: DDD+Número):</label>
                    <input 
                        type="tel" 
                        id="telefone" 
                        value={telefone} 
                        onChange={(event) => setTelefone(event.target.value)} 
                        required 
                        pattern="\d{2}\d{8,9}" 
                        title="Digite apenas números no formato DDD+Número" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-900"
                    />
                </div>
                <div>
                    <label htmlFor="cpf" className="block mb-2 font-medium">CPF (Apenas números):</label>
                    <input 
                        type="text" 
                        id="cpf" 
                        value={cpf} 
                        onChange={(event) => setCpf(event.target.value)} 
                        required 
                        pattern="\d{11}" 
                        title="Digite apenas números (11 dígitos)" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-900"
                    />
                </div>
                <div>
                    <label htmlFor="pontoDeColeta" className="block mb-2 font-medium">Ponto de Coleta:</label>
                    <select 
                        id="pontoDeColeta" 
                        value={pontoDeColeta} 
                        onChange={(event) => setPontoDeColeta(event.currentTarget.value)} 
                        required 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-900"
                    >
                        <option value="">Selecione um ponto de coleta</option>
                        <option value="Praia do Canto do Forte">Praia do Canto do Forte</option>
                        <option value="Praia do Boqueirão">Praia do Boqueirão</option>
                        <option value="Praia da Guilhermina">Praia da Guilhermina</option>
                        <option value="Praia da Aviação">Praia da Aviação</option>
                        <option value="Praia da Vila Tupi">Praia da Vila Tupi</option>
                        <option value="Praia da Ocian">Praia da Ocian</option>
                        <option value="Praia da Vila Mirim">Praia da Vila Mirim</option>
                        <option value="Praia do Balneário Maracanã">Praia do Balneário Maracanã</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="funcaoUsuario" className="block mb-2 font-medium">Função:</label>
                    <select 
                        id="funcaoUsuario" 
                        value={funcaoUsuario} 
                        onChange={(event) => setFuncaoUsuario(event.currentTarget.value)} 
                        required 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-900"
                    >
                        <option value="">Selecione sua função</option>
                        <option value="Coletor">Coletor</option>
                        <option value="Receptor">Receptor</option>
                    </select>
                </div>
                <button 
                    type="submit" 
                    className="w-full bg-customColor text-white py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700 transition duration-300"
                >
                    Registrar
                </button>
            </form>
            <p className="text-lg mt-8 mb-6 text-center p-4 bg-blue-100 rounded-lg shadow-md border border-blue-300">
                Ao se voluntariar e realizar as ações, você pode acumular pontos e trocar por produtos da nossa ONG. 
                É uma forma de agradecermos pelo seu esforço e dedicação à causa. Quanto mais você participa, mais pontos acumula!
                Para registrar seus pontos, você deve ter um cadastro em nosso projeto, ao apresentar os comprovantes 
                de ajuda em um ponto de coleta, você poderá fazer o acúmulo e realizar as trocas!
            </p>
            <br/>
            <div className="flex justify-center">
                <img 
                    src="/brindes.png" 
                    alt="Brindes da ONG" 
                    className="max-w-md"
                    style={{ transform: 'scale(1.3)' }}
                />
            </div>
        </div>
    );
}
