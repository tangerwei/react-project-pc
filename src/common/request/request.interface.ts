export interface IOpts {
    url: string;
    type?: "get" | "post";
    data?: any;
}

export interface IRequest<T>{
    body: T
}