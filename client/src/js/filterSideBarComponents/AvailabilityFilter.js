import React from "react";
import { Row, Checkbox } from "antd";
import FilterTitle from "./FilterTitle";
import "./filters.css";

class AvailabilityFilter extends React.Component {
    render() {
        return (
            <div className = "filter-margin">
                <FilterTitle
                    title = {this.props.title}
                    subTitle = "Clear"/>
                <Row>
                    <Checkbox onChange={value => console.log(value)}>Hourly</Checkbox>
                </Row>
                <Row>
                    <Checkbox onChange={value => console.log(value)}>Part-time (20hrs/wk)</Checkbox>
                </Row>
                <Row>
                    <Checkbox onChange={value => console.log(value)}>Full-time (40hrs/wk)</Checkbox>
                </Row>
            </div>

        )
    }
}

export default AvailabilityFilter;