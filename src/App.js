import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd'
import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails } from './components'
import './App.css';
import 'antd/dist/reset.css';

function App  ()  {
  return (
    <div>
      <div className='app'>
          <Navbar />
      </div>
      <div className='navbar'>
          <Layout> 
            <div className='routes'>
              <Routes>
                <Route exact path='/' element={<Homepage />}/> 
                  

                <Route exact path='/exchanges' element={ <Exchanges />}/>
                  
                <Route exact path='/cryptocurrencies'
                 element= {<Cryptocurrencies />} />
                
                <Route exact path='/crypto/:coinId'
                  element = {<CryptoDetails />} />
                
                <Route exact path='/news'
                  element = {<News />} />
                
              </Routes>
            </div>
          </Layout>
      </div>
      <div className='footer'>

      </div>
    </div>
    
  )
}

export default App;