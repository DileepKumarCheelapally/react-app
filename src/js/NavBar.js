import React from 'react';
import {Row, Col, Menu} from 'antd';


let NavItems = () => {
    return (
        <Menu mode="horizontal">
            <Menu.Item>How It Works</Menu.Item>
            <Menu.Item>Browse</Menu.Item>
            <Menu.Item>Search</Menu.Item>
            <Menu.Item>My Account</Menu.Item>
        </Menu>
    );
};
class NavBar extends React.Component {
    render() {
        return (
            <Row>
                <Col span={16} offset={4}>
                    <NavItems />
                </Col>
            </Row>
        );
    };
}


export default NavBar;