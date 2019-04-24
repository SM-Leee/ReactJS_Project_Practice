import React, { Component } from 'react';
import TextBox from './TextBoxSub';
import './TextBoxList.css';

class TextBoxList extends Component {
    state = {
        textboxs: [
            {id:0, title : '수입', krw :'480000152',color:'#2080D0' ,rowlength:1},
            {id:1, title : '지출', krw :'55153110',color:'#FF8080', rowlength:1},
            {id:2, title : '미수금', krw :'360000',color:'gray', rowlength:1}
        ]
    }
    render() {
        const {textboxs} = this.state;

        const textBoxList = textboxs.map( textbox =>(
            <TextBox key={textbox.id} textbox={textbox}/>
        ));
        return (
            <div className = "TextBoxList">
                {textBoxList}
            </div>
        );
    }
}

export default TextBoxList;