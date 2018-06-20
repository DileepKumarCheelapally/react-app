import React from 'react';
import { Badge } from 'antd';

class JobResultRowCard extends React.Component {

    render() {

        let skills = this.props.skills;

        let skillBadges = skills.map((skill) => {

            return <Badge count={skill} style={{ backgroundColor: '#fff', color: '#999'}} />

        });

        return (
            <div>
                <hr />
                <div>
                    <p>{this.props.title}</p>
                    <Badge count={this.props.availability} />
                    <p>{this.props.payRate}</p>
                </div>
                <div>
                    <p><a href="/">{this.props.company}</a></p>
                    <p><a href="/">{this.props.location}</a></p>
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