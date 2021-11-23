import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Courses from '../components/Courses';
import Books from '../components/Books';
import Blogs from '../components/Blogs';
import Review from '../components/Review';
import Footer from '../components/Footer';
import Class from '../components/Class';





const Home = () => {
    return(
        <>
        <Header />
        <About />
        <Courses />
        <Class />
        <Books />
        <Review />
        <Blogs />
        <Footer />
        
    </>
    )
    
}



export default Home;