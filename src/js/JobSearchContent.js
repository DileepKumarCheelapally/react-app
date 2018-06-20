import React from 'react';
import { Row, Col } from 'antd';
import JobSearchBar from "./JobSearchBar";
import FilterSideBar from './FilterSideBar';
import JobResultTable from './JobResultTable';

class JobSearchContent extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            searchResults: null
        }

    };

    render() {
        return (
            <div>
                <JobSearchBar />
                <Row>
                    <FilterSideBar />
                    <JobResultTable />
                    <FeatureSideBar />
                </Row>
            </div>
        )
    }
}

export default JobSearchContent;

