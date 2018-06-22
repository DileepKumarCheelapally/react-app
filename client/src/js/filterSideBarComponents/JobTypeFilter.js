import React from "react";
import { Select } from "antd";
import "./filters.css";
import FilterTitle from "./FilterTitle";

class JobTypeFilter extends React.Component {
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
                    onChange={value => console.log(value)}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                    <Select.Option value="FullTime">Full Time</Select.Option>
                    <Select.Option value="PartTime">Part Time</Select.Option>
                </Select>
            </div>
        )
    }
}

export default JobTypeFilter;