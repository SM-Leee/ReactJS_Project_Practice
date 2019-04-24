import React, { Component } from 'react';
import './ToggleMenu.css';
import styles from './ToggleMenu.css';
import classNames from 'classnames/bind';
import ToggleItem from './ToggleItem';
import ToggleSubItem from './ToggleSubItem';

const cn = classNames.bind(styles);

class ToggleMenu extends Component {
    onclickhandle = () => {

    }
    render() {
        
        var visibility = "hide";

        if(this.props.menuVisibility){
            visibility = "show";
        }
        return (
            <div className={cn('ToggleMenu', visibility)} onMouseDown={this.props.handleMouseDown}>
                <ToggleItem title="Toggle Menu"/>
                <ToggleSubItem title="회계관리" onclick={this.onclickhandle}/>
                <ToggleSubItem title="전표관리"/>
                <ToggleSubItem title="금융"/>
            </div>
        );
    }
}

export default ToggleMenu;