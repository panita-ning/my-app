import React from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg, CardDeck, CardSubtitle, Image } from 'reactstrap';




const jobdata = (props) => {

  return (
    <div>
      <center>
   
      <Card style={{width:800}}>
        <CardImg top width="100%" src="https://www.prachachat.net/wp-content/uploads/2020/11/5415_9856.jpg" alt="Card image cap" style={{ width: 150 }} />
        <CardBody>
       
          <CardTitle tag="h5">Home Product Center (Public) Co., Ltd.</CardTitle>
          <CardText>Home Product Center Plc. was founded in 1995, we quickly expanded our business nowsaday we already have more than 60 branches all over Thailand and our company was listed in the Stock Exchange of Thailand since 2001. Over sixteen years in the name of your familiar HOMEPRO we keep on giving our customer better service better experience and better valued added, every year we continued expanding our business, expanding our new store for serving for more.

            In this year 2021, we will open the new branch in Vietnam if you are looking for the somethings challenge, more successful and more better living. We would like to invite you to join with our business and be a part of our success team, no matter you need talents or you want to utilize your expertise please join us today and we will "Grow" together.</CardText>

          <CardText style={{ fontSize: 25, color: 'Black', textAlign:'left' }}>&nbsp;&nbsp;&nbsp;สวัสดิการ </CardText>
          <ul style={{textAlign:'left'}}>
            <ul>
              <ul>
                <CardText>๐ โบนัส</CardText>
                <CardText>๐ เบี้ยขยัน</CardText>
                <CardText>๐ ค่ารักษาพยาบาล</CardText>
                <CardText>๐ กองทุนสำรองเลี้ยงชีพ</CardText>
                <CardText>๐ ประกันชีวิต</CardText>
              </ul>
            </ul>
          </ul>

          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <CardText style={{ fontSize: 25, color: 'Black', textAlign:'left' }}>&nbsp;&nbsp;&nbsp;3 ตำแหน่ง</CardText>

          <CardDeck>
            <Card style={{textAlign:'left'}}>
              <CardBody>
                <CardSubtitle tag="h6" className="mb-2 text-muted">1.</CardSubtitle>
                <CardTitle tag="h5">เจ้าหน้าที่ประสานงานสาขา โฮมโปรสมุทรสงคราม (แม่กลอง)</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">เขตภาษีเจริญ กรุงเทพมหานคร </CardSubtitle>
              </CardBody>
            </Card>

            <Card style={{textAlign:'left'}}>
              <CardBody>
                <CardSubtitle tag="h6" className="mb-2 text-muted">2.</CardSubtitle>
                <CardTitle tag="h5">ผู้จัดการแผนกตรวจรับสินค้า</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">อ.เมืองระยอง จ.ระยอง</CardSubtitle>
              </CardBody>
            </Card>

            <Card style={{textAlign:'left'}}>
              <CardBody>
                <CardSubtitle tag="h6" className="mb-2 text-muted">3.</CardSubtitle>
                <CardTitle tag="h5">พนักงานออกแบบ ประจำสาขาหัวหิน,ชุมพร,อุบลราชธานี,ชัยภูมิ,ระยอง ด่วนมาก</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">อ.พุทธมณฑล จ.นครปฐม</CardSubtitle>
              </CardBody>
            </Card>

          </CardDeck>
          <br />
          <center>
            <CardTitle tag="h5">ติดต่อ</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Manpower Management Home Product Center (Public) Co., Ltd.</CardSubtitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">31 ถนนประชาชื่นนนทบุรีตำบลบางเขน อำเภอเมืองนนทบุรี จังหวัดนนทบุรี 11000</CardSubtitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">โทรศัพท์: 02-832-1000 ต่อ 6015   แฟกซ์: 02-832-1299   เว็บไซต์: http://www.homepro.co.th</CardSubtitle>
          </center>
        </CardBody>

      </Card>
      

      </center>
    </div>
  );
};

export default jobdata;