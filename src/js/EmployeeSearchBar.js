import React from 'react';
import {Row, Col, Input} from 'antd';
import 'antd/dist/antd.css';
import './SearchBar.css';

const Search = Input.Search;

class EmployeeSearchBar extends React.Component {
    render() {
        return (
            <Row>
                <Col>
                    <Search />
                </Col>
            </Row>
        )}
};

export default EmployeeSearchBar;