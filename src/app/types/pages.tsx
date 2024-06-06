export interface IPost {
    id?: string,
    username: string,
    post_date: string,
    url_img: string,
    post_description: string,
    v_function: string
}
export interface IUser {
    id?: string,
    user_name: string,
    lastname: string,
    cep: string,
    email: string,
    password: string,
    date_of_birth: string,
    address: IAddress
}
export interface IVolunteer{
    id?: string,
    volunteer_name: string, 
    phone: string,
    collect_point: string,
    user_function: string
}
export interface IDonations{
    id?:string,
    donator_name: string,
    comprovante : string
}
export interface IAddress {
    logradouro: string;
    complemento?: string;
    bairro: string;
    localidade: string;
    uf: string;
}