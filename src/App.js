import React from 'react'
import Header from './component/Head/Header'
import "./App.css"
import Home from './component/Hero/Home'
import Features from './component/Features/Features'
import Portfolio from './component/Portfolio/Portfolio'
import Blog from './component/Blog/Blog'
import Contact from './component/Contact/Contact'
import Footer from './component/Footer'

const App = () => {
  return (
    <>
    <Header/>
    <Home/>
    <Features/>
    <Portfolio/>
    {/* <Blog/> */}
    <Contact/>
    <Footer/>
    </>
  )
}

export default App