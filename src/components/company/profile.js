import { Card, Form, Input, Row, Button, Col, Typography, TreeSelect, Radio, Upload, message } from 'antd';
import { ContactsFilled, UploadOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useRouter } from 'next/router'
const { TreeNode } = TreeSelect;
const { Title, Text } = Typography;
const { TextArea } = Input;
const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};


const Profilecompany = (props) => {
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

                <Card  style={{ width: 850, backgroundColor: '#D3D3D3', fontSize: 30, borderRadius: 15,marginLeft:'22%', marginRight:'18%' }}>

                    <div style={{ width: '100%'}}>
                        <Card style={{ borderRadius: 8, backgroundColor: '#696969', height: 70 }}>
                            <Row>
                                <Col span={2} >
                                    <ContactsFilled style={{ fontSize: '35px', color: 'white' }} />
                                </Col>

                                <Col span={20} >
                                    <Text style={{ fontSize: '20px', color: "white" }} >ข้อมูลบริษัท</Text>
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
                        <Card style={{ backgroundColor: '#FFFFFF' }}>

                            <div>
                                <Form >
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                    <Row>
                                        <Col span={12}>
                                            <div style={{ width: 300, }}>
                                                <Form.Item label="">
                                                    <Title level={5}>ชื่อผู้ติดต่อ</Title>
                                                    <Input placeholder="ชื่อผู้ติดต่อ" size="middle" />
                                                </Form.Item>
                                            </div>
                                        </Col>
                                        <Col span={8}>
                                            <div style={{ width: 300, }}>
                                                <Form.Item label="">
                                                    <Title level={5}>เบอร์โทรติดต่อ</Title>
                                                    <Input placeholder="เบอร์โทรติดต่อ" size="middle" />
                                                </Form.Item>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={12} >
                                            <div style={{ width: 300, }}>
                                                <Form.Item label="">
                                                    <Title level={5}>ชื่อบรัษิท</Title>
                                                    <Input placeholder="ชื่อบรัษิท " size="middle" />
                                                </Form.Item>
                                            </div>
                                        </Col>
                                        <Col span={7}>
                                            <div style={{ width: 300, }}>
                                                <Form.Item label="">
                                                    <Title level={5}>ที่อยู่</Title>
                                                    <Input placeholder="ที่อยู่ " size="middle" />
                                                </Form.Item>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={12}>
                                            <Form.Item >
                                                <Title level={5}>จังหวัด</Title>
                                                <TreeSelect
                                                    showSearch
                                                    style={{ width: 300 }}
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
                                        <Col span={8}>
                                            <Form.Item>
                                                <Title level={5}>อำเภอ</Title>
                                                <TreeSelect
                                                    showSearch
                                                    style={{ width: 300 }}
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

                                    </Row>
                                    <Row>
                                        <Col span={12}>
                                            <Form.Item >
                                                <Title level={5}>ตำบล</Title>
                                                <TreeSelect
                                                    showSearch
                                                    style={{ width: 300 }}
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

                                        <Col span={7}>
                                            <div style={{ width: 300, }}>
                                                <Form.Item label="">
                                                    <Title level={5}>รหัสไปรษณีย์</Title>
                                                    <Input placeholder="รหัสไปรษณีย์ " size="middle" />
                                                </Form.Item>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={12}>
                                            <Form.Item>
                                                <Title level={5}>ไฟล์เอกสารยืนยันเลขจดทะเบียน</Title>
                                                <Upload {...props}>
                                                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                                </Upload>
                                            </Form.Item>
                                        </Col>
                                        <Col>
                                            <div style={{ width: 300, }}>
                                                <Form.Item label="">
                                                    <Title level={5}>เลขจดทะเบียนบริษัท</Title>
                                                    <Input placeholder="เลขจดทะเบียนบริษัท " size="middle" />
                                                </Form.Item>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Title level={5} style={{ color: 'orange' }}>การเดินทาง </Title>
                                    <Row>
                                        <Col span={12}>
                                            <Form.Item >
                                                <Title level={5}>ใกล้ BTS</Title>
                                                <TreeSelect
                                                    showSearch
                                                    style={{ width: 300 }}
                                                    value={value}
                                                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                                    placeholder="-- เลือก --"
                                                    allowClear
                                                    treeDefaultExpandAll
                                                    onChange={onChange}
                                                >
                                                    <TreeNode value="parent 1" title="" />
                                                    <TreeNode value="parent 1" title="" />
                                                    <TreeNode value="parent 1" title="" />
                                                    <TreeNode value="parent 1" title="" />
                                                    <TreeNode value="parent 1" title="" />
                                                </TreeSelect>
                                            </Form.Item>
                                        </Col>
                                        <Col>
                                            <Form.Item >
                                                <Title level={5}>ใกล้ MRT</Title>
                                                <TreeSelect
                                                    showSearch
                                                    style={{ width: 300 }}
                                                    value={value}
                                                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                                    placeholder="-- เลือก --"
                                                    allowClear
                                                    treeDefaultExpandAll
                                                    onChange={onChange}
                                                >
                                                    <TreeNode value="parent 1" title="" />
                                                    <TreeNode value="parent 1" title="" />
                                                    <TreeNode value="parent 1" title="" />
                                                    <TreeNode value="parent 1" title="" />
                                                    <TreeNode value="parent 1" title="" />
                                                </TreeSelect>
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={12}>
                                            <Form.Item >
                                                <Title level={5}>ใกล้ Airport Rail Link</Title>
                                                <TreeSelect
                                                    showSearch
                                                    style={{ width: 300 }}
                                                    value={value}
                                                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                                    placeholder="-- เลือก --"
                                                    allowClear
                                                    treeDefaultExpandAll
                                                    onChange={onChange}
                                                >
                                                    <TreeNode value="parent 1" title="" />
                                                    <TreeNode value="parent 1" title="" />
                                                    <TreeNode value="parent 1" title="" />
                                                    <TreeNode value="parent 1" title="" />
                                                    <TreeNode value="parent 1" title="" />
                                                </TreeSelect>
                                            </Form.Item>
                                        </Col>
                                        <Col>
                                            <Form.Item style={{ width: 300, }}>
                                                <Title level={5}>สายรถเมล์</Title>
                                                <Input placeholder="สายรถเมล์" size="middle" />
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={12}>
                                            <Form.Item >
                                                <Title level={5}>การเดินทางเพิ่มเติม</Title>
                                                <TextArea rows={4} style={{ width: 300 }} />
                                            </Form.Item>
                                        </Col>
                                        <Col>
                                            <Form.Item style={{ width: 300, }}>
                                                <Title level={5}>sssss</Title>
                                                <Card >
                                                    เพื่อความสะดวกในการเดินทางของผู้สมัครงาน กรุณาระบุสถานีรถไฟฟ้าที่ใกล้กับสถานที่ปฏิบัติงาน (ถ้ามี) หรือระบุสายรถเมล์ที่ผ่านสถานที่ประกอบการ และระบุการเดินทางเพิ่มเติม เพื่อให้เข้าใจในการเดินทางมากยิ่งขึ้น
                                                </Card>

                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={12}>
                                            <Form.Item style={{ width: 300, }}>
                                                <Title level={5}>ทุนจดทะเบียน</Title>
                                                <Input placeholder="Ex 100000" size="middle" />
                                            </Form.Item>
                                        </Col>
                                        <Col>
                                            <Form.Item >
                                                <Title level={5}>เกี่ยวกับเรา </Title>
                                                <TextArea rows={4} style={{ width: 300 }} />
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={12}>
                                            <Form.Item style={{ width: 300, }}>
                                                <Title level={5}>สวัสดิการ</Title>
                                                <TreeSelect
                                                    showSearch
                                                    style={{ width: 300 }}
                                                    value={value}
                                                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                                    placeholder="-- เลือก --"
                                                    allowClear
                                                    treeDefaultExpandAll
                                                    onChange={onChange}
                                                >
                                                    <TreeNode value="parent 1" title="" />
                                                    <TreeNode value="parent 1" title="" />
                                                    <TreeNode value="parent 1" title="" />
                                                    <TreeNode value="parent 1" title="" />
                                                    <TreeNode value="parent 1" title="" />
                                                </TreeSelect>
                                            </Form.Item>
                                        </Col>

                                        <Col>
                                            <Form.Item >
                                                <Title level={5}>เกี่ยวกับเรา </Title>
                                                <TextArea rows={4} style={{ width: 300 }} />
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={12}>
                                            <Form.Item style={{ width: 300 }}>
                                                <Title level={5}>ประเภทธุรกิจหลัก</Title>
                                                <TreeSelect
                                                    showSearch
                                                    style={{ width: 300 }}
                                                    value={value}
                                                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                                    placeholder="-- เลือก --"
                                                    allowClear
                                                    treeDefaultExpandAll
                                                    onChange={onChange}
                                                >
                                                    <TreeNode value="parent 1" title="" />
                                                    <TreeNode value="parent 1" title="" />
                                                    <TreeNode value="parent 1" title="" />
                                                    <TreeNode value="parent 1" title="" />
                                                    <TreeNode value="parent 1" title="" />
                                                </TreeSelect>
                                            </Form.Item>
                                        </Col>
                                        <Col>
                                            <Form.Item >
                                                <Title level={5}>ประเภทธุรกิจย่อย</Title>
                                                <TreeSelect
                                                    showSearch
                                                    style={{ width: 300 }}
                                                    value={value}
                                                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                                    placeholder="-- เลือก --"
                                                    allowClear
                                                    treeDefaultExpandAll
                                                    onChange={onChange}
                                                >
                                                    <TreeNode value="parent 1" title="" />
                                                    <TreeNode value="parent 1" title="" />
                                                    <TreeNode value="parent 1" title="" />
                                                    <TreeNode value="parent 1" title="" />
                                                    <TreeNode value="parent 1" title="" />
                                                </TreeSelect>
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={12}>
                                            <Form.Item style={{ width: 300 }}>
                                                <Title level={5}>ประเภทธุรกิจหลัก</Title>

                                                <Radio.Group onChange={onChanges} value={values}>
                                                    <Radio value={1}>ธุรกิจขนาดเล็ก ไม่เกิน 50 คน</Radio>
                                                    <Radio value={2}>ธุรกิจขนาดกลางระหว่าง 50 - 200 คน</Radio>
                                                    <Radio value={3}>ธุรกิจขนาดใหญ่ 200 คนขึ้นไป</Radio>
                                                </Radio.Group>

                                            </Form.Item>
                                        </Col>
                                        <Col>
                                            <Form.Item style={{ width: 300 }}>
                                                <Title level={5}>เบอร์โทรบริษัท</Title>
                                                <Input placeholder="เบอร์โทรบริษัท" size="middle" />
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={8}>
                                            <Form.Item style={{ width: 200 }}>
                                                <Title level={5}>เบอร์แฟกซ์บริษัท</Title>
                                                <Input placeholder="เบอร์แฟกซ์บริษัท" size="middle" />
                                            </Form.Item>
                                        </Col>
                                        <Col span={8}>
                                            <Form.Item style={{ width: 200 }}>
                                                <Title level={5}>อีเมลฝ่ายบัญชี</Title>
                                                <Input placeholder="อีเมลฝ่ายบัญชี" size="middle" />
                                            </Form.Item>
                                        </Col>
                                        <Col>
                                            <Form.Item style={{ width: 200 }}>
                                                <Title level={5}>เว็บไซต์บริษัท</Title>
                                                <Input placeholder="http://www.example.com" size="middle" />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    
                                    <Row>
                                        <Col span={6}>
                                            <Form.Item style={{ width: 650}}>
                                                <Title level={5}>อีเมล</Title>
                                                <Input placeholder="อีเมล" size="middle" />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={12}>
                                            <Form.Item style={{ width: 300}}>
                                                <Title level={5}>Facebook</Title>
                                                <Input placeholder="Ex. http://" size="middle" />
                                            </Form.Item>
                                        </Col>
                                        <Col >
                                            <Form.Item style={{ width: 300}}>
                                                <Title level={5}>LINE ID</Title>
                                                <Input placeholder="Ex. http://" size="middle" />
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

export default Profilecompany;