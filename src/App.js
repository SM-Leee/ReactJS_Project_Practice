import React, { Component } from 'react';
import Header from './Header';
import SubMenu from './SubMenu';
import Body from './Body';
import TextBoxList from './TextBoxList';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
          <Header />
          <SubMenu/>
          <Body/>
          <TextBoxList/>
      </div>
    );
  }
}

export default App;
