import React from 'react';
import { Badge } from 'antd';
import "../css/JobResultTable.css";

class JobResultRowCard extends React.Component {

    render() {

        let skills = this.props.skills;

        let skillBadges = skills.map((skill) => {

            return <Badge count={skill} style={{ backgroundColor: '#fff', color: '#999'}} />

        });

        return (
            <div>
                <hr />
                <div style={{display: 'flex'}}>
                    <h3 style={{marginRight: '10px'}}>{this.props.title}</h3>
                    <Badge style= {{padding: "0 12px",
                        backgroundColor: this.props.availability === "hourly"
                                ? "#56d48f"
                                : this.props.availability === "full-time"
                                ? "#4bd3ff"
                                : "#ffc14a"}} count={this.props.availability} />
                    <h3 style={{paddingLeft: "5em", textAlign: 'right'}}>{this.props.payRate}</h3>
                </div>
                <div style={{display: 'flex'}}>
                    <p style={{marginRight: '10px'}}><a href="/">{this.props.company}</a></p>
                    <p>{this.props.location}</p>
                </div>
                <div>
                    <p>Reply rate: <strong>{this.props.replyRate}</strong></p>
                </div>
                <div>
                    <p>{this.props.description}</p>
                </div>
                <div>
                    {skillBadges}
                </div>
            </div>
        )
    }
}

export default JobResultRowCard;