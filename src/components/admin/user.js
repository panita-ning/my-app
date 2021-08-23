import React from "react";
import { Table, Card, Input, Button, Space, Typography } from 'antd';

const { Title } = Typography;
const { Search } = Input;
const onSearch = value => console.log(value);

const columns = [
    { title: 'ลำดับ', dataIndex: 'id', key: 'id' },
    { title: 'รหัสผู้ใช้งาน', dataIndex: 'usid', key: 'usid' },
    { title: 'ชื่อ', dataIndex: 'firstname', key: 'firstname' },
    { title: 'นามสกุล', dataIndex: 'lastname', key: 'lastname' },
    { title: 'เบอร์โทรศัพท์', dataIndex: 'phone', key: 'phone' },
    { title: 'อีเมล', dataIndex: 'email', key: 'email' },

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
        usid: '101',
        firstname: 'ปณิตา',
        lastname: 'หนันศรี',
        phone: '0825468892',
        email: 'nn@gmail.com'
    },
    {
        key: 1,
        id: '2',
        usid: '102',
        firstname: 'สมศรี',
        lastname: 'สุดสวย',
        phone: '0936951207',
        email: 'somsri@gmail.com'
    },
    {
        key: 1,
        id: '3',
        usid: '103',
        firstname: 'ประหยัด',
        lastname: 'มั่งมี',
        phone: '0856223986',
        email: 'papp@gmail.com'
    },
    {
        key: 1,
        id: '4',
        usid: '104',
        firstname: 'สายใจ',
        lastname: 'บุญสุข',
        phone: '0814379938',
        email: 'sai@gmail.com'
    },
    {
        key: 1,
        id: '5',
        usid: '105',
        firstname: 'อรทัย',
        lastname: 'ไกลฟ้า',
        phone: '0986123974',
        email: 'on_02@gmail.com'
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