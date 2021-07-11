import { Layout, Menu, Breadcrumb ,Card} from 'antd';
import { useRouter } from 'next/router'
import { AppstoreOutlined } from '@ant-design/icons';
import Navbar from "../Navbar/navbar"
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const UserLayout = (props) => {
    const router = useRouter()

    return <Layout>
        <Navbar>
            <Content style={{ padding: '0 50px' ,  }}>
                <Layout className="site-layout-background" style={{ padding: '24px 0', marginTop: 20}}>
                    <Sider className="site-layout-background" width={230} >
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%' ,backgroundColor:'#BEBEBE' }}
                        >
                            <SubMenu key="sub1" icon={<AppstoreOutlined />} title="ข้อมูลส่วนตัว">
                               
                                <Menu.Item style={{backgroundColor:'#D3D3D3'}}>
                                    <span onClick={() => router.push("/user/profileone")}> โปรไฟล์ </span>
                                </Menu.Item>
                                <Menu.Item style={{backgroundColor:'#D3D3D3'}}>
                                    <span onClick={() => router.push("/user/profiletwo")}> ทักษะ และความสามารถ </span>
                                </Menu.Item>
                                <Menu.Item style={{backgroundColor:'#D3D3D3'}}>
                                    <span onClick={() => router.push("/user/profilethree")}> ประวัติการศึกษา </span>
                                </Menu.Item>
                                <Menu.Item style={{backgroundColor:'#D3D3D3'}}>
                                    <span onClick={() => router.push("/user/profilefour")}>  ประวัติการทำงาน</span>
                                </Menu.Item>
                                
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 'auto' }}>{props.children}</Content>
                </Layout>
            </Content>
            
        </Navbar>
    </Layout>
}


export default UserLayout