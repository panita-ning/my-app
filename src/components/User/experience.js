import React, { useState } from 'react';
import { ContactsFilled } from '@ant-design/icons';
import { Card, Form, Input, Row, Button, Col, Typography, TreeSelect,Radio } from 'antd';
const { TreeNode } = TreeSelect;
const { Title,Text } = Typography;
const Experience = (props) => {

    const [value, setValue] = useState(undefined);
    const onChange = () => {
        setValue(value);
    };
    return (
        <div>
            <div className="site-card-border-less-wrapper" >
                <Card bordered={false} style={{ width: 850, backgroundColor: '#D3D3D3', fontSize: 30,borderRadius: 15 }}>
                <div style={{ width: '100%', }}>
                        <Card style={{ borderRadius: 8, backgroundColor: '#00CC00', height: 70 }}>
                            <Row>
                                <Col span={2} >
                                    <ContactsFilled style={{fontSize: '40px', color:'white'}} />
                                </Col>

                                <Col span={20} >
                                    <Text style={{ fontSize:'20px', color: "white" }} >ประวัติการทำงาน</Text>
                                </Col>
                                <Col span={2} >
                                <div>
                                        <Button type="dashed"   htmlType="submit" style={{ borderRadius: 8,color:'gray' }} >
                                            แก้ไข
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </div>

                    <div style={{ width: '100%', alignItems:'stretch'}}>
                        <Card style={{  backgroundColor: '#F5F5F5' ,position:'-webkit-sticky'}}>
                            <div>

                                <Form>
                                <Row justify="end" >
                                        <Col >
                                            <div>
                                                <Button htmlType="submit" style={{ borderRadius: 8, backgroundColor: '#FF7F50', color: 'white' }} >
                                                    เพิ่มประวัติการทำงาน
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                    <hr/>
                                    <Title level={5}>ระยะเวลา</Title>
                                    <Row>
                                        <Col span={5}>
                                            <div style={{ width: 150, }}>
                                                <Form.Item label="" >
                                                    <TreeSelect
                                                        showSearch
                                                        style={{ width: '100%' }}
                                                        value={value}
                                                        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                                        placeholder="-- ปี --"
                                                        allowClear
                                                        treeDefaultExpandAll
                                                        onChange={onChange}
                                                    >
                                                        <TreeNode value="parent 1" title="2540" />
                                                        <TreeNode value="parent 2" title="2541" />
                                                        <TreeNode value="parent 3" title="2542" />
                                                        <TreeNode value="parent 3" title="2543" />
                                                        <TreeNode value="parent 3" title="2544" />
                                                        <TreeNode value="parent 3" title="2545" />
                                                    </TreeSelect>
                                                </Form.Item>
                                            </div>
                                        </Col>
                                        <Col span={5}>
                                            <div style={{ width: 150, }}>
                                                <Form.Item >
                                                    
                                                    <TreeSelect
                                                        showSearch
                                                        style={{ width: '100%' }}
                                                        value={value}
                                                        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                                        placeholder="-- เดือน --"
                                                        allowClear
                                                        treeDefaultExpandAll
                                                        onChange={onChange}
                                                    >
                                                        <TreeNode value="parent 1" title="มกราคม" />
                                                        <TreeNode value="parent 2" title="กุมภาพันธ์" />
                                                        <TreeNode value="parent 3" title="มีนาคม" />
                                                        <TreeNode value="parent 3" title="เมษายน " />
                                                        <TreeNode value="parent 3" title="พฤษภาคม" />
                                                        <TreeNode value="parent 3" title="มิถุนายน " />
                                                        <TreeNode value="parent 3" title="กรกฎาคม" />
                                                    </TreeSelect>
                                                </Form.Item>
                                            </div>
                                        </Col>
                                        <Col span={1}>
                                        <Form.Item >
                                            <Title style={{fontSize:16}}> ถึง </Title>
                                        </Form.Item>
                                        </Col>
                                        &nbsp;&nbsp; &nbsp;&nbsp;
                                        <Col span={5} >
                                            <div style={{ width: 150, fontSize:50}}>
                                                
                                                    
                                                    <Form.Item  >
                                                    <TreeSelect
                                                        showSearch
                                                        style={{ width: '100%' }}
                                                        value={value}
                                                        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                                        placeholder="-- ปี --"
                                                        allowClear
                                                        treeDefaultExpandAll
                                                        onChange={onChange}
                                                    >
                                                        <TreeNode value="parent 1" title="2540" />
                                                        <TreeNode value="parent 2" title="2541" />
                                                        <TreeNode value="parent 3" title="2542" />
                                                        <TreeNode value="parent 3" title="2543" />
                                                        <TreeNode value="parent 3" title="2544" />
                                                        <TreeNode value="parent 3" title="2545" />

                                                    </TreeSelect>
                                                </Form.Item>
                                            </div>
                                        </Col>

                                        <Col >
                                            <div style={{ width: 150, }}>
                                                
                                                <TreeSelect

                                                    showSearch
                                                    style={{ width: '100%' }}
                                                    value={value}
                                                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                                    placeholder="-- เดือน --"
                                                    allowClear
                                                    treeDefaultExpandAll
                                                    onChange={onChange}
                                                >
                                                    <TreeNode value="parent 1" title="มกราคม" />
                                                    <TreeNode value="parent 2" title="กุมภาพันธ์" />
                                                    <TreeNode value="parent 3" title="มีนาคม" />
                                                    <TreeNode value="parent 3" title="เมษายน " />
                                                    <TreeNode value="parent 3" title="พฤษภาคม" />
                                                    <TreeNode value="parent 3" title="มิถุนายน " />
                                                    <TreeNode value="parent 3" title="กรกฎาคม" />
                                                </TreeSelect>
                                                <Radio>ถึงปัจจุบัน</Radio>
                                            </div>
                                        </Col>
                                    </Row>
                                   
                                    <Row>
                                        <Col span={10}>
                                            <div style={{ width: 300, }}>
                                                <Form.Item label="">
                                                <Title level={5}>ชื่อบริษัท</Title>
                                                    <Input placeholder="ชื่อบริษัท " size="middle" />
                                                </Form.Item>
                                            </div>
                                        </Col>
                                        <Col span={12}>
                                            <div style={{ width: 400, }}>
                                                <Form.Item  >
                                                <Title level={5}>ที่อยู่</Title>
                                                    <Input.TextArea placeholder="ระบุที่อยู่" />
                                                </Form.Item>
                                            </div>
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col span={10}>
                                            <div style={{ width: 300, }}>
                                                <Form.Item label="">
                                                <Title level={5}>ตำแหน่งงาน</Title>
                                                    <Input placeholder="ระบุตำแหน่งงาน " size="middle" />
                                                </Form.Item>
                                            </div>
                                        </Col>
                                        <Col span={12}>
                                            <div style={{ width: 400, }}>
                                                <Form.Item label="">
                                                <Title level={5}>เงินเดือน</Title>
                                                    <Input placeholder="ระบุเงินเดือน" size="middle" />
                                                </Form.Item>
                                            </div>
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col span={15}>
                                            <div style={{ width: 700, }}>
                                                <Form.Item  >
                                                <Title level={5}>หน้าที่ความรับผิดชอบ</Title>
                                                    <Input.TextArea placeholder="ระบุหน้าที่ความรับผิดชอบ" />
                                                </Form.Item>
                                            </div>
                                        </Col>
                                    </Row>

                                </Form>
                                <hr/>
                                <center>
                                    <div>
                                        <Button type="primary"danger htmlType="submit" style={{borderRadius:8}} >
                                            บันทึกข้อมูล
                                        </Button>
                                    </div>
                                </center>
                            </div>
                        </Card>
                    </div>

                </Card>
            </div>
        </div>
    )
}

export default Experience;