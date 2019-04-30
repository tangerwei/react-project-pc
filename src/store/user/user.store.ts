import { observable, action  } from 'mobx';
import {IUser} from "./user.interface";
import * as userApi from "./user.api";

class User implements IUser{
    @observable username = '';
    @observable password = '';

    @action
    submitLogin = async () => {
        let token = '';
        try {
            token = await userApi.submitLogin<string>(this.username, this.password);
        } catch (e) {
            console.error("登录失败")
        }
        return token;
    }

    @action
    clearPassword = () => {
        this.password = "";
    }

    @action
    logOut = async () => {
        try {
            await userApi.logOut();
        } catch (e) {
            console.error("注销失败")
        }
        // 无论是否失败都需要清除本地用户数据
    }
}

export default new User();