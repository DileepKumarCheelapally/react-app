import React from 'react';
import { Row, Col } from 'antd';
import JobSearchBar from "./JobSearchBar";
import FilterSideBar from './FilterSideBar';
import JobResultTable from './JobResultTable';
import FeatureSideBar from "./FeatureSideBar";
import "./JobSearchContent.css";
import {
    callExperiencesApi,
    callJobFieldsApi,
    callJobTypeApi,
    callLanguagesApi,
    callLocationsApi,
    callSearchApi,
    callSkillSetApi
} from "./utils/ApiCallUtil";

let skillSets;
let allLocations;
let availability;
let allJobTypes;
let allExperiences;
let allLanguages;
let allValues = {};

const initialState = {
    skills: [],
    job_type: [],
    job_field: undefined,
    pay_rate: [20, 50],
    experience: undefined,
    locations: [],
    language: [],
    searchKeywords: [],
    searchResults: [],
    page: 1
};

class JobSearchContent extends React.Component {

    constructor(props) {

        super(props);

        this.state = initialState;

    };

    createFilterObject = (state) => {
        return {
            skills: state.skills,
            job_type: state.job_type,
            job_field: state.job_field,
            pay_rate: state.pay_rate,
            experience: state.experience,
            locations: state.locations,
            searchKeywords: state.searchKeywords,
            language: state.language,
            page: state.page
        };
    };

    searchButtonHandler = value => {
        const filters = this.createFilterObject(this.state);
        filters.searchKeywords = value.split(',');
        filters.page = 1;

        callSearchApi(filters)
            .then(res => this.setState({ page: 1, searchKeywords: filters.searchKeywords, searchResults: res.jobs }))
            .catch(err => console.log(err));
    };

    availabilityChangeHandler = value => {
        const filters = this.createFilterObject(this.state);
        filters.job_type = value;
        filters.page = 1;

        callSearchApi(filters)
            .then(res => this.setState({ page:1, job_type: value, searchResults: res.jobs }))
            .catch(err => console.log(err));
    };

    skillSetChangeHandler = value => {
        const filters = this.createFilterObject(this.state);
        filters.skills = value.map((val) => {
            return skillSets.find((skill) => {
                return skill.skill_set_name === val;
            }).id;
        });
        filters.page = 1;

        callSearchApi(filters)
            .then(res => this.setState({ page:1, skills: filters.skills, searchResults: res.jobs }))
            .catch(err => console.log(err));
    };

    jobTypeChangeHandler = value => {
        const filters = this.createFilterObject(this.state);
        filters.job_field = allJobTypes.find((jobType) => {
            return jobType.job_field_name === value;
        }).id;
        filters.page = 1;

        callSearchApi(filters)
            .then(res => this.setState({ page:1, job_field: value, searchResults: res.jobs }))
            .catch(err => console.log(err));
    };

    experienceLevelChangeHandler = value => {
        const filters = this.createFilterObject(this.state);
        filters.experience = allExperiences.find((experience) => {
                return experience.experience === value;
            }).id;
        filters.page = 1;

        callSearchApi(filters)
            .then(res => this.setState({ page:1, experience: value, searchResults: res.jobs }))
            .catch(err => console.log(err));
    };

    languageChangeHandler = value => {
        const filters = this.createFilterObject(this.state);
        filters.language = value.map((val) => {
            return allLanguages.find((language) => {
                return language.name === val;
            }).id;
        });
        filters.page = 1;

        callSearchApi(filters)
            .then(res => this.setState({ page:1, language: filters.language, searchResults: res.jobs }))
            .catch(err => console.log(err));
    };

    countryChangeHandler = value => {
        const filters = this.createFilterObject(this.state);
        filters.locations = value.map((val) => {
            return allLocations.find((location) => {
                return location.location_name === val;
            }).id;
        });
        filters.page = 1;

        callSearchApi(filters)
            .then(res => this.setState({ page:1, locations: filters.locations, searchResults: res.jobs }))
            .catch(err => console.log(err));
    };

    payRateChangeHandler = value => {
        const filters = this.createFilterObject(this.state);
        filters.pay_rate = value;
        filters.page = 1;

        callSearchApi(filters)
            .then(res => this.setState({ page:1, pay_rate: value, searchResults: res.jobs }))
            .catch(err => console.log(err));
    };

    pageChangeHandler = value => {
        const filters = this.createFilterObject(this.state);
        filters.page = value;

        callSearchApi(filters)
            .then(res => this.setState({page: value, searchResults: res.jobs}))
            .catch(err => console.log(err));
    };

    skillsClearedHandler = () => {
        const filters = this.createFilterObject(this.state);
        filters.skills = [];
        filters.page = 1;

        callSearchApi(filters)
            .then(res => this.setState({ skills: filters.skills, page: 1, searchResults: res.jobs }))
            .catch(err => console.log(err));
    };

    availabilityClearedHandler = () => {
        const filters = this.createFilterObject(this.state);
        filters.job_type = [];
        filters.page = 1;

        callSearchApi(filters)
            .then(res => this.setState({ job_type: filters.job_type, page: 1, searchResults: res.jobs }))
            .catch(err => console.log(err));
    };

    jobTypeClearedHandler = () => {
        const filters = this.createFilterObject(this.state);
        filters.job_field = undefined;
        filters.page = 1;

        callSearchApi(filters)
            .then(res => this.setState({ job_field: filters.job_field, page: 1, searchResults: res.jobs }))
            .catch(err => console.log(err));
    };

    payRateClearedHandler = () => {
        const filters = this.createFilterObject(this.state);
        filters.pay_rate = [20, 50];
        filters.page = 1;

        callSearchApi(filters)
            .then(res => this.setState({ pay_rate: filters.pay_rate, page: 1, searchResults: res.jobs }))
            .catch(err => console.log(err));
    };

    experienceLevelClearedHandler = () => {
        const filters = this.createFilterObject(this.state);
        filters.experience = undefined;
        filters.page = 1;

        callSearchApi(filters)
            .then(res => this.setState({ experience: undefined, page: 1, searchResults: res.jobs }))
            .catch(err => console.log(err));
    };

    countryClearedHandler = () => {
        const filters = this.createFilterObject(this.state);
        filters.locations = [];
        filters.page = 1;

        callSearchApi(filters)
            .then(res => this.setState({ locations: filters.locations, page:1, searchResults: res.jobs }))
            .catch(err => console.log(err));
    };

    languagesClearedHandler = () => {
        const filters = this.createFilterObject(this.state);
        filters.language = [];
        filters.page = 1;

        callSearchApi(filters)
            .then(res => this.setState({ language: filters.language, page: 1, searchResults: res.jobs }))
            .catch(err => console.log(err));
    };

    clearAllFiltersHandler = () => {
        const filters = this.createFilterObject(initialState);

        callSearchApi(filters)
            .then(res => this.setState({...initialState, searchResults: res.jobs}))
            .catch(err => console.log(err));
    };

    componentDidMount() {
        Promise.all(
            [
                callJobTypeApi(),
                callSkillSetApi(),
                callLocationsApi(),
                callLanguagesApi(),
                callJobFieldsApi(),
                callExperiencesApi(),
                callSearchApi(this.createFilterObject(initialState))
            ]
        ).then((responses) => {
            availability = responses[0].job_types;
            skillSets = responses[1].skill_sets;
            allLocations = responses[2].locations;
            allLanguages = responses[3].languages;
            allJobTypes = responses[4].job_fields;
            allExperiences = responses[5].experience_levels;
            allValues = {
                availability,
                skillSets,
                allLocations,
                allLanguages,
                allJobTypes,
                allExperiences
            };
            this.setState({
                searchResults: responses[6].jobs
            });
        })
            .catch(err => console.log("ComponentDidMount API requests failed with " + err));
    }

    render() {
        return (
            <div id="search-content">
                <JobSearchBar
                    searchButtonHandler = {this.searchButtonHandler}
                />
                <Row>
                    <Col span={6}>
                        <FilterSideBar
                            filterValues = {allValues}
                            filterStatus = {this.state}
                            availabilityChangeHandler = {this.availabilityChangeHandler}
                            availabilityClearedHandler = {this.availabilityClearedHandler}
                            skillSetChangeHandler = {this.skillSetChangeHandler}
                            skillsClearedHandler = {this.skillsClearedHandler}
                            jobTypeChangeHandler = {this.jobTypeChangeHandler}
                            jobTypeClearedHandler = {this.jobTypeClearedHandler}
                            payRateChangeHandler = {this.payRateChangeHandler}
                            payRateClearedHandler = {this.payRateClearedHandler}
                            experienceLevelChangeHandler = {this.experienceLevelChangeHandler}
                            experienceLevelClearedHandler = {this.experienceLevelClearedHandler}
                            languageChangeHandler = {this.languageChangeHandler}
                            languagesClearedHandler = {this.languagesClearedHandler}
                            countryChangeHandler = {this.countryChangeHandler}
                            countryClearedHandler = {this.countryClearedHandler}
                            clearAllFiltersHandler = {this.clearAllFiltersHandler}
                        />
                    </Col>
                    <Col span={18}>
                        <JobResultTable
                            jobs = {this.state.searchResults}
                            page = {this.state.page}
                            pageChangeHandler = {this.pageChangeHandler}
                        />
                    </Col>
                    <Col span={6}>
                        <FeatureSideBar />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default JobSearchContent;

