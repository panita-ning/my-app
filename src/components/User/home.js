
import { Col, Row, TreeSelect, Button, Card, Image, Typography, Carousel } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useRouter } from 'next/router'

const { TreeNode } = TreeSelect;
const { Title, Text } = Typography;


const contentStyle = {
  height: '300px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};


const Home = (props) => {
  const router = useRouter()

  const [value, setValue] = useState(undefined);
  const onChange = () => {
    setValue(value);
  };



  return (
    <>
      <Card div style={{
        backgroundColor: '#FFFFFF', width: "auto", height: "auto", border: 1
      }}>
        <div>
          <div>
            <Carousel autoplay>
              <div>
                <h3 style={contentStyle}>
                  <Image
                    width="100%"
                    height="100%"
                    src="error"
                    fallback="https://t4.ftcdn.net/jpg/02/39/13/59/360_F_239135978_2CoCXBZodS1EEpkXNZ2yhCgGQqSA7OL0.jpg"
                  />
                </h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <Image
                    width="100%"
                    height="100%"
                    src="error"
                    fallback="https://o2osell.com/shops/shop_cp/crystal.jpeg?1608734623"
                  />
                </h3>
              </div>
              <div>
                <h3 style={contentStyle}><Image
                  width="100%"
                  height="100%"
                  src="error"
                  fallback="https://www.burbankca.gov/documents/174345/1015922/job-seekers-banner-image.jpg/473655b4-61a5-0190-e78c-f49de46f500c?t=1615836146555&download=true"
                /></h3>
              </div>

            </Carousel>
          </div>

          <div>
            <Card style={{ width: "auto", height: 250, backgroundColor: '#DCDCDC' }}>
              &nbsp;&nbsp;<br /><br /><br />
              <Row justify="center">
                <Col>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <TreeSelect
                    showSearch
                    style={{ width: 400, }}
                    value={value}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    placeholder="ประเภทงานทั้งหมด(สาขสอาชีพ)"
                    allowClear
                    treeDefaultExpandAll
                    onChange={onChange}

                  >
                    <TreeNode value="parent 1" title="คอมพิวเตอร์"></TreeNode>
                    <TreeNode value="parent 1" title="กฏหมาย"></TreeNode>
                    <TreeNode value="parent 1" title="บัญชี / การตลาด"></TreeNode>
                    <TreeNode value="parent 1" title="Part-time"></TreeNode>
                  </TreeSelect>
                </Col>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Col>
                  <TreeSelect
                    showSearch
                    style={{ width: 400, borderRadius: 10 }}
                    value={value}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    placeholder="สถานที่ทำงาน"
                    allowClear
                    treeDefaultExpandAll
                    onChange={onChange}

                  >
                    <TreeNode value="parent 1" title="กรุงเทพมหานคร"></TreeNode>
                    <TreeNode value="parent 1" title="กระบี่"></TreeNode>
                    <TreeNode value="parent 1" title="กาญจนบุรี"></TreeNode>
                    <TreeNode value="parent 1" title="กาฬสินธุ์"></TreeNode>
                  </TreeSelect>
                </Col>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Col>
                  <TreeSelect
                    showSearch
                    style={{ width: 400 }}
                    value={value}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    placeholder="ตำแหน่งงาน"
                    allowClear
                    treeDefaultExpandAll
                    onChange={onChange}
                  >
                    <TreeNode value="parent 1" title="parent 1"> </TreeNode>

                  </TreeSelect>
                </Col>
              </Row>
              <br /> <br />
              <div>
                <Row justify="center">
                  <Col >
                    <Button type="default" style={{ borderRadius: 10, width: 200 }} size='large' danger>
                      รีเซ็ตเงื่อนไข
                    </Button>
                  </Col>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Col>
                    <Button type="primary" danger style={{ borderRadius: 10, width: 200 }} size='large'>
                      ค้นหางาน
                    </Button>
                  </Col>
                </Row>
              </div>
            </Card>
          </div>

          <br /> <br />
          <Title level={2}>RECOMMENDED JOBS </Title>
          <Row justify="center">
            <div className="site-card-wrapper">
              <div>
                <Row >
                  <Col >
                    <Card

                      hoverable
                      style={{ width: 280, textAlign: "center", borderRadius: 20, border: 'solid', borderColor: '#DCDCDC' }}

                    >
                      <Image
                        width={220}
                        height={220}
                        src="error"
                        fallback="https://www.joblnw.com/images/company/profile/huasenghong.jpg"
                      />
                      <Row>
                        <Col>
                          <Title level={4}>ฮั่วเซ่งฮง เบสท์ฟู้ด จำกัด</Title>
                        </Col>
                        <Col>
                          <Text type="secondary">รองผู้จัดการแผนกบัญชี</Text>
                        </Col>
                      </Row>
                      <br />
                      <Button type="primary" style={{ borderRadius: 20, width: 100, height: 40 }}>
                      รายละเอียด
                      </Button>
                    </Card>
                  </Col>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                  <Col >
                    <Card

                      hoverable
                      style={{ width: 280, textAlign: "center", borderRadius: 20, border: 'solid', borderColor: '#DCDCDC' }}

                    >
                      <Image
                        width={220}
                        height={220}
                        src="error"
                        fallback="https://media-exp1.licdn.com/dms/image/C511BAQHXzLuBaDrv6g/company-background_10000/0/1577937305299?e=2159024400&v=beta&t=26rHOD4vwiQMhIkeEbzDVkStLA_XqV3pmozG8wivaqI"
                      />
                      <Row>
                        <Col>
                          <Title level={4}>Brooker Group PCL </Title>
                        </Col>
                        <Col>
                          <Text type="secondary">เปิดรับพนักงานด่วน หลายอัตรา</Text>
                        </Col>
                      </Row>
                      <br />
                      <Button type="primary" style={{ borderRadius: 20, width: 100, height: 40 }}>
                      รายละเอียด
                      </Button>
                    </Card>
                  </Col>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                  <Col >
                    <Card

                      hoverable
                      style={{ width: 280, textAlign: "center", borderRadius: 20, border: 'solid', borderColor: '#DCDCDC' }}

                    >
                      <Image
                        width={220}
                        height={220}
                        src="error"
                        fallback="https://yt3.ggpht.com/ytc/AKedOLTwlxk1-4_vcGdb3EaFBpqw1zc5zy6-P4EeZodj=s900-c-k-c0x00ffffff-no-rj"
                      />
                      <Row>
                        <Col>
                          <Title level={4}>Thaiwatsadu (ไทวัสดุ)</Title>
                        </Col>
                        <Col>
                          <Text type="secondary">เปิดรับพนักงานด่วน หลายอัตรา</Text>
                        </Col>
                      </Row>
                      <br />
                      <Button type="primary" style={{ borderRadius: 20, width: 100, height: 40 }}>
                      รายละเอียด
                      </Button>
                    </Card>
                  </Col>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                  <Col >
                    <Card

                      hoverable
                      style={{ width: 280, textAlign: "center", borderRadius: 20, border: 'solid', borderColor: '#DCDCDC' }}

                    >
                      <Image
                        width={220}
                        height={220}
                        src="error"
                        fallback="https://business.ais.co.th/assets/revamp/img/privileges/frame_3_delay-3s.jpg"
                      />
                      <Row>
                        <Col>
                          <Title level={4}>Global House</Title>
                        </Col>
                        <Col>
                          <Text type="secondary">เปิดรับพนักงานด่วน หลายอัตรา</Text>
                        </Col>
                      </Row>
                      <br />
                      <Button type="primary" style={{ borderRadius: 20, width: 100, height: 40 }}>
                        รายละเอียด
                      </Button>
                    </Card>
                  </Col>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                </Row>
                <br /> <br />

                <Row >
                  <Col >
                    <Card

                      hoverable
                      style={{ width: 280, textAlign: "center", borderRadius: 20, border: 'solid', borderColor: '#DCDCDC' }}

                    >
                      <Image
                        width={220}
                        height={220}
                        src="error"
                        fallback="https://lh3.googleusercontent.com/proxy/f7-BwoKVYoH_peqICXtN4jUc3QoLXhxJhT5R9ADt__NBtrlNK_b_5cNJlA_cEvNMuznuz2rJfY11P1W6UR9OuriYY1flFyEgDPDX0Ck2Snrgz9Mxy5sF6Eu5zuu5"
                      />
                      <Row>
                        <Col>
                          <Title level={4}>ไอร่า แอนด์ ไอฟุล จำกัด</Title>
                        </Col>
                        <Col>
                          <Text type="secondary">เจ้าหน้าที่ติดตามหนี้สินฝ่ายดำเนินคดี</Text>
                        </Col>
                      </Row>
                      <br />
                      <Button type="primary" style={{ borderRadius: 20, width: 100, height: 40 }}>
                      รายละเอียด
                      </Button>
                    </Card>
                  </Col>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                  <Col >
                    <Card

                      hoverable
                      style={{ width: 280, textAlign: "center", borderRadius: 20, border: 'solid', borderColor: '#DCDCDC' }}

                    >
                      <Image
                        width={220}
                        height={220}
                        src="error"
                        fallback="data:image/jpeg;base64,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"
                      />
                      <Row>
                        <Col>
                          <Title level={4}>CSI Professional Co.,Ltd.</Title>
                        </Col>
                        <Col>
                          <Text type="secondary">เปิดรับ Java Programmer</Text>
                        </Col>
                      </Row>
                      <br />
                      <Button type="primary" style={{ borderRadius: 20, width: 100, height: 40 }}>
                      รายละเอียด
                      </Button>
                    </Card>
                  </Col>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                  <Col >
                    <Card

                      hoverable
                      style={{ width: 280, textAlign: "center", borderRadius: 20, border: 'solid', borderColor: '#DCDCDC' }}

                    >
                      <Image
                        width={220}
                        height={220}
                        src="error"
                        fallback="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8p71765v9OuW-buxc9PEqrBhhVUsAfD0QVqmNTlGhOoEXqjyLvGTNAYpdcq7Vc_Olfbo&usqp=CAU"
                      />
                      <Row>
                        <Col>
                          <Title level={4}>ซีเอส ล็อกซอินโฟ จำกัด</Title>
                        </Col>
                        <Col>
                          <Text type="secondary">IT officer or Senior IT - AIS</Text>
                        </Col>
                      </Row>
                      <br />
                      <Button type="primary" style={{ borderRadius: 20, width: 100, height: 40 }}>
                      รายละเอียด
                      </Button>
                    </Card>
                  </Col>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                  <Col >
                    <Card
                      hoverable
                      style={{ width: 280, textAlign: "center", borderRadius: 20, border: 'solid', borderColor: '#DCDCDC' }}
                    >
                      <Image
                        width={220}
                        height={220}
                        src="error"
                        fallback="https://www.jobbkk.com/upload/employer/05/C85/00BC85/images/482611.jpg"
                      />
                      <Row>
                        <Col>
                          <Title level={4}>คิวบ์ ซอฟท์เทค จำกัด</Title>
                        </Col>
                        <Col>
                          <Text type="secondary">รับสมัคร Java Programmer</Text>
                        </Col>
                      </Row>
                      <br />
                      <Button type="primary" style={{ borderRadius: 20, width: 100, height: 40 }}>
                      รายละเอียด
                      </Button>
                    </Card>
                  </Col>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </Row>
              </div>
            </div>
          </Row>
        </div >
      </Card>
    </>
  );

}
export default Home;