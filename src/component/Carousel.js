import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './css/Carousel.css';
import data from '../asset/projects.json';

const projects = data.projects;

export class ProjectCarousel extends React.Component {
    render() {
        return (
            <Carousel>
                {projects.map((project) => {
                    return (
                        <div className="carousel-content">
                            {project.video ? (
                                <iframe className="project-image"
                                    width="560"
                                    height="600"
                                    src={project.video}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen>
                                </iframe>
                            ) : (
                                <img className="project-image"  src={project.image} alt={project.alt} width={300} />
                            )}
                            <div className="project-title">{project.title}</div>
                            <div className="project-description">{project.description}</div>
                        </div>
                    )
                })}
            </Carousel>
        )
    }
}