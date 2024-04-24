import React from 'react';
import profil from "../assets/profile.jpeg"
import resume from "../assets/resume.pdf"

const About = () => {
    const sendEmail = () => {
        window.location.href = "mailto:ouisolclems@gmail.com";
    }
    return (
        <div>
            <section className="about" id='about'>
                <div className="card">
                    <div className="profilContainer">
                        <div className="profil">
                            <div className="corner cornerLeft">
                                <span>Soleil OUISOL</span>
                                <span>Fullstack Dev.</span>
                            </div>
                            <div className="corner cornerRight">
                                {/* <span>Skills</span> */}
                                <span>Python</span>
                                <span>React</span>
                                <span>PHP</span>
                                <span>Js</span>
                            </div>
                            <img src={profil} alt="" />
                            <div className="cadre"></div>
                        </div>
                    </div>
                    <div className="aboutContainer">
                        <h1>A PROPOS DE MOI</h1>
                        <p>
                        Bonjour 👋, je suis Soleil ☀️, développeur web autodidacte depuis 2018. Actuellement en recherche d'une alternance de 14 mois dans le cadre de ma formation à Epitech. Passionné par l'informatique depuis le lycée, je cherche à mettre en pratique mes compétences et à continuer à apprendre dans un environnement professionnel dynamique. 💻🌟.
                        </p>
                        <div className="containBtn">
                            <button onClick={sendEmail} className='px-4 py-2 rounded-md text-white'>CONTACT</button>
                            <a href={resume} target="_blank" className='px-4 py-2 rounded-md text-white'>CV</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;