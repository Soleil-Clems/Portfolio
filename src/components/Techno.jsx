import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode } from '@fortawesome/free-solid-svg-icons';
import { faBootstrap, faSass, faHtml5, faCss3Alt, faJs, faCss3, faPython, faReact, faSymfony, faDocker, faLinux, faNode, faGitAlt, faGithub, faPhp, faFigma, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faFire, faImage, faFileExport, faServer, faCode } from '@fortawesome/free-solid-svg-icons';

const Techno = () => {
    return (
        <div>
            <section className='techno' id="techno">
                <h1>TECHNOLOGIES</h1>
                <div className="cards">

                    <div className="card">
                        <FontAwesomeIcon icon={faBootstrap} />
                        <p>Bootstrap</p>
                    </div>
                    <div className="card">
                        <FontAwesomeIcon icon={faCss3} />
                        <p>Tailwind</p>
                    </div>
                    <div className="card">
                        <FontAwesomeIcon icon={faSass} />
                        <p>Sass</p>
                    </div>
                    <div className="card">
                        <FontAwesomeIcon icon={faHtml5} />
                        <p>HTML</p>
                    </div>
                    <div className="card">
                        <FontAwesomeIcon icon={faCss3Alt} />
                        <p>CSS</p>
                    </div>
                    <div className="card">
                        <FontAwesomeIcon icon={faJs} />
                        <p>Javascript</p>
                    </div>
                    <div className="card">
                        <FontAwesomeIcon icon={faJs} />
                        <p>Jquery</p>
                    </div>
                    <div className="card">
                        <FontAwesomeIcon icon={faJs} />
                        <p>Chartjs</p>
                    </div>
                    <div className="card">
                        <FontAwesomeIcon icon={faPhp} />
                        <p>PHP</p>
                    </div>
                    <div className="card">
                        <FontAwesomeIcon icon={faReact} />
                        <p>React</p>
                    </div>
                    <div className="card">
                        <FontAwesomeIcon icon={faSymfony} />
                        <p>Symfony</p>
                    </div>
                    <div className="card">
                        <FontAwesomeIcon icon={faNode} />
                        <p>Node</p>
                    </div>
                    <div className="card">
                        <FontAwesomeIcon icon={faCode} />
                        <p>Phaser</p>
                    </div>
                    <div className="card">
                        <FontAwesomeIcon icon={faDatabase} />
                        <p>SQL</p>
                    </div>
                    <div className="card">
                        <FontAwesomeIcon icon={faFire} />
                        <p>Firebase</p>
                    </div>
                    <div className="card">
                        <FontAwesomeIcon icon={faPython} />
                        <p>Python</p>
                    </div>
                    <div className="card">
                        <FontAwesomeIcon icon={faFigma} />
                        <p>Figma</p>
                    </div>
                    <div className="card">
                        <FontAwesomeIcon icon={faImage} />
                        <p>Canva</p>
                    </div>
                    <div className="card">
                        <FontAwesomeIcon icon={faFileExport} />
                        <p>FileZilla</p>
                    </div>
                    <div className="card">
                        <FontAwesomeIcon icon={faServer} />
                        <p>MAMP</p>
                    </div>
                    <div className="card">
                        <FontAwesomeIcon icon={faGitAlt} />
                        <p>Git</p>
                    </div>
                    <div className="card">
                        <FontAwesomeIcon icon={faDocker} />
                        <p>Docker</p>
                    </div>
                    <div className="card">
                        <FontAwesomeIcon icon={faCodepen} />
                        <p>VSCode</p>
                    </div>
                    <div className="card">
                        <FontAwesomeIcon icon={faLinux} />
                        <p>Linux</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Techno;