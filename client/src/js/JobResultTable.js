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
    " morbi tristique senectus et netus et malesuada fames ac turpis egestas integer eget aliquet ";

let ResultsList = (props) => {
   const jobs = props.jobList;

    const results = jobs.map((job, index) => {
        return (
            <JobResultRowCard
                key={job.id}
                jobKey={job.id}
                title={job.title}
                availability={job.job_type_name}
                payRate= {job.pay_rate}
                description = {description}
                company={job.company_name}
                location={job.location_name}
                replyRate={job.reply_rate}
                skills={job.skills} />
        );
    });

    return results;
}

class JobResultTable extends React.Component {

    render() {
        const totalPages = this.props.resultCount*2;

        return (
            <Col span={18} id="job-table-container">
                <div id="job-table">
                    <div id="job-table-header">
                        <h2>Results ({this.props.resultCount})</h2>
                        <Dropdown overlay={SortByOptions} trigger={['click']}>
                            <Button>Sort by</Button>
                        </Dropdown>
                    </div>
                    {this.props.resultCount === 0 ?
                    <h1>No Results Found.</h1> :
                        <ResultsList jobList={this.props.jobs} />
                    }
                </div>
                <div  id="job-table-footer">
                    <Pagination
                        current={this.props.page}
                        total={totalPages === 0 ? 1 : totalPages%5 === 0 ? totalPages : totalPages + 1 }
                        onChange={this.props.pageChangeHandler}
                    />
                </div>
            </Col>
        )
    }
}

export default JobResultTable;