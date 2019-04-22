import React, { Component } from 'react';
import TextBoxBasic from './InputBox';
import './Body.css';

class Body extends Component {
    render() {
        return (
            <div className="Body">
            {/* default값음 width="long" height="short" 이다 */}
            {/* kwd 가 true 이면 won image가 뜨게 하시오 */}
                <TextBoxBasic title ="일   자" width="short"/>
                <TextBoxBasic title="단    가" width="short" kwd='true'/>
                <TextBoxBasic title ="공급가" width="short"/>
                <TextBoxBasic title="VAT" width="short"/>
                <TextBoxBasic title="TEST" kwd='true'/>
                <TextBoxBasic title="TEST2"/>
                <TextBoxBasic title="상세사항" height='long'/>
                <TextBoxBasic title="금   액" width='short' kwd='true'/>
            </div>
        );
    }
}

export default Body;