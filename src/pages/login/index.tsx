import React, { ChangeEvent } from 'react';
import { inject, observer } from 'mobx-react';
import { FormattedMessage } from 'react-intl';
import { ILoginProps } from "./login.interface";

@inject("user")
@observer
class Login extends React.Component<ILoginProps>{
    handeChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        this.props.user.username = e.target.value;
    }
    handeChangePwd = (e: ChangeEvent<HTMLInputElement>) => {
        this.props.user.password = e.target.value;
    }
    handeLogin = () => {
        this.props.user.submitLogin();
    }
    render() {
        return (
            <div className="page-user">
                <div>
                    <div>
                        <FormattedMessage
                            id="hello"
                        />
                    </div>
                    <input type="text" placeholder="用户名" onChange={this.handeChangeName} value={this.props.user.username} />
                </div>
                <div>
                    <input type="text" placeholder="密码" onChange={this.handeChangePwd} value={this.props.user.password} />
                </div>
                <div>
                    <div onClick={this.handeLogin}>登录</div>
                </div>
            </div>
        )
    }
}

export default Login;