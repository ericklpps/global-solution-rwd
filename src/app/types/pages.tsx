export interface IDonation {
    id?: number;
    nomeDoador: string;
    comprovante: string;
}

export interface IPost {
    id?: string;
    nomeUsuario: string;
    dataPublicacao: string;
    urlImagem: string;
    descricaoPost: string;
    funcaoVoluntario: string;
}

export interface IUser {
    id?: string;
    nomeUsuario: string;
    sobrenome: string;
    cep: string;
    email: string;
    senha: string;
    dataNascimento: string;
}

export interface IVolunteer {
    id?: string;
    nomeVoluntario: string;
    telefone: string;
    pontoColeta: string;
    funcaoUsuario: string;
}

export interface IAddress {
    logradouro: string;
    complemento?: string;
    bairro: string;
    localidade: string;
    uf: string;
}