import React from 'react';
import { Row, Col } from 'antd';
import EmployeeSearchBar from "./EmployeeSearchBar";
import FilterSideBar from './FilterSideBar';
import EmployeeResultTable from './EmployeeResultTable';

class EmployeeSearchContent extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            searchResults: null
        }

    };

    render() {
        return (
            <div>
                <EmployeeSearchBar />
                <Row>
                    <FilterSideBar />
                    <EmployeeResultTable />
                    <FeatureSideBar />
                </Row>
            </div>
        )
    }
}

export default EmployeeSearchContent;

