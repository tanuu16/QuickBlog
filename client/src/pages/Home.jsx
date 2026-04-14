import React from 'react'
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import BlogList from '../components/BlogList';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const Home = () => {
  return (
 <>
  <Navbar/>

  <div className="max-w-7xl mx-auto px-4">
    <Header/>
    <BlogList/>
    <Newsletter/>
  </div>

  <Footer/>
</>
  )
}

export default Home;
