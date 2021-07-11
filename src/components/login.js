import { Form, Input, Button, Checkbox, Card, Row, Col, Divider } from "antd";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { getCookie, setCookie } from "../utils/authen";

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = (props) => {
  const router = useRouter();
  useEffect(() => {
    if (getCookie("login")) router.push("/user/");
  }, []);
  const onFinish = (values) => {
    setCookie("login", true);
    router.push("/user/");
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="site-card-wrapper" style={{ padding: 30 }}>
      <Divider orientation="center">เข้าสู่ระบบ</Divider>
      <Row justify="space-around" align="middle">
        <Col span={24} offset={14}>
          <Card
            style={{
              width: 450,
              border: "3px solid black",
              padding: 10,
              position: "fixed",
            }}
          >
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                {...tailLayout}
                name="remember"
                valuePropName="checked"
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
                
              </Form.Item>
              
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Login;