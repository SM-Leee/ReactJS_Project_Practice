import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './SubSubMenu.css';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

class SubSubMenu extends Component {    
    render() {
        const { title, length, onClick, done } = this.props;
        
        const width = (100 / length) + '%';

        const style = {
            width: width
        }
        return (
            
             <div className={cn('SubSubMenu', { done })} style={style} onClick={onClick}>
                 <div className={cn('Sub')} readOnly>
                     <span>{title}</span>
                 </div>
             </div >
        );
    }
}

SubSubMenu.propTypes = {
    title: PropTypes.string.isRequired
}

export default SubSubMenu;