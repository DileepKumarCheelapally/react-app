import React from "react";
import { Select } from "antd";
import FilterTitle from "./FilterTitle";
import "./filters.css";

const Option = Select.Option;

const children = languages => {
    return (languages || []).map((language) => {
        return  <Option key={language.name}>{language.name}</Option>
    })
};

class LanguagesFilter extends React.Component {

    handleChange = value => {
        this.props.languageChangeHandler(value);
    };

    languageNames = (allLanguages, selectedLanguages) => {
        return (selectedLanguages || []).map((selectedLanguage) => {
            return allLanguages.find((language) => {
                return language.id === selectedLanguage;
            }).name;
        });
    };

    render() {
        return (
            <div className = "footer-margin">
                <FilterTitle
                    title = {this.props.title}
                    subTitle = "Clear"
                    clearClickHandler = {this.props.languagesClearedHandler}
                />
                <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Enter Language"
                    value = {this.languageNames(this.props.allLanguages, this.props.selectedValues)}
                    onChange={this.handleChange}
                >
                    {children(this.props.allLanguages)}
                </Select>
            </div>
        )
    }
}

export default LanguagesFilter;