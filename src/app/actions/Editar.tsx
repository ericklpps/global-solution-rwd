import React, { useState } from "react";
import { editPost, deletePost } from "@/app/services/ApiPosts";
import { IPost } from "@/app/types/pages";

interface EditPostProps {
    post: IPost;
    onPostEdited: (updatedPost: IPost) => void;
    onCancel: () => void;
}

const EditarPost: React.FC<EditPostProps> = ({ post, onPostEdited, onCancel }) => {
    const [formData, setFormData] = useState<IPost>({ ...post });

    const handleSubmit = async () => {
        try {
            if (post.id !== undefined) {
                const updatedPost = await editPost(post.id, formData);
                alert('Post editado com sucesso');
                onPostEdited(updatedPost);
            } else {
                console.error('Erro ao editar post: ID não definido');
                alert('Erro ao editar post: ID não definido');
            }
        } catch (error) {
            console.error('Erro ao editar post', error);
            alert('Erro ao editar post');
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleDelete = async () => {
        try {
            if (post.id !== undefined) {
                await deletePost(post.id);
                alert('Post excluído com sucesso');
                // Adicione aqui qualquer ação adicional que desejar após a exclusão
            } else {
                console.error('Erro ao excluir post: ID não definido');
                alert('Erro ao excluir post: ID não definido');
            }
        } catch (error) {
            console.error('Erro ao excluir post', error);
            alert('Erro ao excluir post');
        }
    };

    return (
        <div className="flex items-center justify-center">
            {/* POST */}
            <div className="border border-gray-200 p-4 rounded-lg relative">
                <img 
                    src={post.url_img} 
                    alt={`Imagem do post ${post.id}`} 
                    className="w-full h-auto rounded-lg mb-4" 
                />
                <h1 className="text-lg font-bold">{post.username}</h1>
                <p className="text-sm text-gray-500 mb-4">{post.post_description}</p>

                {/* Botoes de editar e excluir */}
                <div className="flex justify-center mt-2">
                    <button 
                        onClick={() => handleSubmit()} 
                        className="bg-green-500 text-white px-4 py-2 mr-2"
                    >
                        Editar
                    </button>
                    <button 
                        onClick={() => handleDelete()} 
                        className="bg-yellow-500 text-white px-4 py-2"
                    >
                        Excluir
                    </button>
                </div>
            </div>

            {/* Formulário de Edição */}
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold mb-4">Editar Post</h1>
                <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="w-full max-w-md">
                    {/* Input fields */}
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username:</label>
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
                        <label htmlFor="date" className="block text-gray-700 font-bold mb-2">Data:</label>
                        <input
                            id="date"
                            type="date"
                            name="date"
                            value={formData.post_date}
                            onChange={handleChange}
                            className="border border-gray-600 px-4 py-2 rounded-md w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="image" className="block text-gray-700 font-bold mb-2">URL da Imagem:</label>
                        <input
                            id="image"
                            type="text"
                            name="image"
                            value={formData.url_img}
                            onChange={handleChange}
                            className="border border-gray-600 px-4 py-2 rounded-md w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="comment" className="block text-gray-700 font-bold mb-2">Comentário:</label>
                        <input
                            id="comment"
                            type="text"
                            name="comment"
                            value={formData.post_description}
                            onChange={handleChange}
                            className="border border-gray-600 px-4 py-2 rounded-md w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="role" className="block text-gray-700 font-bold mb-2">Papel:</label>
                        <input
                            id="role"
                            type="text"
                            name="role"
                            value={formData.v_function}
                            onChange={handleChange}
                            className="border border-gray-600 px-4 py-2 rounded-md w-full"
                            required
                        />
                    </div>
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded-md mr-2" type="submit">Salvar</button>
                    <button className="bg-gray-500 text-white px-4 py-2 rounded-md" type="button" onClick={onCancel}>Cancelar</button>
                </form>
            </div>
        </div>
    );
};

export default EditarPost;
