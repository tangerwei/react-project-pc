import React from 'react';
import {inject, observer} from 'mobx-react';
import { ILoginProps } from "./login.interface";

@inject("user")
@observer
class Login extends React.Component<ILoginProps>{
    render(){
        return (
            <div>{this.props.user.age}</div>
        )
    }
}

export default Login;