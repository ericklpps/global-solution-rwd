import React, { useState } from "react";
import { editPost } from "@/app/services/ApiPosts";
import { IPost } from "@/app/types/pages";

interface EditarPostProps {
    post: IPost;
    onPostEdited: (post: IPost) => void;
    onCancel: () => void;
}

const EditarPost: React.FC<EditarPostProps> = ({ post, onPostEdited, onCancel }) => {
    const [formData, setFormData] = useState<IPost>({ ...post });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const updatedPost = await editPost(formData.id!, formData);
            alert('Post editado com sucesso');
            onPostEdited(updatedPost);
        } catch (error) {
            console.error('Erro ao editar post', error);
            alert('Erro ao editar post');
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
            <h1 className="text-2xl font-bold mb-4">Editar Post</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="nomeUsuario" className="block text-gray-700 font-bold mb-2">Nome de Usuário:</label>
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
                    <label htmlFor="dataPublicacao" className="block text-gray-700 font-bold mb-2">Data:</label>
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
                    <label htmlFor="descricaoPost" className="block text-gray-700 font-bold mb-2">Descrição:</label>
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
                <button className="bg-red-500 text-white px-4 py-2 rounded-md w-full" type="submit">Salvar</button>
                <button className="bg-gray-500 text-white px-4 py-2 rounded-md w-full mt-2" onClick={onCancel} type="button">Cancelar</button>
            </form>
        </div>
    );
};

export default EditarPost;
