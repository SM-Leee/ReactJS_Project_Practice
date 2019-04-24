import React, { Component } from 'react';
import './ToggleItem.css';

class ToggleItem extends Component {
    render() {
        const { title } = this.props;
        return (
            <div className='ToggleItem-table'>
            <div className='ToggleItem'>
                {title}
            </div>
            </div>
        );
    }
}

export default ToggleItem;