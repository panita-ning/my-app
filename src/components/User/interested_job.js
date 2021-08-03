import { Card, Form, Input, Row, Button, Col, Avatar, Dropdown,Typography  } from 'antd';
import { UserOutlined } from '@ant-design/icons';


const { Title } = Typography;
const interested_job = (props) => {

    return (
        <div>
            <div className="site-card-border-less-wrapper" >
                <Card bordered={false} style={{ width: '100%', backgroundColor: '#D3D3D3',fontSize:30  }}>
                    <Title style={{fontSize:25}}>โปรไฟล์</Title>
                    <hr/>
                    <center>
                        <div style={{ width: 650, }}>
                            <Card style={{ borderRadius: 15 , backgroundColor: '#F5F5F5' }}>
                                <div>

                                   
                                </div>
                            </Card>
                        </div>

                    </center>
                </Card>
            </div>
        </div>
    )
}

export default interested_job;