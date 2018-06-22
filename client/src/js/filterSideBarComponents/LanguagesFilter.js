import React from "react";
import { Select } from "antd";
import FilterTitle from "./FilterTitle";
import "./filters.css";

const Option = Select.Option;

const children = languages => {
    return languages.map((language) => {
        return  <Option key={language}>{language}</Option>
    })
};

class LanguagesFilter extends React.Component {

    handleChange = value => {
        this.props.languageChangeHandler(value);
    };

    render() {
        return (
            <div className = "filter-margin">
                <FilterTitle title = {this.props.title} subTitle = "Clear"/>
                <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Enter Language"
                    defaultValue={this.props.languages}
                    onChange={this.handleChange}
                >
                    {children(this.props.languages)}
                </Select>
            </div>
        )
    }
}

export default LanguagesFilter;