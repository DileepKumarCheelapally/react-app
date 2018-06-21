import React from "react";
import { Checkbox } from "antd";
import FilterTitle from "./FilterTitle";

class AvailabilityFilter extends React.Component {
    render() {
        return (
            <div>
                <FilterTitle
                    title = {this.props.title}
                    subTitle = "Clear"/>
                <Checkbox onChange={value => console.log(value)}>Hourly</Checkbox>
                <Checkbox onChange={value => console.log(value)}>PartTime(20hrs/wk)</Checkbox>
                <Checkbox onChange={value => console.log(value)}>FullTime(40hrs/wk)</Checkbox>
            </div>

        )
    }
}

export default AvailabilityFilter;