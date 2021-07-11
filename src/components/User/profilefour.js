import { Card, Form, Input, Row, Button, Col, } from 'antd';

const Profilefour = (props) => {

    return (
        <div>
            <div className="site-card-border-less-wrapper" >
                <Card title=">ประวัติการทำงาน" bordered={false} style={{ width: '100%', backgroundColor: '#BEBEBE' }}>
                    <center>
                        <div style={{ width: 700, }}>
                            <Card style={{ borderRadius: 15 }}>
                                <div>

                                    <Form>
                                        <Form.Item label="ชื่อบริษัท">
                                            <Input placeholder="xxxxxxxxxxx" />
                                        </Form.Item>
                                        <Form.Item label=" ระยะเวลา">
                                            <Input placeholder="xxxxxxxxxxx" />
                                        </Form.Item>
                                        <Form.Item label="ตำแหน่งงาน">
                                            <Input placeholder="xxxxxxxxxxx" />
                                        </Form.Item>
                                        <Form.Item label="เงินเดือน">
                                            <Input placeholder="xxxxxxxxxxx" />
                                        </Form.Item>
                                        <Form.Item label="ที่อยู่-ติดต่อ">
                                            <Input placeholder="xxxxxxxxxxx" />
                                        </Form.Item>
                                        <Form.Item label="หน้าที่ความรับผิดชอบและผลงาน">
                                            <Input placeholder="xxxxxxxxxxx" />
                                        </Form.Item>


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

export default Profilefour;