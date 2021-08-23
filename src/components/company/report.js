import React from "react";
import { Table, Card, Input, Button, Space, Typography, Row, Col, Progress } from 'antd';
import { SignalFilled, WechatFilled } from '@ant-design/icons';
const { Title } = Typography;



const Report = (props) => {
    return (
        <>
            <Row>
                <Col span={12}>
                    <Card style={{ width: 500, height: 180, backgroundColor: '#191970', borderRadius: 15 }}>
                        <div>
                            <Row>
                                <Col span={16}>
                                    <Title level={3} style={{ color: 'white' }}>สถิติผู้ใช้งาน </Title>
                                </Col>
                                <Col>
                                    <SignalFilled style={{ fontSize: '150px', color: 'white' }} />
                                </Col>
                            </Row>

                        </div>
                    </Card>
                </Col>

                <Col span={12}>
                    <Card style={{ width: 500, height: 180, backgroundColor: '#6495ED', borderRadius: 15 }}>
                        <div>
                            <Row>
                                <Col span={16}>
                                    <Title level={3} style={{ color: 'white' }}>สถิติผู้สมัครงาน </Title>
                                </Col>
                                <Col>
                                    <WechatFilled style={{ fontSize: '150px', color: 'white' }} />
                                </Col>
                            </Row>

                        </div>
                    </Card>
                </Col>

            </Row>
            <br />
            <Row>
                <div>
                    <Col >
                        <Progress type="dashboard" percent={10} />
                        
                    </Col>
                </div>

            </Row>


        </>
    )
}
export default Report