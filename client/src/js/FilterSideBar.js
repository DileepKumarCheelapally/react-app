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
        <Col style={{display: "flex", flexDirection: "column"}}>
            <FilterTitle
                title = "FILTERS"
                subTitle = "Clear All Filters"
                clearClickHandler = {this.props.clearAllFiltersHandler}/>
            <Divider style={{margin: '1px'}}/>
            <SkillsFilter
                title = "Skills"
                allSkills = {this.props.filterValues.skillSets}
                selectedSkills = {this.props.filterStatus.skills}
                skillSetChangeHandler = {this.props.skillSetChangeHandler}
                skillsClearedHandler = {this.props.skillsClearedHandler}
            />
            <AvailabilityFilter
                title = "Availability"
                availabilityOptions = {this.props.filterValues.availability}
                selectedValues = {this.props.filterStatus.job_type}
                availabilityChangeHandler = {this.props.availabilityChangeHandler}
                availabilityClearedHandler = {this.props.availabilityClearedHandler}
            />
            <JobTypeFilter
                title = "Job Type"
                jobTypes = {this.props.filterValues.allJobTypes}
                selectedValue = {this.props.filterStatus.job_field}
                jobTypeChangeHandler = {this.props.jobTypeChangeHandler}
                jobTypeClearedHandler = {this.props.jobTypeClearedHandler}
            />
            <PayRateFilter
                title = "Pay rate/hr ($)"
                payRate = {this.props.filterStatus.pay_rate}
                payRateChangeHandler = {this.props.payRateChangeHandler}
                payRateClearedHandler = {this.props.payRateClearedHandler}
            />
            <ExperienceLevelFilter
                title = "Experience Level"
                experienceLevels = {this.props.filterValues.allExperiences}
                selectedValue = {this.props.filterStatus.experience}
                experienceLevelChangeHandler = {this.props.experienceLevelChangeHandler}
                experienceLevelClearedHandler = {this.props.experienceLevelClearedHandler}
            />
            <CountriesFilter
                title = "Countries"
                allLocations = {this.props.filterValues.allLocations}
                selectedValues = {this.props.filterStatus.locations}
                countryChangeHandler = {this.props.countryChangeHandler}
                countryClearedHandler = {this.props.countryClearedHandler}
            />
            <LanguagesFilter
                title = "Language"
                allLanguages = {this.props.filterValues.allLanguages}
                selectedValues = {this.props.filterStatus.language}
                languageChangeHandler = {this.props.languageChangeHandler}
                languagesClearedHandler = {this.props.languagesClearedHandler}
            />
        </Col>
    )
}
}

export default FilterSideBar;