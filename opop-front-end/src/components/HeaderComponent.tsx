import React, {useState} from "react";
import {Avatar, Layout, Menu, Input, Button} from 'antd';
import { HomeOutlined, DownloadOutlined } from '@ant-design/icons';
import Circle from "antd/es/progress/Circle";
import {Link} from "react-router-dom";
import {SizeType} from "antd/es/config-provider/SizeContext";
const { Header } = Layout;

class NavigationBar {
    items: any[] | undefined;
}

const HeaderComponent: React.FC<NavigationBar> = ({ items }) => {
    const [size, setSize] = useState<SizeType>('large');
    return (
        <Header style={{ display: 'flex', alignItems: 'center' }} className="header">
            <div className="demo-logo" />
            <img src={"http://res.cloudinary.com/dzpuwvvil/image/upload/v1758861409/jeccucc2ekk0icbznlek.png"} className="header-logo" alt="opop-logo"/>

            {/*<Avatar size={40} icon={<HomeOutlined />}  className="home"/>*/}
            <Button type="primary" shape="round" icon={<HomeOutlined />} size={size} className="home" />

            <Input.Search placeholder="search" variant="filled" className="search"/>

           <Link to={""}>abc</Link>

            <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} />
        </Header>
    );
};

export default HeaderComponent;