import React, { useState } from "react";
import { Card, Form, Input, Select, Row, Col, Checkbox, Button, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
// import axios from "axios";
import { useRouter } from "next/router";
const { Title } = Typography;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 10,
            offset: 8,
        },
    },
};

const Registor = (props) => {
    const router = useRouter();
    const [form] = Form.useForm();

    //   const onFinish = async (values) => {
    //     const { Regis_user, Regis_password, Regis_name, Regis_lastname, Regis_email, Regis_phone } = values
    //     console.log(Regis_user, Regis_password, Regis_name, Regis_lastname, Regis_email, Regis_phone);
    //     const result = await axios({
    //       method: "POST",
    //       url: "/api/auth/register",
    //       data: {
    //         Regis_user,
    //         Regis_password,
    //         Regis_name,
    //         Regis_lastname,
    //         Regis_email,
    //         Regis_phone
    //       }
    //     })
    //     const { data } = result
    //     console.log(data);
    //     if (!data?.data) return message.error("ข้อมูลไม่ถูกต้อง", 5)
    //   };

    //   const onFinishFailed = (errorInfo) => {
    //     console.log("Failed:", errorInfo);
    //   };

    return (
        <>
            <br />
            <br />
            <center>
                <Card
                    hoverable
                    style={{ width: 500 }}>
                    <Title>สมัครสมาชิก  </Title>
                    <Form
                        {...formItemLayout}
                        form={form}
                        name="register"
                    // onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    >
                        
                        <Form.Item
                            name="Regis_user"
                            label="ผู้ใช้งาน"
                            rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name="Regis_password"
                            label="รหัสผ่าน"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name="Regis_name"
                            label="ชื่อ"
                            rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name="Regis_lastname"
                            label="นามสกุล"
                            rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name="Regis_email"
                            label="อีเมล"
                            rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name="Regis_phone"
                            label="เบอร์โทร"
                            rules={[{ required: true, message: 'Please input your phone number!' }]}
                        >
                            <Input style={{ width: '100%' }} />
                        </Form.Item>

                        <Form.Item
                            name="agreement"
                            valuePropName="checked"
                            rules={[
                                {
                                    validator: (_, value) =>
                                        value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                                },
                            ]}
                            {...tailFormItemLayout}
                        >
                            <Checkbox>
                                ยอมรับข้อตกลง
                            </Checkbox>
                        </Form.Item>
                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit">

                                สมัครสมาชิก

                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </center>
        </>
    );
};

export default Registor;
