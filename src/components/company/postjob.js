import { Card, Form, Input, Row, Button, Col, Typography, TreeSelect, Radio, Checkbox, Alert } from 'antd';
import { DatabaseFilled } from '@ant-design/icons';
import React, { useState } from 'react';

function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
}



const { TreeNode } = TreeSelect;
const { Title, Text } = Typography;

const Postjob = (props) => {
    const [value, setValue] = useState(undefined);
    const onChange = () => {
        setValue(value);
    };
    const [values, setValues] = React.useState(1);

    const onChanges = e => {
        console.log('radio checked', e.target.value);
        setValues(e.target.value);
    };

    const [valuees, setValueone] = React.useState(1);

    const onChangeone = e => {
        console.log('radio checked', e.target.value);
        setValueone(e.target.value);
    };

    return (
        <div>
            <div className="site-card-border-less-wrapper" >
                <Card bordered={false} style={{ width: 880, backgroundColor: '#D3D3D3', fontSize: 30, borderRadius: 15,marginLeft:'22%', marginRight:'18%' }}>
                    <div style={{ width: '100%', }}>
                        <Card style={{ borderRadius: 8, backgroundColor: '#696969', height: 70 }}>
                            <Row>
                                <Col span={1} >
                                    <DatabaseFilled style={{ fontSize: '30px', color: 'white' }} />
                                </Col>

                                <Col span={20} >
                                    <Text style={{ fontSize: '20px', color: "white" }} >ประกาศงาน</Text>
                                </Col>
                                
                            </Row>
                        </Card>
                    </div>
                    <div style={{ width: '100%', }}>
                        <Card style={{ backgroundColor: 'white' }}>
                            <div>

                                <Form >
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <Row>
                                        <Col span={8} >
                                            <div style={{ width: 200, }}>
                                                <Form.Item>
                                                    <Title level={5}>รูปแบบงาน</Title>
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
                                                        <TreeNode value="parent 1" title="งานประจำ" />
                                                        <TreeNode value="parent 2" title="งานนอกเวลา" />
                                                        <TreeNode value="parent 3" title="งานอิสระ" />
                                                        <TreeNode value="parent 3" title="นักศึกษาฝึกงาน" />
                                                        <TreeNode value="parent 3" title="สัญญาจ้าง" />
                                                        <TreeNode value="parent 3" title="สหกิจศึกษา" />
                                                        <TreeNode value="parent 3" title="นักศึกษาจบใหม่" />


                                                    </TreeSelect>
                                                </Form.Item>
                                            </div>
                                        </Col>
                                        <Col span={8} >
                                            <div style={{ width: 200, }}>
                                                <Form.Item>
                                                    <Title level={5}>สาขาอาชีพ</Title>
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
                                                        <TreeNode value="parent 1" title="ไอที" />
                                                        <TreeNode value="parent 2" title="บัญชี" />
                                                        <TreeNode value="parent 3" title="กฎหมาย" />
                                                        <TreeNode value="parent 3" title="การตลาด" />

                                                    </TreeSelect>
                                                </Form.Item>
                                            </div>
                                        </Col>



                                        <Col span={8}>
                                            <div style={{ width: 200, }}>
                                                <Form.Item  >
                                                    <Title level={5}>ชื่อตำแหน่งงาน </Title>
                                                    <Input placeholder="ระบุชื่อตำแหน่งงาน" />
                                                </Form.Item>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={8} >
                                            <div style={{ width: 200, }}>
                                                <Form.Item>
                                                    <Title level={5}>เงินเดือน</Title>
                                                    <Input placeholder="ระบุเงินเดือน" />
                                                </Form.Item>
                                            </div>
                                        </Col>

                                        <Col span={8}  >
                                            <div style={{ width: 200, }}>
                                                <Form.Item>
                                                    <Title level={5}>สถานที่ปฏิบัติงาน </Title>
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
                                                        <TreeNode value="parent 1" title="ระดับเริ่มต้น" />
                                                        <TreeNode value="parent 2" title="ระดับชำนาญ" />
                                                        <TreeNode value="parent 3" title="ระดับมีประสบการณ์" />
                                                        <TreeNode value="parent 3" title="ระดับผู้เชี่ยวชาญ" />

                                                    </TreeSelect>
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
                                    <Row>
                                        <Col span={8} >
                                            <div style={{ width: 200, }}>
                                                <Form.Item>
                                                    <Title level={5}>วันหยุด</Title>
                                                    <Input placeholder="ระบุวันหยุด" />
                                                </Form.Item>
                                            </div>
                                        </Col>
                                        <Col span={8} >
                                            <div style={{ width: 200, }}>
                                                <Form.Item>
                                                    <Title level={5}>เวลาทำงาน</Title>
                                                    <Input placeholder="ระบุเวลาทำงน" />
                                                </Form.Item>
                                            </div>
                                        </Col>
                                        <Col span={8} >
                                            <div style={{ width: 200, }}>
                                                <Form.Item>
                                                    <Title level={5}>เวลาทำงาน อื่นๆ</Title>
                                                    <Input placeholder="ระบุเวลาทำงน อื่นๆ" />
                                                </Form.Item>
                                            </div>
                                        </Col>
                                    </Row>
                                    <hr />
                                    <Title level={5}>คุณสมบัติ </Title>
                                    <Row>
                                                <Col span={8}>
                                                    <div style={{ width: 200, }}>
                                                        <Form.Item label="">
                                                            <Title level={5}>เพศ</Title>
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
                                                                <TreeNode value="parent 1" title="ชาย" />
                                                                <TreeNode value="parent 2" title="หญิง" />
                                                            </TreeSelect>
                                                        </Form.Item>
                                                    </div>
                                                </Col>
                                                <Col span={8} >
                                                    <div style={{ width: 200, }}>
                                                        <Form.Item>
                                                            <Title level={5}>อายุ</Title>
                                                            <Input placeholder="ระบุอายุ" />
                                                        </Form.Item>
                                                    </div>
                                                </Col>
                                                <Col span={8} >
                                                    <div style={{ width: 200, }}>
                                                        <Form.Item>
                                                            <Title level={5}>ประสบการณ์(ปี)</Title>
                                                            <Input placeholder="ระบุประสบการณ์(ปี)" />
                                                        </Form.Item>
                                                    </div>
                                                </Col>
                                    </Row>
                                    <Row>
                                    <Col span={8}>
                                            <div style={{ width: 200, }}>
                                                <Form.Item  >
                                                    <Title level={5}>ทักษะ</Title>
                                                    <Input placeholder="ระบุทักษะ" />
                                                </Form.Item>
                                            </div>
                                        </Col>
                                    <Col span={8}>
                                            <div style={{ width: 200, }}>
                                                <Form.Item  >
                                                    <Title level={5}>ภาษา</Title>
                                                    <Input placeholder="ระบุภาษา" />
                                                </Form.Item>
                                            </div>
                                        </Col>
                                        <Col span={8}>
                                            <div style={{ width: 200, }}>
                                                <Form.Item  >
                                                    <Title level={5}>ความสามารถในการขับขี่</Title>
                                                    <Input placeholder="ระบุความสามารถในการขับขี่" />
                                                </Form.Item>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={15}>
                                            <div style={{ width: 700, }}>
                                                <Form.Item  >
                                                    <Title level={5}>คุณสมบัติเพิ่มเติม</Title>
                                                    <Input.TextArea placeholder="ระบุคุณสมบัติเพิ่มเติม" />
                                                </Form.Item>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={15}>
                                            <div style={{ width: 700, }}>
                                                <Form.Item  >
                                                    <Title level={5}>สวัสดิการ</Title>
                                                    <Input.TextArea placeholder="ระบุสวัสดิการ" />
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

export default Postjob;