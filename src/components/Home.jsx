import React, { useState, useEffect } from 'react';
import logo from "../assets/img.png";
import logHover from "../assets/img3.png";
import arrow from "../assets/arrow.png";

const Home = () => {
    const [img, setImg] = useState(logHover);

    useEffect(() => {

        particlesJS("tsparticles", {

            "particles": {
                "number": {
                    "value": 80
                },
                "size": {
                    "value": 3
                }
            }
        });
    }, []);

    const handleHover = () => {
        setImg(logo);
    }

    const handleLeave = () => {
        setImg(logHover);
    }
    return (
        <div >
            <section className="home px-28" >
                
                <div className="container" id='home'>
                    <div className="contain">

                        <p className='hello font-bold text-gray-400'>Hello, I'm Soleil </p>
                        <div className='line'>

                            <div className="flex items-end gap-5">
                                <div className="blockh1">
                                    <h1 className='dev font-black'>Full Stack</h1>
                                    <h1 className='dev font-black'>Developer </h1>
                                </div>
                                <span className='w-4 h-4 bg-blue-400 p-1'></span>
                            </div>
                            <div className="logContain">
                                <div className="arrowDiv">
                                    <img src={arrow} alt="Arrow" />
                                </div>
                                <div className="logo">

                                    <img src={img} onMouseOver={handleHover} onMouseLeave={handleLeave} alt="logo" />
                                </div>
                            </div>
                        </div>
                        <div className="btnContainer my-3 flex">
                            <a href="#projects" className='px-4 py-2 rounded-md text-white text-xl'>Projets</a>
                        </div>
                    </div>
                </div>
                <div className='no'>
                    <div id="tsparticles"></div>
                </div>


            </section>
        </div>
    );
};

export default Home;