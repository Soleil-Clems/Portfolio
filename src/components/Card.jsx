import React from 'react';
import screen from "../assets/screen.png"
import tailwind from "../assets/tailwind.png"
import node from "../assets/node.png"
import firebase from "../assets/firebase.png"
import jquery from "../assets/jquery.png"
import phaser from "../assets/phaser.png"
import symfony from "../assets/symfony.png"
import bootstrap from "../assets/bootstrap.png"
import js from "../assets/js.png"
import sass from "../assets/sass.png"
import php from "../assets/php.png"
import chartjs from "../assets/chartjs.png"
// import phaser from "../assets/phaser.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode } from '@fortawesome/free-solid-svg-icons';


const Card = (props) => {
    return (
        <div>
            <div>
                <div className="card" style={{ flexDirection: props.reverse }}>
                    <a href={props.github} target="_blank" className="profilContainer">

                        <img src={props.img} alt="" />
                        <div className="cadre"></div>

                    </a>

                    <div className="projectsContainer">
                        <h2>{props.name} <a href={props.github} target="_blank"><FontAwesomeIcon icon={faFileCode} /></a></h2>
                        <p>
                            {props.description}
                        </p>

                        <div className="iconDiv">

                            <div className="iconDiv">
                                {
                                    props.techno.map((img, index) => {
                                        let path = './assets/' + img + '.png';

                                        return (
                                            <div className="icon" key={index}>
                                                <img src={path} alt={img} />
                                            </div>
                                        );
                                    })
                                }
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;