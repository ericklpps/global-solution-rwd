import axios from 'axios';
import { IDonations } from '@/app/types/pages';

const api = axios.create({
    baseURL: 'http://localhost:5000/',
});

export const getDonations = async (): Promise<IDonations[]> => {
    const response = await api.get('/donations');
    return response.data;
};

export const addDonation = async (donation: IDonations) => {
    const response = await api.post('/donations', donation);
    return response.data;
};