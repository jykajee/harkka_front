import React, { Component } from 'react';
import './App.css';
import Muistiinpanot2 from './components/Muistiinpanot2.js';
import NavBar from './components/NavBar.js';
import {Provider} from 'react-redux';
import configureStore from './configureStore';
import {Switch, Route} from 'react-router-dom';
import LoginForm from './components/LoginForm';


class App extends Component {
  
  render() {
    const store = configureStore();
    
    return (
      <Provider store={store}>
        <div className="App">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
          integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
          crossorigin="anonymous"
          />
          <header className="App-header">
            <img alt="beautiful bill murray" className="BillMurray" src="https://www.fillmurray.com/150/150"/>
            <div className="NavBar" >
            <NavBar  />
            </div>
            
          </header>

          <Switch>
            <Route exact path="/" render={() =>(
              <Muistiinpanot2 className="Muistiinpanot" />
            )} />
            
            <Route path="/login" render={() =>(
              <LoginForm />
            )} />
          </Switch>
          
        </div>
      </Provider>
    );
  }
}

export default App;
