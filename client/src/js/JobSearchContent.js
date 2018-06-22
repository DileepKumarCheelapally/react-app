import React from 'react';
import { Row, Col } from 'antd';
import JobSearchBar from "./JobSearchBar";
import FilterSideBar from './FilterSideBar';
import JobResultTable from './JobResultTable';
import FeatureSideBar from "./FeatureSideBar";
import "./JobSearchContent.css";

const jobs = [
    {
        id:1,
        title: "software Engineer",
        jobType: "full-time",
        company: "Epic Coders",
        location: "USA",
        payRate: "$55/hr",
        replyRate: "82%",
        skillSet: ["UI", "React"]
    },
    {
        id:3,
        title: "Senior PHP Developer",
        jobType: "hourly",
        company: "Epic Coders",
        location: "USA",
        payRate: "$55/hr",
        replyRate: "82%",
        skillSet: ["UI", "React"]
    },
    {
        id:4,
        title: "Frontend Engineer",
        jobType: "part-time",
        company: "Epic Coders",
        location: "USA",
        payRate: "$55/hr",
        replyRate: "82%",
        skillSet: ["UI", "React"]
    }
];

const job2 = [
    {
        id:2,
        title: "hardware",
        jobType: "fulltime",
        company: "Epic Coders",
        location: "USA",
        payRate: "$55/hr",
        replyRate: "82%",
        skillSet: ["UI", "React"]
    }
];
class JobSearchContent extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            searchResults: []
        }

    };

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ searchResults: res }))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/api/datalist');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);
        console.log(body);

        return body;
    };

    searchButtonHandler = value => {
        this.setState({
            searchResults:job2
        })
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
                        <FilterSideBar />
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

