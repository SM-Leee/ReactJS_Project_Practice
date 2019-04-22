import React, { Component } from 'react';
import Header from './Header';
import SubMenu from './SubMenu';
import Body from './Body';
import './App.css';

class App extends Component {
  state = {
    submenutitles: [
      { id: 0, title: '현재 자산', done: true },
      { id: 1, title: '기간별', done: false },
      { id: 2, title: '전표입력', done: false },
      { id: 3, title: '예시', done: false }
    ]
  }

  handleClick = (id) => {

    const { submenutitles } = this.state;

    submenutitles.map((submenutitle) => {
      if (submenutitle.done === true) {
        submenutitle.done = false;
      }
      return null;
    });

    const index = submenutitles.findIndex(submenutitle => submenutitle.id === id);

    const toggled = {
      ...submenutitles[index],
      done: true
    };

    this.setState({
      submenutitles: [
        ...submenutitles.slice(0, index),
        toggled,
        ...submenutitles.slice(index + 1, submenutitles.length)
      ]
    })

    console.log(submenutitles);
  }
  render() {
    const { submenutitles } = this.state;

    return (
      <div className="App">
        <Header />
        <SubMenu submenutitles={submenutitles} onClick={this.handleClick} />
        <Body>
        </Body>
      </div>
    );
  }
}

export default App;
