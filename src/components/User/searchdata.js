import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck, Col, Container,
  CardSubtitle, CardBody, Pagination, PaginationItem, PaginationLink, Form, FormGroup, Label, Input, FormFeedback, Row, ButtonToggle,
} from 'reactstrap';
import { useRouter } from 'next/router'

const Search = () => {
  const router = useRouter()
  return (

    <>
      <center>
        <Card style={{backgroundColor:''}}>
          <br />
          <Row>
            <Col>
              <FormGroup style={{ width: 400 }}>
                <Label for="exampleSearch">ค้นหา</Label>
                <Input
                  type="search"
                  name="search"
                  id="exampleSearch"
                  placeholder="search placeholder"
                />
                {/* <Col>
                <Button color="success">ค้นหา</Button>{' '}
              </Col> */}
              </FormGroup>
            </Col>
          </Row>
          <br />
          <CardDeck>
            <Card style={{ width: 600 }}>
              <CardImg top width="100%" src="https://www.egov.go.th/upload/eservice-thumbnail/img_0ed45e8f21fbda9d0f88702c8ec33b89.png" alt="Card image cap" style={{ width: 150 }} />
              <CardBody>
                <CardTitle tag="h5">TOT</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">บริษัท ทีโอที จำกัด (มหาชน)</CardSubtitle>
                <CardText>พนักงานขาย 5 อัตรา กรุงเทพมหานคร เขตบางเขน</CardText>
                <Button>สมัครงาน</Button>
              </CardBody>
            </Card>

            <Card style={{ width: 600 }}>
              <CardImg top width="100%" src="https://www.greennetworkthailand.com/wp-content/uploads/2019/12/bigth.jpg" alt="Card image cap" style={{ width: 150 }} />
              <CardBody>
                <CardTitle tag="h5">ฺBIG</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">บริษัท บางกอกอินดัสเทรียลแก๊ส จํากัด</CardSubtitle>
                <CardText>system analyst กรุงเทพมหานคร เขตจตุจักร</CardText>
                <Button> <span onClick={() => router.push("/่job")}>{""} สมัครงาน</span></Button>
              </CardBody>
            </Card>

            <Card style={{ width: 600 }}>
              <CardImg top width="100%" src="https://media.jobthai.com/v1/images/logo-pic-map/53438_logo_20200217133545.png" alt="Card image cap" style={{ width: 150 }} />
              <CardBody>
                <CardTitle tag="h5">TQM</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">บริษัท ทีคิวเอ็ม คอร์ปอเรชั่น จำกัด (มหาชน)</CardSubtitle>
                <CardText>Programmer 3 อัตรา , Web Programmer 2 อัตรา, Big Data Engineer / Data Analytic 2</CardText>
                <Button>สมัครงาน</Button>
              </CardBody>
            </Card>

            <Card style={{ width: 600 }}>
              <CardImg top width="100%" src="https://www.sabaikrapao.com/images/loans/kasikorn.jpg" alt="Card image cap" style={{ width: 150 ,}} />
              <CardBody> 
                <CardTitle tag="h5">KBank</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">ธนาคารกสิกรไทย</CardSubtitle>
                <CardText>พนักงานบัญชี 5 อัตรา กรุงเทพมหานคร เขตบางเขน</CardText>
                <Button>สมัครงาน</Button>
              </CardBody>
            </Card>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
            <Pagination aria-label="Page navigation example">
              <PaginationItem >
                <PaginationLink first href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink previous href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  4
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">
                  5
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink next href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink last href="#" />
              </PaginationItem>
            </Pagination>
           
          </CardDeck>
        </Card>
      </center>
    </>
  );
};

export default Search;