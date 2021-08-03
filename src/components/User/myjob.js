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

   
    return (
        <div>

            <br />
            <br />
           
        </div>
    );
};

export default Myjob;