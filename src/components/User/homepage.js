
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption, Card, Button, CardImg, CardTitle, CardText, CardGroup, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import { useState } from 'react';
import { useRouter } from 'next/router'

const items = [
  {
    src: 'https://www.be2hand.com/upload/201410/201410-01-101341_OT-1.jpg',
    altText: '',
    caption: ''
  },
  {
    src: 'https://www.marinethai.net/wp-content/uploads/2019/08/%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%84%E0%B8%A3%E0%B8%87%E0%B8%B2%E0%B8%99-2-01-2.jpg',
    altText: '',
    caption: ''
  },
  {
    src: 'https://www.chillpainai.com/src/wewakeup/scoop/scoopfb/11715.jpg',
    altText: '',
    caption: ''
  }
];

const Homepang = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }
  const router = useRouter()

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} style={{ width: "100%", height: 400 }} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });
  return (
    <div style={{
      backgroundColor: '#DCDCDC', padding: '50px'
    }}>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
      <br />
      <CardText style={{ fontSize: 30, color: 'Black' }}>&nbsp;&nbsp;&nbsp;TOP COMPANIES</CardText>


      <CardGroup >

        <Card style={{ width: 200, height: 300 }}>
          <img style={{ width: 100 }} alt=" "
            src="data:image/png;base64,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"
          />
          <CardBody>
            <CardTitle tag="h5">makro</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">คู่คิดธุรกิจคุณ</CardSubtitle>
            <CardText>เปิดรับพนักงานด่วน หลายอัตรา</CardText>
            <Button>รายละเอียด</Button>
          </CardBody>
        </Card>
        <Card style={{ width: 200, height: 300 }} >
          <img style={{ width: 100 }} alt=""
            src="data:image/png;base64,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"
          />
          <CardBody>
            <CardTitle tag="h5">TESCO Lotus</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">บริษัท เอก-ชัย ดีสทริบิวชั่น ซิสเทม จํากัด </CardSubtitle>
            <CardText>เปิดรับพนักงานด่วน หลายอัตรา</CardText>
            <Button>รายละเอียด</Button>
          </CardBody>
        </Card>
        <Card style={{ width: 200, height: 300 }} >
          <img style={{ width: 100, }} alt=""
            src="https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Charoen_Pokphand_Foods_logo.svg/1200px-Charoen_Pokphand_Foods_logo.svg.png"
          />
          <CardBody>
            <CardTitle tag="h5">CPF</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">บริษัท เจริญโภคภัณฑ์อาหาร จำกัด (มหาชน)</CardSubtitle>
            <CardText>เปิดรับพนักงานด่วน</CardText>
            <Button>รายละเอียด</Button>
          </CardBody>
        </Card>
      </CardGroup>
      <br />

      <CardGroup>
        <Card style={{ width: 200, height: 300 }}>
          <img style={{ width: 100 }} alt=" "
            src="https://media.jobthai.com/v1/images/logo-pic-map/53438_logo_20200217133545.png"
          />
          <CardBody>
            <CardTitle tag="h5">TQM</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">บริษัท ทีคิวเอ็ม คอร์ปอเรชั่น จำกัด (มหาชน)</CardSubtitle>
            <CardText>Programmer 3 อัตรา , Web Programmer 2 อัตรา</CardText>
            <Button>รายละเอียด</Button>
          </CardBody>
        </Card>
        <Card style={{ width: 200, height: 300 }} >
          <img style={{ width: 100 }} alt=""
            src="data:image/png;base64,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"
          />
          <CardBody>
            <CardTitle tag="h5">AIA</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">บริษัท เอไอเอ จำกัด </CardSubtitle>
            <CardText>เปิดรับพนักงานขาย   หลายอัตรา</CardText>
            <Button>รายละเอียด</Button>
          </CardBody>
        </Card>
        <Card style={{ width: 200, height: 300 }} >
          <img style={{ width: 100, }} alt=""
            src="https://www.greennetworkthailand.com/wp-content/uploads/2019/12/bigth.jpg"
          />
          <CardBody>
            <CardTitle tag="h5">BIG</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">บริษัท บางกอกอินดัสเทรียลแก๊ส จํากัด</CardSubtitle>
            <CardText>เปิดรับพนักงานด่วน</CardText>
            <Button>รายละเอียด</Button>
          </CardBody>
        </Card>
      </CardGroup>

      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <CardText style={{ fontSize: 30, color: 'Black' }}>&nbsp;&nbsp;&nbsp;URGENT JOBS</CardText>

      <CardDeck>
        <Card>
          <CardImg top width="100%" src="https://www.prachachat.net/wp-content/uploads/2020/11/5415_9856.jpg" alt="Card image cap" style={{ width: 100 }} />
          <CardBody>
            <CardTitle tag="h5">Home Product Center (Public) Co., Ltd.</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">บริษัท โฮม โปรดักส์ เซ็นเตอร์ จำกัด (มหาชน) เปิดรับพนักงานหลายตำแหน่ง</CardSubtitle>
            <Button>
            <span onClick={() => router.push("/job")}>รายละเอียด</span>
            </Button>
          </CardBody>
        </Card>

        <Card>
          <CardImg top width="100%" src="https://media.jobthai.com/v1/images/logo-pic-map/284946_logo_20210520155823.jpeg" alt="Card image cap" style={{ width: 100 }} />
          <CardBody>
            <CardTitle tag="h5">Marriott Vacations Worldwide</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Marriott Vacations Worldwide เปิดรับสมัคร Tele Marketing Executive จำนวนมาก</CardSubtitle>
            <Button>รายละเอียด</Button>
          </CardBody>
        </Card>

        <Card>
          <CardImg top width="100%" src="https://media.jobthai.com/v1/images/logo/204172_logo_201706091554.jpeg" alt="Card image cap" style={{ width: 100 }} />
          <CardBody>
            <CardTitle tag="h5">บริษัท เทคแมน อิเลคทรอนิกส์ (ประเทศไทย) จำกัด</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">บริษัท เทคแมน อิเลคทรอนิกส์ (ประเทศไทย) จำกัด เปิดรับสมัครพนักงานหลายตำแหน่ง</CardSubtitle>
            <Button>รายละเอียด</Button>
          </CardBody>
        </Card>
      </CardDeck>
    </div>
  );
}
export default Homepang;