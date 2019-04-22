import React, { Component } from 'react';
import './InputBox.css';
import styles from './InputBox.css';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

class InputBox extends Component {
    
    render() {
        const {width, height ,kwd} = this.props;
        const long =  "long";
        const short = "short";
        
        // eslint-disable-next-line eqeqeq
        const widthCol = ((width == short)? 2 : 1);
        // eslint-disable-next-line eqeqeq
        const heightCol = ((height == long)? 8 : 1 );
        // eslint-disable-next-line eqeqeq
        const widthProve = ((width == short)? false : true);
        // eslint-disable-next-line eqeqeq
        const heightProve = ((height == long)? true : false);

        const widthSize = (100/widthCol) + '%';
        const heightSize = (5*heightCol) + '%';
        const style ={
            width: widthSize,
            height: heightSize
        }
        
        return (
            <div className={cn("InputBox", {heightProve})} style={style}>
                <div className={cn('InputBoxTitleMiddle', {widthProve, heightProve})}>
                    <div className="InputBoxTitle">
                        <span>{this.props.title}</span>
                    </div>
                </div>
                <input className={cn('InputBoxInput', {widthProve, heightProve, kwd})}/>
            </div>
        );
    }
}


export default InputBox;