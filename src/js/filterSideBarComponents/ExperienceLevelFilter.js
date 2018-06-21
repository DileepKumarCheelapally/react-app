import React from "react";
import { Select } from "antd";

class ExperienceLevelFilter extends React.Component {
    render() {
        return (
            <div>
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select your experience level"
                    optionFilterProp="children"
                    onChange={value => console.log(value)}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                    <Select.Option value="Entry Level">Entry Level</Select.Option>
                    <Select.Option value="Experienced">Experienced</Select.Option>
                </Select>
            </div>
        )
    }
}

export default ExperienceLevelFilter;