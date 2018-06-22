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
            <SkillsFilter title = "Skills"/>
            <AvailabilityFilter title = "Availability"/>
            <JobTypeFilter title = "Job Type"/>
            <PayRateFilter title = "Pay Rate"/>
            <ExperienceLevelFilter title = "Experience Level"/>
            <CountriesFilter title = "Countries"/>
            <LanguagesFilter title = "Language"/>
        </Col>
    )
}
}

export default FilterSideBar;