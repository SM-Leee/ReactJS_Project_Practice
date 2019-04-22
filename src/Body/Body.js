import React, { Component } from 'react';
import TextBoxBasic from './InputBox';
import './Body.css';

class Body extends Component {
    render() {
        return (
            <div className="Body">
                <TextBoxBasic title ="일   자" width="short"/>
                <TextBoxBasic title="단    가" width="short"/>
                <TextBoxBasic title ="공급가" width="short"/>
                <TextBoxBasic title="VAT" width="short"/>
                <TextBoxBasic title="TEST" width="long"/>
                <TextBoxBasic title="TEST2" width="short"/>
                <TextBoxBasic title="TEST4" width="short"/>
                <TextBoxBasic title ="TEST3" width='long' height='long'/>
            </div>
        );
    }
}

export default Body;