import React from "react";
import { Slider, Checkbox } from "antd";
import FilterTitle from "./FilterTitle";

const marks = {
    10: '$10',
    20: '$20',
    50: '$50',
    150: '$150'
};

class PayRateFilter extends React.Component {

    render() {
        return (
            <div>
                <FilterTitle title = {this.props.title} subTitle = "Clear"/>
                <Slider range min={10} max={150} marks={marks} defaultValue={[20, 50]} onAfterChange={value => console.log(value)} />
                <Checkbox onChange={value => console.log(value)}>Include profiles with payrates</Checkbox>
            </div>
        );
    }
}

export default PayRateFilter;