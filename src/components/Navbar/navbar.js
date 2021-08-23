import React from 'react';
import { Layout, Menu, } from 'antd';
import 'antd/dist/antd.css';
import { useRouter } from 'next/router'

const { Header, Content, Footer } = Layout;


const Navbarbrand = (props) => {
  const { SubMenu } = Menu;
  const router = useRouter()
  return (
    <div>

      <Header style={{ backgroundColor: "#CC0000", height: "64px"}}>
        <div src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr6q22PeADJqt_ydK5trcEtgVjnTCbMraEcA&usqp=CAU"  style={{width:"100%" }} />
        <Menu mode="horizontal" style={{ backgroundColor: "#CC0000", }}>
          <Menu.Item style={{ color: "white", fontSize: 16 }}>
            <span onClick={() => router.push("/user/")}>หน้าแรก</span>
          </Menu.Item>
          <Menu.Item style={{ color: "white", fontSize: 16 }}>
            <span onClick={() => router.push("/user/profile")}> ข้อมูลส่วนตัว</span>
          </Menu.Item>
          <Menu.Item style={{ color: "white", fontSize: 16 }}>
            <span onClick={() => router.push("/user/search")}> Job Match </span>
          </Menu.Item>
          <Menu.Item key="3"><span onClick={() => router.push("/user/history")} style={{ color: "white", fontSize: 16 }}> ประวัติการสมัครงาน</span></Menu.Item>
          <Menu.Item key="4"><span onClick={() => router.push("/user/setting")} style={{ color: "white", fontSize: 16 }}> ตั้งค่าการใช้งาน</span></Menu.Item>
          <Menu.Item style={{ color: "white", fontSize: 16 }}>
            <span onClick={() => router.push("/user/")}> ออกจากระบบ </span>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{  minHeight: '100vh' }}>{props.children}</Content>
      <Footer style={{ textAlign: 'center' }}>JOB CENTER ©2021 </Footer>

    </div>
  );
}

export default Navbarbrand;
