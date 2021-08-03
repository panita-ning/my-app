import { Card, Form, Input, Row, Button, Col, Typography, Upload, Table, Space } from 'antd';
import React, { useState } from 'react';
import { UploadOutlined, FolderAddFilled } from '@ant-design/icons';


const { Title, Text } = Typography;
const columns = [
  { title: 'ตำแหน่ง / บริษัท', dataIndex: 'Position / Company', key: 'Position' },
  { title: 'สถานที่ปฏิบัติงาน / เงินเดือน', dataIndex: 'Location / Salary', key: 'Location' },
  {
    title: '',
    dataIndex: '',
    key: 'x',
    render: () => (
      
      <Space>
        <br/>
        < Button type="primary" danger > สมัครงาน</Button >
        < Button type="primary" success > รายละเอียด</Button >
      </Space>
    )
  },
];

const data = [
  {
    key: 1,
    Position: '	Software Tester บริษัท สติวเดนท์ แคร์ จำกัด',
    Location: 'กรุงเทพมหานคร(เขตลาดพร้าว) 15000 - 30000',
  },
  {
    key: 1,
    Position: '	Software Tester บริษัท สติวเดนท์ แคร์ จำกัด',
    Location: 'กรุงเทพมหานคร(เขตลาดพร้าว) 15000 - 30000',
  },

];
const Searchdata = (props) => {
  return (
    <div>
      <div className="site-card-border-less-wrapper" >
        <Card bordered={false} style={{ width: '100%', backgroundColor: '#D3D3D3', fontSize: 30, borderRadius: 15, }}>
          <div style={{ width: '100%', }}>
            <Card style={{ borderRadius: 8, backgroundColor: '#696969', height: 70 }}>
              <Row>
                <Col span={19} >
                  <Text style={{ fontSize: '20px', color: "white" }} >Job Match</Text>
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

export default Searchdata;