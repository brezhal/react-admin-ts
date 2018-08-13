import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import BaseLayout from '../Layouts/BaseLayout';
import Login from '../Views/Account/Login';

export class Layout extends React.Component {
  public render() {
    return (
      <Switch>
        <Route path="/account/login" component={Login}/>
        <Route path="/" component={BaseLayout}/>
      </Switch>
    )
  }
}

export const routes = (
  <div>
    <Switch>
      <Route path="/" component={Layout} />
    </Switch>
  </div>
)