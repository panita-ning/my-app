import { Card, Form, Input, Row, Button, Col, } from 'antd';

const Profiletwo = (props) => {

    return (
        <div>
            <div className="site-card-border-less-wrapper" >
                <Card title=">ทักษะ และความสามารถ" bordered={false} style={{ width: '100%', backgroundColor: '#BEBEBE' }}>
                    <center>
                        <div style={{ width: 700, }}>
                            <Card style={{ borderRadius: 15 }}>
                                <div>

                                    <Form>
                                        <Form.Item label="ทักษะ">
                                            <Input placeholder="xxxxxxxxxxx" />
                                        </Form.Item>
                                        <Form.Item label=" ความสามารถด้านภาษา">
                                            <Input placeholder="xxxxxxxxxxx" />
                                        </Form.Item>
                                        <Form.Item label="ความสามารถด้านคอมพิวเตอร์">
                                            <Input placeholder="xxxxxxxxxxx" />
                                        </Form.Item>
                                        <Form.Item label="ความสามารถในการขับขี่">
                                            <Input placeholder="xxxxxxxxxxx" />
                                        </Form.Item>
                                        <Form.Item label="ความสามารถพิเศษ อื่นๆ">
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

export default Profiletwo;