import React from 'react';
import {Row, Col, Input} from 'antd';
import 'antd/dist/antd.css';
import "../css/JobSearchBar.css";

const Search = Input.Search;

class JobSearchBar extends React.Component {
    render() {
        return (
            <Row id = "search-bar">
                <Col span={24}>
                    <Search id = "search-box"
                        placeholder="Search by keywords (PHP, .NET, Graphic Design etc)"
                        enterButton="Search"
                        size="large"
                        onSearch={value => {this.props.searchButtonHandler(value)}}
                    />
                </Col>
            </Row>
        )}
};

export default JobSearchBar;