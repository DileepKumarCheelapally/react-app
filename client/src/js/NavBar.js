import React from 'react';
import {Row, Col, Menu} from 'antd';
import "./NavBar.css";
import logo from "../images/hubstaff.png";


let NavItems = () => {
    return (
        <Menu id = "nav-top" mode="horizontal">
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
            <Row id = "nav-bar">
                <Col span={4}>
                    <img style={{maxWidth: '200px'}} src={logo} />
                </Col>
                <Col span={16} offset={4}>
                    <NavItems />
                </Col>
            </Row>
        );
    };
}


export default NavBar;