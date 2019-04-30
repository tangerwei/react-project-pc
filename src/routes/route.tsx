import * as React from "react";
import asyncComponent from "../common/asyncComponent";
import { Route, Switch } from "react-router-dom";

export default (props: any) =>
    (
    <Switch>
        <Route
            path="/"
            exact={true}
            component={asyncComponent(() => {return import("../pages/login");})}
            props={props}
        />
        <Route
            path="/notFound"
            component={asyncComponent(() => {return import("../pages/notFound")})}
            props={props}
        />
    </Switch>)