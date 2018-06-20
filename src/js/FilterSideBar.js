import React from "react";
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
            <FilterTitle />
            <SkillsFilter />
            <AvailabilityFilter />
            <JobTypeFilter/>
            <PayRateFilter/>
            <ExperienceLevelFilter/>
            <CountriesFilter/>
            <LanguagesFilter/>
        </Col>
    )
}
}

export default FilterSideBar;