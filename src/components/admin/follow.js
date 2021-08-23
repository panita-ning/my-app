import React from "react";
import { Table, Card, Input, Button, Space ,Typography} from 'antd';

const { Title } = Typography;
const { Search } = Input;
const onSearch = value => console.log(value);

const columns = [
    { title: 'ลำดับ', dataIndex: 'id', key: 'id' },
    { title: 'ชื่อ', dataIndex: 'firstname', key: 'firstname' },
    { title: 'นามสกุล', dataIndex: 'lastname', key: 'lastname' },
    { title: ' ชื่อตำแหน่งงาน', dataIndex: 'name', key: 'name' },
    { title: ' วัน/เดือน/ปี รับเข้า', dataIndex: 'acceptdate', key: 'acceptate' },
    { title: ' วัน/เดือน/ปี หมดสัญญา', dataIndex: 'expiredate', key: 'expiredate' },
    { title: ' ชื่อสถานประกอบการ', dataIndex: 'cpname', key: 'cpname' },
   


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
        firstname: 'ปณิตา',
        lastname: 'หนันศรี',
        name: 'programmer',
        acceptdate: '01/02/62',
        expiredate: '31/08/62',
        cpname: 'บริษัท มนต์ โลจิสติกส์ กรุ๊ป จำกัด'
        
    },
    {
        key: 1,
        id : '2',
        firstname: 'สมชาย',
        lastname: 'มีบุญ',
        name: 'System Analys',
        acceptdate: '01/06/63',
        expiredate: '30/05/64',
        cpname: 'บริษัท อินโฟ ซิส เอเชีย จำกัด'
        
    },
    {
        key: 1,
        id : '3',
        firstname: 'ดวงใจ',
        lastname: 'สุดสวย',
        name: 'นิติกร',
        acceptdate: '04/06/63',
        expiredate: '30/06/64',
        cpname: 'บริษัท เจ.ดับบลิว. เรียลเอสเตท จำกัด'
        
    },
    {
        key: 1,
        id : '4',
        firstname: 'ทรงศักดิ์',
        lastname: 'ชื่นชม',
        name: 'ทนายความ',
        acceptdate: '01/08/63',
        expiredate: '01/03/64',
        cpname: 'บริษัท กฎหมายจักรเพชร จำกัด'
        
    },
    {
        key: 1,
        id : '5',
        firstname: 'สดสี',
        lastname: 'ยั่งยืน',
        name: ' Mobile Developer        ',
        acceptdate: '01/06/64',
        expiredate: '30/12/64',
        cpname: 'บริษัท โทลล์เทค จำกัด'
        
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