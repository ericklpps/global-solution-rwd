import React, { useState } from "react";
import { addPost } from "@/app/services/ApiPosts";
import { IPost } from "@/app/types/pages";

interface AdicionarPostProps {
    onPostAdded: (post: IPost) => void;
}

const AdicionarPost: React.FC<AdicionarPostProps> = ({ onPostAdded }) => {
    const [formData, setFormData] = useState<IPost>({
        id: '', // Campo para o título (ID)
        nomeUsuario: '',
        dataPublicacao: '',
        urlImagem: '',
        descricaoPost: '',
        funcaoVoluntario: ''
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            if (!formData.id || !formData.nomeUsuario || !formData.dataPublicacao || !formData.urlImagem || !formData.descricaoPost || !formData.funcaoVoluntario) {
                console.error('Todos os campos são obrigatórios!');
                return;
            }

            await addPost(formData);
            alert('Post adicionado com sucesso');
            setFormData({
                id: '', // Limpa o campo de título (ID)
                nomeUsuario: '',
                dataPublicacao: '',
                urlImagem: '',
                descricaoPost: '',
                funcaoVoluntario: ''
            });
            onPostAdded(formData);
        } catch (error) {
            console.error('Erro ao adicionar post', error);
            alert('Erro ao adicionar post');
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Adicione uma postagem</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="id" className="block text-gray-700 font-bold mb-2">Título:</label>
                    <input
                        id="id"
                        type="text"
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                        className="border border-gray-300 px-4 py-2 rounded-md w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="nomeUsuario" className="block text-gray-700 font-bold mb-2">Usuário:</label>
                    <input
                        id="nomeUsuario"
                        type="text"
                        name="nomeUsuario"
                        value={formData.nomeUsuario}
                        onChange={handleChange}
                        className="border border-gray-300 px-4 py-2 rounded-md w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="dataPublicacao" className="block text-gray-700 font-bold mb-2">Data de ajuda:</label>
                    <input
                        id="dataPublicacao"
                        type="date"
                        name="dataPublicacao"
                        value={formData.dataPublicacao}
                        onChange={handleChange}
                        className="border border-gray-300 px-4 py-2 rounded-md w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="urlImagem" className="block text-gray-700 font-bold mb-2">URL da Imagem:</label>
                    <input
                        id="urlImagem"
                        type="text"
                        name="urlImagem"
                        value={formData.urlImagem}
                        onChange={handleChange}
                        className="border border-gray-300 px-4 py-2 rounded-md w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="descricaoPost" className="block text-gray-700 font-bold mb-2">Faça um comentário:</label>
                    <textarea
                        id="descricaoPost"
                        name="descricaoPost"
                        value={formData.descricaoPost}
                        onChange={handleChange}
                        className="border border-gray-300 px-4 py-2 rounded-md w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="funcaoVoluntario" className="block text-gray-700 font-bold mb-2">Função:</label>
                    <input
                        id="funcaoVoluntario"
                        type="text"
                        name="funcaoVoluntario"
                        value={formData.funcaoVoluntario}
                        onChange={handleChange}
                        className="border border-gray-300 px-4 py-2 rounded-md w-full"
                        required
                    />
                </div>
                <button className="bg-customColor text-white px-4 py-2 rounded-md w-full" type="submit">Adicionar Post</button>
            </form>
        </div>
    );
};

export default AdicionarPost;
