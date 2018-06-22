import React from "react";
import { Select } from "antd";
import "./filters.css";
import FilterTitle from "./FilterTitle";

class JobTypeFilter extends React.Component {

    jobTypeFilter = value => {
        this.prop.jobTypeChangeHandler(value);
    }

    render() {
        return (
            <div className = "filter-margin">
                <FilterTitle
                    title = {this.props.title}
                    subTitle = "Clear"/>
                <Select
                    showSearch
                    style={{ width: '100%' }}
                    placeholder="Select a Job type"
                    optionFilterProp="children"
                    onChange={this.jobTypeFilter}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                    <Select.Option value="full-time">Full Time</Select.Option>
                    <Select.Option value="part-time">Part Time</Select.Option>
                    <Select.Option value="hourly">Hourly</Select.Option>
                </Select>
            </div>
        )
    }
}

export default JobTypeFilter;