"use client"
import React, { useState } from "react";
import { addPost } from "@/app/services/ApiPosts";
import { IPost } from "@/app/types/pages";

interface AdicionarPostProps {
    onPostAdded: (newPost: IPost) => void;
}

const AdicionarPost: React.FC<AdicionarPostProps> = ({ onPostAdded }) => {
    const [formData, setFormData] = useState<IPost>({ username: '', image: '', comment: '', role: '', date: '' });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            // Since the JSON structure does not include an ID field,
            // we don't need to include it in the form data
            const { id, ...postData } = formData;
            const newPost = await addPost(postData);
            alert('Post adicionado com sucesso');
            setFormData({ username: '', image: '', comment: '', role: '', date: '' });
            onPostAdded(newPost);
        } catch (error) {
            console.error('Erro ao adicionar post', error);
            alert('Erro ao adicionar post');
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    return (
        <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-2xl font-bold mb-4">Adicionar Post</h1>
            <form onSubmit={handleSubmit} className="w-full max-w-md">
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Usuario:</label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="border border-gray-600 px-4 py-2 rounded-md w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Data de ação:</label>
                    <input
                        id="date"
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="border border-gray-600 px-4 py-2 rounded-md w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-gray-700 font-bold mb-2">URL da imagem:</label>
                    <input
                        id="image"
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        className="border border-gray-600 px-4 py-2 rounded-md w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="comment" className="block text-gray-700 font-bold mb-2">Faça um comentário:</label>
                    <input
                        id="comment"
                        type="text"
                        name="comment"
                        value={formData.comment}
                        onChange={handleChange}
                        className="border border-gray-600 px-4 py-2 rounded-md w-full"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="role" className="block text-gray-700 font-bold mb-2">Coletor ou Receptor?:</label>
                    <input
                        id="role"
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="border border-gray-600 px-4 py-2 rounded-md w-full"
                        required
                    />
                </div>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md" type="submit">Adicionar Postagem</button>
            </form>
        </div>
    );
};

export default AdicionarPost;
