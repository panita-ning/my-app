import { Card, Form, Input, Row, Button, Col, Typography, TreeSelect, Radio } from 'antd';
import { ContactsFilled } from '@ant-design/icons';
import React, { useState } from 'react';
import { useRouter } from 'next/router'
const { TreeNode } = TreeSelect;
const { Title, Text } = Typography;




const Profileone = (props) => {
    const router = useRouter()
    const [value, setValue] = useState(undefined);
    const onChange = () => {
        setValue(value);
    };

    const [values, setValues] = React.useState(1);

    const onChanges = e => {
        console.log('radio checked', e.target.value);
        setValues(e.target.value);
    };

    const [valuees, setValuees] = React.useState(1);

    const onChangees = e => {
        console.log('radio checked', e.target.value);
        setValuees(e.target.value);
    };
    return (
        <div>
            <div className="site-card-border-less-wrapper" >
                <Card bordered={false} style={{ width: '100%', backgroundColor: '#D3D3D3', fontSize: 30, borderRadius: 15 }}>

                    <div style={{ width: '100%', }}>
                        <Card style={{ borderRadius: 8, backgroundColor: '#00CC00', height: 70 }}>
                            <Row>
                                <Col span={2} >
                                    <ContactsFilled style={{fontSize: '35px', color:'white'}} />
                                </Col>

                                <Col span={20} >
                                    <Text style={{ fontSize:'20px', color: "white" }} >โปรไฟล์</Text>
                                </Col>
                                <Col span={2} >
                                <div>
                                        <Button type="dashed"   htmlType="submit" style={{ borderRadius: 8,color:'gray'}} >
                                            แก้ไข
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </div>



                    <div style={{ width: '100%', }}>
                        <Card style={{ backgroundColor: '#FFFFFF' }}>

                            <div>
                                <Form >
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <Row>
                                        <Col span={5}>
                                            <div style={{ width: 150, }}>
                                                <Form.Item label="">
                                                    <Title level={5}>คำนำหน้า</Title>
                                                    <TreeSelect
                                                        showSearch
                                                        style={{ width: '100%' }}
                                                        value={value}
                                                        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                                        placeholder="ระบุคำนำหน้า"
                                                        allowClear
                                                        treeDefaultExpandAll
                                                        onChange={onChange}
                                                    >
                                                        <TreeNode value="parent 1" title="นาย" />
                                                        <TreeNode value="parent 2" title="นาง" />
                                                        <TreeNode value="parent 3" title="นางสาว" />
                                                    </TreeSelect>
                                                </Form.Item>
                                            </div>
                                        </Col>
                                        <Col span={10}>
                                            <div style={{ width: 300, }}>
                                                <Form.Item label="">
                                                    <Title level={5}>ชื่อ</Title>
                                                    <Input placeholder="ระบุชื่อ" size="middle" />
                                                </Form.Item>
                                            </div>
                                        </Col>
                                        <Col span={8}>
                                            <div style={{ width: 300, }}>
                                                <Form.Item label="">
                                                    <Title level={5}>นามสกุล</Title>
                                                    <Input placeholder="ระบุนามสกุล" size="middle" />
                                                </Form.Item>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Title level={5}>วันเดือนปีเกิด</Title>
                                    <Row>
                                        <Col span={5} >
                                            <div style={{ width: 150, }}>
                                                <Form.Item label="" >
                                                    <TreeSelect
                                                        showSearch
                                                        style={{ width: '100%' }}
                                                        value={value}
                                                        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                                        placeholder="วันที่"
                                                        allowClear
                                                        treeDefaultExpandAll
                                                        onChange={onChange}
                                                    >
                                                        <TreeNode value="parent 1" title="1" />
                                                        <TreeNode value="parent 2" title="2" />
                                                        <TreeNode value="parent 3" title="3" />
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
                                                        placeholder="เดือน"
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
                                        <Col span={5}>
                                            <div style={{ width: 150, }}>
                                                <Form.Item label="">
                                                    <TreeSelect
                                                        showSearch
                                                        style={{ width: '100%' }}
                                                        value={value}
                                                        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                                        placeholder="ปี พ.ศ"
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
                                    </Row>
                                    <Row>
                                        <Col span={10} >
                                            <div style={{ width: 300, }}>
                                                <Form.Item label="">
                                                    <Title level={5}>หมายเลขบัตรประชาชน</Title>
                                                    <Input placeholder="ระบุหมายเลขบัตรประชาชน " size="middle" />
                                                </Form.Item>
                                            </div>
                                        </Col>
                                        <Col span={7}>
                                            <div style={{ width: 200, }}>
                                                <Form.Item label="">
                                                    <Title level={5}>เบอร์ติดต่อ</Title>
                                                    <Input placeholder="ระบุเบอร์ติดต่อ " size="middle" />
                                                </Form.Item>
                                            </div>
                                        </Col>
                                        <Col >
                                            <div style={{ width: 200, }}>
                                                <Form.Item label="">
                                                    <Title level={5}>เบอร์สำรอง</Title>
                                                    <Input placeholder="ระบุหรือไม่ระบุก็ได้ " size="middle" />
                                                </Form.Item>
                                            </div>
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col span={6}>
                                            <div style={{ width: 150, }}>
                                                <Form.Item label="">
                                                    <Title level={5}>ส่วนสูง</Title>
                                                    <Input placeholder="ระบุส่วนสูง " size="middle" />
                                                </Form.Item>
                                            </div>
                                        </Col>
                                        <Col span={6}>
                                            <div style={{ width: 150, }}>
                                                <Form.Item label="">
                                                    <Title level={5}>น้ำหนัก</Title>
                                                    <Input placeholder="ระบุน้ำหนัก" size="middle" />
                                                </Form.Item>
                                            </div>
                                        </Col>
                                        <Col span={6}>
                                            <div style={{ width: 150, }}>
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
                                        <Col >
                                            <div style={{ width: 150, }}>
                                                <Form.Item label="">
                                                    <Title level={5}>สถานภาพสมรส</Title>
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
                                                        <TreeNode value="parent 1" title="สมรส" />
                                                        <TreeNode value="parent 2" title="โสด" />
                                                        <TreeNode value="parent 3" title="หม่าย" />
                                                        <TreeNode value="parent 3" title="หย่า" />
                                                    </TreeSelect>
                                                </Form.Item>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row >
                                        <Col span={9}>
                                            <div style={{ width: 250, }}>
                                                <Form.Item label="">
                                                    <Title level={5}>อีเมล</Title>
                                                    <Input placeholder="ระบุอีเมล" size="middle" />
                                                </Form.Item>
                                            </div>
                                        </Col>
                                        <Col span={7}>
                                            <div style={{ width: 200, }}>
                                                <Form.Item label="">
                                                    <Title level={5}>Facebook</Title>
                                                    <Input placeholder=" ระบุ Facebook" size="middle" />
                                                </Form.Item>
                                            </div>
                                        </Col>
                                        <Col span={6}>
                                            <div style={{ width: 200, }}>
                                                <Form.Item label="">
                                                    <Title level={5}>Line ID</Title>
                                                    <Input placeholder=" ระบุ Line ID" size="middle" />
                                                </Form.Item>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={15}>
                                            <div style={{ width: 420, }}>
                                                <Form.Item  >
                                                    <Title level={5}>ที่อยู่</Title>
                                                    <Input.TextArea placeholder="ระบุที่อยู่" />
                                                </Form.Item>
                                            </div>
                                        </Col>
                                        <Col span={5}>
                                            <div style={{ width: 250, }}>
                                                <Form.Item  >
                                                    <Title level={5}>รหัสไปรษณีย์</Title>
                                                    <Input placeholder="ระบุรหัสไปรษณีย์" size="middle" />
                                                </Form.Item>
                                            </div>
                                        </Col>

                                    </Row>
                                    <Row justify='center' >

                                        <Col span={8}>
                                            <Form.Item >
                                                <Title level={5}>ตำบล</Title>
                                                <TreeSelect
                                                    showSearch
                                                    style={{ width: 200 }}
                                                    value={value}
                                                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                                    placeholder="-- เลือก --"
                                                    allowClear
                                                    treeDefaultExpandAll
                                                    onChange={onChange}
                                                >
                                                    <TreeNode value="parent 1" title="ตลาด" />
                                                    <TreeNode value="parent 1" title="โพนสูง" />
                                                    <TreeNode value="parent 1" title="นาข่า " />
                                                    <TreeNode value="parent 1" title="บัวแดง" />
                                                    <TreeNode value="parent 1" title="รอบเมือง" />
                                                </TreeSelect>
                                            </Form.Item>
                                        </Col>


                                        <Col span={8}>
                                            <Form.Item>
                                                <Title level={5}>อำเภอ</Title>
                                                <TreeSelect
                                                    showSearch
                                                    style={{ width: 200 }}
                                                    value={value}
                                                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                                    placeholder="-- เลือก --"
                                                    allowClear
                                                    treeDefaultExpandAll
                                                    onChange={onChange}
                                                >
                                                    <TreeNode value="parent 1" title="เมือง " />
                                                    <TreeNode value="parent 1" title="แกดำ" />
                                                    <TreeNode value="parent 1" title="นาดูน " />
                                                    <TreeNode value="parent 1" title="วาปี" />
                                                    <TreeNode value="parent 1" title="นาเชือก" />
                                                    <TreeNode value="parent 1" title="ปทุมรัตต์ " />

                                                </TreeSelect>
                                            </Form.Item>
                                        </Col>

                                        <Col >
                                            <Form.Item >
                                                <Title level={5}>จังหวัด</Title>
                                                <TreeSelect
                                                    showSearch
                                                    style={{ width: 200 }}
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
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col span={16}>
                                            <Form.Item >
                                                <Title level={5}>สถานภาพทางทหาร</Title>
                                                <Radio.Group onChange={onChanges} value={values}>
                                                    <Radio value={1}>ได้รับการยกเว้น</Radio>
                                                    <Radio value={2}>ผ่านการเกณฑ์ทหารแล้ว</Radio>
                                                    <Radio value={3}> รอการเกณฑ์ทหาร</Radio>
                                                </Radio.Group>
                                            </Form.Item>
                                        </Col>
                                        <Col>
                                            <Form.Item >
                                                <Title level={5}>ความพิการ</Title>
                                                <Radio.Group onChange={onChangees} value={valuees}>
                                                    <Radio value={1}>ไม่พิการ</Radio>
                                                    <Radio value={2}>มีความพิการ</Radio>
                                                </Radio.Group>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Form>
                                <hr />
                                <center>
                                    <div>
                                        <Button type="primary"danger htmlType="submit" style={{ borderRadius: 8 }} >
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

export default Profileone;