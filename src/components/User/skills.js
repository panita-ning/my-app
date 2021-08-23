import { Card, Form, Input, Row, Button, Col, Typography, TreeSelect, Radio,Checkbox } from 'antd';
import { DatabaseFilled } from '@ant-design/icons';
import React, { useState } from 'react';

function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }
  
  const driving = ['รถจักรยานยนต์', 'รถยนต์', ' รถบรรทุก'];

  const license = ['รถจักรยานยนต์', 'รถยนต์', ' อื่นๆ'];

const { TreeNode } = TreeSelect;
const { Title,Text } = Typography;
const Skills = (props) => {
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
                                <Col span={1} >
                                    <DatabaseFilled style={{fontSize: '30px', color:'white'}} />
                                </Col>

                                <Col span={21} >
                                    <Text style={{ fontSize:'20px', color: "white" }} >ทักษะ และความสามารถ</Text>
                                </Col>
                                <Col span={2} >
                                <div>
                                        <Button type="dashed"   htmlType="submit" style={{ borderRadius: 8,color:'gray' }}>
                                            แก้ไข
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </div>
                    <div style={{ width: '100%', }}>
                        <Card style={{  backgroundColor: 'white' }}>
                            <div>

                                <Form >
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <Title level={5}>ทักษะความรู้ตามสาขาอาชีพ-Hard Skills</Title>
                                    <Row>
                                    <Col span={10}  >
                                            <div style={{ width: 300, }}>
                                                <Form.Item>
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
                                                        <TreeNode value="parent 1" title="คอมพิวเตอร์" />
                                                        <TreeNode value="parent 2" title="กฏหมาย" />
                                                        <TreeNode value="parent 3" title="บัญชี" />
                                                        <TreeNode value="parent 3" title="ช่าง" />

                                                    </TreeSelect>
                                                </Form.Item>
                                            </div>
                                        </Col>

                                        <Col span={10}  >
                                            <div style={{ width: 300, }}>
                                                <Form.Item>
                                                    <TreeSelect
                                                        showSearch
                                                        style={{ width: '100%' }}
                                                        value={value}
                                                        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                                        placeholder="-- ระดับความสามารถ --"
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
                                        <Col >
                                            <div>
                                                <Button htmlType="submit" style={{ borderRadius: 8,backgroundColor:'#FF7F50',color:'white' }} >
                                                    เพิ่มทักษะ
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Title level={5}>ทักษะเสริมเพิ่มเติม-Soft Skills  </Title>
                                    <Row>
                                        <Col span={20}>
                                            <div style={{ width: 600, }}>
                                                <Form.Item  >
                                                    <Input placeholder="ระบุทักษะความรู้" />
                                                </Form.Item>
                                            </div>
                                        </Col>

                                        <Col >
                                            <div>
                                                <Button htmlType="submit" style={{ borderRadius: 8 ,backgroundColor:'#FF7F50',color:'white'}} >
                                                    เพิ่มทักษะ
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                    <hr />
                                    
                                    <Row>
                                        <Col span={4} >
                                            <div style={{ width: 120, }}>
                                                <Form.Item label="" >
                                                    <Title level={5}>ภาษา</Title>
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
                                                        <TreeNode value="parent 1" title="ไทย " />
                                                        <TreeNode value="parent 1" title="อังกฤษ" />
                                                        <TreeNode value="parent 1" title="ญี่ปุ่น" />
                                                        <TreeNode value="parent 1" title="จีน" />
                                                        <TreeNode value="parent 1" title="เกาหลี" />
                                                        <TreeNode value="parent 1" title="ฝรั่งเศส" />
                                                    </TreeSelect>
                                                </Form.Item>
                                            </div>
                                        </Col>
                                        <Col span={4} >
                                            <div style={{ width: 120, }}>
                                                <Form.Item >
                                                    <Title level={5}>ฟัง</Title>
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
                                                        <TreeNode value="parent 1" title="พอใช้" />
                                                        <TreeNode value="parent 2" title="ดี" />
                                                        <TreeNode value="parent 3" title="ดีมาก" />
                                                    </TreeSelect>
                                                </Form.Item>
                                            </div>
                                        </Col>
                                        <Col span={4} >
                                            <div style={{ width: 120, }}>
                                                <Form.Item >
                                                    <Title level={5}>พูด</Title>
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
                                                        <TreeNode value="parent 1" title="พอใช้" />
                                                        <TreeNode value="parent 2" title="ดี" />
                                                        <TreeNode value="parent 3" title="ดีมาก" />
                                                    </TreeSelect>
                                                </Form.Item>
                                            </div>
                                        </Col>
                                        <Col span={4} >
                                            <div style={{ width: 120, }}>
                                                <Form.Item >
                                                    <Title level={5}>อ่าน</Title>
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
                                                        <TreeNode value="parent 1" title="พอใช้" />
                                                        <TreeNode value="parent 2" title="ดี" />
                                                        <TreeNode value="parent 3" title="ดีมาก" />
                                                    </TreeSelect>
                                                </Form.Item>
                                            </div>
                                        </Col>
                                        <Col span={4} >
                                            <div style={{ width: 120, }}>
                                                <Form.Item >
                                                    <Title level={5}>เขียน</Title>
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
                                                        <TreeNode value="parent 1" title="พอใช้" />
                                                        <TreeNode value="parent 2" title="ดี" />
                                                        <TreeNode value="parent 3" title="ดีมาก" />
                                                    </TreeSelect>
                                                </Form.Item>
                                            </div>

                                        </Col>

                                        <Col >
                                            <br />
                                            <div>
                                                <Button  htmlType="submit" style={{ borderRadius: 8,backgroundColor:'#FF7F50',color:'white' }} >
                                                    เพิ่มภาษา
                                                </Button>
                                            </div>
                                        </Col>

                                    </Row>
                                    <hr/>
                                    <br/>
                                    <Row>
                                        <Col span={11}>
                                            <div style={{ width: 400, }}>
                                                <Form.Item >
                                                    <Title level={5}>ความสามารถในการขับขี่</Title>
                                                    <Checkbox.Group options={driving}onChange={onChange} />
                                                </Form.Item>
                                            </div>
                                        </Col>
                                        <Col >
                                            <div style={{ width: 400, }}>
                                                <Form.Item >
                                                    <Title level={5}>ใบขับขี่</Title>
                                                    <Checkbox.Group options={license}onChange={onChange} />
                                                </Form.Item>
                                            </div>
                                        </Col>
                                    </Row>
                                   
                                </Form>
                                <hr/>
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

export default Skills;