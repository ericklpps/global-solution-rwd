export interface IPost {
    id?: number
    username: string;
    post_date: string;
    url_img: string;
    post_description: string;
    v_function: string
}
export interface IUser{
    id?: number,
    user_name: string,
    lastname: string,
    email: string,
    password: string,
    date_of_birth: string
}