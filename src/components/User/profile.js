import React from 'react';
import { Menu, Switch, Divider, } from 'antd';
import {
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
    LinkOutlined,
} from '@ant-design/icons';
import { useRouter } from 'next/router'
import Layout from 'antd/lib/layout/layout';

const { SubMenu } = Menu;


const Profile = (props) => {
    const router = useRouter()
    const [mode, setMode] = React.useState('inline');
    const [theme, setTheme] = React.useState('light');

    const changeMode = value => {
        setMode(value ? 'vertical' : 'inline');
    };

    const changeTheme = value => {
        setTheme(value ? 'dark' : 'light');
    };
    return (
        <div>

            <Switch onChange={changeMode} /> Change Mode
            <Divider type="vertical" />
            <Switch onChange={changeTheme} /> Change Style
            <br />
            <br />
            <Layout style={{ display: "-webkit-box" }}>
                <Menu
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode={mode}
                    theme={theme}
                >
                    <SubMenu key="sub1" icon={<AppstoreOutlined />} title="ข้อมูลส่วนตัว">
                        <Menu.Item >
                            <span onClick={() => router.push("/profileone")}> โปรไฟล์ </span>
                        </Menu.Item>
                        <Menu.Item >ทักษะ และความสามารถ</Menu.Item>
                        <Menu.Item >ประวัติการศึกษา</Menu.Item>
                        <Menu.Item >ประวัติการทำงาน</Menu.Item>
                    </SubMenu>

                </Menu>
                <div>
                    xxxxxxxxx
                </div>
            </Layout>
        </div>
    );
};

export default Profile;