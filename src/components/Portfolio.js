import React from "react"
import image1 from "../images/logo.svg"
export default function Portfolio() {
    const projects = [
        {
            name: "Project 1",
            description: "This is a project",
            image: image1,
            link: "https://www.google.com"
        }
    ]
    return (
        <div>
        <h1>I do stuff</h1>
        {projects.map((project) => (
            <div>
                <h2>{project.name}</h2>
                <img src={project.image} alt={project.name} />
                <p>{project.description}</p>
                <a href = {project.link}>Link</a>
            </div>
        ))}
        </div>
    )
}