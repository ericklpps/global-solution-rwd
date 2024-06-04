"use client"
import React, { useEffect, useState } from "react";
import { getPosts, deletePost } from "@/app/services/ApiPosts";
import { IPost } from "@/app/types/pages";
import AdicionarPost from "@/app/actions/AddPost";
import EditarPost from "@/app/actions/Editar";

const PostsPage: React.FC = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingPost, setEditingPost] = useState<IPost | null>(null);
    const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

    // Função para carregar os posts do localStorage
    useEffect(() => {
        const postsFromStorage = JSON.parse(localStorage.getItem('posts') || '[]');
        setPosts(postsFromStorage);
        setLoading(false);
    }, []);

    // Função para salvar os posts no localStorage
    const savePostsToLocalStorage = (posts: IPost[]) => {
        localStorage.setItem('posts', JSON.stringify(posts));
    };

    // Função para adicionar um novo post
    const handlePostAdded = (newPost: IPost) => {
        const updatedPosts = [...posts, newPost];
        setPosts(updatedPosts);
        savePostsToLocalStorage(updatedPosts);
    };

    // Função para excluir um post
    const handleDelete = async (id: number) => {
        try {
            await deletePost(id);
            const updatedPosts = posts.filter(post => post.id !== id);
            setPosts(updatedPosts);
            savePostsToLocalStorage(updatedPosts);
            setSelectedPostId(null); // Limpar a seleção ao excluir
        } catch (error) {
            console.error('Erro ao excluir postagem!', error);
        }
    };

    // Função para editar um post
    const handleEdit = (post: IPost) => {
        setEditingPost(post);
    };

    // Função para atualizar um post editado
    const handlePostEdited = (updatedPost: IPost) => {
        const updatedPosts = posts.map(post => post.id === updatedPost.id ? updatedPost : post);
        setPosts(updatedPosts);
        savePostsToLocalStorage(updatedPosts);
        setEditingPost(null);
    };

    // Função para cancelar a edição
    const handleCancelEdit = () => {
        setEditingPost(null);
    };

    // Função para selecionar um post
    const handleSelectPost = (id: number) => {
        setSelectedPostId(id === selectedPostId ? null : id); // Alternar seleção
    };

    return (
        <section className="flex justify-center items-center flex-col">
            <br/>
            <h1 className="text-center font-bold text-4xl mb-8">Registre seu momento de ajuda abaixo</h1>
            {loading ? (
                <p>Carregando...</p>
            ) : posts.length === 0 ? (
                <p>Sem postagens para exibir, adicione abaixo</p>
            ) : (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map(post => (
                        <div key={post.id} className="border border-gray-200 p-4 rounded-lg relative text-center">
                            <img 
                                src={post.image} 
                                alt={`Imagem do post ${post.id}`} 
                                className="w-full h-auto rounded-lg mb-4 cursor-pointer" 
                                onClick={() => handleSelectPost(post.id!)} 
                            />
                            <p className="text-lg font-bold">Usuario: {post.username}</p>
                            <p className="text-sm text-gray-500 mb-2">Data: {post.date}</p>
                            <p className="text-sm text-gray-500 mb-4">{post.comment}</p>
                            <p className="text-sm text-gray-500 mb-4">{post.role}</p>
                            {selectedPostId === post.id && (
                                <div>
                                    <button 
                                        onClick={() => handleEdit(post)} 
                                        className="bg-green-500 text-white px-4 py-2 mr-2"
                                    >
                                        Editar
                                    </button>
                                    <button 
                                        onClick={() => handleDelete(post.id!)} 
                                        className="bg-yellow-500 text-white px-4 py-2"
                                    >
                                        Excluir
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
            <br/>
            <AdicionarPost onPostAdded={handlePostAdded} />
            {editingPost && (
                <EditarPost 
                    post={editingPost} 
                    onPostEdited={handlePostEdited} 
                    onCancel={handleCancelEdit}
                />
            )}
        </section>
    );
};

export default PostsPage;
