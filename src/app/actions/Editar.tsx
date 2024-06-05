"use client"
import React, { useState } from "react";
import { editPost } from "@/app/services/ApiPosts";
import { IPost } from "@/app/types/pages";

const EditarPost = ({ post, onPostEdited, onCancel }) => {
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
                    <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Nome de Usuário:</label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="border border-gray-300 px-4 py-2 rounded-md w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="post_date" className="block text-gray-700 font-bold mb-2">Data:</label>
                    <input
                        id="post_date"
                        type="date"
                        name="post_date"
                        value={formData.post_date}
                        onChange={handleChange}
                        className="border border-gray-300 px-4 py-2 rounded-md w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="url_img" className="block text-gray-700 font-bold mb-2">URL da Imagem:</label>
                    <input
                        id="url_img"
                        type="text"
                        name="url_img"
                        value={formData.url_img}
                        onChange={handleChange}
                        className="border border-gray-300 px-4 py-2 rounded-md w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="post_description" className="block text-gray-700 font-bold mb-2">Descrição:</label>
                    <textarea
                        id="post_description"
                        name="post_description"
                        value={formData.post_description}
                        onChange={handleChange}
                        className="border border-gray-300 px-4 py-2 rounded-md w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="v_function" className="block text-gray-700 font-bold mb-2">Função:</label>
                    <input
                        id="v_function"
                        type="text"
                        name="v_function"
                        value={formData.v_function}
                        onChange={handleChange}
                        className="border border-gray-300 px-4 py-2 rounded-md w-full"
                        required
                    />
                </div>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md w-full" type="submit">Salvar</button>
                <button className="bg-gray-500 text-white px-4 py-2 rounded-md w-full mt-2" onClick={onCancel}>Cancelar</button>
            </form>
        </div>
    );
};

export default EditarPost;
