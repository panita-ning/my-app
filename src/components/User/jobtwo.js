import { Card, Form, Input, Row, Button, Col, Switch, Typography, Checkbox } from 'antd';
import React, { useState } from 'react';



const { Title, Text } = Typography;
const Jobtwo = (props) => {
    const [disabled, setDisabled] = React.useState(true);

    const toggle = () => {
        setDisabled(!disabled);
    };

    const [value, setValue] = useState(undefined);
    const onChange = () => {
        setValue(value);
    };

    const license = ['ผ่านช่องทาง SMS', 'ผ่านช่องทางอีเมล'];
    const warns = ['แนะนำงานดี ', 'นัดสัมภาษณ์']
    return (
        <div>
            <br />
            <Row justify="center">
                &nbsp;&nbsp;&nbsp;
                <Col span={15}  >
                    <Card title=">ตั้งค่าการใช้งาน" style={{ width: '100%', backgroundColor: 'white', borderRadius: 15 }}>
                        <Card bordered={false} style={{ borderRadius: 15, backgroundColor: '#F5F5F5' }}>

                            <Row >
                                <Col span={4}>
                                    <Title level={5}>ชื่อผู้ใช้งาน </Title>
                                </Col>
                                &nbsp;&nbsp;&nbsp;
                                <Col>
                                    <Input placeholder="Basic usage" disabled={disabled}  style={{ width: 400, borderRadius: 10 }} />
                                    <Button type="primary" onClick={toggle} >
                                        edit
                                    </Button>
                                </Col>

                            </Row>
                            <br />
                            <Row >
                                <Col span={4}>
                                    <Title level={5}>รหัสผ่าน </Title>
                                </Col>
                                &nbsp;&nbsp;&nbsp;
                                <Col>
                                    <Input.Password placeholder="Basic usage" disabled={disabled} style={{ width: 400, borderRadius: 10 }} />
                                    <Button type="primary" onClick={toggle} >
                                        edit
                                    </Button>
                                </Col>

                            </Row>
                            <br />
                            <Row >
                                <Col span={4}>
                                    <Title level={5}>อีเมล </Title>
                                </Col>
                                &nbsp;&nbsp;&nbsp;
                                <Col>
                                    <Input type="password" placeholder="Basic usage" disabled={disabled}  style={{ width: 400, borderRadius: 10 }} />
                                    <Button type="primary" onClick={toggle} >
                                        edit
                                    </Button>
                                </Col>
                            </Row>
                            <br />
                            <Row >
                                <Col span={5}>
                                    <Title level={5}>ใบขับขี่</Title>
                                </Col>
                                <Col>
                                    <Form.Item >
                                        <Checkbox.Group options={license} onChange={onChange} />
                                    </Form.Item>
                                </Col>
                            </Row>
                     
                            <Row>
                                <Col span={5}>
                                    <Title level={5}>แจ้งเตือน</Title>
                                </Col>
                                <Col>
                                    <Form.Item >
                                        <Checkbox.Group options={warns} onChange={onChange} />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Col span={3}>
                                    <Button type="primary" size="large" danger>
                                        บันทึก
                                    </Button>
                                </Col>
                                <Col>
                                    <Button type="default" size="large">
                                        ยกเลิก
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

export default Jobtwo;