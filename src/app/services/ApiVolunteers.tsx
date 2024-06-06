// ApiVolunteers.ts
import axios from "axios";
import { IVolunteer } from "@/app/types/pages";

const api = axios.create({
    baseURL: 'http://localhost:5000/',
});

export const addVolunteer = async (volunteer: IVolunteer) => {
    // Remover todos os caracteres não numéricos do número de telefone para registrar no api
    const phone = volunteer.phone.replace(/\D/g, '');

    const response = await api.post('/volunteers', { ...volunteer, phone });
    return response.data;
};
