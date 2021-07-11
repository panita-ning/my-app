import {
    Card, Avatar, Row, Col, Form,
    Input,
    Button,

} from 'antd';

const follow_show = (props) => {
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
                                        <Form.Item label="ไอดีสมัครงาน">
                                                <Input placeholder="xxxxxxxxxxx" />
                                            </Form.Item>
                                            <Form.Item label="ชื่อ">
                                                <Input placeholder="xxxxxxxxxxx" />
                                            </Form.Item>
                                            <Form.Item label="นามสกุล">
                                                <Input placeholder="xxxxxxxxxxx" />
                                            </Form.Item>
                                            <Form.Item label="ชื่อตำแหน่งงาน">
                                                <Input placeholder="xxxxxxxxxxx" />
                                            </Form.Item>
                                            <Form.Item label="วัน/เดือน/ปี รับเข้า">
                                                <Input placeholder="xxxxxxxxxxx" />
                                            </Form.Item>
                                            <Form.Item label="วัน/เดือน/ปี หมดสัญญา">
                                                <Input placeholder="xxxxxxxxxxx" />
                                            </Form.Item>
                                            <Form.Item label="ชื่อสถานประกอบการ">
                                                <Input placeholder="xxxxxxxxxxx" />
                                            </Form.Item>
                                        </Form>
                                        <Button type="primary" htmlType="submit" danger>
                                            ย้อนกลับ
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
export default follow_show