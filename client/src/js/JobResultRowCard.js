import React from 'react';
import { Row, Col, Badge, Divider } from 'antd';
import "./JobResultTable.css";

class JobResultRowCard extends React.Component {

    render() {

        let skills = this.props.skills;

        let skillBadges = skills.map((skill) => {

            return <Badge count={skill} style={{ backgroundColor: '#fff', color: '#999',  boxShadow: '0 0 0 1px #d9d9d9 inset', marginRight: '5px' }} />

        });

        return (
            <Row type="flex" align="top">
                <Col span={18}>
                    <Row>
                        <div style={{display: 'flex'}}>
                            <h3 style={{marginRight: '10px'}}>{this.props.title}</h3>
                            <Badge style= {{padding: "0 12px",
                                backgroundColor: this.props.availability === "hourly"
                                    ? "#56d48f"
                                    : this.props.availability === "full-time"
                                        ? "#4bd3ff"
                                        : "#ffc14a"}} count={this.props.availability} />
                        </div>
                    </Row>

                    <Row>
                        <div style={{display: 'flex'}}>
                            <p style={{marginRight: '10px'}}><a href="/">{this.props.company}</a></p>
                            <p>{this.props.location}</p>
                        </div>
                    </Row>

                    <Row>
                        <div>
                            <p>Reply rate: <strong>{this.props.replyRate}</strong></p>
                        </div>
                    </Row>

                    <Row>
                        <div>
                            <p>{this.props.description}</p>
                        </div>
                    </Row>
                    <Row>
                        <div>
                            {skillBadges}
                        </div>
                    </Row>

                </Col>
                <Col span={6}>
                    <h3 style={{paddingLeft: "5em", textAlign: 'right'}}>{this.props.payRate}</h3>
                </Col>
                <Divider/>
            </Row>
        )
    }
}

export default JobResultRowCard;