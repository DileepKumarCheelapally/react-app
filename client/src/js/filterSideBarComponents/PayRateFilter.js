import React from "react";
import { Slider, Checkbox } from "antd";
import FilterTitle from "./FilterTitle";
import "./filters.css";

const marks = {
    10: '10',
    150: '150'
};

class PayRateFilter extends React.Component {

    render() {
        return (
            <div className = "filter-margin">
                <FilterTitle title = {this.props.title}
                             subTitle = "Clear"
                             clearClickHandler = {this.props.payRateClearedHandler}
                />
                <Slider range min={10} max={150} marks={marks} value={this.props.payRate} onChange={value => this.props.payRateChangeHandler(value)} />
            </div>
        );
    }
}

export default PayRateFilter;