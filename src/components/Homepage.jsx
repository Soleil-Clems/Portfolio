import React from 'react';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Techno from './Techno';
import Footer from './Footer';

const Homepage = () => {
    return (
        <div>
            <div id="body">
                <Navigation/>
                <Home/>
                <About/>
                <Projects/>
                <Techno/>
                <Footer/>
            </div>
        </div>
    );
};

export default Homepage;