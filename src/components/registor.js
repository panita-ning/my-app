import React from 'react';
import {
  Col, Row, Button, Form, FormGroup, Label, Input, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from "reactstrap";

const Registor = (props) => {
  return (
    <div className="div-back">
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Form className="Card-body" >
        <Form className="reg-body">
          <br />
          <center>
            <h1>
              <span className="font-haeds"> สมัครสมาชิก</span>
            </h1>
          </center>
          <br />
          <FormGroup>
            <Input type="text" placeholder="ชื่อผู้ใช้งาน"></Input>
          </FormGroup>

          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FormGroup>
            <Input type="text" placeholder="อีเมล"></Input>
          </FormGroup>

          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FormGroup>
            <Input type="text" placeholder="ยืนยันอีเมล"></Input>
          </FormGroup>

          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FormGroup>
            <Input type="text" placeholder="รหัสผ่าน"></Input>
          </FormGroup>

          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FormGroup>
            <Input type="text" placeholder="ยืนยันรหัสผ่าน"></Input>
          </FormGroup>


          &nbsp;&nbsp;&nbsp;
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio1" disabled />{' '}
              ยอมรับ เงื่อนไขข้อตกลงการใช้บริการ และ นโยบายความเป็นส่วนตัว
            </Label>
          </FormGroup>
          <br />

          <center>
            <Button color="success" block>
              สมัครสมาชิก
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button color="danger" block>
              ยกเลิก
            </Button>
          </center>
          {/* <br />
          <span className="font-haeds"> เป็นสมาชิกอยู่แล้ว ? เข้าสู่ระบบ </span>
          <br /> */}

        </Form>
      </Form>

    </div >
  );
};

export default Registor;