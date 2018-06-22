import React from "react";
import "./filters.css";

import { Row, Col } from "antd";

class FilterTitle extends React.Component {
    render () {
        return (
            <Row>
                <Col span={12}>
                    {this.props.title === "FILTERS" ? <h3>{this.props.title}</h3> : <h4>{this.props.title}</h4>}
                </Col>
                <Col span={12}>
                    <h4 style={{textAlign: 'right', color: '#929292'}}>{this.props.subTitle}</h4>
                </Col>
            </Row>
        )
    }
}

export default FilterTitle;
