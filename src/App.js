import React, { Component } from 'react';
import './App.css';
import Muistiinpanot2 from './Muistiinpanot2.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import muistiinpanoApp from './reducers/reducers';
import configureStore from './configureStore';


class App extends Component {
  
  render() {
    const store = configureStore();
    //const store = createStore(muistiinpanoApp);
    
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

            <Muistiinpanot2 className="Muistiinpanot" />
            
            <img alt="beautiful bill murray" className="billMurray" src="https://www.fillmurray.com/150/150"/>

          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
