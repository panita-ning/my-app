import React from 'react';
import {
  Col, Row, Button, Form, FormGroup, Label, Input, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from "reactstrap";

const Registor = (props) => {
  return (
    <div className="div-back">
      <br />
      <Form className="Card-body" >
        <Form className="reg-body">
          <br />
          <h1>
            <span className="font-haeds"> สมัครสมาชิกสำหรับผู้สมัครงาน </span>
          </h1>
          <br />
          <FormGroup>
            <Label for="identity">ผู้ใช้งาน</Label>
            <Input type="text" placeholder="กรุณากรอกชื่อผู้ใช้งาน"></Input>
          </FormGroup>

          <FormGroup>
            <Label for="identity">อีเมล</Label>
            <Input type="text" placeholder="กรุณากรอกอีเมล"></Input>
          </FormGroup>

          <FormGroup>
            <Label for="identity">ยืนยันอีเมล</Label>
            <Input type="text" placeholder="กรุณากรอกอีเมล"></Input>
          </FormGroup>

          <FormGroup>
            <Label for="identity">รหัสผ่าน</Label>
            <Input type="text" placeholder="กรุณากรอกรหัสผ่าน"></Input>
          </FormGroup>

          <FormGroup>
            <Label for="identity">ยืนยันรหัสผ่าน</Label>
            <Input type="text" placeholder="กรุณากรอกรหัสผ่าน"></Input>
          </FormGroup>

          &nbsp;&nbsp;&nbsp;
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio1" disabled />{' '}
              ยอมรับ เงื่อนไขข้อตกลงการใช้บริการ และ นโยบายความเป็นส่วนตัว
            </Label>
          </FormGroup>
          <br />

          <Button color="success" block>
            สมัครสมาชิก
          </Button>

          {/* <br />
          <span className="font-haeds"> เป็นสมาชิกอยู่แล้ว ? เข้าสู่ระบบ </span>
          <br /> */}

        </Form>
      </Form>

    </div >
  );
};

export default Registor;