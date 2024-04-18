import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faHouse, faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Navigation = () => {
    return (
        <div>
            <header className='header'>
                <nav className="nav">
                    <ul className='ul'>
                        <li className='flex '>
                            <a href="#home" ><FontAwesomeIcon icon={faHouse} /> <span className='none'>Home</span></a>
                        </li>
                        
                        <li>
                            <a href="#projects" ><FontAwesomeIcon icon={faPersonDigging} /> <span className='none'>Projets</span></a>
                        </li>
                        <li>
                            <a href="#techno" ><FontAwesomeIcon icon={faCode} /> <span className='none'>Technologies</span></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/soleil-ouisol/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /><span className='none'>Linkedin</span></a>
                        </li>
                        <li>
                            <a href="https://github.com/Soleil-Clems" target="_blank"><FontAwesomeIcon icon={faGithub} /><span className='none'>Github</span></a>
                        </li>

                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Navigation;