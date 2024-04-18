import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    
    const sendEmail =() => {
        window.location.href = "mailto:t@gmail.com";
    }

    return (
        <footer>
            <div className="footer-container">
                <div className="footer-links">
                    
                    <ul>
                        <li><a href="https://www.linkedin.com/in/soleil-ouisol/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <ul>
                        <li><a href="https://github.com/Soleil-Clems" target="_blank"><FontAwesomeIcon icon={faGithub} /> GitHub</a></li>
                    </ul>
                </div>
                <div className="footer-contact">
                <button onClick={sendEmail} className='px-4 py-2 rounded-md text-white'>Contact</button>

                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Soleil OUISOL.</p>
            </div>
        </footer>
    );
}

export default Footer;
