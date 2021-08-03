import React from "react";
import { Table, Card, Input, Button, Space ,Typography} from 'antd';

const { Title } = Typography;
const { Search } = Input;
const onSearch = value => console.log(value);

const columns = [
    { title: 'ลำดับ', dataIndex: 'id', key: 'id' },
    { title: 'รหัสสถานประกอบการ', dataIndex: 'cp_id', key: 'cp_id' },
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
        id : '1',
        cp_id: 'xxxxxxx',
        cp_name: 'xxxxxxx',
        cp_address: 'xxxxxxx'

    },
    {
        key: 1,
        id : '2',
        cp_id: 'xxxxxxx',
        cp_name: 'xxxxxxx',
        cp_address: 'xxxxxxx'

    },
    {
        key: 1,
        id : '3',
        cp_id: 'xxxxxxx',
        cp_name: 'xxxxxxx',
        cp_address: 'xxxxxxx'

    },
    {
        key: 1,
        id : '4',
        cp_id: 'xxxxxxx',
        cp_name: 'xxxxxxx',
        cp_address: 'xxxxxxx'

    },
    {
        key: 1,
        id : '5',
        cp_id: 'xxxxxxx',
        cp_name: 'xxxxxxx',
        cp_address: 'xxxxxxx'

    }
   


];
const Company = (props) => {
    return (
        <>
        <br/>
        <Card hoverable>
            <div>
                <div  style={{width:300,position:'absolute', top:'40px', right:'20px'}}>
                    <Search
                        placeholder="ค้นหาข้อมูลสถานประกอบการ"
                        allowClear
                        enterButton="Search"
                        size="large"
                        onSearch={onSearch}
                    />
                </div>
                <br />
                <div>
                     <Title level={3}>ข้อมูลสถานประกอบการ </Title>
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
export default Company