import React, { Component } from 'react';
import './TextBoxSub.css';
import styles from './TextBoxSub.css';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

class TextBoxSub extends Component {
    
    numberWithCommas =  (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    render() {
        const {krw} = this.props.textbox; 
        const style =  {
            flex: this.props.textbox.rowlength,
            backgroundColor : this.props.textbox.color
        }
        // eslint-disable-next-line
        const row = ((this.props.textbox.rowlength == 3) ? false : true);
        return (
            <div className={cn("TextBoxSub", {row})} style={style}>
                <div className={cn("TextBoxTitle", {row})}>
                    <span className={cn("TextBoxTitle-Sub", {row})}>{this.props.textbox.title}</span>
                    <span className={cn("TextBoxTitle-clone", {row})}>:</span>
                </div>

                <div className={cn("TextBoxKrw", {row})}>
                    <span className={cn("TextBoxKrw-Sub", {row})}>{this.numberWithCommas(krw)}</span>
                    <i className={cn("fas fa-won-sign icon-krw", {row})}></i>
                </div>
            </div>
        );
    }
}

export default TextBoxSub;