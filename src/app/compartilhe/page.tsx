"use client";
import React, { useEffect, useState } from "react";
import { getPosts, deletePost } from "@/app/services/ApiPosts";
import AdicionarPost from "@/app/actions/AddPost";
import EditarPost from "@/app/actions/Editar";
import { IPost } from "@/app/types/pages";

const PostsPage = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingPost, setEditingPost] = useState<IPost | null>(null);
    const [selectedPost, setSelectedPost] = useState<IPost | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await getPosts();
                setPosts(data);
            } catch (error) {
                console.error('Erro ao buscar postagens!', error);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    const handlePostAdded = (newPost: IPost) => {
        setPosts([...posts, newPost]);
    };

    const handleDelete = async (id: string) => {
        try {
            await deletePost(id);
            setPosts(posts.filter(post => post.id !== id));
        } catch (error) {
            console.error('Erro ao excluir postagem!', error);
        }
    };

    const handleEdit = (post: IPost) => {
        setEditingPost(post);
    };

    const handlePostEdited = (updatedPost: IPost) => {
        setPosts(posts.map(post => post.id === updatedPost.id ? updatedPost : post));
        setEditingPost(null);
    };

    const handleCancelEdit = () => {
        setEditingPost(null);
    };

    const handlePostClick = (post: IPost) => {
        setSelectedPost(post);
    };

    return (
        <section className="container mx-auto p-4">
            <h1 className="text-center font-bold text-4xl mb-4">Postagens dos nossos voluntários</h1>
            <p className="text-center text-lg font-semibold mb-8">Esta é uma aba para nossos colaboradores registrarem os momentos fortalecendo nossa ONG</p>
            {loading ? (
                <p className="text-center">Carregando...</p>
            ) : posts.length === 0 ? (
                <p className="text-center text-gray-500">Nenhuma postagem encontrada, adicione no formulário abaixo!</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {posts.map(post => (
                        <div key={post.id} className="border rounded-lg shadow-md bg-white text-center">
                            <div className="w-full h-48 overflow-hidden rounded-t-lg cursor-pointer" onClick={() => handlePostClick(post)}>
                                <img src={post.url_img} alt={`Imagem do post ${post.id}`} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-lg mt-2">{post.username}</h3>
                                <p className="text-xs text-gray-500 mb-2">{post.post_date}</p>
                                <p className="text-xs text-gray-500 mb-2">Função: {post.v_function}</p>
                                <p className="text-xs text-gray-500 mb-2">Descrição: {post.post_description}</p>
                                <div className="flex justify-center space-x-4">
                                    {selectedPost && selectedPost.id === post.id && (
                                        <>
                                            <button
                                                onClick={() => handleEdit(post)}
                                                className="bg-blue-600 text-white px-4 py-2 rounded-md"
                                            >
                                                Editar
                                            </button>
                                            <button
                                                onClick={() => handleDelete(post.id!)}
                                                className="bg-red-600 text-white px-4 py-2 rounded-md"
                                            >
                                                Excluir
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
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
