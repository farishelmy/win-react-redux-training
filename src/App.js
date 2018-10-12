import React, { Component } from 'react';
import {Provider} from 'react-redux'
import store from './store'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Home from './Components/Home'
import NavigationBar from './Components/NavigationBar'



class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
      <NavigationBar/>        
        <Home/>        
      </div>
      </Provider>
    );
  }
}

export default App;
