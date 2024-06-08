"use client";
import { useState } from 'react';
import { addDonation } from '@/app/services/ApiDonations';

export default function Doacoes() {
    const [nome, setNome] = useState('');
    const [imagem, setImagem] = useState<File | null>(null);
    const [enviado, setEnviado] = useState(false);
    const [mensagemErro, setMensagemErro] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!imagem) {
            setMensagemErro('Por favor, selecione uma imagem.');
            return;
        }

        const reader = new FileReader();
        reader.onloadend = async () => {
            const base64String = reader.result as string;

            const newDonation = {
                donator_name: nome,
                comprovante: base64String,
            };

            try {
                await addDonation(newDonation);
                setEnviado(true);
                setMensagemErro(null);
                setTimeout(() => {
                    window.location.reload();
                }, 3000); // Recarrega a página após 3 segundos
            } catch (error) {
                console.error('Erro ao enviar a doação:', error);
                setMensagemErro('Erro ao enviar a doação. Tente novamente.');
            }
        };

        reader.readAsDataURL(imagem);
    };

    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-center text-6xl font-bold mb-6">Sabia?</h1>
            <h2 className="text-xl font-semibold mb-2 text-center">Você pode contribuir com doações para a SOS Ocean</h2>
            <p className="mb-4 text-center">O QR Code abaixo permite que você escaneie e faça uma doação:</p>
            <div className="flex flex-wrap justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
                <form onSubmit={handleSubmit} className="w-full md:w-1/2 space-y-6 p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
                    <div className="flex flex-col space-y-4">
                        <div className="flex flex-col">
                            <label htmlFor="nome" className="text-left mb-2 font-medium">Nome do contribuinte:</label>
                            <input 
                                type="text" 
                                id="nome" 
                                value={nome} 
                                onChange={(event) => setNome(event.target.value)} 
                                required 
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-900"
                                aria-label="Nome do contribuinte"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="imagem" className="text-left mb-2 font-medium">Comprovante:</label>
                            <input 
                                type="file" 
                                accept="image/*" 
                                id="imagem" 
                                onChange={(event) => setImagem(event.target.files ? event.target.files[0] : null)} 
                                required 
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-900"
                                aria-label="Comprovante de doação"
                            />
                        </div>
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-customColor text-white py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700 transition duration-300"
                    >
                        Enviar
                    </button>
                    {enviado && <p className="mt-4 text-green-600">Enviado! Muito obrigado pela sua contribuição.</p>}
                    {mensagemErro && <p className="mt-4 text-red-600">{mensagemErro}</p>}
                </form>
                <div className="w-full md:w-1/3 flex justify-center">
                    <img 
                        src="/qr-code.png" 
                        alt="QR Code para doação" 
                        className="max-w-xs h-auto"
                    />
                </div>
            </div>
        </div>
    );
}