import React, { Component } from 'react';
import './Header.css'
import Menu from './Menu';
import Title from './Title';

class Header extends Component {
    render() {
        return (
            <div className="header">
            <Menu/>
            <Title/>
            </div>
        );
    }
}

export default Header;