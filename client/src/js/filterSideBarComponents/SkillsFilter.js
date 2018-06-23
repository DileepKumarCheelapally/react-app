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

    skillNames = (allSkills, selectedSkills) => {
        return (selectedSkills || []).map((selectedSkill) => {
            return allSkills.find((skill) => {
                return skill.id === selectedSkill;
            }).skill_set_name;
        });
    };

    render() {
        return (
            <div className= "filter-margin" >
                <FilterTitle
                    title = {this.props.title}
                    subTitle = "Clear"
                    clearClickHandler = {this.props.skillsClearedHandler}
                />
                <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Please select Skills"
                    onChange={this.handleChange}
                    value = {this.skillNames(this.props.allSkills, this.props.selectedSkills)}
                >
                    {children(this.props.allSkills)}
                </Select>
            </div>
        )
    }
}

export default SkillsFilter;