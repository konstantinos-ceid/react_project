import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Create from './Create';
import Update from './Update';


const routing = (
  <BrowserRouter>
    <div>
      <h3>Employee List by Konstantinos Gkilas</h3>
      <ul>
        
        
        <li>
          <Link to="/create">Add Employee</Link>
        </li>
        
      </ul>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path= "/update" component={Update}/>
        <Route path="/create" component={Create} />
      </Switch>
    </div>
  </BrowserRouter>
)
ReactDOM.render(routing, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
