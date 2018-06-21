import React from "react";
import { Select } from "antd";
import FilterTitle from "./FilterTitle";

class LanguagesFilter extends React.Component {
    render() {
        return (
            <div>
                <FilterTitle title = {this.props.title} subTitle = "Clear"/>
                <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Enter Language"
                    onChange={value => console.log(value)}>
                </Select>
            </div>
        )
    }
}

export default LanguagesFilter;