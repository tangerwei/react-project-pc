import asyncComponent from "../common/asyncComponent";
import {Route, Switch} from "react-router-dom"
const ComponentLogin = import("../pages/login");

const Login = asyncComponent(() => ComponentLogin);

export default ({childProps} => (
    
))