import axios from "axios";
import { IPost } from "@/app/types/pages";

const api = axios.create({
    baseURL: 'http://localhost:8080/',
});

export const getPosts = async (): Promise<IPost[]> => {
    const response = await api.get('/publicacoes');
    return response.data;
};

export const addPost = async (post: IPost) => {
    const response = await api.post('/publicacoes', post);
    return response.data;
};

export const deletePost = async (id: string) => {
    await api.delete(`/publicacoes/${id}`);
};

export const editPost = async (id: string, updatedPost: IPost) => {
    const response = await api.put(`/publicacoes/${id}`, updatedPost);
    return response.data;
};