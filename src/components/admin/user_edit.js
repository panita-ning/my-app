import { Card, Form, Input, Row, Button, Col, Switch, Typography, Checkbox } from 'antd';
import React, { useState } from 'react';
import { useRouter } from 'next/router'


const { Title, Text } = Typography;
const User_edit = (props) => {
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
                                    <Title level={5}>รหัสผู้ใช้งาน</Title>
                                </Col>
                                &nbsp;&nbsp;&nbsp;
                                <Col>
                                    <Input placeholder="101" disabled={disabled}  style={{ width: 400, borderRadius: 10 }} />
                                </Col>
                            </Row>
                            <br />

                            <Row >
                                <Col span={6}>
                                    <Title level={5}>ชื่อผู้ใช้งาน</Title>
                                </Col>
                                &nbsp;&nbsp;&nbsp;
                                <Col>
                                    <Input placeholder="panita_21" disabled={disabled}  style={{ width: 400, borderRadius: 10 }} />
                                </Col>
                            </Row>
                            <br />

                            <Row >
                                <Col span={6}>
                                    <Title level={5}>ชื่อ</Title>
                                </Col>
                                &nbsp;&nbsp;&nbsp;
                                <Col>
                                    <Input placeholder="ปณิตา" disabled={disabled}  style={{ width: 400, borderRadius: 10 }} />
                                </Col>
                            </Row>
                            <br />

                            <Row >
                                <Col span={6}>
                                    <Title level={5}>นามสกุล</Title>
                                </Col>
                                &nbsp;&nbsp;&nbsp;
                                <Col>
                                    <Input placeholder="หนันศรี" disabled={disabled}  style={{ width: 400, borderRadius: 10 }} />
                                    </Col>
                            </Row>
                            <br />
                            
                            <Row >
                                <Col span={6}>
                                    <Title level={5}>เบอร์โทรศัพท์</Title>
                                </Col>
                                &nbsp;&nbsp;&nbsp;
                                <Col>
                                    <Input placeholder="0825468892" disabled={disabled}  style={{ width: 400, borderRadius: 10 }} />
                                   </Col>
                            </Row>
                            <br />

                            <Row >
                                <Col span={6}>
                                    <Title level={5}>อีเมล</Title>
                                </Col>
                                &nbsp;&nbsp;&nbsp;
                                <Col>
                                    <Input  placeholder="nn@gmail.com" disabled={disabled}  style={{ width: 400, borderRadius: 10 }} />
                                    </Col>
                            </Row>
                            <br />

                            <Row justify="center">
                               
                                <Col>
                                    <Button type="default" size="middle" style={{ borderRadius: 15 }}>
                                    <span onClick={() => router.push("/admin/user")} > ย้อนกลับ</span>        
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

export default User_edit;