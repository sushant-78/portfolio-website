import "./Projects.css";
import { CodeIcon } from "@heroicons/react/solid";
import projects from "../../data/projects";
import Project from "./Project/Project";

export default function Projects() {
    return (
        <section id="projects" className="projects">
            <div className="projects-container">
                <div className="projects-header">
                    <CodeIcon className="projects-header-icon" />
                    <h1 className="projects-heading">Apps I've Built</h1>
                </div>
                <div className="projects-detail">
                    {projects.map((project, index) => {
                        return (
                            <Project key={`item-${index}`} project={project} />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
