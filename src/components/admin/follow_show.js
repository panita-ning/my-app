import { Card, Form, Input, Row, Button, Col, Switch, Typography, Checkbox } from 'antd';
import React, { useState } from 'react';
import { useRouter } from 'next/router'


const { Title, Text } = Typography;
const follow_show = (props) => {
    const router = useRouter()
    const [disabled, setDisabled] = React.useState(true);

    const toggle = () => {
        setDisabled(!disabled);
    };

    const [value, setValue] = useState(undefined);
    const onChange = () => {
        setValue(value);
    };

   
    return (
        <div>
            <br />
            <Row justify="center">
                &nbsp;&nbsp;&nbsp;
                <Col >
                    <Card style={{ width: 800, backgroundColor: 'white', borderRadius: 15 }}>
                    <Title level={3} style={{ color: 'black' }}>รายละเอียด </Title>
                  
                        <Card bordered={false} style={{ borderRadius: 15, backgroundColor: '#F5F5F5' }}>

                            <Row >
                                <Col span={6}>
                                    <Title level={5}>ชื่อ</Title>
                                </Col>
                                &nbsp;&nbsp;&nbsp;
                                <Col>
                                    <Input placeholder="Basic usage" disabled={disabled}  style={{ width: 400, borderRadius: 10 }} />
                                </Col>
                            </Row>
                            <br />

                            <Row >
                                <Col span={6}>
                                    <Title level={5}>นามสกุล</Title>
                                </Col>
                                &nbsp;&nbsp;&nbsp;
                                <Col>
                                    <Input placeholder="Basic usage" disabled={disabled}  style={{ width: 400, borderRadius: 10 }} />
                                    </Col>
                            </Row>
                            <br />
                            
                            <Row >
                                <Col span={6}>
                                    <Title level={5}>ชื่อตำแหน่งงาน</Title>
                                </Col>
                                &nbsp;&nbsp;&nbsp;
                                <Col>
                                    <Input type="password" placeholder="Basic usage" disabled={disabled}  style={{ width: 400, borderRadius: 10 }} />
                                   </Col>
                            </Row>
                            <br />

                            <Row >
                                <Col span={6}>
                                    <Title level={5}>วัน/เดือน/ปี รับเข้า</Title>
                                </Col>
                                &nbsp;&nbsp;&nbsp;
                                <Col>
                                    <Input type="password" placeholder="Basic usage" disabled={disabled}  style={{ width: 400, borderRadius: 10 }} />
                                    </Col>
                            </Row>
                            <br />

                            <Row >
                                <Col span={6}>
                                    <Title level={5}>วัน/เดือน/ปี หมดสัญญา</Title>
                                </Col>
                                &nbsp;&nbsp;&nbsp;
                                <Col>
                                    <Input type="password" placeholder="Basic usage" disabled={disabled}  style={{ width: 400, borderRadius: 10 }} />
                                   </Col>
                            </Row>
                            <br />

                            <Row >
                                <Col span={6}>
                                    <Title level={5}>ชื่อสถานประกอบการ</Title>
                                </Col>
                                &nbsp;&nbsp;&nbsp;
                                <Col>
                                    <Input type="password" placeholder="Basic usage" disabled={disabled}  style={{ width: 400, borderRadius: 10 }} />
                                   </Col>
                            </Row>
                            <br />
                          
                            

                            <Row justify="center">
                               
                                <Col>
                                    <Button type="default" size="middle" style={{ borderRadius: 15 }}>
                                    <span onClick={() => router.push("/admin/follow")} > ย้อนกลับ</span>  
                                    </Button>
                                </Col>
                            </Row>

                        </Card>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default follow_show;