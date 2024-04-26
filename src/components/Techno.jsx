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

                    <div className="card bootstrap">
                        <FontAwesomeIcon icon={faBootstrap} />
                        <p>Bootstrap</p>
                    </div>
                    <div className="card tailwind">
                        <FontAwesomeIcon icon={faCss3} />
                        <p>Tailwind</p>
                    </div>
                    <div className="card sass">
                        <FontAwesomeIcon icon={faSass} />
                        <p>Sass</p>
                    </div>
                    <div className="card html">
                        <FontAwesomeIcon icon={faHtml5} />
                        <p>HTML</p>
                    </div>
                    <div className="card css">
                        <FontAwesomeIcon icon={faCss3Alt} />
                        <p>CSS</p>
                    </div>
                    <div className="card js">
                        <FontAwesomeIcon icon={faJs} />
                        <p>Javascript</p>
                    </div>
                    <div className="card jquery">
                        <FontAwesomeIcon icon={faJs} />
                        <p>Jquery</p>
                    </div>
                    <div className="card chartjs">
                        <FontAwesomeIcon icon={faJs} />
                        <p>Chartjs</p>
                    </div>
                    <div className="card php">
                        <FontAwesomeIcon icon={faPhp} />
                        <p>PHP</p>
                    </div>
                    <div className="card react">
                        <FontAwesomeIcon icon={faReact} />
                        <p>React</p>
                    </div>
                    <div className="card symfony">
                        <FontAwesomeIcon icon={faSymfony} />
                        <p>Symfony</p>
                    </div>
                    <div className="card node">
                        <FontAwesomeIcon icon={faNode} />
                        <p>Node</p>
                    </div>
                    <div className="card phaser">
                        <FontAwesomeIcon icon={faCode} />
                        <p>Phaser</p>
                    </div>
                    <div className="card sql">
                        <FontAwesomeIcon icon={faDatabase} />
                        <p>SQL</p>
                    </div>
                    <div className="card firebase">
                        <FontAwesomeIcon icon={faFire} />
                        <p>Firebase</p>
                    </div>
                    <div className="card python">
                        <FontAwesomeIcon icon={faPython} />
                        <p>Python</p>
                    </div>
                    <div className="card figma">
                        <FontAwesomeIcon icon={faFigma} />
                        <p>Figma</p>
                    </div>
                    <div className="card canva">
                        <FontAwesomeIcon icon={faImage} />
                        <p>Canva</p>
                    </div>
                    <div className="card filezilla">
                        <FontAwesomeIcon icon={faFileExport} />
                        <p>FileZilla</p>
                    </div>
                    <div className="card mamp">
                        <FontAwesomeIcon icon={faServer} />
                        <p>MAMP</p>
                    </div>
                    <div className="card git">
                        <FontAwesomeIcon icon={faGitAlt} />
                        <p>Git</p>
                    </div>
                    <div className="card docker">
                        <FontAwesomeIcon icon={faDocker} />
                        <p>Docker</p>
                    </div>
                    <div className="card vscode">
                        <FontAwesomeIcon icon={faCodepen} />
                        <p>VSCode</p>
                    </div>
                    <div className="card linux">
                        <FontAwesomeIcon icon={faLinux} />
                        <p>Linux</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Techno;