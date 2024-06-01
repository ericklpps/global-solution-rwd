"use client"
import { useState } from 'react';

export default function Doacoes() {
    const [nome, setNome] = useState('');
    const [imagem, setImagem] = useState(null);
    const [enviado, setEnviado] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aqui você pode adicionar a lógica para enviar os dados para o backend
        // Por enquanto, apenas definimos enviado como true para exibir a mensagem de confirmação
        setEnviado(true);
    };

    return (
        <div className="container mx-auto py-8 px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Sabia?</h1>
            <h2 className="text-xl font-semibold mb-2">Você pode contribuir com doações para a SOS Ocean</h2>
            <p className="mb-4">O QR Code abaixo permite que você escaneie e faça uma doação:</p>
            <div className="mb-4">
                <img 
                    src="/qr-code.png" 
                    alt="QR Code" 
                    className="mx-auto max-w-sm"
                />
            </div>
            <p className="mb-4">Registre sua colaboração:</p>
            <form onSubmit={handleSubmit} className="space-y-4 mx-auto max-w-md flex flex-col items-center">
                <div className="flex items-center justify-center">
                    <label htmlFor="nome" className="text-left mr-4">Nome do contribuinte:</label>
                    <input 
                        type="text" 
                        id="nome" 
                        value={nome} 
                        onChange={(event) => setNome(event.target.value)} 
                        required 
                        className="w-2/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-900"
                    />
                </div>
                <div className="flex items-center justify-center">
                    <label htmlFor="imagem" className="text-left mr-4">Comprovante:</label>
                    <input 
                        type="file" 
                        accept="image/*" 
                        id="imagem" 
                        onChange={(event) => setImagem(event.target.files[0])} 
                        required 
                        className="w-2/3"
                    />
                </div>
                <button 
                    type="submit" 
                    className="bg-blue-900 text-white py-2 px-6 rounded-md hover:bg-blue-900 focus:outline-none focus:bg-blue-900 transition duration-300"
                >
                    Enviar
                </button>
            </form>
            {enviado && <p className="mt-4 text-green-600">Enviado! Muito obrigado pela sua contribuição.</p>}
        </div>
    );
}
