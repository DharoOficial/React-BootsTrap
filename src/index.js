import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from '../src/components/pages/home';
import Cadastrar from '../src/components/pages/cadastrar';
import Login from '../src/components/pages/login';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const routing = ( 
  <Router>
    <div>
        <Switch>
          <Route exact path ='/' component={Home}/>
          <Route path ='/cadastrar' component={Cadastrar}/>
          <Route path ='/login' component={Login}/>
        </Switch>
    </div>
  </Router>
)

ReactDOM.render(
  routing ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
