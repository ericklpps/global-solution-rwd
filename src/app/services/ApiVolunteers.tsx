// ApiVolunteers.ts
import axios from "axios";
import { IVolunteer } from "@/app/types/pages";

const api = axios.create({
    baseURL: 'http://localhost:8080/',
});

export const addVolunteer = async (volunteer: IVolunteer) => {
    // Remover todos os caracteres não numéricos do número de telefone para registrar no api
    const phone = volunteer.telefone.replace(/\D/g, '');

    const response = await api.post('/voluntarios', { ...volunteer, phone });
    return response.data;
};
