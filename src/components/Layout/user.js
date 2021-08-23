import { Layout, Menu, Breadcrumb, Card, Row, Col } from 'antd';
import { useRouter } from 'next/router'
import { AppstoreOutlined } from '@ant-design/icons';
import Navbar from "../Navbar/navbar"
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const UserLayout = (props) => {
    const router = useRouter()

    return <Layout >
        <Navbar >
            <Content style={{ width: '100%' }}>
              
                <Layout className="site-layout-background" style={{ width: "100%", alignItems:'center' }}>
                    
                        <Menu
                            mode="horizontal"
                            style={{ height: '100%', backgroundColor: '#D3D3D3', width: '100%' }}
                            theme='light'

                        >
                            <Menu.Item>
                                <span onClick={() => router.push("/user/profile")}>โปรไฟล์</span>
                            </Menu.Item>
                            <Menu.Item>
                                <span onClick={() => router.push("/user/education")}>ประวัติการศึกษา</span>
                            </Menu.Item>
                            <Menu.Item>
                                <span onClick={() => router.push("/user/experience")}>ประวัติการทำงาน</span>
                            </Menu.Item>
                            <Menu.Item>
                                <span onClick={() => router.push("/user/requiredjob")}>งานที่ต้องการ</span>
                            </Menu.Item>
                            <Menu.Item>
                                <span onClick={() => router.push("/user/skills")}>ทักษะ และความสามารถ</span>
                            </Menu.Item>
                            <Menu.Item>
                                <span onClick={() => router.push("/user/resume")}>แนบไฟล์ Resume </span>
                            </Menu.Item>


                        </Menu>
                    
                    <br />
                    <Content style={{ padding: '0 24px', minHeight: 'auto' }}>{props.children}</Content>
                </Layout>
            </Content>

        </Navbar>
    </Layout>
}


export default UserLayout