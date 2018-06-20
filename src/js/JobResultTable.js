import React from 'react';
import { Col, Menu, Dropdown, Button, Pagination } from 'antd';
import JobResultRowCard from './JobResultRowCard';

let SortByOptions = (
    <Menu>
        <Menu.Item>
            <a>Relevance</a>
        </Menu.Item>
        <Menu.Item>
            <a>PayRate</a>
        </Menu.Item>
        <Menu.Item>
            <a>Title</a>
        </Menu.Item>
        <Menu.Item>
            <a>Company</a>
        </Menu.Item>
        <Menu.Item>
            <a>Location</a>
        </Menu.Item>
    </Menu>
);

let ResultsList = (props) => {
   const jobs = props.jobs;

    const skills = ["ui", "ux", "android", "javascript", "sketch"];


    const results = jobs.map((job, index) => {
        return (
            <JobResultRowCard key={index} jobKey={job.id} title={job.title} availability={job.type} payRate="$55/hr" description="" company={job.company} location={job.location} replyRate="88%" skills={skills} />
        );
    });

    return results;
}

class JobResultTable extends React.Component {
    render() {
        return (
            <Col span={12} id="results-container">
                <div id="results">
                    <div >
                        <h2>Results {this.props.jobs.count}</h2>
                        <Dropdown overlay={SortByOptions} trigger={['click']}>
                            <Button>Sort by</Button>
                        </Dropdown>
                    </div>
                    <ResultsList jobList={this.props.job} />
                </div>
                <div>
                    <Pagination defaultCurrent={1} total={25} />
                </div>
            </Col>
        )
    }
}

export default JobResultTable;