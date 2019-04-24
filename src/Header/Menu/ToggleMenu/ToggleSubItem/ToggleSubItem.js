import React, { Component } from 'react';
import './ToggleSubItem.css';

class ToggleSubItem extends Component {
    render() {
        return (
            <div className="ToggleSubItem-table">
            <div className='ToggleSubItem'>
                {this.props.title}
            </div>
            </div>
        );
    }
}

export default ToggleSubItem;