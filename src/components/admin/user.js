import React from "react";
import { Table, Card, Input, Button, Space, Typography } from 'antd';

const { Title } = Typography;
const { Search } = Input;
const onSearch = value => console.log(value);

const columns = [
    { title: 'ลำดับ', dataIndex: 'id', key: 'id' },
    { title: 'รหัสผู้ใช้งาน', dataIndex: 'us_id', key: 'us_id' },
    { title: 'ชื่อผู้ใช้งาน', dataIndex: 'us_username', key: 'us_username' },
    { title: 'ชื่อ', dataIndex: ' us_firstname', key: ' us_firstname' },
    { title: 'นามสกุล', dataIndex: ' us_lastname', key: ' us_lastname' },
    { title: 'เบอร์โทรศัพท์', dataIndex: ' us_phone ', key: ' us_phone ' },
    { title: 'อีเมล', dataIndex: ' us_email', key: ' us_email' },

    {
        title: '',
        dataIndex: '',
        key: 'x',
        render: () => (
            <Space >
                < Button type="primary" success > รายละเอียด</Button >

            </Space>
        )



    },
];

const data = [
    {
        key: 1,
        id: '1',
        us_id: 'xxxxxx',
        us_username: 'xxxxxx',
        us_firstname: 'xxxxxx',
        us_lastname: 'xxxxxx',
        us_phone: 'xxxxxx',
        us_email: 'xxxxxx'
    },
    {
        key: 1,
        id: '2',
        us_id: 'xxxxxx',
        us_username: 'xxxxxx',
        us_firstname: 'xxxxxx',
        us_lastname: 'xxxxxx',
        us_phone: 'xxxxxx',
        us_email: 'xxxxxx'
    },
    {
        key: 1,
        id: '3',
        us_id: 'xxxxxx',
        us_username: 'xxxxxx',
        us_firstname: 'xxxxxx',
        us_lastname: 'xxxxxx',
        us_phone: 'xxxxxx',
        us_email: 'xxxxxx'
    },
    {
        key: 1,
        id: '4',
        us_id: 'xxxxxx',
        us_username: 'xxxxxx',
        us_firstname: 'xxxxxx',
        us_lastname: 'xxxxxx',
        us_phone: 'xxxxxx',
        us_email: 'xxxxxx'
    },
    {
        key: 1,
        id: '5',
        us_id: 'xxxxxx',
        us_username: 'xxxxxx',
        us_firstname: 'xxxxxx',
        us_lastname: 'xxxxxx',
        us_phone: 'xxxxxx',
        us_email: 'xxxxxx'
    },

];
const ManageCar = (props) => {
    return (
        <>
        <br/>
            <Card hoverable>
                <div>
                    <div style={{ width: 300, position: 'absolute', top: '40px', right: '20px' }}>
                        <Search
                            placeholder="ค้นหาข้อมูลผู้ใช้งาน"
                            allowClear
                            enterButton="Search"
                            size="large"
                            onSearch={onSearch}
                        />
                    </div>
                    <br />
                    <div>
                        <Title level={3}>ข้อมูลผู้ใช้งาน </Title>
                    </div>
                    <Card>
                        <Table
                            columns={columns}
                            dataSource={data}

                        />

                    </Card>
                </div>

            </Card>
        </>
    )
}
export default ManageCar