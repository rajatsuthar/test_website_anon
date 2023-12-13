import React from 'react';
import {Footer,Header,Blog,WhatGTP3,Features,Posibility} from './containers';
import {CTA,Brand,Navbar} from './components';
import './App.css'

function App() {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar/>
            <Header/>
        </div>
        <Brand/>
        <WhatGTP3/>
        <Features/>
        <Posibility/>
        <CTA/>
        <Blog/>
        <Footer/>

    </div>
  )
}

export default App