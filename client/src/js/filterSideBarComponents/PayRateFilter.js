import React from "react";
import { Slider, Checkbox } from "antd";
import FilterTitle from "./FilterTitle";
import "./filters.css";
import _ from "lodash";

const marks = {
    10: '10',
    150: '150'
};

class PayRateFilter extends React.Component {

    onChangeHandler = (value) => {
        this.props.payRateChangeHandler(value);
    };

    render() {
        return (
            <div className = "filter-margin">
                <FilterTitle title = {this.props.title}
                             subTitle = "Clear"
                             clearClickHandler = {this.props.payRateClearedHandler}
                />
                <Slider range min={10} max={150} marks={marks} value={this.props.payRate} onChange={_.debounce(this.onChangeHandler, 250)} />
            </div>
        );
    }
}

export default PayRateFilter;