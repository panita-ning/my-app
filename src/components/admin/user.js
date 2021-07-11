import React from "react";
import { Table, Card, Input, Button, Space } from 'antd';

const { Search } = Input;
const onSearch = value => console.log(value);

const columns = [
    { title: 'รหัสผู้ใช้งาน', dataIndex: 'id', key: 'us_id' },
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
        id: '02',
        us_username: '10',
        us_firstname: '',
        us_lastname: 'TOYOTA',
        us_phone: '09.00',
        us_email: '2021'
    },
    {
        key: 1,
        id: '111111',
        us_username: '11111',
        us_firstname: 'ต่อภาษี',
        us_lastname: '1/1/1',
        us_phone: '09.00',
        us_email: ''
    }

];
const ManageCar = (props) => {
    return (
        <>
            <div>
                <div>
                    <Search
                        placeholder="ค้นหาข้อมูลผู้ใช้งาน"
                        allowClear
                        enterButton="Search"
                        size="large"
                        onSearch={onSearch}
                    />
                </div>
                <br />
                <Card>
                    <Table
                        columns={columns}
                        dataSource={data}

                    />

                </Card>
            </div>

        </>
    )
}
export default ManageCar