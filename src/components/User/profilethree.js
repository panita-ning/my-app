import { Card, Form, Input, Row, Button, Col, Typography, TreeSelect, Radio } from 'antd';
import { ReadFilled, } from '@ant-design/icons';
import React, { useState } from 'react';

const { TreeNode } = TreeSelect;
const { Title, Text } = Typography;

const Profilethree = (props) => {

    const [value, setValue] = useState(undefined);
    const onChange = () => {
        setValue(value);
    };
    return (
        <div>
            <div className="site-card-border-less-wrapper" >
                <Card bordered={false} style={{ width: '100%', backgroundColor: '#D3D3D3', fontSize: 30, borderRadius: 15 }}>
                    <div style={{ width: '100%', }}>
                        <Card style={{ borderRadius: 8, backgroundColor: '#00CC00', height: 70 }}>
                            <Row>
                                <Col span={1} >
                                    <ReadFilled style={{ fontSize: '30px', color: 'white' }} />
                                </Col>

                                <Col span={21} >
                                    <Text style={{ fontSize: '20px', color: "white" }} >ประวัติการศึกษา</Text>
                                </Col>
                                <Col span={2} >
                                    <div>
                                        <Button type="dashed" htmlType="submit" style={{ borderRadius: 8, color: 'gray' }} >
                                            แก้ไข
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </div>
                    <div style={{ width: '100%', }}>
                        <Card style={{ backgroundColor: 'white' }}>
                            <div>

                                <Form >
                                    <Row justify="end" >
                                        <Col >
                                            <div>
                                                <Button htmlType="submit" style={{ borderRadius: 8, backgroundColor: '#FF7F50', color: 'white' }} >
                                                    เพิ่มประวัติการศึกษา
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                    <hr/>
                                    
                                    <Row>
                                        <Col span={12}  >
                                            <div style={{ width: 400, }}>
                                                <Form.Item>
                                                    <Title level={5}>ปีจบการศึกษา</Title>
                                                    <TreeSelect
                                                        showSearch
                                                        style={{ width: '100%' }}
                                                        value={value}
                                                        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                                        placeholder="-- เลือก --"
                                                        allowClear
                                                        treeDefaultExpandAll
                                                        onChange={onChange}
                                                    >
                                                        <TreeNode value="parent 1" title="2560" />
                                                        <TreeNode value="parent 2" title="2561" />
                                                        <TreeNode value="parent 3" title="2562" />
                                                        <TreeNode value="parent 3" title="2563" />
                                                        <TreeNode value="parent 3" title="2564" />
                                                    </TreeSelect>
                                                    <Radio>กำลังศึกษาอยู่</Radio>
                                                </Form.Item>
                                            </div>
                                        </Col>
                                        <Col span={12}>
                                            <div style={{ width: 400, }}>
                                                <Form.Item >
                                                    <Title level={5}>ประเทศ</Title>
                                                    <TreeSelect
                                                        showSearch
                                                        style={{ width: '100%' }}
                                                        value={value}
                                                        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                                        placeholder="-- เลือก --"
                                                        allowClear
                                                        treeDefaultExpandAll
                                                        onChange={onChange}
                                                    >
                                                        <TreeNode value="parent 1" title="ไทย" />
                                                        <TreeNode value="parent 2" title="ต่างประเทศ" />
                                                    </TreeSelect>
                                                </Form.Item>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={12} >
                                            <div style={{ width: 400, }}>
                                                <Form.Item label="" >
                                                    <Title level={5}>จังหวัดที่ตั้งสถาบัน</Title>
                                                    <TreeSelect
                                                        showSearch
                                                        style={{ width: '100%' }}
                                                        value={value}
                                                        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                                        placeholder="-- เลือก --"
                                                        allowClear
                                                        treeDefaultExpandAll
                                                        onChange={onChange}
                                                    >
                                                        <TreeNode value="parent 1" title="กาฬสินธุ์ " />
                                                        <TreeNode value="parent 1" title="มหาสารคาม" />
                                                        <TreeNode value="parent 1" title="อุบลราชธานี" />
                                                        <TreeNode value="parent 1" title="นครพนม" />
                                                        <TreeNode value="parent 1" title="หนองคาย" />
                                                        <TreeNode value="parent 1" title="อำนาจเจริญ " />
                                                    </TreeSelect>
                                                </Form.Item>
                                            </div>
                                        </Col>
                                        <Col span={12} >
                                            <div style={{ width: 400, }}>
                                                <Form.Item >
                                                    <Title level={5}>วุฒิการศึกษา</Title>
                                                    <TreeSelect
                                                        showSearch
                                                        style={{ width: '100%' }}
                                                        value={value}
                                                        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                                        placeholder="-- เลือก -- "
                                                        allowClear
                                                        treeDefaultExpandAll
                                                        onChange={onChange}
                                                    >
                                                        <TreeNode value="parent 1" title="ต่ำกว่า ม.6" />
                                                        <TreeNode value="parent 2" title="ม.6" />
                                                        <TreeNode value="parent 3" title="ปวช." />
                                                        <TreeNode value="parent 3" title="ปวส. " />
                                                        <TreeNode value="parent 3" title="ปริญญาตรี" />
                                                        <TreeNode value="parent 3" title="ปริญญาโท " />
                                                        <TreeNode value="parent 3" title="ปริญญาเอก" />
                                                    </TreeSelect>
                                                </Form.Item>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col >
                                            <div style={{ width: 900, }}>
                                                <Form.Item >
                                                    <Title level={5}>สถาบันการศึกษา</Title>
                                                    <TreeSelect
                                                        showSearch
                                                        style={{ width: '100%' }}
                                                        value={value}
                                                        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                                        placeholder="-- เลือก --"
                                                        allowClear
                                                        treeDefaultExpandAll
                                                        onChange={onChange}
                                                    >
                                                        <TreeNode value="parent 1" title="มหาวิทยาลัยมหาสารคาม" />
                                                        <TreeNode value="parent 2" title="มหาวิทยาลัยราชภัฏมหาสารคาม" />
                                                        <TreeNode value="parent 3" title="วิทยาลัยเทคนิค" />
                                                        <TreeNode value="parent 3" title="วิทยาลัยอาชีวศึกษา " />
                                                    </TreeSelect>
                                                </Form.Item>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={8}>
                                            <div style={{ width: 200, }}>
                                                <Form.Item  >
                                                    <Title level={5}>คณะวิชา</Title>
                                                    <Input placeholder="" />
                                                </Form.Item>
                                            </div>
                                        </Col>
                                        <Col span={8}>
                                            <div style={{ width: 200, }}>
                                                <Form.Item  >
                                                    <Title level={5}>สาขาวิชา</Title>
                                                    <Input placeholder="" />
                                                </Form.Item>
                                            </div>
                                        </Col>
                                        <Col span={8}>
                                            <div style={{ width: 200, }}>
                                                <Form.Item  >
                                                    <Title level={5}>เกรดเฉลี่ย </Title>
                                                    <Input placeholder="" />
                                                </Form.Item>
                                            </div>
                                        </Col>
                                    </Row>

                                </Form>
                                <hr />
                                <center>
                                    <div>
                                        <Button type="primary" danger htmlType="submit" style={{ borderRadius: 8 }} >
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

export default Profilethree;