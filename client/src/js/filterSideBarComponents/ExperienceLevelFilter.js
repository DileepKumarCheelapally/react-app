import React from "react";
import { Select } from "antd";
import FilterTitle from "./FilterTitle";
import "./filters.css";

const Option = Select.Option;
const children = experienceLevels => {
    return (experienceLevels || []).map((experienceLevel) => {
        return  <Option key={experienceLevel.experience}>{experienceLevel.experience}</Option>
    })
};

class ExperienceLevelFilter extends React.Component {

    experienceLevelChanged = value => {
        this.props.experienceLevelChangeHandler(value);
    };

    render() {
        return (
            <div className = "filter-margin">
                <FilterTitle
                    title = {this.props.title}
                    subTitle = "Clear"
                    clearClickHandler = {this.props.experienceLevelClearedHandler}
                />
                <Select
                    showSearch
                    style={{ width: '100%' }}
                    placeholder="Select your experience level"
                    optionFilterProp="children"
                    onChange={this.experienceLevelChanged}
                    filterOption={(input, option) => option.props.children.indexOf(input) >= 0}
                    value = {this.props.selectedValue}
                >
                    {children(this.props.experienceLevels)}
                </Select>
            </div>
        )
    }
}

export default ExperienceLevelFilter;