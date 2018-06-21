import React from "react";

import { Row, Col } from "antd";

class FilterTitle extends React.Component {

    render () {
        return (
            <Row>
                <Col span={12}>
                    <h3>{this.props.title}</h3>
                </Col>
                <Col span={12}>
                    <h4>{this.props.subTitle}</h4>
                </Col>
            </Row>
        )
    }
}

export default FilterTitle;
