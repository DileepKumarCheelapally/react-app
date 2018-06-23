import React from "react";
import { Select } from "antd";
import FilterTitle from "./FilterTitle";
import "./filters.css";

const Option = Select.Option;

const children = skills => {
    return (skills || []).map((skill) => {
       return  <Option key={skill.skill_set_name}>{skill.skill_set_name}</Option>
    })
};

class SkillsFilter extends React.Component {

    handleChange = value => {
        this.props.skillSetChangeHandler(value);
    };

    render() {
        console.log(this.props.allSkills)
        return (
            <div className= "filter-margin" >
                <FilterTitle title = {this.props.title} subTitle = "Clear"/>
                <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Please select Skills"
                    onChange={this.handleChange}
                >
                    {children(this.props.allSkills)}
                </Select>
            </div>
        )
    }
}

export default SkillsFilter;