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
const description = "lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant" +
    " morbi tristique senectus et netus et malesuada fames ac turpis egestas integer eget aliquet " +
    "nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse " +
    "platea dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc congue " +
    "nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra aliquet eget s" +
    "it amet tellus cras adipiscing enim eu turpis egestas pretium ";

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
                description = {description}
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
                        <h2>Results ({this.props.jobs.length})</h2>
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