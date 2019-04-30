import request from "../../common/request/request";
import { IOpts } from "../../common/request/request.interface";


export const submitLogin = <T> (username:string, password: string) => {
    const opts: IOpts = {
        url: "/login",
        type: "post",
        data:{
            username,
            password
        }
    };
    return request<T>(opts)
}

export const logOut = () => {
    const opts: IOpts = {
        url: "/logout"
    };
    return request(opts)
}