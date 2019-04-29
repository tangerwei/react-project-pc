import {IUser} from "./user.interface";
import { observable  } from 'mobx';
class User implements IUser{
    @observable name = '';
    @observable age = 10;
}

export default new User();