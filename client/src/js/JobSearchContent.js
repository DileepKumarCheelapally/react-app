import React from 'react';
import { Row, Col } from 'antd';
import JobSearchBar from "./JobSearchBar";
import FilterSideBar from './FilterSideBar';
import JobResultTable from './JobResultTable';
import FeatureSideBar from "./FeatureSideBar";
import "./JobSearchContent.css";

let skillSets;
let allLocations;
let availability;

let initialState = {
    skills: [],
    job_type: [],
    job_field: [],
    pay_rate: [20, 50],
    locations: [],
    searchKeywords: [],
    searchResults: []
}

class JobSearchContent extends React.Component {

    constructor(props) {

        super(props);

        this.state = initialState;

    };

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

    callJobTypeApi = async () => {
        const response = await fetch('/api/fetchJobTypes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                page: 1,
                per_page: 4,
                filters: {}
            })
        });
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);
        console.log(body);

        return body;
    };

    callSkillSetApi = async () => {
        const response = await fetch('/api/fetchSkillSets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                page: 1,
                per_page: 20,
                filters: {}
            })
        });
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);
        console.log(body);

        return body;
    };

    callLocationsApi = async () => {
        const response = await fetch('/api/fetchLocations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                page: 1,
                per_page: 500,
                filters: {}
            })
        });
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);
        console.log(body);

        return body;
    };

    searchButtonHandler = value => {
        const filters = this.state;
        filters.searchKeywords = value.split(',');

        this.callSearchApi(filters)
            .then(res => this.setState({ searchKeywords: filters.searchKeywords, searchResults: res.jobs }))
            .catch(err => console.log(err));
    };

    availabilityChangeHandler = value => {
        const filters = this.state;
        filters.job_type = value;

        this.callSearchApi(filters)
            .then(res => this.setState({ job_type: value, searchResults: res.jobs }))
            .catch(err => console.log(err));
    };

    skillSetChangeHandler = value => {
        const filters = this.state;
        filters.skills = value.map((val) => {
            return skillSets.find((skill) => {
                return skill.skill_set_name === val;
            }).id;
        });

        this.callSearchApi(filters)
            .then(res => this.setState({ skills: filters.skills, searchResults: res.jobs }))
            .catch(err => console.log(err));
    };

    jobTypeChangeHandler = value => {
        const filters = this.state;
        filters.job_field = value;

        this.callSearchApi(filters)
            .then(res => this.setState({ job_field: value, searchResults: res.jobs }))
            .catch(err => console.log(err));
    };

    experienceLevelChangeHandler = value => {
        console.log(value)
    };

    languageChangeHandler = value => {
        console.log(value)
    };

    countryChangeHandler = value => {
        const filters = this.state;
        filters.locations = value.map((val) => {
            return allLocations.find((location) => {
                return location.location_name === val;
            }).id;
        });

        this.callSearchApi(filters)
            .then(res => this.setState({ locations: filters.locations, searchResults: res.jobs }))
            .catch(err => console.log(err));
    };

    payRateChangeHandler = value => {
        const filters = this.state;
        filters.pay_rate = value;

        this.callSearchApi(filters)
            .then(res => this.setState({ pay_rate: value, searchResults: res.jobs }))
            .catch(err => console.log(err));
    };

    componentDidMount() {
        this.callJobTypeApi()
            .then(res => {
                availability = res.job_types;
            })
            .catch(err => console.log(err));

        this.callSkillSetApi()
            .then(res => {
                skillSets = res.skill_sets;
            })
            .catch(err => console.log(err));

        this.callLocationsApi()
            .then(res => {
                allLocations = res.locations
            })
            .catch(err => console.log(err));

        this.callSearchApi()
            .then(res => this.setState({ searchResults: res.jobs }))
            .catch(err => console.log(err));
    }

    render() {

        let allValues = {
            skillSets,
            availability,
            allLocations
        };

        return (
            <div id="search-content">
                <JobSearchBar
                    searchButtonHandler = {this.searchButtonHandler}
                />
                <Row>
                    <Col span={6}>
                        <FilterSideBar
                            filterValues = {allValues}
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

