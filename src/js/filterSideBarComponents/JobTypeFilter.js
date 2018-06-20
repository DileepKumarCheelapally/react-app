import React from "react";
import { Select } from "antd";

class JobTypeFilter extends React.Component {
    render() {
        return (
            <div>
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a Job type"
                    optionFilterProp="children"
                    onChange={handleChange}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                    <Select.Option value="FullTime">Full Time</Select.Option>
                    <Select.Option value="PartTime">Part Time</Select.Option>
                </Select>
            </div>
        )
    }
}

export default JobTypeFilter;