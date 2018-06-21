import React from "react";
import { Select } from "antd";
import FilterTitle from "./FilterTitle";

class CountriesFilter extends React.Component {
    render() {
        return (
            <div>
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