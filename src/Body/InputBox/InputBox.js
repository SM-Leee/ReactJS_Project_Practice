import React, { Component } from 'react';
import './InputBox.css';
import styles from './InputBox.css';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

class InputBox extends Component {
    
    render() {
        const {width, height} = this.props;
        const long =  "long";
        
        // eslint-disable-next-line eqeqeq
        const widthCol = ((width == long)? 1 : 2);

        // eslint-disable-next-line eqeqeq
        const widthProve = ((width == long)? true : false);
        const widthSize = (100/widthCol) + '%';
        const style ={
            width: widthSize
        }
        return (
            <div className="InputBox" style={style}>
                <div className={cn('InputBoxTitleMiddle', {widthProve})}>
                    <div className="InputBoxTitle">
                        <span>{this.props.title}</span>
                    </div>
                </div>
                <input className={cn('InputBoxInput', {widthProve})}/>
            </div>
        );
    }
}


export default InputBox;