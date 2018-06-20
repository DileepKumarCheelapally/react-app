import React from 'react';
import {Row, Col, Input} from 'antd';
import 'antd/dist/antd.css';
import './SearchBar.css';

const Search = Input.Search;

class JobSearchBar extends React.Component {
    render() {
        return (
            <Row>
                <Col>
                    <Search
                        placeholder="Search by keywords (PHP, .NET, Graphic Design etc)"
                        enterButton="Search"
                        size="large"
                        onSearch={value => console.log(value)}
                    />
                </Col>
            </Row>
        )}
};

export default JobSearchBar;