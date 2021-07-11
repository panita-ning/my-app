import React from 'react';
import { Layout, Menu, } from 'antd';
import 'antd/dist/antd.css';
import { useRouter } from 'next/router'

const { Header, Content, Footer } = Layout;


const Navbarbrand = (props) => {

  const router = useRouter()
  return (
    <div>

      <Header>
        <div src="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item>
            <span onClick={() => router.push("/user/")}> หน้าแรก </span>
          </Menu.Item>
          <Menu.Item>
            <span onClick={() => router.push("/user/profileone")}> ข้อมูลส่วนตัว</span>
          </Menu.Item>
          <Menu.Item>
            <span onClick={() => router.push("/user/search")}> ค้นหา </span>
          </Menu.Item>
          <Menu.Item>
            <span onClick={() => router.push("/user/jobone")}> งานของฉัน</span>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 24px', minHeight: '100vh' }}>{props.children}</Content>
      <Footer style={{ textAlign: 'center' }}>JOB CENTER ©2021 </Footer>
      
    </div>
  );
}

export default Navbarbrand;