import { Card, Form, Input, Row, Button, Col, Typography, Upload, Table, Space } from 'antd';
import React, { useState } from 'react';
import { UploadOutlined, FolderAddFilled } from '@ant-design/icons';


const { Title, Text } = Typography;

const columns = [
  { title: 'ประวัติ', dataIndex: 'Resume', key: 'Resume' ,align:'center'},
  { title: 'ตำแหน่ง / บริษัท', dataIndex: 'Position', key: 'Position',align:'center' },
  { title: 'สถานที่ปฏิบัติงาน / เงินเดือน', dataIndex: 'Location', key: 'Location',align:'center' },
  { title: 'วันที่สมัคร', dataIndex: 'ApplyDate', key: 'Apply_Date',align:'center' },
  { title: 'วันที่เปิดอ่าน', dataIndex: 'ReadDate', key: 'Read_Date',align:'center' },
  { title: 'สถานะ', dataIndex: 'Status', key: 'Status',align:'center' },
  
  {
    title: '',
    dataIndex: '',
    key: 'x',
    render: () => (
      
      <Space>
        <br/>
        < Button type="primary" danger >ลบข้อมูล</Button >
      </Space>
    )
  },
];

const data = [
  {
    key: 1,
    Resume: '	',
    Position: '',
    Location: '',
    Apply_Daten: '',
    Read_Date: '',
  },
  {
    key: 1,
    Resume: '	',
    Position: '',
    Location: '',
    Apply_Daten: '',
    Read_Date: '',
  },

];
const History = (props) => {
  return (
    <div>
      <div className="site-card-border-less-wrapper" >
        <Card bordered={false} style={{ width: '100%', backgroundColor: '#D3D3D3', fontSize: 30, borderRadius: 15, }}>
          <div style={{ width: '100%', }}>
            <Card style={{ borderRadius: 8, backgroundColor: '#696969', height: 70 }}>
              <Row>
                <Col span={19} >
                  <Text style={{ fontSize: '20px', color: "white" }} >ประวัติการสมัครงาน</Text>
                </Col>
              </Row>
            </Card>
          </div>
          <div style={{ width: '100%', }}>
            <Card style={{ backgroundColor: 'white' }}>
              <Row>
                <Col span={10}>
                  <div style={{ width: 200, }}>
                    <div style={{ width: 1400, position: 'static' }}>
                      <Table
                        tableLayout='fixed'
                        size={"large"}
                        columns={columns}
                        dataSource={data}
                      />
                    </div>
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

export default History;