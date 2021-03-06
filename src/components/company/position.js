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


const Position = (props) => {
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
                                    <ContactsFilled style={{ fontSize: '35px', color: 'white' }} />
                                </Col>

                                <Col span={20} >
                                    <Text style={{ fontSize: '20px', color: "white" }} >????????????????????????????????????</Text>
                                </Col>
                                <Col span={2} >
                                    <div>
                                        <Button type="dashed" htmlType="submit" style={{ borderRadius: 8, color: 'gray' }} >
                                            ???????????????
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
                                        <Col span={10}>
                                            <div style={{ width: 300, }}>
                                                <Form.Item label="">
                                                    <Title level={5}>???????????????????????????????????????</Title>
                                                    <Input placeholder="???????????????????????????????????????" size="middle" />
                                                </Form.Item>
                                            </div>
                                        </Col>
                                        <Col span={8}>
                                            <div style={{ width: 300, }}>
                                                <Form.Item label="">
                                                    <Title level={5}>??????????????????????????????????????????</Title>
                                                    <Input placeholder="??????????????????????????????????????????" size="middle" />
                                                </Form.Item>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={10} >
                                            <div style={{ width: 300, }}>
                                                <Form.Item label="">
                                                    <Title level={5}>??????????????????????????????</Title>
                                                    <Input placeholder="?????????????????????????????? " size="middle" />
                                                </Form.Item>
                                            </div>
                                        </Col>
                                        <Col span={7}>
                                            <div style={{ width: 300, }}>
                                                <Form.Item label="">
                                                    <Title level={5}>?????????????????????</Title>
                                                    <Input placeholder="????????????????????? " size="middle" />
                                                </Form.Item>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={10}>
                                            <Form.Item >
                                                <Title level={5}>?????????????????????</Title>
                                                <TreeSelect
                                                    showSearch
                                                    style={{ width: 300 }}
                                                    value={value}
                                                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                                    placeholder="-- ??????????????? --"
                                                    allowClear
                                                    treeDefaultExpandAll
                                                    onChange={onChange}
                                                >
                                                    <TreeNode value="parent 1" title="??????????????????????????? " />
                                                    <TreeNode value="parent 1" title="???????????????????????????" />
                                                    <TreeNode value="parent 1" title="?????????????????????????????????" />
                                                    <TreeNode value="parent 1" title="??????????????????" />
                                                    <TreeNode value="parent 1" title="?????????????????????" />
                                                    <TreeNode value="parent 1" title="?????????????????????????????? " />


                                                </TreeSelect>
                                            </Form.Item>
                                        </Col>
                                        <Col span={8}>
                                            <Form.Item>
                                                <Title level={5}>???????????????</Title>
                                                <TreeSelect
                                                    showSearch
                                                    style={{ width: 300 }}
                                                    value={value}
                                                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                                    placeholder="-- ??????????????? --"
                                                    allowClear
                                                    treeDefaultExpandAll
                                                    onChange={onChange}
                                                >
                                                    <TreeNode value="parent 1" title="??????????????? " />
                                                    <TreeNode value="parent 1" title="????????????" />
                                                    <TreeNode value="parent 1" title="??????????????? " />
                                                    <TreeNode value="parent 1" title="????????????" />
                                                    <TreeNode value="parent 1" title="?????????????????????" />
                                                    <TreeNode value="parent 1" title="??????????????????????????? " />

                                                </TreeSelect>
                                            </Form.Item>
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col span={10}>
                                            <Form.Item >
                                                <Title level={5}>????????????</Title>
                                                <TreeSelect
                                                    showSearch
                                                    style={{ width: 300 }}
                                                    value={value}
                                                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                                    placeholder="-- ??????????????? --"
                                                    allowClear
                                                    treeDefaultExpandAll
                                                    onChange={onChange}
                                                >
                                                    <TreeNode value="parent 1" title="????????????" />
                                                    <TreeNode value="parent 1" title="??????????????????" />
                                                    <TreeNode value="parent 1" title="??????????????? " />
                                                    <TreeNode value="parent 1" title="??????????????????" />
                                                    <TreeNode value="parent 1" title="????????????????????????" />
                                                </TreeSelect>
                                            </Form.Item>
                                        </Col>

                                        <Col span={7}>
                                            <div style={{ width: 300, }}>
                                                <Form.Item label="">
                                                    <Title level={5}>????????????????????????????????????</Title>
                                                    <Input placeholder="???????????????????????????????????? " size="middle" />
                                                </Form.Item>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={10}>
                                            <Form.Item>
                                                <Title level={5}>????????????????????????????????????????????????????????????????????????????????????</Title>
                                                <Upload {...props}>
                                                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                                </Upload>
                                            </Form.Item>
                                        </Col>
                                        <Col>
                                            <div style={{ width: 300, }}>
                                                <Form.Item label="">
                                                    <Title level={5}>??????????????????????????????????????????????????????</Title>
                                                    <Input placeholder="?????????????????????????????????????????????????????? " size="middle" />
                                                </Form.Item>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Title level={5} style={{ color: 'orange' }}>?????????????????????????????? </Title>
                                    <Row>
                                        <Col span={10}>
                                            <Form.Item >
                                                <Title level={5}>???????????? BTS</Title>
                                                <TreeSelect
                                                    showSearch
                                                    style={{ width: 300 }}
                                                    value={value}
                                                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                                    placeholder="-- ??????????????? --"
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
                                                <Title level={5}>???????????? MRT</Title>
                                                <TreeSelect
                                                    showSearch
                                                    style={{ width: 300 }}
                                                    value={value}
                                                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                                    placeholder="-- ??????????????? --"
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
                                        <Col span={10}>
                                            <Form.Item >
                                                <Title level={5}>???????????? Airport Rail Link</Title>
                                                <TreeSelect
                                                    showSearch
                                                    style={{ width: 300 }}
                                                    value={value}
                                                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                                    placeholder="-- ??????????????? --"
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
                                                <Title level={5}>???????????????????????????</Title>
                                                <Input placeholder="???????????????????????????" size="middle" />
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={10}>
                                            <Form.Item >
                                                <Title level={5}>?????????????????????????????????????????????????????????</Title>
                                                <TextArea rows={4} style={{ width: 300 }} />
                                            </Form.Item>
                                        </Col>
                                        <Col>
                                            <Form.Item style={{ width: 300, }}>
                                                <Title level={5}>sssss</Title>
                                                <Card >
                                                    ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? (???????????????) ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? ?????????????????????????????????????????????????????????????????????????????? ???????????????????????????????????????????????????????????????????????????????????????????????????????????????
                                                </Card>

                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={10}>
                                            <Form.Item style={{ width: 300, }}>
                                                <Title level={5}>????????????????????????????????????</Title>
                                                <Input placeholder="Ex 100000" size="middle" />
                                            </Form.Item>
                                        </Col>
                                        <Col>
                                            <Form.Item >
                                                <Title level={5}>???????????????????????????????????? </Title>
                                                <TextArea rows={4} style={{ width: 300 }} />
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={10}>
                                            <Form.Item style={{ width: 300, }}>
                                                <Title level={5}>???????????????????????????</Title>
                                                <TreeSelect
                                                    showSearch
                                                    style={{ width: 300 }}
                                                    value={value}
                                                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                                    placeholder="-- ??????????????? --"
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
                                                <Title level={5}>???????????????????????????????????? </Title>
                                                <TextArea rows={4} style={{ width: 300 }} />
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={10}>
                                            <Form.Item style={{ width: 300 }}>
                                                <Title level={5}>????????????????????????????????????????????????</Title>
                                                <TreeSelect
                                                    showSearch
                                                    style={{ width: 300 }}
                                                    value={value}
                                                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                                    placeholder="-- ??????????????? --"
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
                                                <Title level={5}>????????????????????????????????????????????????</Title>
                                                <TreeSelect
                                                    showSearch
                                                    style={{ width: 300 }}
                                                    value={value}
                                                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                                    placeholder="-- ??????????????? --"
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
                                        <Col span={10}>
                                            <Form.Item style={{ width: 300 }}>
                                                <Title level={5}>????????????????????????????????????????????????</Title>

                                                <Radio.Group onChange={onChanges} value={values}>
                                                    <Radio value={1}>?????????????????????????????????????????? ????????????????????? 50 ??????</Radio>
                                                    <Radio value={2}>??????????????????????????????????????????????????????????????? 50 - 200 ??????</Radio>
                                                    <Radio value={3}>?????????????????????????????????????????? 200 ????????????????????????</Radio>
                                                </Radio.Group>

                                            </Form.Item>
                                        </Col>
                                        <Col>
                                            <Form.Item style={{ width: 300 }}>
                                                <Title level={5}>??????????????????????????????????????????</Title>
                                                <Input placeholder="??????????????????????????????????????????" size="middle" />
                                            </Form.Item>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col span={6}>
                                            <Form.Item style={{ width: 200 }}>
                                                <Title level={5}>????????????????????????????????????????????????</Title>
                                                <Input placeholder="????????????????????????????????????????????????" size="middle" />
                                            </Form.Item>
                                        </Col>
                                        <Col span={6}>
                                            <Form.Item style={{ width: 200 }}>
                                                <Title level={5}>??????????????????????????????????????????</Title>
                                                <Input placeholder="??????????????????????????????????????????" size="middle" />
                                            </Form.Item>
                                        </Col>
                                        <Col>
                                            <Form.Item style={{ width: 200 }}>
                                                <Title level={5}>??????????????????????????????????????????</Title>
                                                <Input placeholder="http://www.example.com" size="middle" />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    
                                    <Row>
                                        <Col span={6}>
                                            <Form.Item style={{ width: 650}}>
                                                <Title level={5}>???????????????</Title>
                                                <Input placeholder="???????????????" size="middle" />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col span={10}>
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

                                    <Row>
                                        <Col span={10}>
                                            <Form.Item style={{ width: 300}}>
                                                <Title level={5}>Twitter</Title>
                                                <Input placeholder="Ex. http://" size="middle" />
                                            </Form.Item>
                                        </Col>
                                        <Col >
                                            <Form.Item style={{ width: 300}}>
                                                <Title level={5}>Skype</Title>
                                                <Input placeholder="Ex. http://" size="middle" />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Form>
                                <hr />
                                <center>
                                    <div>
                                        <Button type="primary" danger htmlType="submit" style={{ borderRadius: 8 }} >
                                            ????????????????????????????????????
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

export default Position;