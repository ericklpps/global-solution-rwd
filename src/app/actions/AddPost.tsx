"use client"
import React, { useState } from "react";
import { addPost } from "@/app/services/ApiPosts";
import { IPost } from "@/app/types/pages";

const AdicionarPost = ({ onPostAdded }) => {
    const [formData, setFormData] = useState<IPost>({
        username: '',
        post_date: '',
        url_img: '',
        post_description: '',
        v_function: ''
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const newPost = await addPost(formData);
            alert('Post adicionado com sucesso');
            setFormData({
                username: '',
                post_date: '',
                url_img: '',
                post_description: '',
                v_function: ''
            });
            onPostAdded(newPost);
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
                    <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Usuário:</label>
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
                    <label htmlFor="post_date" className="block text-gray-700 font-bold mb-2">Data de ajuda:</label>
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
                    <label htmlFor="post_description" className="block text-gray-700 font-bold mb-2">Faça um comentário:</label>
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
                <button className="bg-customColor text-white px-4 py-2 rounded-md w-full" type="submit">Adicionar Post</button>
            </form>
        </div>
    );
};

export default AdicionarPost;
