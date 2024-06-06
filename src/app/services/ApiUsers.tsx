// ApiUsers.ts
import axios from 'axios';
import { IUser } from '@/app/types/pages';

const api = axios.create({
  baseURL: 'http://localhost:5000/',
});

export const loginUser = async (email: string, password: string): Promise<IUser | null> => {
  try {
    const response = await api.get<IUser[]>('/users', {
      params: { email, password },
    });

    // Verifica se a resposta possui algum usuário e retorna o primeiro encontrado
    if (response.data.length > 0) {
      return response.data[0];
    } else {
      return null;
    }
  } catch (error) {
    throw new Error('Error while fetching user data');
  }
};

export const addUser = async (userData: IUser): Promise<IUser | null> => {
  try {
    const response = await api.post<IUser>('/users', userData);
    return response.data;
  } catch (error) {
    throw new Error('Error ao adicionar usuário');
  }
};
