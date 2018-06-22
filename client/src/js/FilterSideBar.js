import React from "react";
import { Col, Divider } from "antd";
import FilterTitle from "./filterSideBarComponents/FilterTitle";
import SkillsFilter from "./filterSideBarComponents/SkillsFilter";
import AvailabilityFilter from "./filterSideBarComponents/AvailabilityFilter";
import JobTypeFilter from "./filterSideBarComponents/JobTypeFilter";
import PayRateFilter from "./filterSideBarComponents/PayRateFilter";
import ExperienceLevelFilter from "./filterSideBarComponents/ExperienceLevelFilter";
import CountriesFilter from "./filterSideBarComponents/CountriesFilter";
import LanguagesFilter from "./filterSideBarComponents/LanguagesFilter";

class FilterSideBar extends React.Component {
render() {
    return (
        <Col>
            <FilterTitle title = "FILTERS" subTitle = "Clear All Filters"/>
            <Divider style={{margin: '1px'}}/>
            <SkillsFilter
                title = "Skills"
                allSkills = {this.props.filterValues.allSkills}
                skillSetChangeHandler = {this.props.skillSetChangeHandler}
            />
            <AvailabilityFilter
                title = "Availability"
                availability = {this.props.filterValues.jobTypes}
                availabilityChangeHandler = {this.props.availabilityChangeHandler}
            />
            {/*<JobTypeFilter*/}
                {/*title = "Job Type"*/}
                {/*jobType = {this.props.filterValues.jobType}*/}
                {/*jobTypeChangeHandler = {this.props.jobTypeChangeHandler}*/}
            {/*/>*/}
            {/*<PayRateFilter*/}
                {/*title = "Pay Rate"*/}
                {/*payRate = {this.props.filterValues.payRate}*/}
                {/*payRateChangeHandler = {this.props.payRateChangeHandler}*/}
            {/*/>*/}
            {/*<ExperienceLevelFilter*/}
                {/*title = "Experience Level"*/}
                {/*experienceLevel = {this.props.filterValues.experienceLevel}*/}
                {/*experienceLevelChangeHandler = {this.props.experienceLevelChangeHandler}*/}
            {/*/>*/}
            {/*<CountriesFilter*/}
                {/*title = "Countries"*/}
                {/*countries = {this.props.filterValues.countries}*/}
                {/*countryChangeHandler = {this.props.countryChangeHandler}*/}
            {/*/>*/}
            {/*<LanguagesFilter*/}
                {/*title = "Language"*/}
                {/*languages = {this.props.filterValues.languages}*/}
                {/*languageChangeHandler = {this.props.languageChangeHandler}*/}
            {/*/>*/}
        </Col>
    )
}
}

export default FilterSideBar;