import React, {Component} from 'react';
import './Menu.css';
import ToggleMenu from './ToggleMenu';


class Menu extends Component {
    constructor(props, context){
        super(props, context);
        this.state= {
            visible : false
        };

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    handleMouseDown(e){
        this.toggleMenu();

        console.log("clicked");
        e.stopPropagation();
    }

    toggleMenu(){
        this.setState({
            visible : !this.state.visible
        });
    }
    render() {
        return (
            <div className="Menu">

                <div className="icon-table" onMouseDown={this.handleMouseDown}>
                    <i className="fas fa-bars icon"></i>
                </div>
                <ToggleMenu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible}/>

            </div>

        );
    }
}

export default Menu;