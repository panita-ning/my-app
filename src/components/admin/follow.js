import React from "react";
import { Table, Card, Input, Button, Space ,Typography} from 'antd';

const { Title } = Typography;
const { Search } = Input;
const onSearch = value => console.log(value);

const columns = [
    { title: 'ลำดับ', dataIndex: 'id', key: 'id' },
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
        id : '1',
        us_firstname: 'xxxxxxx',
        us_lastname: 'xxxxxxx',
        ps_name: 'xxxxxxx',
        accept_date: 'xxxxxxx',
        expire_date: 'xxxxxxx',
        cp_name: 'xxxxxxx'
        
    },
    {
        key: 1,
        id : '2',
        us_firstname: 'xxxxxxx',
        us_lastname: 'xxxxxxx',
        ps_name: 'xxxxxxx',
        accept_date: 'xxxxxxx',
        expire_date: 'xxxxxxx',
        cp_name: 'xxxxxxx'

    },
    {
        key: 1,
        id : '3',
        us_firstname: 'xxxxxxx',
        us_lastname: 'xxxxxxx',
        ps_name: 'xxxxxxx',
        accept_date: 'xxxxxxx',
        expire_date: 'xxxxxxx',
        cp_name: 'xxxxxxx'

    },
    {
        key: 1,
        id : '4',
        us_firstname: 'xxxxxxx',
        us_lastname: 'xxxxxxx',
        ps_name: 'xxxxxxx',
        accept_date: 'xxxxxxx',
        expire_date: 'xxxxxxx',
        cp_name: 'xxxxxxx'

    },
    {
        key: 1,
        id : '5',
        us_firstname: 'xxxxxxx',
        us_lastname: 'xxxxxxx',
        ps_name: 'xxxxxxx',
        accept_date: 'xxxxxxx',
        expire_date: 'xxxxxxx',
        cp_name: 'xxxxxxx'

    },

];
const Follow = (props) => {
    return (
        <>
        <br/>
        <Card hoverable> 
            
            <div>
               
                <div style={{width:300,position:'absolute', top:'40px', right:'20px'}}>
                    <Search 
                        placeholder="ค้นหาข้อมูลการรับเข้าทำงาน"
                        allowClear
                        enterButton="Search" 
                        size="large"
                        onSearch={onSearch}
                    />
                </div>
                <br/>
                 <div>
                     <Title level={3}>ข้อมูลการรับเข้าทำงาน </Title>
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
export default Follow