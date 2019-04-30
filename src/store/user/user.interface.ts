export interface IUser{
    username: string;
    password: string;
    submitLogin: () => Promise<string>
}