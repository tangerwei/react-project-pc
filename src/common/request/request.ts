import { IOpts } from "./request.interface";
import axios from "axios";
import { reject } from "q";

const Request = async<T> (opts: IOpts): Promise<T> => {
    return new Promise<T>((resolve) => {
        const config = {
            type: opts.type || "get",
            url: opts.url,
            data: opts.data || {}
        }
        axios(config).then((res: any) => {
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