import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, Favorites } from "./routes";
import Header from "./components/header";
import { AuthProvider } from "./auth";
import PrivateRoute from "./PrivateRoute";
import SignUp from "./SignUp";

function App() {
  return (
    <div className="App">
      <Header />
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute path="/favorites" component={Favorites} />
            <Route path="/signup" component={SignUp} />
            <Route path="/" render={() => <div>404</div>} />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
