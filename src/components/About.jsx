import React from 'react';
import profil from "../assets/profile.jpeg"
import resume from "../assets/resume.pdf"

const About = () => {
    const sendEmail =() => {
        window.location.href = "mailto:t@gmail.com";
    }
    return (
        <div>
            <section className="about" id='about'>
                <div className="card">
                    <div className="profilContainer">
                        <div className="profil">

                            <img src={profil} alt="" />
                            <div className="cadre"></div>
                        </div>
                    </div>
                    <div className="aboutContainer">
                        <h1>A PROPOS DE MOI</h1>
                        <p>
                            Salut, je suis Soleil, développeur web autodidacte depuis 2018. Actuellement en recherche d'une alternance de 14 mois dans le cadre de ma formation à Epitech. Passionné par l'informatique depuis le lycée, je cherche à mettre en pratique mes compétences et à continuer à apprendre dans un environnement professionnel dynamique.
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