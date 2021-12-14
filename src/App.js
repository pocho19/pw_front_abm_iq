import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home";
import Tutorial from "./components/Tutorial";
import Register from "./components/Register";
import Profile from "./components/Profile";
import System from "./components/system";
import Elements from "./components/Elements";
import MyHouse from "./components/MyHouse";
import ElementsDetail from "./components/ElementsDetail";
import Login from "./components/Login";


function AuthRoute(props) {
  return null;
}

function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/tutorial">Tutorial</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/profile">Perfil</Link>
              </li>
              <li>
                <Link to="/system">Aplicación</Link>
              </li>
              <li>
                <Link to="/elements">Elementos</Link>
              </li>
              <li>
                <Link to="/myhouse">Mi Casa</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact={true} path="/home">
              <Home />
            </Route>
            <Route exact={true} path="/tutorial">
              <Tutorial />
            </Route>
            <Route exact={true} path="/login">
              <Login />
            </Route>
            <Route exact={true} path="/register">
              <Register />
            </Route>
            <Route exact={true} path="/profile">
              <Profile />
            </Route>
            {/*<AuthRoute exact={true} path="/profile/id">*/}
            {/*  <Profile />*/}
            {/*</AuthRoute>*/}
            <Route exact={true} path="/system">
              <System />
            </Route>
            <Route exact={true} path="/elements/:id">
              <ElementsDetail
                  name={'Elemento de prueba'}
                  description={'Este equipo tiene xxxx cosas,\n' +
                  'equivale a tanta sustentabilidad'}
              />
            </Route>
            <Route exact={true} path="/elements">
              <Elements />
            </Route>
            <Route exact={true} path="/myhouse">
              <MyHouse />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
