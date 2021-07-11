import {
    Card, Avatar, Row, Col, Form,
    Input,
    Button,

} from 'antd';

const user_edit = (props) => {
    return (
        <>
            <Card>
                <Row>
                    <Col span={8} push={7}>
                        <Col span={20} push={7} style={{ fontSize: 40, }}>รายละเอียด</Col>
                        <br />
                        <div>
                            <Col span={10} push={0}>
                                <div>
                                    <Card style={{ width: 500, }}>
                                        <Form>
                                            <Form.Item label="รหัสผู้ใช้งาน">
                                                <Input placeholder="xxxxxxxxxxx" />
                                            </Form.Item>
                                            <Form.Item label="ชื่อ - นามสกุล">
                                                <Input placeholder="xxxxxxxxxxx" />
                                            </Form.Item>
                                            <Form.Item label="อีเมล">
                                                <Input placeholder="xxxxxxxxxxx" />
                                            </Form.Item>
                                            <Form.Item label="เบอร์โทรศัพท์">
                                                <Input placeholder="xxxxxxxxxxx" />
                                            </Form.Item>
                                           
                                        </Form>
                                        <Button type="primary" htmlType="submit" danger>
                                            ลบข้อมูล
                                        </Button>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <Button type="primary" htmlType="submit" danger>
                                            ยกเลิก
                                        </Button>
                                    </Card>
                                </div>
                            </Col>
                        </div>
                    </Col>
                </Row>
            </Card>
        </>
    );
}
export default user_edit