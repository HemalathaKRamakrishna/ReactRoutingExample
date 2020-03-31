import React from "react";

import "./styles.css";
import { Route, Redirect, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Users } from "./pages/Users";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { Admin } from "./pages/Admin";
import { Header } from "./Header";
import { NotFound } from "./pages/NotFound";
import { User } from "./pages/User";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  login = () => {
    this.setState({ isLoggedIn: true });
  };

  logout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/users/:id" component={User} />
          <Route path="/users" component={Users} />
          <Route path="/contact" component={Contact} />
          <Route path="/login">
            {this.state.isLoggedIn ? (
              <Redirect to="/admin" />
            ) : (
              <Login onClick={this.login} />
            )}
          </Route>
          <Route path="/admin">
            {this.state.isLoggedIn ? (
              <Admin onClick={this.logout} />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
