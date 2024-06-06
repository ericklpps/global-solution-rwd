import axios from "axios";
import { IPost } from "@/app/types/pages";

const api = axios.create({
    baseURL: 'http://localhost:5000/',
});

export const getPosts = async (): Promise<IPost[]> => {
    const response = await api.get('/posts');
    return response.data;
};

export const addPost = async (post: IPost) => {
    const response = await api.post('/posts', post);
    return response.data;
};

export const deletePost = async (id: string) => {
    await api.delete(`/posts/${id}`);
};

export const editPost = async (id: string, updatedPost: IPost) => {
    const response = await api.put(`/posts/${id}`, updatedPost);
    return response.data;
};