import { Card, Form, Input, Row, Button, Col, Typography, Upload, Table, Space } from 'antd';
import React from 'react';
import { UploadOutlined, FolderAddFilled } from '@ant-design/icons';


const { Title, Text } = Typography;
const { Search } = Input;
const onSearch = value => console.log(value);

const columns = [
    { title: '	ตำแหน่งงาน', dataIndex: 'Position', key: 'Position' },
    { title: '	วันที่แก้ไข', dataIndex: 'ModifiedDate', key: 'ModifiedDate' },
    { title: 'วันที่ลงประกาศ', dataIndex: 'Publish', key: 'Publish' },
    { title: 'วันปิดประกาศ', dataIndex: 'ExpireDate', key: 'ExpireDate' },
    { title: 'สถานะ', dataIndex: 'Status', key: 'Status' },
   

    {
        title: '',
        dataIndex: '',
        key: 'x',
        render: () => (

            <Space>
                
                < Button type="primary"  >แก้ไขข้อมูล</Button >
                < Button type="primary" danger >ลบข้อมูล</Button >
            </Space>
        )
    },
];

const data = [
    {
        key: 1,
        Position: ' Web Developer',
        ModifiedDate: '12/03/64',
        Publish: '01/02/64',
        ExpireDate: '30/03/64',
        Status: 'รับสมัคร',
      
    },
    {
        key: 1,
        Position: '	Web Developer',
        ModifiedDate: '20/06/64',
        Publish: '01/06/64',
        ExpireDate: '30/08/64',
        Status: '',
     
    },

];
const Joblists = (props) => {
    return (
        <div>
            <br/><br/>
            <div className="site-card-border-less-wrapper" >
                <Card bordered={false} style={{ width: 1150, backgroundColor: '#D3D3D3', fontSize: 30, borderRadius: 15,marginLeft:'13%', marginRight:'18%' }}>
                    <div style={{ width: '100%', }}>
                        <Card style={{ borderRadius: 8, backgroundColor: '#696969', height: 70 }}>
                            <Row>
                                <Col span={19} >
                                    <Text style={{ fontSize: '20px', color: "white" }} >อัพเดท/แก้ไขตำแหน่งงาน</Text>
                                </Col>
                            </Row>
                        </Card>
                    </div>

                    <div style={{ width: '100%', }}>
                        <Card style={{ backgroundColor: 'white' }}>
                          
                                <div style={{ width: 300, position: 'absolute', top: '40px', right: '20px', }}>
                                    <Search
                                        placeholder="ค้นหาตำแหน่งงาน"
                                        allowClear
                                        enterButton="Search"
                                        size="large"
                                        onSearch={onSearch}
                                    />
                                </div>
                          
                            <br /><br /><br />
                            <Row>
                                <Col>
                                    <div style={{ width: 1000,}}>
                                        <Table
                                            tableLayout='fixed'
                                            size={"large"}
                                            columns={columns}
                                            dataSource={data}
                                        />
                                    </div>
                                </Col>
                            </Row>

                        </Card>
                    </div>
                </Card>
            </div>
        </div >
    )
}

export default Joblists;