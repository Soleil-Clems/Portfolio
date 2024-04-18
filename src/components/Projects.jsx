import React, { useState } from 'react';
import Card from './Card';
import datas from "./AllProjects.json"

const Projects = () => {
    const txt = 'Voir plus';
    const disp = 'none'
    const [see, setSee] = useState(txt)
    const [display, setDisplay] = useState(disp)
    console.log(datas)
    const handleClick = () => {
        if (see === txt) {
            setSee('Voir moins')
            setDisplay('flex')
        } else {
            setSee(txt)
            setDisplay(disp)

        }
    }
    return (
        <div>
            <section className="projects" id='projects'>

                <h1>PROJETS</h1>
                <div className="cards">
                    {
                        datas.slice(0, 3).map((project, index) => (
                            <Card
                                key={index}
                                name={project.name}
                                description={project.description}
                                img={project.img}
                                github={project.github}
                                techno={project.techno}
                                reverse={index % 2 === 0 ? "row-reverse" : undefined}
                            />
                        ))}


                </div>
                <div className="more" style={{ display: display }}>
                {
                        datas.slice(3, datas.length).map((project, index) => (
                            <Card
                                key={index}
                                name={project.name}
                                description={project.description}
                                img={project.img}
                                github={project.github}
                                techno={project.techno}
                                reverse={index % 2 === 0 ? "row-reverse" : undefined}
                            />
                        ))}

                </div>
                <div className="btnContainer my-3 flex">
                    <button href="/#project" onClick={handleClick} className='px-4 py-2 rounded-md text-white text-xl'>{see}</button>
                </div>
            </section>
        </div>
    );
};

export default Projects;