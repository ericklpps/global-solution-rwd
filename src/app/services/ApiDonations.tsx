import axios from 'axios';
import { IDonation } from '@/app/types/pages';

const api = axios.create({
    baseURL: 'http://localhost:8080/',
});

export const getDonations = async (): Promise<IDonation[]> => {
    const response = await api.get('/doacoes');
    return response.data;
};

export const addDonation = async (donation: IDonation) => {
    const response = await api.post('/doacoes', donation);
    return response.data;
};