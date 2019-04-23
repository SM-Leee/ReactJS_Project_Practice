import React, { Component } from 'react';
import TextBoxBasic from './InputBox';
import './Body.css';
import DsDatePicker from './DsDatePicker';

class Body extends Component {
    render() {
        return (
            <div className="Body">
                {/* default값음 width="long" height="short" 이다 */}
                {/* kwd 가 true 이면 won image가 뜨게 하시오 */}
                
                <DsDatePicker title="일  자" width="short" />
                <TextBoxBasic title="분  류" width="short" />
                <TextBoxBasic title="거래처" />
                <TextBoxBasic title="상  품" />
                <TextBoxBasic title="수  량" width="short" />
                <TextBoxBasic title="단  가" width="short" kwd="true" />
                <TextBoxBasic title="공급가" width="short" kwd="true" />
                <TextBoxBasic title="VAT" width="short" kwd="true" />
                <TextBoxBasic title="상세설명" height="long" />

            </div>
        );
    }
}

export default Body;