import React, { Component } from 'react';
import './DsDatePicker.css';
import styles from './DsDatePicker.css';
import classNames from 'classnames/bind';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const cn = classNames.bind(styles);

class DsDatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(date) {
        this.setState({
            startDate: date
        });
    }
    render() {

        const { width, title } = this.props;
        const short = "short";
        // eslint-disable-next-line eqeqeq
        const widthCol = ((width == short) ? 2 : 1);
        // eslint-disable-next-line eqeqeq
        const widthProve = ((width == short) ? false : true);
        const widthSize = (100 / widthCol) + '%';
        const style = {
            width: widthSize
        }

        return (
            <div className="dsDatePicker" style={style}>
                <div className={cn('dsDatePickerTitleMiddle', { widthProve })}>
                    <div className="dsDatePickerTitle">
                        <span>{title}</span>
                    </div>
                </div>
                <div className={cn('dsDatePickerInputFull', { widthProve })}>
                    <DatePicker
                         selected={this.state.startDate}
                        onChange={this.handleChange}
                        dateFormat="yyyy-MM-dd"
                    />
                    {/* <i className="far fa-calendar-alt calendar"></i> */}
                    {/* <div className={cn('dsDatePickerImages')}></div> */}
                </div>
            </div>


        );
    }
}

export default DsDatePicker;