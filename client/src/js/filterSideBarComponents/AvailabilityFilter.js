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
                    subTitle = "Clear"/>
                <Checkbox.Group onChange={this.onCheckboxChange}>
                    {(this.props.availability || []).map((type) => {
                        return (
                            <Row key ={type.id}>
                                <Checkbox value={type.id}>{type.job_type_name}</Checkbox>
                            </Row>
                        )
                    })}
                </Checkbox.Group>
            </div>

        )
    }
}

export default AvailabilityFilter;