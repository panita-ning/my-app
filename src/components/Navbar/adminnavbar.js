import React from 'react';
import { Layout, Menu, } from 'antd';
import { UploadOutlined, UserOutlined, FolderFilled,SignalFilled,FolderOpenFilled,PushpinFilled ,SettingFilled,CloseCircleFilled  } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { useRouter } from 'next/router'

const { Header, Content, Footer, Sider } = Layout;


const Navbaradmin = (props) => {
  const { SubMenu } = Menu;
  const router = useRouter()
  return (

    <Layout>
    <Sider
    style={{
      overflow: "auto",
      height: "100hv",

    }}
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <br/><br/>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={[null]}>
        <Menu.Item key="1" icon={<UserOutlined />}>
        <span onClick={() => router.push("/admin/home")}> หน้าแรก</span>
        </Menu.Item>
        <Menu.Item key="2" icon={<FolderFilled />}>
        <span onClick={() => router.push("/admin/company")}> จัดการข้อมูลสถานประกอบการ</span>
        </Menu.Item>
        <Menu.Item key="3" icon={<FolderOpenFilled />}>
        <span onClick={() => router.push("/admin/user")}> จัดการข้อมูลผู้ใช้งาน </span>
        </Menu.Item>
        <Menu.Item key="4" icon={<PushpinFilled   />}>
        <span onClick={() => router.push("/admin/follow")}> ติดตามข้อมูลการรับเข้าทำงาน </span>
        </Menu.Item>
        <Menu.Item key="5" icon={<SignalFilled />}>
        <span onClick={() => router.push("/admin/report")}> รายงาน </span>
        </Menu.Item>
        <Menu.Item key="6" icon={<SettingFilled />}>
        <span onClick={() => router.push("/admin/setting")} > ตั้งค่าการใช้งาน</span>
        </Menu.Item>
        <Menu.Item key="7" icon={<CloseCircleFilled  />}>
        <span onClick={() => router.push("/admin/home")} > ออกจากระบบ</span>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0', overflow:"inherit" }}>
        <div className="site-layout-background" style={{ padding: 24,minHeight:'auto'}}>
         {props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>



    // <div>

    //   <Header style={{ backgroundColor: "#CC0000", height: "64px" }}>
    //     <div src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr6q22PeADJqt_ydK5trcEtgVjnTCbMraEcA&usqp=CAU"  style={{width:100 }} />
    //     <Menu mode="horizontal" style={{ backgroundColor: "#CC0000" }}>
    //       <Menu.Item style={{ color: "white", fontSize: 16 }}>
    //         <span onClick={() => router.push("/user/")}> หน้าแรก</span>
    //       </Menu.Item>
    //       <Menu.Item style={{ color: "white", fontSize: 16 }}>
    //         <span onClick={() => router.push("/admin/company")}> ข้อมูลสถานประกอบการ</span>
    //       </Menu.Item>
    //       <Menu.Item style={{ color: "white", fontSize: 16 }}>
    //         <span onClick={() => router.push("/admin/user")}> ข้อมูลผู้ใช้งาน </span>
    //       </Menu.Item>
    //       <Menu.Item key="4"><span onClick={() => router.push("/user/jobtwo")} style={{ color: "white", fontSize: 16 }}> ตั้งค่าการใช้งาน</span></Menu.Item>
    //     </Menu>
    //   </Header>
    //   <Content style={{  minHeight: '100vh' }}>{props.children}</Content>
    //   <Footer style={{ textAlign: 'center' }}>JOB CENTER ©2021 </Footer>

    // </div>
  );
}

export default Navbaradmin;