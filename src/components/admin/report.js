import React from "react";
import { Table, Card, Input, Button, Space, Typography, Row, Col, DatePicker } from 'antd';
import { SignalFilled, WechatFilled, EditFilled, FileTextFilled } from '@ant-design/icons';
const { Title } = Typography;



const Report = (props) => {
    return (
        <>
            <Title level={2} style={{ color: 'black' }}>รายงาน </Title>
            <hr />
            <Row justify="center">
                <Col span={8}>
                    <Card style={{ width: 400, height: 150, backgroundColor: '#191970', borderRadius: 15 }}>
                        <div>
                            <Row >
                                <Col span={16}>
                                    <Title level={4} style={{ color: 'white' }}>สถิติผู้ใช้งานระบบ </Title>
                                    <Title level={2} style={{ color: 'white' }}>356,000 คน</Title>
                                </Col>
                                <Col>
                                    <SignalFilled style={{ fontSize: '100px', color: 'white' }} />
                                </Col>
                            </Row>

                        </div>
                    </Card>
                </Col>

                <Col span={8}>
                    <Card style={{ width: 400, height: 150, backgroundColor: '#6495ED', borderRadius: 15 }}>
                        <div>
                            <Row>
                                <Col span={16}>
                                    <Title level={4} style={{ color: 'white' }}>สถิติผู้สมัครงาน </Title>
                                    <Title level={2} style={{ color: 'white' }}>12,000 คน</Title>
                                </Col>
                                <Col>
                                    <WechatFilled style={{ fontSize: '100px', color: 'white' }} />
                                </Col>
                            </Row>

                        </div>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: 400, height: 150, backgroundColor: '#32CD32', borderRadius: 15 }}>
                        <div>
                            <Row>
                                <Col span={16}>
                                    <Title level={4} style={{ color: 'white' }}>สถิติผู้ที่ได้รับเข้าทำงาน </Title>
                                    <Title level={2} style={{ color: 'white' }}>9,000 คน</Title>
                                </Col>
                                <Col>
                                    <EditFilled style={{ fontSize: '100px', color: 'white' }} />
                                </Col>
                            </Row>

                        </div>
                    </Card>
                </Col>

            </Row>
            <br /><br /><br />

            <Row justify='center'>
                <Col span={6}>
                    <div className="example">
                        <DatePicker.RangePicker />
                    </div>
                </Col>

                <Col>
                    <div>
                        <Button type="primary" danger htmlType="submit" style={{ borderRadius: 8 }} >
                            ค้นหา
                        </Button>
                    </div>
                </Col>
            </Row>
            <br /><br />
            <Row>
                <Col span={4}>
                    <div>
                        <Title level={4} style={{ color: 'black' }}>ดาวโหลดรายงาน </Title>
                    </div>
                </Col>
                <Col span={3}>
                    <div>

                        <Button type="default" htmlType="submit" style={{ borderRadius: 8, color: 'red', backgroundColor: 'WhiteSmoke' }} >
                            <FileTextFilled style={{ fontSize: '20px', color: 'red' }} />
                            ไฟล์ PDF

                        </Button>
                    </div>
                </Col>
                <Col>
                    <div>
                        <Button type="default" d htmlType="submit" style={{ borderRadius: 8, color: 'green', backgroundColor: 'WhiteSmoke' }} >
                            <FileTextFilled style={{ fontSize: '20px', color: 'green' }} />
                            ไฟล์ Excel
                        </Button>
                    </div>
                </Col>
            </Row>
            <br /><br />
            <Row justify='center'>
                <Col span={4}>
                    <div>
                        <Title level={4} style={{ color: 'black' }}>สถิติผู้สมัครงาน</Title>
                    </div>
                </Col>
            </Row>


        </>
    )
}
export default Report