import { Card, Form, Input, Row, Button, Col, Typography, TreeSelect, Radio, Checkbox, Alert } from 'antd';
import { DatabaseFilled } from '@ant-design/icons';
import React, { useState } from 'react';

function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
}

const driving = ['รถจักรยานยนต์', 'รถยนต์', ' รถบรรทุก'];

const license = ['รถจักรยานยนต์', 'รถยนต์', ' อื่นๆ'];

const { TreeNode } = TreeSelect;
const { Title, Text } = Typography;

const Requiredjob = (props) => {
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
                <Card bordered={false} style={{ width: 880, backgroundColor: '#D3D3D3', fontSize: 30, borderRadius: 15 }}>
                    <div style={{ width: '100%', }}>
                        <Card style={{ borderRadius: 8, backgroundColor: '#00CC00', height: 70 }}>
                            <Row>
                                <Col span={1} >
                                    <DatabaseFilled style={{ fontSize: '30px', color: 'white' }} />
                                </Col>

                                <Col span={21} >
                                    <Text style={{ fontSize: '20px', color: "white" }} >งานที่ต้องการ</Text>
                                </Col>
                                <Col span={2} >
                                    <div>
                                        <Button type="dashed" htmlType="submit" style={{ borderRadius: 8, color: 'gray' }}>
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
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <Row>
                                        <Col span={8} >
                                            <div style={{ width: 200, }}>
                                                <Form.Item>
                                                    <Title level={5}>สาขาอาชีพหลัก</Title>
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

                                        <Col span={8}  >
                                            <div style={{ width: 200, }}>
                                                <Form.Item>
                                                    <Title level={5}>สาขาอาชีพรอง</Title>
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

                                        <Col span={8}>
                                            <div style={{ width: 200, }}>
                                                <Form.Item  >
                                                    <Title level={5}>ชื่อตำแหน่งงาน </Title>
                                                    <Input placeholder="ระบุชื่อตำแหน่งงาน" />
                                                </Form.Item>
                                            </div>
                                        </Col>
                                    </Row>

                                    <center>
                                        <div>
                                            <Button type="default" htmlType="submit" style={{ borderRadius: 8 }} >
                                                เพิ่ม
                                            </Button>
                                        </div>
                                        <br />
                                    </center>
                                    
                                        <Alert
                                            description=" Tip! สามารถเลือกงานที่ต้องการได้สูงสุด 3 รายการ เมื่อเลือกสาขาอาชีพและกรอกตำแหน่งงานแล้ว กดปุ่มเพิ่ม"
                                            showIcon    
                                        />
                                    
                                    <hr />
                                    <Row>
                                        <Col span={26}>
                                            <Form.Item >
                                                <Title level={5}>รูปแบบงาน </Title>
                                                <Radio.Group onChange={onChanges} value={values}>
                                                    <Radio value={1}>งานประจำ</Radio>
                                                    <Radio value={2}>งานนอกเวลา</Radio>
                                                    <Radio value={3}> งานอิสระ</Radio>
                                                    <Radio value={4}> นักศึกษาฝึกงาน</Radio>
                                                    <Radio value={5}> สัญญาจ้าง</Radio>
                                                    <Radio value={6}>  สหกิจศึกษา</Radio>
                                                    <Radio value={7}> นักศึกษาจบใหม่</Radio>
                                                </Radio.Group>
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={8} >
                                            <div style={{ width: 200, }}>
                                                <Form.Item>
                                                    <Title level={5}>เงินเดือนที่ต้องการ</Title>
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

                                        <Col span={8}  >
                                            <div style={{ width: 200, }}>
                                                <Form.Item>
                                                    <Title level={5}>ต้องการงานที่จังหวัด </Title>
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

                                        <Col span={8}  >
                                            <div style={{ width: 200, }}>
                                                <Form.Item>
                                                    <Title level={5}>เขต/อำเภอ</Title>
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
                                        <Col span={12}  >
                                            <div style={{ width: 300, }}>
                                                <Form.Item>
                                                    <Title level={5}>ระยะเวลาเริ่มงาน</Title>
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
                                                    <Radio>เริ่มงานได้ทันที</Radio>
                                                </Form.Item>
                                            </div>
                                        </Col>
                                        <Col span={25}>
                                            <Form.Item >
                                                <Title level={5}>สามารถทำงานในกรุงเทพฯ </Title>
                                                <Radio.Group onChange={onChangeone} value={valuees}>
                                                    <Radio value={1}>ใช่</Radio>
                                                    <Radio value={2}>ไม่ใช่</Radio>
                                                    
                                                </Radio.Group>
                                            </Form.Item>
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

export default Requiredjob;