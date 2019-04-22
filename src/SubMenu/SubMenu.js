import React, { Component } from 'react';
import './SubMenu.css';
import SubSubMenu from './SubSubMenu';

class SubMenu extends Component {
    
    render() {
        const {submenutitles, onClick} = this.props;
        
        const subMenuList = submenutitles.map( submenutitle => (
            <SubSubMenu key={submenutitle.id} done={submenutitle.done} title={submenutitle.title} length={submenutitles.length} onClick={()=>onClick(submenutitle.id)}/>
        ));
        return (
            <div className="subMenu">
                {subMenuList}
            </div>
        );
    }
}

export default SubMenu;