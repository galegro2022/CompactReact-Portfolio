import React from "react"
import image1 from "../images/logo.svg"
export default function Portfolio() {
    const projects = [
        {
            name: "Anti-Facebook Social Network",
            description: "The skeleton of a social network",
            image: image1,
            link: "https://github.com/galegro2022/anti-facebook-social-network"
        },
        {
            name: "Weather Dashboard",
            description: "A weather dashboard that uses the OpenWeather API",
            image: image1,
            link: "https://github.com/galegro2022/Never-Forget-The-Weather"
        },
        {
            name: "Password Generator",
            description: "A password generator that uses Javascript",
            image: image1,
            link: "https://github.com/galegro2022/challenge-3-password-maker"
        },
        {
            name: "Day Planner",
            description: "A day planner that uses Javascript",
            image: image1,
            link: "https://github.com/galegro2022/online-planner"
        },
        {
            name: "Note Taker",
            description: "A note taker that uses Javascript",
            image: image1,
            link: "https://github.com/galegro2022/Note-Taker-Money-Maker-"
        },
        {
            name: "Employee Tracker",
            description: "A employee tracker that uses Javascript",
            image: image1,
            link: "https://github.com/galegro2022/Find-A-Worker-Employee-Database"
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