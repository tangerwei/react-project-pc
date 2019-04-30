import { IOpts } from "./request.interface";
import axios, { AxiosRequestConfig } from "axios";
import config from "./server.json";

const httpAxios = axios.create({
    baseURL: config[process.env.NODE_ENV].baseURL,
    timeout: 8000
})

const Request = async<T> (opts: IOpts): Promise<T> => {
    return new Promise<T>((resolve, reject) => {
        const reqOpts: AxiosRequestConfig = {
            method: opts.type || "get",
            url: opts.url,
            headers: {'content-type': 'application/json'},
            data: opts.data || {}
        }
        httpAxios.request(reqOpts).then((res: any) => {
            if(res.code === 200){
                const resbody: T = res.body;
                resolve(resbody);
            }else{
                reject({
                    code: res.code,
                    msg: res.msg
                })
            }
        })
    })
}

export default Request;