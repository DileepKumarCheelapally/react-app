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
   const jobs = props.jobList;

    const results = jobs.map((job, index) => {
        return (
            <JobResultRowCard
                key={index}
                jobKey={job.id}
                title={job.title}
                availability={job.jobType}
                payRate= {job.payRate}
                description="1234"
                company={job.company}
                location={job.location}
                replyRate={job.replyRate}
                skills={job.skillSet} />
        );
    });

    return results;
}

class JobResultTable extends React.Component {
    render() {
        return (
            <Col span={18} id="job-table-container">
                <div id="job-table">
                    <div id="job-table-header">
                        <h2>Results (this.props.jobs.count)</h2>
                        <Dropdown overlay={SortByOptions} trigger={['click']}>
                            <Button>Sort by</Button>
                        </Dropdown>
                    </div>
                    <ResultsList jobList={this.props.jobs} />
                </div>
                <div  id="job-table-footer">
                    <Pagination defaultCurrent={1} total={250} />
                </div>
            </Col>
        )
    }
}

export default JobResultTable;