import React from "react";
import { Select } from "antd";
import FilterTitle from "./FilterTitle";
import "./filters.css";

class CountriesFilter extends React.Component {
    render() {
        return (
            <div className = "filter-margin">
                <FilterTitle title = {this.props.title} subTitle = "Clear"/>
                <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Enter State, Province or Country"
                    onChange={value => console.log(value)}>
                </Select>
            </div>
        )
    }
}

export default CountriesFilter;