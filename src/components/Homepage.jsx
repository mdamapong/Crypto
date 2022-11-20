import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'

const { Title } = Typography

const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery();
    const globalStates = data?.data?.stats;
    console.log(data);

    if (isFetching) return 'Loading....';
    return (
        <>
            <Title level={2} className='heading'>Global Crypto States</Title>
            <Row>
                <Col span={12}><Statistic title='Total Cryptocurrencies' value={globalStates.total} /></Col>
                <Col span={12}><Statistic title='Total Exchanges' value={millify(globalStates.totalExchanges)} /></Col>

                <Col span={12}><Statistic title='Total Market Cap' value={millify(globalStates.totalMarketCap)} /></Col>
                <Col span={12}><Statistic title='Total Markets' value={millify(globalStates.total24hVolume)} /></Col>
                <Col span={12}><Statistic title='Total 24h Volume' value={millify(globalStates.totalMarkets)} /></Col>

            </Row>

        </>
    )
}

export default Homepage