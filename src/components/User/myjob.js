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


const Myjob = (props) => {
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
            <Layout>
                <Menu
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode={mode}
                    theme={theme}
                >
                    <SubMenu key="sub1" icon={<AppstoreOutlined />} title="งานของฉัน">
                   
                        <Menu.Item >งานที่สนใจ (2)</Menu.Item>
                        <Menu.Item >งานที่สมัคร (1)</Menu.Item>
                        <Menu.Item >บริษัทที่ดูประวัติ (0)</Menu.Item>
                    </SubMenu>

                </Menu>
                
            </Layout>
        </div>
    );
};

export default Myjob;