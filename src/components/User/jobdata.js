import React from 'react';
import { Card, Image, Col, Row, TreeSelect, Button, Typography, Avatar } from 'antd';



const { Title, Text } = Typography;
const jobdata = (props) => {

  return (
    <div>
      <Card style={{ width: "100%", backgroundColor: '#DCDCDC' }}>
        <div >
          <Row justify="center">
            <Card style={{ backgroundColor: '#FFFFFF', width: 1050 }}>
              <Row justify="center">
                <Col>
                  <div>
                    <Image
                      width={1000}
                      height={300}
                      src="https://blog.lnw.co.th/wp-content/uploads/2019/09/%E0%B8%AB%E0%B8%B1%E0%B8%A7%E0%B8%9A%E0%B8%A5%E0%B9%8A%E0%B8%AD%E0%B8%81%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%9B%E0%B8%B9%E0%B8%99.png"
                    />
                  </div>
                </Col>
              </Row>
              <br />
              <Row>
                <Col span={5} >
                  <div>
                    <Avatar shape="square" size={150} src="https://cmweborigin.com/wp-content/uploads/2021/05/computer.jpg" />

                  </div>
                </Col>
                <Col>
                  <div style={{ width: "100%", }}>
                    <Title style={{ fontSize: 25, color: '#CC0000' }}>JOB CENTER</Title>
                    <Text type="secondary"> หางาน บริษัท JOB CENTER จำกัด / หางาน / หางาน</Text>
                  </div>
                </Col>
              </Row>
              <br/>
              <Row>
                <Col span={21}>
                  <div style={{ width: "100%" }}>
                    <Title style={{ fontSize: 20, color: '#CC0000' }}> Wordpress Developer , Web Developer</Title>
                  </div>
                </Col>
                <Col >
                  <div style={{ width: "100%" }}>
                    <Button  htmlType="submit" style={{ borderRadius: 8,backgroundColor:'#CC0000',color:'white' }} >
                      สมัครงาน
                    </Button>
                  </div>
                </Col>
              </Row>
              <hr/>
              
              <Row>
                <Col span={21}>
                  <div style={{ width: "100%" }}>
                    <Col><Title style={{ fontSize: 15, color: '#CC0000' }}> รายละเอียดงาน</Title></Col>
                    <Col><Text style={{ fontSize: 15, color: 'black' }}> รูปแบบงาน : </Text></Col>
                    <Col><Text style={{ fontSize: 15, color: 'black' }}> จำนวนที่รับ :</Text></Col>
                    <Col><Text style={{ fontSize: 15, color: 'black' }}> สถานที่ปฏิบัติงาน : </Text></Col>
                    <Col><Text style={{ fontSize: 15, color: 'black' }}> เงินเดือน(บาท) :</Text></Col>
                    <Col><Text style={{ fontSize: 15, color: 'black' }}> วันหยุด :</Text></Col>
                    <Col><Text style={{ fontSize: 15, color: 'black' }}> เวลาทำงาน :</Text></Col>
                    <Col><Text style={{ fontSize: 15, color: 'black' }}> เวลาทำงานอื่น :</Text></Col>
                  </div>
                </Col>
              </Row>
              <hr/>
              
              <Row>
                <Col span={21}>
                  <div style={{ width: "100%" }}>
                    <Col><Title style={{ fontSize: 15, color: '#CC0000' }}> หน้าที่ความรับผิดชอบ</Title></Col>
                    <Col><Text style={{ fontSize: 15, color: 'black' }}> - สร้างเว็บไซต์ ด้วยการใช้ WordPress เป็นหลัก  </Text></Col>
                    <Col><Text style={{ fontSize: 15, color: 'black' }}> - บริหารจัดการ WordPress หลาย Site พร้อมกัน </Text></Col>
                  </div>
                </Col>
              </Row>
              <hr/>
              
              <Row>
                <Col span={21}>
                  <div style={{ width: "100%" }}>
                    <Col><Title style={{ fontSize: 15, color: '#CC0000' }}> คุณสมบัติ</Title></Col>
                    <Col><Text style={{ fontSize: 15, color: 'black' }}> เพศ :  </Text></Col>
                    <Col><Text style={{ fontSize: 15, color: 'black' }}> อายุ(ปี) : </Text></Col>
                    <Col><Text style={{ fontSize: 15, color: 'black' }}> ระดับการศึกษา : </Text></Col>
                    <Col><Text style={{ fontSize: 15, color: 'black' }}> ประสบการณ์(ปี) : </Text></Col>
                    <Col><Text style={{ fontSize: 15, color: 'black' }}> อื่นๆ : ไม่ระบุ </Text></Col>
                  </div>
                </Col>
              </Row>
              <br/>
              <Row>
                <Col span={21}>
                  <div style={{ width: "100%" }}>
                    <Col><Title style={{ fontSize: 15, color: '#CC0000' }}> คุณสมบัติเพิ่มเติม</Title></Col>
                    <Col><Text style={{ fontSize: 15, color: 'black' }}>- มีความรู้ และสามารถต่อยอด Server, Cloud, Google Search Console , Google Analytics. รวมถึง Online Marketing, SEO หรือ CMS </Text></Col>
                    <Col><Text style={{ fontSize: 15, color: 'black' }}> - มีความคิดสร้างสรรค์ มนุษสัมพันธ์ดีและมีความกระตือรือร้นในการทำงาน </Text></Col>
                  </div>
                </Col>
              </Row>
              <hr/>
              
              <Row>
                <Col span={21}>
                  <div style={{ width: "100%" }}>
                    <Col><Title style={{ fontSize: 15, color: '#CC0000' }}>สวัสดิการ</Title></Col>
                    <Col><Text style={{ fontSize: 15, color: 'black' }}> - ประกันสังคม </Text></Col>
                    <Col><Text style={{ fontSize: 15, color: 'black' }}> - เงินโบนัสตามผลงาน</Text></Col>
                  </div>
                </Col>
              </Row>
              <br/>
              <Row>
                <Col span={21}>
                  <div style={{ width: "100%" }}>
                    <Col><Title style={{ fontSize: 15, color: '#CC0000' }}> สวัสดิการอื่นๆ</Title></Col>
                    <Col><Text style={{ fontSize: 15, color: 'black' }}>- กองทุนทดแทน</Text></Col>
                    <Col><Text style={{ fontSize: 15, color: 'black' }}>- วันหยุดพักผ่อนประจำปี (ตามอายุงาน) </Text></Col>
                    <Col><Text style={{ fontSize: 15, color: 'black' }}>- วันหยุดตามประเพณีและนักขัตฤกษ์</Text></Col>
                    <Col><Text style={{ fontSize: 15, color: 'black' }}>- และอื่นๆตามนโยบายการพัฒนาในอนาคต </Text></Col>
                  </div>
                </Col>
              </Row>
            </Card>
          </Row>
        </div>
      </Card>
    </div>
  );
};

export default jobdata;