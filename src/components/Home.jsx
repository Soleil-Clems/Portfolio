import React, { useState, useEffect, useMemo } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import logo from "../assets/img.png";
import logHover from "../assets/img3.png";
import arrow from "../assets/arrow.png";

const Home = () => {
    const [img, setImg] = useState(logHover);
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {

            await loadSlim(engine);
            
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        
    };

    const options = useMemo(
        () => ({
            background: {
                color: {
                    
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 1, 
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        value_area: 800, 
                    },
                    value: 60,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: 3, 
                    random: true, 
                },
            },
            life: {
                duration: {
                    min: 0.2, 
                    max: 0.6, 
                },
            },
            detectRetina: true,
        }),
        [],
    );
    

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
                    <div className='particles-container'>
                        <Particles
                            id="tsparticles"
                            particlesLoaded={particlesLoaded}
                            options={options}
                        />
                    </div>

                </div>


            </section>
        </div>
    );
};

export default Home;