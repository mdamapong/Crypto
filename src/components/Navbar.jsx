import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, ManOutlined } from '@ant-design/icons'
import icon from '../images/cryptocurrency.png'

const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='logo-container'>

                <Menu theme='dark'>
                    <Menu.Item icon={<HomeOutlined />}>
                        <Link to='/'>Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined />}>
                        <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                    </Menu.Item><Menu.Item icon={<MoneyCollectOutlined />}>
                        <Link to='/exchanges'>Exchanges</Link>
                    </Menu.Item><Menu.Item icon={<BulbOutlined />}>
                        <Link to='/news'>News</Link>
                    </Menu.Item>
                </Menu>

                <Avatar src={icon} size='large' />
                <Typography.Title level={1} className='logo'>
                    <Link to='/'>Welcome to Cryptoverse</Link>
                </Typography.Title>
                <Avatar src={icon} size='large' />
                {/* <Button className='menu-control-container'></Button> */}
            </div>
        </div>
    )
}

export default Navbar