import React from "react";
import { Table, Card, Input, Button, Space } from 'antd';

const { Search } = Input;
const onSearch = value => console.log(value);

const columns = [
    { title: 'รหัสสถานประกอบการ', dataIndex: 'id', key: 'cp_id' },
    { title: 'ชื่อสถานประกอบการ', dataIndex: 'cp_name', key: 'cp_name' },
    { title: 'ตำแหน่งที่ตั้ง', dataIndex: 'cp_address', key: 'cp_address' },
   
    
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
        id: 'xxxxxxx',
        cp_name: 'xxxxxxx',
        cp_address: 'xxxxxxx'
       
    },
    {
        key: 1,
        id: 'xxxxxxx',
        cp_name: 'xxxxxxx',
        cp_address: 'xxxxxxx'
       
    }

];
const Company = (props) => {
    return (
        <>
            <div>
                <div>
                    <Search
                        placeholder="ค้นหาข้อมูลสถานประกอบการ"
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
export default Company