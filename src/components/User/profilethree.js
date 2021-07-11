import { Card, Form, Input, Row, Button, Col, } from 'antd';

const Profilethree = (props) => {

    return (
        <div>
            <div className="site-card-border-less-wrapper" >
                <Card title=">ประวัติการศึกษา" bordered={false} style={{ width: '100%', backgroundColor: '#BEBEBE' }}>
                    <center>
                        <div style={{ width: 700, }}>
                            <Card style={{ borderRadius: 15 }}>
                                <div>

                                    <Form>
                                        <Form.Item label="ระดับการศึกษา">
                                            <Input placeholder="xxxxxxxxxxx" />
                                        </Form.Item>
                                        <Form.Item label=" สถานศึกษา">
                                            <Input placeholder="xxxxxxxxxxx" />
                                        </Form.Item>
                                        <Form.Item label="คณะ">
                                            <Input placeholder="xxxxxxxxxxx" />
                                        </Form.Item>
                                        <Form.Item label="วุฒิการศึกษา">
                                            <Input placeholder="xxxxxxxxxxx" />
                                        </Form.Item>
                                        <Form.Item label="สาขาวิชา">
                                            <Input placeholder="xxxxxxxxxxx" />
                                        </Form.Item>
                                        <Form.Item label="เกรดเฉลี่ย">
                                            <Input placeholder="xxxxxxxxxxx" />
                                        </Form.Item>
                                        <Form.Item label="ปีที่สำเร็จการศึกษา">
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

export default Profilethree;