import React from "react";
import { Select } from "antd";
import FilterTitle from "./FilterTitle";
import "./filters.css";

const Option = Select.Option;

const children = countries => {
    return countries.map((country) => {
        return  <Option key={country}>{country}</Option>
    })
};

class CountriesFilter extends React.Component {

    handleChange = value => {
        this.props.countryChangeHandler(value);
    };

    render() {
        return (
            <div className = "filter-margin">
                <FilterTitle title = {this.props.title} subTitle = "Clear"/>
                <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Enter State, Province or Country"
                    onChange={this.handleChange}
                >
                    {children(this.props.countries)}
                </Select>
            </div>
        )
    }
}

export default CountriesFilter;