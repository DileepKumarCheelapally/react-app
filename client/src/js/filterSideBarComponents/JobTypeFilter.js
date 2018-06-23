import React from "react";
import { Select } from "antd";
import "./filters.css";
import FilterTitle from "./FilterTitle";

const Option = Select.Option;
const children = jobTypes => {
    return (jobTypes || []).map((jobType) => {
        return  <Option key={jobType.job_field_name}>{jobType.job_field_name}</Option>
    })
};

class JobTypeFilter extends React.Component {

    jobTypeFilter = value => {
        this.props.jobTypeChangeHandler(value);
    };

    render() {
        return (
            <div className = "filter-margin">
                <FilterTitle
                    title = {this.props.title}
                    subTitle = "Clear"
                    clearClickHandler = {this.props.jobTypeClearedHandler}
                />
                <Select
                    showSearch
                    style={{ width: '100%' }}
                    placeholder="Select a Job type"
                    optionFilterProp="children"
                    onChange={this.jobTypeFilter}
                    filterOption={(input, option) => option.props.children.indexOf(input) >= 0}
                    value = {this.props.selectedValue}
                >
                    {children(this.props.jobTypes)}
                </Select>
            </div>
        )
    }
}

export default JobTypeFilter;