import { Card, Form, Input, Row, Button, Col, Typography, Upload, } from 'antd';
import React, { useState } from 'react';
import { UploadOutlined,FolderAddFilled } from '@ant-design/icons';


const { Title,Text } = Typography;
const Profilefive = (props) => {


    return (
        <div>
            <div className="site-card-border-less-wrapper" >
                <Card bordered={false} style={{ width: '100%', backgroundColor: '#D3D3D3', fontSize: 30,borderRadius: 15, }}>
                <div style={{ width: '100%', }}>
                        <Card style={{ borderRadius: 8, backgroundColor: '#00CC00', height: 70 }}>
                            <Row>
                                <Col span={2} >
                                    <FolderAddFilled style={{fontSize: '35px', color:'white'}} />
                                </Col>

                                <Col span={19} >
                                    <Text style={{ fontSize:'20px', color: "white" }} >เพิ่มไฟล์ CV หรือ Resume</Text>
                                </Col>
                                <Col span={2} >
                                <div>
                                        <Button type="dashed"   htmlType="submit" style={{ borderRadius: 8,color:'gray'}} >
                                            แก้ไข
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </div>
                    <div style={{ width: '100%', }}>
                        <Card style={{  backgroundColor: 'white' }}>
                            <div>
                                <Form >
                                    <Title level={4}>ไฟล์</Title>
                                    <hr/>
                                    <Text type="secondary" style={{fontSize:18}}>ชื่อไฟล์  :  </Text>
                                    <Upload
                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                        listType="picture"
                                        
                                    >
                                        <Button icon={<UploadOutlined />}>เลือกไฟล์</Button>
                                    </Upload>
                                    <br/>
                                    <Text type="secondary" style={{fontSize:18}}>ชื่อไฟล์  :  </Text>
                                    <Upload
                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                        listType="picture"    
                                    >
                                        <Button icon={<UploadOutlined />}>เลือกไฟล์</Button>
                                    </Upload>
                                    <br/>
                                    <Upload
                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                        listType="picture"   
                                    >
                                        <Button icon={<UploadOutlined />}>เลือกไฟล์</Button>
                                    </Upload>
                                    <br/>
                                    <Text type="danger" style={{fontSize:18}}>ไฟล์ที่สามารถแนบได้ *.doc, *.docx, *.pdf, *.jpg ขนาดไฟล์สูงสุดไม่เกิน 1 MB  </Text>
                                   
                                </Form>
                            <hr />
                            <center>
                                <div>
                                    <Button type="primary" danger htmlType="submit" style={{ borderRadius: 8 }} >
                                        บันทึกข้อมูล
                                    </Button>
                                </div>
                            </center>
                            </div>
                        </Card>
                    </div>
                </Card>
        </div>
        </div >
    )
}

export default Profilefive;