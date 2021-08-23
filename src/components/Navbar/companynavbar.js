import React from 'react';
import { Layout, Menu, Card } from 'antd';
// import 'antd/dist/antd.css';
import { useRouter } from 'next/router'

const { Header, Content, Footer } = Layout;


const Navbarcompany = (props) => {
  const { SubMenu } = Menu;
  const router = useRouter()
  return (
    <div>

      <Header style={{ backgroundColor: "#CC0000", height: "64px" }}>
        <div src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr6q22PeADJqt_ydK5trcEtgVjnTCbMraEcA&usqp=CAU" style={{ width: "100%" }} />
        <Menu mode="horizontal" style={{ backgroundColor: "#CC0000" }}>
          <Menu.Item style={{ color: "white", fontSize: 16 }}>
            <span onClick={() => router.push("/user/")}> หน้าแรก </span>
          </Menu.Item>
          <Menu.Item style={{ color: "white", fontSize: 16 }}>
            <span onClick={() => router.push("/company/profile")}> ข้อมูลส่วนตัว</span>
          </Menu.Item>
          <Menu.Item style={{ color: "white", fontSize: 16 }}>
            <span onClick={() => router.push("/company/postjob")}>ประกาศงาน</span>
          </Menu.Item>
          <Menu.Item style={{ color: "white", fontSize: 16 }}>
            <span onClick={() => router.push("/company/joblist")}> อัพเดท/แก้ไขตำแหน่งงาน </span>
          </Menu.Item>
          <Menu.Item key="4"><span onClick={() => router.push("/company/setting")} style={{ color: "white", fontSize: 16 }}> ตั้งค่าการใช้งาน</span></Menu.Item>
        </Menu>
      </Header>

      <Content style={{ minHeight: '100vh'}}>
        {/* <Card style={{width:900,marginLeft:'18%', marginRight:'18%', backgroundColor: '#D3D3D3', alignItems:'center'}}> */}
        {props.children}
        {/* </Card> */}

        

      </Content>
      <Footer style={{ textAlign: 'center' }}>JOB CENTER ©2021 </Footer>

    </div>
  );
}

export default Navbarcompany;