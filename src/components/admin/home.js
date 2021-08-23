import React from "react";
import { Table, Card, Input, Button, Space, Typography, Row, Col, Progress } from 'antd';
import { SignalFilled, WechatFilled, EditFilled } from '@ant-design/icons';
const { Title } = Typography;



const Home = (props) => {
    return (
        <>
            <Row>
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
            <br/>
            <Row>
                <Card style={{ width: 1240, height: 400, backgroundColor: 'white', borderRadius: 15 }}>

                </Card>
            </Row>


        </>
    )
}
export default Home