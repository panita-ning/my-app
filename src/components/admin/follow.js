import React from "react";
import { Table, Card, Input, Button, Space } from 'antd';

const { Search } = Input;
const onSearch = value => console.log(value);

const columns = [
    { title: 'ชื่อ', dataIndex: 'us_firstname', key: 'us_firstname' },
    { title: 'นามสกุล', dataIndex: 'us_lastname', key: 'us_lastname' },
    { title: ' ชื่อตำแหน่งงาน', dataIndex: 'ps_name ', key: 'ps_name' },
    { title: ' วัน/เดือน/ปี รับเข้า', dataIndex: 'accept_date ', key: 'accept_date' },
    { title: ' วัน/เดือน/ปี หมดสัญญา', dataIndex: 'expire_date ', key: 'expire_date' },
    { title: ' ชื่อสถานประกอบการ', dataIndex: 'cp_name ', key: 'cp_name' },
   


    {
        title: '',
        dataIndex: '',
        key: 'x',
        render: () => (
            <Space>
                < Button type="primary" success > รายละเอียด</Button >

            </Space>
        )



    },
];

const data = [
    {
        key: 1,
        us_firstname: 'xxxxxxx',
        us_lastname: 'xxxxxxx',
        ps_name: 'xxxxxxx',
        accept_date: 'xxxxxxx',
        expire_date: 'xxxxxxx',
        cp_name: 'xxxxxxx'
        
    },
    {
        key: 1,
        us_firstname: 'xxxxxxx',
        us_lastname: 'xxxxxxx',
        ps_name: 'xxxxxxx',
        accept_date: 'xxxxxxx',
        expire_date: 'xxxxxxx',
        cp_name: 'xxxxxxx'

    }

];
const Follow = (props) => {
    return (
        <>
            <div>
                <div>
                    <Search
                        placeholder="ค้นหาข้อมูลการรับเข้าทำงาน"
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
export default Follow