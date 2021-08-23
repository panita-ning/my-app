import { Card, Form, Input, Row, Button, Col, Switch, Typography, Checkbox } from 'antd';
import React, { useState } from 'react';
import { useRouter } from 'next/router'


const { Title, Text } = Typography;
const Company_edit = (props) => {
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
                                    <Title level={5}>รหัสสถานประกอบการ</Title>
                                </Col>
                                &nbsp;&nbsp;&nbsp;
                                <Col>
                                    <Input placeholder="001" disabled={disabled}  style={{ width: 400, borderRadius: 10 }} />
                                </Col>
                            </Row>
                            <br />

                            <Row >
                                <Col span={6}>
                                    <Title level={5}>ชื่อผู้ใช้งาน</Title>
                                </Col>
                                &nbsp;&nbsp;&nbsp;
                                <Col>
                                    <Input placeholder="panita_company" disabled={disabled}  style={{ width: 400, borderRadius: 10 }} />
                                </Col>
                            </Row>
                            <br />

                            <Row >
                                <Col span={6}>
                                    <Title level={5}>ชื่อสถานประกอบการ</Title>
                                </Col>
                                &nbsp;&nbsp;&nbsp;
                                <Col>
                                    <Input placeholder="บริษัท โทลล์เทค จำกัด" disabled={disabled}  style={{ width: 400, borderRadius: 10 }} />
                                </Col>
                            </Row>
                            <br />

                            <Row >
                                <Col span={6}>
                                    <Title level={5}>ตำแหน่งที่ตั้ง</Title>
                                </Col>
                                &nbsp;&nbsp;&nbsp;
                                <Col>
                                    <Input placeholder="กรุงเทพมหานคร (เขตบางกะปิ)" disabled={disabled}  style={{ width: 400, borderRadius: 10 }} />
                                    </Col>
                            </Row>
                            <br />
                            
                            <Row >
                                <Col span={6}>
                                    <Title level={5}>เลขจดทะเบียนบริษัท</Title>
                                </Col>
                                &nbsp;&nbsp;&nbsp;
                                <Col>
                                    <Input placeholder="135-22186952" disabled={disabled}  style={{ width: 400, borderRadius: 10 }} />
                                   </Col>
                            </Row>
                            <br />

                            <Row >
                                <Col span={6}>
                                    <Title level={5}>ประเภทธุรกิจหลัก </Title>
                                </Col>
                                &nbsp;&nbsp;&nbsp;
                                <Col>
                                    <Input  placeholder="การศึกษา" disabled={disabled}  style={{ width: 400, borderRadius: 10 }} />
                                    </Col>
                            </Row>
                            <br />

                            <Row >
                                <Col span={6}>
                                    <Title level={5}>ขนาดธุรกิจ</Title>
                                </Col>
                                &nbsp;&nbsp;&nbsp;
                                <Col>
                                    <Input  placeholder=" ธุรกิจขนาดเล็ก ไม่เกิน 50 คน" disabled={disabled}  style={{ width: 400, borderRadius: 10 }} />
                                    </Col>
                            </Row>
                            <br />


                            <Row >
                                <Col span={6}>
                                    <Title level={5}>อีเมล </Title>
                                </Col>
                                &nbsp;&nbsp;&nbsp;
                                <Col>
                                    <Input  placeholder="company@gmail.com" disabled={disabled}  style={{ width: 400, borderRadius: 10 }} />
                                    </Col>
                            </Row>
                            <br />

                            <Row justify="center">
                               
                                <Col>
                                    <Button type="default" size="middle" style={{ borderRadius: 15 }}>
                                    <span onClick={() => router.push("/admin/company")} > ย้อนกลับ</span>        
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

export default Company_edit;