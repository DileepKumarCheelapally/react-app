import React from "react";
import { Select } from "antd";
import FilterTitle from "./FilterTitle";
import "./filters.css";

const Option = Select.Option;

const children = countries => {
    return (countries || []).map((country) => {
        return  <Option key={country.location_name}>{country.location_name}</Option>
    })
};

class CountriesFilter extends React.Component {

    handleChange = value => {
        this.props.countryChangeHandler(value);
    };

    countryNames = (allLocations, selectedLocations) => {
        return (selectedLocations || []).map((selectedLocation) => {
            return allLocations.find((location) => {
                return location.id === selectedLocation;
            }).location_name;
        });
    };

    render() {
        return (
            <div className = "filter-margin">
                <FilterTitle
                    title = {this.props.title}
                    subTitle = "Clear"
                    clearClickHandler = {this.props.countryClearedHandler}
                />
                <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Enter State, Province or Country"
                    onChange={this.handleChange}
                    value = {this.countryNames(this.props.allLocations, this.props.selectedValues)}
                >
                    {children(this.props.allLocations)}
                </Select>
            </div>
        )
    }
}

export default CountriesFilter;