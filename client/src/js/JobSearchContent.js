import React from 'react';
import { Row, Col } from 'antd';
import JobSearchBar from "./JobSearchBar";
import FilterSideBar from './FilterSideBar';
import JobResultTable from './JobResultTable';
import FeatureSideBar from "./FeatureSideBar";
import "./JobSearchContent.css";

let skillSets;
let countries;
let jobTypes;

class JobSearchContent extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            skills: [],
            availability: ["hourly", "part-time 20hrs/wk", "full-time 40hrs/wk"],
            jobType: [],
            experienceLevel: "",
            countries: [],
            languages: [],
            payRate: [],
            searchResults: []
        }

    };

    componentDidMount() {
        this.callSearchApi()
            .then(res => this.setState({ searchResults: res.jobs }))
            .catch(err => console.log(err));

        this.callJobTypeApi()
            .then(res => {
                jobTypes = res.job_types;
            })
            .catch(err => console.log(err));

        this.callSkillSetApi()
            .then(res => {
                skillSets = res.skill_sets;
            })
            .catch(err => console.log(err));

        this.callLocationsApi()
            .then(res => this.setState({ countries: res.locations }))
            .catch(err => console.log(err));
    }

    callSearchApi = async (filters) => {
        const response = await fetch('/api/fetchJobs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                page: 1,
                per_page: 30,
                filters: filters
            })
        });
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);
        console.log(body);

        return body;
    };

    callJobTypeApi = async (filters) => {
        const response = await fetch('/api/fetchJobTypes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                page: 1,
                per_page: 4,
                filters: filters
            })
        });
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);
        console.log(body);

        return body;
    };

    callSkillSetApi = async (filters) => {
        const response = await fetch('/api/fetchSkillSets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                page: 1,
                per_page: 20,
                filters: filters
            })
        });
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);
        console.log(body);

        return body;
    };

    callLocationsApi = async (filters) => {
        const response = await fetch('/api/fetchLocations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                page: 1,
                per_page: 500,
                filters: filters
            })
        });
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);
        console.log(body);

        return body;
    };

    searchButtonHandler = value => {
        this.callApi()
            .then(res => this.setState({ searchResults: res.jobs }))
            .catch(err => console.log(err));
    };

    availabilityChangeHandler = value => {
        const filters = this.state;
        filters.jobType = value;
        const jobType = value.map((val) => {
            return jobTypes.find((type) => {
                return type.id === parseInt(val,10);
            }).id;
        });

        this.callSearchApi(filters)
            .then(res => this.setState({ jobType: jobType, searchResults: res.jobs }))
            .catch(err => console.log(err));
    };

    skillSetChangeHandler = value => {
        const filters = this.state;
        filters.skills = value;
        const skills = value.map((val) => {
            return skillSets.find((skill) => {
                return skill.id === parseInt(val,10);
            }).id;
        });

        this.callSearchApi(filters)
            .then(res => this.setState({ skillSet: skills, searchResults: res.jobs }))
            .catch(err => console.log(err));
    };

    jobTypeChangeHandler = value => {
        this.setState({
            availability: value
        });
    };

    experienceLevelChangeHandler = value => {
        this.setState({
            experienceLevel: value
        });
    };

    languageChangeHandler = value => {
        this.setState({
            languages: value
        });
    };

    countryChangeHandler = value => {
        this.setState({
            countries: value
        });
    };

    payRateChangeHandler = value => {
        this.setState({
            payRate: value
        });
    };

    render() {
        console.log(this.state.searchResults);
        return (
            <div id="search-content">
                <JobSearchBar
                    searchButtonHandler = {this.searchButtonHandler}
                />
                <Row>
                    <Col span={6}>
                        <FilterSideBar
                            filterValues = {Object.assign(this.state, {allSkills: skillSets, jobTypes: jobTypes})}
                            availabilityChangeHandler = {this.availabilityChangeHandler}
                            skillSetChangeHandler = {this.skillSetChangeHandler}
                            jobTypeChangeHandler = {this.jobTypeChangeHandler}
                            experienceLevelChangeHandler = {this.experienceLevelChangeHandler}
                            languageChangeHandler = {this.languageChangeHandler}
                            countryChangeHandler = {this.countryChangeHandler}
                            payRateChangeHandler = {this.payRateChangeHandler}
                        />
                    </Col>
                    <Col span={18}>
                        <JobResultTable
                            jobs = {this.state.searchResults}
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

