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
                <Checkbox onChange={onChange}>Hourly</Checkbox>
                <Checkbox onChange={onChange}>PartTime(20hrs/wk)</Checkbox>
                <Checkbox onChange={onChange}>FullTime(40hrs/wk)</Checkbox>
            </div>

        )
    }
}

export default AvailabilityFilter;