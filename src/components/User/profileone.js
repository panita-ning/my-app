import { Card, Form, Input, Row, Button, Col,  Avatar,Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const Profileone = (props) => {

    return (
        <div>
            <div className="site-card-border-less-wrapper" >
                <Card title=">โปรไฟล์" bordered={false} style={{ width: '100%', backgroundColor: '#BEBEBE' }}>
                    <center>
                        <div style={{ width: 700, }}>
                            <Card style={{ borderRadius: 15 }}>
                                <div>

                                <Avatar size={200} icon={<UserOutlined />} />
                                        
                                    <Form>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <Form.Item label="เลขบัตรประชาชน">
                                            <Input placeholder="xxxxxxxxxxx" />
                                        </Form.Item>
                                        <Form.Item label=" ผู้ใช้งาน">
                                            <Input placeholder="xxxxxxxxxxx" />
                                        </Form.Item>
                                        <Form.Item label="รหัสผ่าน">
                                            <Input placeholder="xxxxxxxxxxx" />
                                        </Form.Item>
                                        <Form.Item label="อีเมล">
                                            <Input placeholder="xxxxxxxxxxx" />
                                        </Form.Item>
                                        <Form.Item label="คำนำหน้า">
                                            <Input placeholder="xxxxxxxxxxx" />
                                        </Form.Item>
                                        <Form.Item label="ชื่อ">
                                            <Input placeholder="xxxxxxxxxxx" />
                                        </Form.Item>
                                        <Form.Item label="นามสกุล">
                                            <Input placeholder="xxxxxxxxxxx" />
                                        </Form.Item>
                                        <Form.Item label="เพศ">
                                            <Input placeholder="xxxxxxxxxxx" />
                                        </Form.Item>
                                        <Form.Item label="วัน/เดือน/ปีเกิด">
                                            <Input placeholder="xxxxxxxxxxx" />
                                        </Form.Item>
                                        <Form.Item label="เบอร์โทรศัพท์">
                                            <Input placeholder="xxxxxxxxxxx" />
                                        </Form.Item>
                                        <Form.Item label="ที่อยู่">
                                            <Input placeholder="xxxxxxxxxxx" />
                                        </Form.Item>
                                        <Row>
                                            <Form.Item label="ตำบล" style={{ width: 130, }}>
                                                <Input placeholder="xxxxxxxxxxx" />
                                            </Form.Item>
                                            &nbsp;&nbsp;&nbsp;
                                            <Form.Item label="อำเภอ" style={{ width: 130, }}>
                                                <Input placeholder="xxxxxxxxxxx" />
                                            </Form.Item>
                                            &nbsp;&nbsp;&nbsp;
                                            <Form.Item label="จังหวัด" style={{ width: 150, }}>
                                                <Input placeholder="xxxxxxxxxxx" />
                                            </Form.Item>
                                            &nbsp;&nbsp;&nbsp;
                                            <Form.Item label="รหัสไปรษณีย์" style={{ width: 150, }}>
                                                <Input placeholder="xxxxxxxxxxx" />
                                            </Form.Item>
                                        </Row>

                                    </Form>
                                    <Button type="primary" htmlType="submit" danger>
                                        บันทึกข้อมูล
                                    </Button>

                                </div>
                            </Card>
                        </div>

                    </center>
                </Card>
            </div>
        </div>
    )
}

export default Profileone;