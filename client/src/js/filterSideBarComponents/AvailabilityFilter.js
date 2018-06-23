import React from "react";
import { Row, Checkbox } from "antd";
import FilterTitle from "./FilterTitle";
import "./filters.css";

class AvailabilityFilter extends React.Component {
    onCheckboxChange = checkedValues => {
        this.props.availabilityChangeHandler(checkedValues);
    };

    render() {
        return (
            <div className = "filter-margin">
                <FilterTitle
                    title = {this.props.title}
                    subTitle = "Clear"
                    clearClickHandler = {this.props.availabilityClearedHandler}
                />
                <Checkbox.Group
                    onChange={this.onCheckboxChange}
                    value = {this.props.selectedValues}
                >
                    {(this.props.availabilityOptions || []).map((type) => {
                        return (
                            <Row key ={type.id}>
                                <Checkbox value={type.id}>{type.job_type_name === "hourly" ?
                                    "Hourly" : type.job_type_name === "full-time" ?
                                "Full-time (40 hrs/wk)" : "Part-time (20 hrs/wk)"}</Checkbox>
                            </Row>
                        )
                    })}
                </Checkbox.Group>
            </div>

        )
    }
}

export default AvailabilityFilter;