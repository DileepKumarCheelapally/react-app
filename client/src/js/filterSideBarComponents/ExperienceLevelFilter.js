import React from "react";
import { Select } from "antd";
import FilterTitle from "./FilterTitle";
import "./filters.css";

class ExperienceLevelFilter extends React.Component {
    render() {
        return (
            <div className = "filter-margin">
                <FilterTitle
                    title = {this.props.title}
                    subTitle = "Clear"/>
                <Select
                    showSearch
                    style={{ width: '100%' }}
                    placeholder="Select your experience level"
                    optionFilterProp="children"
                    onChange={value => console.log(value)}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                    <Select.Option value="Entry Level">Entry Level</Select.Option>
                    <Select.Option value="Experienced">Experienced</Select.Option>
                </Select>
            </div>
        )
    }
}

export default ExperienceLevelFilter;